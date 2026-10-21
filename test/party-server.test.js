"use strict";

const { spawn } = require("node:child_process");
const { once } = require("node:events");
const { test } = require("node:test");
const assert = require("node:assert/strict");
const WebSocket = require("ws");

function waitForMessage(socket, type, predicate = () => true) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      socket.off("message", onMessage);
      reject(new Error(`Timed out waiting for ${type}.`));
    }, 3000);
    function onMessage(data) {
      const message = JSON.parse(data.toString());
      if (message.type !== type || !predicate(message)) return;
      clearTimeout(timeout);
      socket.off("message", onMessage);
      resolve(message);
    }
    socket.on("message", onMessage);
  });
}

function send(socket, message) {
  socket.send(JSON.stringify(message));
}

test("hosted room auto-readies players, shares locked answers and handles departures", async (t) => {
  const port = 18080 + Math.floor(Math.random() * 1000);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: process.cwd(),
    env: { ...process.env, PORT: String(port) },
    stdio: ["ignore", "pipe", "pipe"]
  });
  let serverOutput = "";
  server.stdout.on("data", (chunk) => { serverOutput += chunk.toString(); });
  server.stderr.on("data", (chunk) => { serverOutput += chunk.toString(); });
  const sockets = [];
  t.after(() => {
    sockets.forEach((socket) => socket.close());
    server.kill();
  });

  let ready = false;
  for (let attempt = 0; attempt < 40; attempt++) {
    if (server.exitCode !== null) throw new Error(`Party server exited: ${serverOutput}`);
    try {
      const response = await fetch(`http://localhost:${port}/`);
      if (response.ok) {
        ready = true;
        break;
      }
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
  assert.equal(ready, true, `Party server did not start: ${serverOutput}`);
  const healthResponse = await fetch(`http://localhost:${port}/healthz`);
  assert.deepEqual(await healthResponse.json(), { status: "ok" });

  async function connect() {
    const socket = new WebSocket(`ws://localhost:${port}/party`);
    sockets.push(socket);
    await once(socket, "open");
    return socket;
  }

  async function verifyPartyQuizLaunch(category, quiz) {
    const quizHost = await connect();
    const hostedPromise = waitForMessage(quizHost, "hosted");
    send(quizHost, {
      type: "host",
      capacity: 2,
      player: { name: `${category} Host`, color: "#ff0000" }
    });
    const hostedRoom = await hostedPromise;
    const quizGuest = await connect();
    const joinedPromise = waitForMessage(quizGuest, "joined");
    send(quizGuest, {
      type: "join",
      code: hostedRoom.room.code,
      player: { name: `${category} Guest`, color: "#0000ff" }
    });
    await joinedPromise;

    const hostLaunchPromise = waitForMessage(quizHost, "launch");
    const guestLaunchPromise = waitForMessage(quizGuest, "launch");
    send(quizHost, {
      type: "launch",
      code: hostedRoom.room.code,
      category,
      quiz
    });
    const [hostLaunchMessage, guestLaunchMessage] = await Promise.all([
      hostLaunchPromise,
      guestLaunchPromise
    ]);
    for (const launch of [hostLaunchMessage, guestLaunchMessage]) {
      assert.equal(launch.category, category);
      assert.equal(launch.quiz, quiz);
    }
    quizHost.close();
    quizGuest.close();
  }

  await verifyPartyQuizLaunch("CompArch", "test1");
  await verifyPartyQuizLaunch("CloudComp", "test1");
  await verifyPartyQuizLaunch("CompArch", "binary");
  await verifyPartyQuizLaunch("CompArch", "hexadecimal");

  const host = await connect();
  const missingRoomError = waitForMessage(host, "error");
  send(host, { type: "check-room", code: "ZZZZ" });
  assert.match((await missingRoomError).message, /No active lobby/);
  const hostedPromise = waitForMessage(host, "hosted");
  const gifProfile = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
  send(host, {
    type: "host",
    capacity: 50,
    player: { name: "Host", color: "#ff0000", photo: gifProfile }
  });
  const hosted = await hostedPromise;
  assert.match(hosted.room.code, /^[A-Z]{4}$/);
  assert.equal(hosted.room.capacity, 50);
  assert.equal(hosted.room.players[0].photo, gifProfile);
  assert.deepEqual(hosted.room.partyOptions, {
    showPlayerScores: true,
    showLockedAnswers: false,
    earlyPointBonus: true
  });

  const invalidHost = await connect();
  const invalidCapacity = waitForMessage(invalidHost, "error");
  send(invalidHost, {
    type: "host",
    capacity: 51,
    player: { name: "Invalid", color: "#00ff00", photo: "" }
  });
  assert.match((await invalidCapacity).message, /between 2 and 50/);
  invalidHost.close();

  let guest = await connect();
  const joinedPromise = waitForMessage(guest, "joined");
  const lobbyUpdatePromise = waitForMessage(host, "room-state");
  send(guest, {
    type: "join",
    code: hosted.room.code,
    player: { name: "Guest", color: "#0000ff", photo: "" }
  });
  let joined = await joinedPromise;
  await lobbyUpdatePromise;
  assert.equal(joined.room.players.length, 2);
  assert.equal(joined.room.players.every((player) => player.ready), true);

  const guestFakePlayersRejected = waitForMessage(guest, "error");
  send(guest, { type: "dev-add-fake-players", code: hosted.room.code, count: 1 });
  assert.match((await guestFakePlayersRejected).message, /only the host/i);
  const addFakePlayers = waitForMessage(
    host,
    "room-state",
    (message) => message.room.players.length === 50
  );
  send(host, { type: "dev-add-fake-players", code: hosted.room.code, count: 48 });
  const fullFakeLobby = await addFakePlayers;
  assert.equal(fullFakeLobby.room.players.filter((player) => player.fakePlayer).length, 48);
  assert.equal(
    fullFakeLobby.room.players.filter((player) => player.fakePlayer).every(
      (player) => player.ready && !player.connected
    ),
    true
  );
  const fullLobbyLimit = waitForMessage(host, "error");
  send(host, { type: "dev-add-fake-players", code: hosted.room.code, count: 1 });
  assert.match((await fullLobbyLimit).message, /between 1 and 0/i);
  const clearFakePlayers = waitForMessage(
    host,
    "room-state",
    (message) => message.room.players.length === 2
  );
  send(host, { type: "dev-clear-fake-players", code: hosted.room.code });
  await clearFakePlayers;

  const duplicateNameClient=await connect();
  const duplicateNameError=waitForMessage(duplicateNameClient,"error");
  send(duplicateNameClient,{
    type:"join",
    code:hosted.room.code,
    player:{name:"gUEST",color:"#ff00ff",photo:""}
  });
  assert.match((await duplicateNameError).message,/name is already in the room/i);
  duplicateNameClient.close();

  const hostPartyOptions = waitForMessage(host, "room-state", (message) => message.room.partyOptions.showLockedAnswers);
  const guestPartyOptions = waitForMessage(guest, "room-state", (message) => message.room.partyOptions.showLockedAnswers);
  send(host, {
    type: "party-options",
    code: hosted.room.code,
    options: { showPlayerScores: false, showLockedAnswers: true, earlyPointBonus: true }
  });
  const [hostPartyOptionsMessage, guestPartyOptionsMessage] = await Promise.all([hostPartyOptions, guestPartyOptions]);
  assert.deepEqual(hostPartyOptionsMessage.room.partyOptions, {
    showPlayerScores: false,
    showLockedAnswers: true,
    earlyPointBonus: true
  });
  assert.deepEqual(guestPartyOptionsMessage.room.partyOptions, hostPartyOptionsMessage.room.partyOptions);

  const hostOptionsDisabled = waitForMessage(host, "room-state", (message) => !message.room.partyOptions.showLockedAnswers);
  const guestOptionsDisabled = waitForMessage(guest, "room-state", (message) => !message.room.partyOptions.showLockedAnswers);
  send(host, {
    type: "party-options",
    code: hosted.room.code,
    options: { showPlayerScores: false, showLockedAnswers: false, earlyPointBonus: true }
  });
  const [hostOptionsDisabledMessage, guestOptionsDisabledMessage] = await Promise.all([
    hostOptionsDisabled,
    guestOptionsDisabled
  ]);
  assert.deepEqual(guestOptionsDisabledMessage.room.partyOptions, hostOptionsDisabledMessage.room.partyOptions);

  const hostOptionsEnabledAgain = waitForMessage(host, "room-state", (message) => message.room.partyOptions.showLockedAnswers);
  const guestOptionsEnabledAgain = waitForMessage(guest, "room-state", (message) => message.room.partyOptions.showLockedAnswers);
  send(host, {
    type: "party-options",
    code: hosted.room.code,
    options: { showPlayerScores: false, showLockedAnswers: true, earlyPointBonus: true }
  });
  const [hostOptionsEnabledMessage, guestOptionsEnabledMessage] = await Promise.all([
    hostOptionsEnabledAgain,
    guestOptionsEnabledAgain
  ]);
  assert.deepEqual(guestOptionsEnabledMessage.room.partyOptions, hostOptionsEnabledMessage.room.partyOptions);

  const lobbyLeaveUpdate = waitForMessage(host, "room-state");
  const lobbyLeft = waitForMessage(guest, "left");
  send(guest, { type: "leave", code: hosted.room.code });
  await lobbyLeft;
  assert.equal((await lobbyLeaveUpdate).room.players.length, 1);
  guest.close();

  guest = await connect();
  const rejoinedPromise = waitForMessage(guest, "joined");
  const rejoinRoomUpdate = waitForMessage(host, "room-state");
  send(guest, {
    type: "join",
    code: hosted.room.code,
    player: { name: "Guest", color: "#0000ff", photo: "" }
  });
  joined = await rejoinedPromise;
  await rejoinRoomUpdate;
  assert.equal(joined.room.players.length, 2);
  assert.equal(joined.room.players.every((player) => player.ready), true);

  const checkRoomPromise = waitForMessage(guest, "room-found");
  send(guest, { type: "check-room", code: hosted.room.code });
  const checkedRoom=(await checkRoomPromise).room;
  assert.equal(checkedRoom.players, 2);
  assert.deepEqual(checkedRoom.profiles.map((profile)=>profile.name).sort(),["Guest","Host"]);

  const invalidMixedLaunch = waitForMessage(host, "error");
  send(host, {
    type: "launch",
    code: hosted.room.code,
    category: "MixedStudy",
    quiz: "mixed",
    mixedSources: [{ category: "NotACourse", quiz: "quiz1" }]
  });
  assert.match((await invalidMixedLaunch).message, /not available/i);

  const hostLaunch = waitForMessage(host, "launch");
  const guestLaunch = waitForMessage(guest, "launch");
  send(host, {
    type: "launch",
    code: hosted.room.code,
    category: "CloudComp",
    quiz: "quiz2"
  });
  await Promise.all([hostLaunch, guestLaunch]);

  const hostSettings = waitForMessage(host, "room-state");
  const guestSettings = waitForMessage(guest, "room-state");
  send(host, {
    type: "quiz-config",
    code: hosted.room.code,
    config: {
      questionCount: 526,
      orderMode: "static",
      timeLimitMinutes: 30,
      perQuestionTimeMinutes: 2,
      reviewSections: []
    }
  });
  const [hostSettingsMessage, guestSettingsMessage] = await Promise.all([hostSettings, guestSettings]);
  assert.equal(hostSettingsMessage.room.quizConfig.questionCount, 526);
  assert.equal(guestSettingsMessage.room.quizConfig.perQuestionTimeMinutes, 2);

  const hostStarted = waitForMessage(host, "quiz-start");
  const guestStarted = waitForMessage(guest, "quiz-start");
  send(host, {
    type: "quiz-start",
    code: hosted.room.code,
    config: {
      questionSequence: Array.from({ length: 526 }, (_, index) => index),
      orderMode: "static",
      timeLimitMinutes: null,
      perQuestionTimeMinutes: null
    }
  });
  const [hostStartMessage, guestStartMessage] = await Promise.all([hostStarted, guestStarted]);
  assert.equal(hostStartMessage.hideLockedAnswers, undefined);
  assert.equal(guestStartMessage.hideLockedAnswers, undefined);
  assert.deepEqual(hostStartMessage.config.partyOptions, {
    showPlayerScores: false,
    showLockedAnswers: true,
    earlyPointBonus: true
  });
  assert.deepEqual(guestStartMessage.config.partyOptions, hostStartMessage.config.partyOptions);

  const hostQuestion = waitForMessage(host, "question");
  const guestQuestion = waitForMessage(guest, "question");
  send(host, {
    type: "question",
    code: hosted.room.code,
    questionNumber: 0,
    questionIndex: 0,
    answerOrder: [0, 1, 2, 3],
    correctIndex: 1
  });
  await Promise.all([hostQuestion, guestQuestion]);

  const lockedPromise = waitForMessage(host, "answer-locked");
  send(guest, {
    type: "answer",
    code: hosted.room.code,
    questionNumber: 0,
    answerIndex: 1
  });
  const lockedMessage = await lockedPromise;
  assert.equal(lockedMessage.playerId, joined.playerId);
  assert.equal(lockedMessage.answerIndex, 1);

  const hostReveal = waitForMessage(host, "reveal");
  const guestReveal = waitForMessage(guest, "reveal");
  send(host, {
    type: "answer",
    code: hosted.room.code,
    questionNumber: 0,
    answerIndex: 1
  });
  const [hostResult, guestResult] = await Promise.all([hostReveal, guestReveal]);
  assert.equal(hostResult.correctIndex, 1);
  assert.equal(guestResult.answers.find((answer) => answer.playerId === hosted.playerId).score, 1);
  assert.equal(guestResult.answers.find((answer) => answer.playerId === hosted.playerId).pointsEarned, 1);
  assert.equal(guestResult.answers.find((answer) => answer.playerId === joined.playerId).score, 3);
  assert.equal(guestResult.answers.find((answer) => answer.playerId === joined.playerId).pointsEarned, 3);

  const guestJumpRejected = waitForMessage(guest, "error");
  send(guest, {
    type: "dev-jump-question",
    code: hosted.room.code,
    questionNumber: 2
  });
  assert.match((await guestJumpRejected).message, /only the host/i);

  const hostJump = waitForMessage(host, "dev-jump-question");
  const guestJump = waitForMessage(guest, "dev-jump-question");
  send(host, {
    type: "dev-jump-question",
    code: hosted.room.code,
    questionNumber: 2
  });
  const [hostJumpMessage, guestJumpMessage] = await Promise.all([hostJump, guestJump]);
  assert.equal(hostJumpMessage.questionNumber, 2);
  assert.deepEqual(guestJumpMessage, hostJumpMessage);

  const hostJumpedQuestion = waitForMessage(host, "question");
  const guestJumpedQuestion = waitForMessage(guest, "question");
  send(host, {
    type: "question",
    code: hosted.room.code,
    questionNumber: 2,
    questionIndex: 2,
    answerOrder: [0, 1, 2, 3],
    correctIndex: 1
  });
  const [hostJumpedQuestionMessage, guestJumpedQuestionMessage] = await Promise.all([
    hostJumpedQuestion,
    guestJumpedQuestion
  ]);
  assert.equal(hostJumpedQuestionMessage.questionNumber, 2);
  assert.deepEqual(guestJumpedQuestionMessage, hostJumpedQuestionMessage);

  const hostEnded = waitForMessage(host, "game-over", (message) => message.reason === "ended");
  const guestEnded = waitForMessage(guest, "game-over", (message) => message.reason === "ended");
  send(host, { type: "end-game", code: hosted.room.code, reason: "ended" });
  await Promise.all([hostEnded, guestEnded]);

  const guestClosed = once(guest, "close");
  guest.close();
  await guestClosed;
  guest = await connect();
  const resultRejoined = waitForMessage(guest, "joined");
  const hostRejoinUpdate = waitForMessage(host, "room-state");
  send(guest, { type: "join", code: hosted.room.code, playerId: joined.playerId });
  const resultRoom = (await resultRejoined).room;
  await hostRejoinUpdate;
  assert.equal(resultRoom.stage, "results");
  assert.equal(resultRoom.players.length, 2);

  const hostReplay = waitForMessage(host, "replay");
  const guestReplay = waitForMessage(guest, "replay");
  send(host, { type: "replay", code: hosted.room.code });
  const [hostReplayMessage, guestReplayMessage] = await Promise.all([hostReplay, guestReplay]);
  assert.equal(hostReplayMessage.category, "CloudComp");
  assert.equal(hostReplayMessage.quiz, "quiz2");
  assert.deepEqual(guestReplayMessage, hostReplayMessage);

  const hostReplayStart = waitForMessage(host, "quiz-start");
  const guestReplayStart = waitForMessage(guest, "quiz-start");
  send(host, {
    type: "quiz-start",
    code: hosted.room.code,
    config: { questionSequence: [0], orderMode: "static", timeLimitMinutes: null, perQuestionTimeMinutes: null }
  });
  await Promise.all([hostReplayStart, guestReplayStart]);
  const hostReplayEnded = waitForMessage(host, "game-over", (message) => message.reason === "ended");
  const guestReplayEnded = waitForMessage(guest, "game-over", (message) => message.reason === "ended");
  send(host, { type: "end-game", code: hosted.room.code, reason: "ended" });
  await Promise.all([hostReplayEnded, guestReplayEnded]);

  const hostLobby = waitForMessage(host, "choose-new-quiz");
  const guestLobby = waitForMessage(guest, "choose-new-quiz");
  const hostLobbyState = waitForMessage(host, "room-state", (message) => message.room.stage === "lobby");
  send(host, { type: "choose-new-quiz", code: hosted.room.code });
  await Promise.all([hostLobby, guestLobby, hostLobbyState]);

  const hostLaunchAgain = waitForMessage(host, "launch");
  const guestLaunchAgain = waitForMessage(guest, "launch");
  send(host, {
    type: "launch",
    code: hosted.room.code,
    category: "MixedStudy",
    quiz: "mixed",
    mixedSources: [
      { category: "CloudComp", quiz: "quiz2" },
      { category: "CompArch", quiz: "quiz1" }
    ]
  });
  const [mixedHostLaunch, mixedGuestLaunch] = await Promise.all([hostLaunchAgain, guestLaunchAgain]);
  assert.deepEqual(mixedHostLaunch.mixedSources, [
    { category: "CompArch", quiz: "quiz1" },
    { category: "CloudComp", quiz: "quiz2" }
  ]);
  assert.deepEqual(mixedGuestLaunch.mixedSources, mixedHostLaunch.mixedSources);

  const hostMixedSettings = waitForMessage(host, "room-state");
  const guestMixedSettings = waitForMessage(guest, "room-state");
  send(host, {
    type: "quiz-config",
    code: hosted.room.code,
    config: {
      questionCount: 1,
      orderMode: "static",
      timeLimitMinutes: null,
      perQuestionTimeMinutes: null,
      reviewSections: []
    }
  });
  await Promise.all([hostMixedSettings, guestMixedSettings]);
  const hostMixedStarted = waitForMessage(host, "quiz-start");
  const guestMixedStarted = waitForMessage(guest, "quiz-start");
  send(host, {
    type: "quiz-start",
    code: hosted.room.code,
    config: {
      questionSequence: [0],
      orderMode: "static",
      timeLimitMinutes: null,
      perQuestionTimeMinutes: null
    }
  });
  await Promise.all([hostMixedStarted, guestMixedStarted]);
  const hostMixedEnded = waitForMessage(host, "game-over");
  const guestMixedEnded = waitForMessage(guest, "game-over");
  send(host, { type: "end-game", code: hosted.room.code, reason: "ended" });
  await Promise.all([hostMixedEnded, guestMixedEnded]);
  const hostMixedReplay = waitForMessage(host, "replay");
  const guestMixedReplay = waitForMessage(guest, "replay");
  send(host, { type: "replay", code: hosted.room.code });
  const [mixedReplayMessage, guestMixedReplayMessage] = await Promise.all([hostMixedReplay, guestMixedReplay]);
  assert.deepEqual(mixedReplayMessage.mixedSources, mixedHostLaunch.mixedSources);
  assert.deepEqual(guestMixedReplayMessage, mixedReplayMessage);

  const hostRoomState = waitForMessage(host, "room-state");
  const guestLeft = waitForMessage(guest, "left");
  send(guest, { type: "leave", code: hosted.room.code });
  await guestLeft;
  const updatedRoom = await hostRoomState;
  assert.equal(updatedRoom.room.players.length, 1);
  assert.equal(updatedRoom.room.stage, "setup");

  let displayHost = await connect();
  const displayHostedPromise = waitForMessage(displayHost, "hosted");
  send(displayHost, {
    type: "host",
    capacity: 50,
    player: { name: "Display Host", color: "#ff0000", photo: "" }
  });

  const displayHosted = await displayHostedPromise;
  assert.equal(displayHosted.room.hostDisplay, false);

  const displayGuest = await connect();
  const displayJoinedPromise = waitForMessage(displayGuest, "joined");
  send(displayGuest, {
    type: "join",
    code: displayHosted.room.code,
    player: { name: "Answering Player", color: "#0000ff", photo: "" }
  });
  const displayJoined = await displayJoinedPromise;
  const selectionPromise = waitForMessage(displayHost, "room-state", (message) =>
    message.room.hostDisplay === true &&
    message.room.hostDisplayPlayerId === displayJoined.playerId
  );
  send(displayHost, {
    type: "host-display-options",
    code: displayHosted.room.code,
    enabled: true,
    playerId: displayJoined.playerId
  });
  await selectionPromise;
  const hostDisplayOff = waitForMessage(displayHost, "room-state", (message) =>
    message.room.hostDisplay === false && message.room.hostDisplayPlayerId === null
  );
  send(displayHost, {
    type: "host-display-options",
    code: displayHosted.room.code,
    enabled: false,
    playerId: displayJoined.playerId
  });
  await hostDisplayOff;
  const reenabled = waitForMessage(displayHost, "room-state", (message) =>
    message.room.hostDisplay === true &&
    message.room.hostDisplayPlayerId === displayJoined.playerId
  );
  send(displayHost, {
    type: "host-display-options",
    code: displayHosted.room.code,
    enabled: true,
    playerId: displayJoined.playerId
  });
  await reenabled;
  const insufficientHostDisplayPlayers = waitForMessage(displayHost, "error");
  send(displayHost, {
    type: "launch",
    code: displayHosted.room.code,
    category: "CompGFX",
    quiz: "test1"
  });
  assert.match((await insufficientHostDisplayPlayers).message, /at least one other player/i);

  const displayOther = await connect();
  const displayOtherJoinedPromise = waitForMessage(displayOther, "joined");
  send(displayOther, {
    type: "join",
    code: displayHosted.room.code,
    player: { name: "Other Player", color: "#00ff00", photo: "" }
  });
  const displayOtherJoined = await displayOtherJoinedPromise;
  const invalidDisplayTheme = waitForMessage(displayHost, "error");
  send(displayHost, {
    type: "launch",
    code: displayHosted.room.code,
    category: "CompGFX",
    quiz: "test1",
    quizTheme: "not-a-theme"
  });
  assert.match((await invalidDisplayTheme).message, /valid quiz style/i);
  const displayLaunchPromise = waitForMessage(displayHost, "launch");
  const displayGuestLaunchPromise = waitForMessage(displayGuest, "launch");
  const displayOtherLaunchPromise = waitForMessage(displayOther, "launch");
  send(displayHost, {
    type: "launch",
    code: displayHosted.room.code,
    category: "CompGFX",
    quiz: "test1",
    quizTheme: "blended"
  });
  const [displayLaunch, displayGuestLaunch, displayOtherLaunch] = await Promise.all([
    displayLaunchPromise,
    displayGuestLaunchPromise,
    displayOtherLaunchPromise
  ]);
  assert.equal(displayLaunch.quizTheme, "blended");
  assert.equal(displayGuestLaunch.quizTheme, "blended");
  assert.equal(displayOtherLaunch.quizTheme, "blended");

  displayHost.close();
  await once(displayHost, "close");
  displayHost = await connect();
  const displayHostRejoined = waitForMessage(displayHost, "joined");
  send(displayHost, {
    type: "join",
    code: displayHosted.room.code,
    playerId: displayHosted.playerId
  });
  const rejoinedDisplayHost = await displayHostRejoined;
  assert.equal(rejoinedDisplayHost.room.stage, "setup");
  assert.equal(rejoinedDisplayHost.room.hostDisplay, true);
  assert.equal(rejoinedDisplayHost.room.quizTheme, "blended");
  assert.equal(rejoinedDisplayHost.room.players.find((player) => player.host).connected, true);

  const displayStartedPromise = waitForMessage(displayHost, "quiz-start");
  send(displayHost, {
    type: "quiz-start",
    code: displayHosted.room.code,
    config: { questionSequence: [0, 1] }
  });
  await displayStartedPromise;
  const displayQuestionPromise = waitForMessage(displayGuest, "question");
  const displayOtherQuestionPromise = waitForMessage(displayOther, "question");
  send(displayHost, {
    type: "question",
    code: displayHosted.room.code,
    questionNumber: 0,
    questionIndex: 0,
    answerOrder: [0, 1, 2, 3],
    correctIndex: 1
  });
  await Promise.all([displayQuestionPromise, displayOtherQuestionPromise]);
  const displayRevealPromise = waitForMessage(displayGuest, "reveal");
  const displayOtherRevealPromise = waitForMessage(displayOther, "reveal");
  const hostAnswerRejected = waitForMessage(displayHost, "error");
  send(displayHost, {
    type: "answer",
    code: displayHosted.room.code,
    questionNumber: 0,
    answerIndex: 1
  });
  assert.match((await hostAnswerRejected).message, /displaying the quiz/i);
  send(displayGuest, {
    type: "answer",
    code: displayHosted.room.code,
    questionNumber: 0,
    answerIndex: 1
  });
  send(displayOther, {
    type: "answer",
    code: displayHosted.room.code,
    questionNumber: 0,
    answerIndex: 0
  });
  const [displayReveal] = await Promise.all([displayRevealPromise, displayOtherRevealPromise]);
  assert.equal(displayReveal.answers.find((answer) => answer.playerId === displayHosted.playerId).selectedIndex, null);
  assert.equal(displayReveal.answers.find((answer) => answer.playerId === displayJoined.playerId).correct, true);

  const unselectedAdvanceRejected = waitForMessage(displayOther, "error");
  send(displayOther, { type: "next-question", code: displayHosted.room.code });
  assert.match((await unselectedAdvanceRejected).message, /selected Host Display player/i);

  const displayHostNext = waitForMessage(displayHost, "next-question");
  const displayGuestNext = waitForMessage(displayGuest, "next-question");
  const displayOtherNext = waitForMessage(displayOther, "next-question");
  send(displayGuest, { type: "next-question", code: displayHosted.room.code });
  await Promise.all([displayHostNext, displayGuestNext, displayOtherNext]);

  const displayHostSecondQuestion = waitForMessage(displayHost, "question");
  const displayGuestSecondQuestion = waitForMessage(displayGuest, "question");
  const displayOtherSecondQuestion = waitForMessage(displayOther, "question");
  send(displayHost, {
    type: "question",
    code: displayHosted.room.code,
    questionNumber: 1,
    questionIndex: 1,
    answerOrder: [0, 1, 2, 3],
    correctIndex: 0
  });
  await Promise.all([displayHostSecondQuestion, displayGuestSecondQuestion, displayOtherSecondQuestion]);

  const displayHostSkipReveal = waitForMessage(displayHost, "reveal");
  const displayGuestSkipReveal = waitForMessage(displayGuest, "reveal");
  const displayOtherSkipReveal = waitForMessage(displayOther, "reveal");
  const unselectedSkipRejected = waitForMessage(displayOther, "error");
  send(displayOther, {
    type: "skip-question",
    code: displayHosted.room.code,
    questionNumber: 1
  });
  assert.match((await unselectedSkipRejected).message, /selected Host Display player/i);
  send(displayOther, {
    type: "answer",
    code: displayHosted.room.code,
    questionNumber: 1,
    answerIndex: 0
  });
  send(displayGuest, {
    type: "skip-question",
    code: displayHosted.room.code,
    questionNumber: 1
  });
  const [hostSkippedReveal] = await Promise.all([
    displayHostSkipReveal,
    displayGuestSkipReveal,
    displayOtherSkipReveal
  ]);
  assert.equal(
    hostSkippedReveal.answers.find((answer) => answer.playerId === displayJoined.playerId).selectedIndex,
    null
  );
  assert.equal(
    hostSkippedReveal.answers.find((answer) => answer.playerId === displayOtherJoined.playerId).selectedIndex,
    0
  );
  const displayHostGameOver = waitForMessage(displayHost, "game-over");
  const displayGuestGameOver = waitForMessage(displayGuest, "game-over");
  const displayOtherGameOver = waitForMessage(displayOther, "game-over");
  send(displayGuest, { type: "end-game", code: displayHosted.room.code, reason: "ended" });
  await Promise.all([displayHostGameOver, displayGuestGameOver, displayOtherGameOver]);

  const displayReplayRejected = waitForMessage(displayGuest, "error");
  send(displayGuest, { type: "replay", code: displayHosted.room.code });
  assert.match((await displayReplayRejected).message, /only the host/i);
  const displayHostReplay = waitForMessage(displayHost, "replay");
  const displayGuestReplay = waitForMessage(displayGuest, "replay");
  const displayOtherReplay = waitForMessage(displayOther, "replay");
  send(displayHost, { type: "replay", code: displayHosted.room.code });
  const [hostDisplayReplayMessage, guestDisplayReplayMessage, otherDisplayReplayMessage] = await Promise.all([
    displayHostReplay,
    displayGuestReplay,
    displayOtherReplay
  ]);
  assert.equal(hostDisplayReplayMessage.quizTheme, "blended");
  assert.deepEqual(guestDisplayReplayMessage, hostDisplayReplayMessage);
  assert.deepEqual(otherDisplayReplayMessage, hostDisplayReplayMessage);

  const displayReplayStarted = waitForMessage(displayHost, "quiz-start");
  send(displayHost, {
    type: "quiz-start",
    code: displayHosted.room.code,
    config: { questionSequence: [0] }
  });
  await displayReplayStarted;
  const displayReplayGameOver = waitForMessage(displayHost, "game-over");
  send(displayHost, { type: "end-game", code: displayHosted.room.code, reason: "ended" });
  await displayReplayGameOver;
  const chooseQuizRejected = waitForMessage(displayGuest, "error");
  send(displayGuest, { type: "choose-new-quiz", code: displayHosted.room.code });
  assert.match((await chooseQuizRejected).message, /only the host/i);
  const displayHostChooseQuiz = waitForMessage(displayHost, "choose-new-quiz");
  const displayGuestChooseQuiz = waitForMessage(displayGuest, "choose-new-quiz");
  const displayOtherChooseQuiz = waitForMessage(displayOther, "choose-new-quiz");
  send(displayHost, { type: "choose-new-quiz", code: displayHosted.room.code });
  await Promise.all([displayHostChooseQuiz, displayGuestChooseQuiz, displayOtherChooseQuiz]);

  const botHost = await connect();
  const botHostedPromise = waitForMessage(botHost, "hosted");
  send(botHost, {
    type: "host",
    capacity: 3,
    player: { name: "Bot Test Host", color: "#ff0000" }
  });
  const botHosted = await botHostedPromise;
  const botGuest = await connect();
  const botGuestJoined = waitForMessage(botGuest, "joined");
  send(botGuest, {
    type: "join",
    code: botHosted.room.code,
    player: { name: "Bot Test Guest", color: "#0000ff" }
  });
  await botGuestJoined;
  const guestExcludedQuizzesRejected = waitForMessage(botGuest, "error");
  send(botGuest, {
    type: "dev-excluded-quizzes",
    code: botHosted.room.code,
    enabled: true
  });
  assert.match((await guestExcludedQuizzesRejected).message, /only the host/i);
  const excludedQuizLaunchRejected = waitForMessage(botHost, "error");
  send(botHost, {
    type: "launch",
    code: botHosted.room.code,
    category: "DataSci",
    quiz: "lautest"
  });
  assert.match((await excludedQuizLaunchRejected).message, /select a valid course and quiz/i);
  const hostExcludedQuizUpdate = waitForMessage(
    botHost,
    "room-state",
    (message) => message.room.excludedQuizzesEnabled
  );
  const guestExcludedQuizUpdate = waitForMessage(
    botGuest,
    "room-state",
    (message) => message.room.excludedQuizzesEnabled
  );
  send(botHost, {
    type: "dev-excluded-quizzes",
    code: botHosted.room.code,
    enabled: true
  });
  const [hostExcludedQuizState, guestExcludedQuizState] = await Promise.all([
    hostExcludedQuizUpdate,
    guestExcludedQuizUpdate
  ]);
  assert.equal(hostExcludedQuizState.room.excludedQuizzesEnabled, true);
  assert.equal(guestExcludedQuizState.room.excludedQuizzesEnabled, true);
  const botLobbyUpdate = waitForMessage(
    botHost,
    "room-state",
    (message) => message.room.players.some((player) => player.fakePlayer)
  );
  send(botHost, { type: "dev-add-fake-players", code: botHosted.room.code, count: 1 });
  const botLobbyRoom = await botLobbyUpdate;
  const fakeDisplayRejected = waitForMessage(botHost, "error");
  send(botHost, {
    type: "host-display-options",
    code: botHosted.room.code,
    enabled: true,
    playerId: botLobbyRoom.room.players.find((player) => player.fakePlayer).id
  });
  assert.match((await fakeDisplayRejected).message, /choose an account belonging to another player/i);
  const botHostLaunch = waitForMessage(botHost, "launch");
  const botGuestLaunch = waitForMessage(botGuest, "launch");
  send(botHost, {
    type: "launch",
    code: botHosted.room.code,
    category: "DataSci",
    quiz: "lautest"
  });
  await Promise.all([botHostLaunch, botGuestLaunch]);
  const botHostQuizStart = waitForMessage(botHost, "quiz-start");
  const botGuestQuizStart = waitForMessage(botGuest, "quiz-start");
  send(botHost, {
    type: "quiz-start",
    code: botHosted.room.code,
    config: { questionSequence: [0] }
  });
  await Promise.all([botHostQuizStart, botGuestQuizStart]);
  const botHostQuestion = waitForMessage(botHost, "question");
  const botGuestQuestion = waitForMessage(botGuest, "question");
  send(botHost, {
    type: "question",
    code: botHosted.room.code,
    questionNumber: 0,
    questionIndex: 0,
    answerOrder: [0, 1, 2, 3],
    correctIndex: 2
  });
  await Promise.all([botHostQuestion, botGuestQuestion]);
  const botHostReveal = waitForMessage(botHost, "reveal");
  const botGuestReveal = waitForMessage(botGuest, "reveal");
  send(botHost, {
    type: "answer",
    code: botHosted.room.code,
    questionNumber: 0,
    answerIndex: 2
  });
  send(botGuest, {
    type: "answer",
    code: botHosted.room.code,
    questionNumber: 0,
    answerIndex: 2
  });
  const [botHostRevealMessage, botGuestRevealMessage] = await Promise.all([
    botHostReveal,
    botGuestReveal
  ]);
  assert.deepEqual(botGuestRevealMessage, botHostRevealMessage);
  assert.equal(botHostRevealMessage.answers.length, 3);
  assert.equal(
    botHostRevealMessage.answers.some(
      (answer) => answer.playerId === botLobbyRoom.room.players.find((player) => player.fakePlayer).id
    ),
    true
  );
});

test("only the host leaving ends an active party quiz", async (t) => {
  const port = 20080 + Math.floor(Math.random() * 1000);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: process.cwd(),
    env: { ...process.env, PORT: String(port) },
    stdio: ["ignore", "pipe", "pipe"]
  });
  let serverOutput = "";
  server.stdout.on("data", (chunk) => { serverOutput += chunk.toString(); });
  server.stderr.on("data", (chunk) => { serverOutput += chunk.toString(); });
  const sockets = [];
  t.after(() => {
    sockets.forEach((socket) => socket.close());
    server.kill();
  });

  let ready = false;
  for (let attempt = 0; attempt < 40; attempt++) {
    if (server.exitCode !== null) throw new Error(`Party server exited: ${serverOutput}`);
    try {
      const response = await fetch(`http://localhost:${port}/`);
      if (response.ok) {
        ready = true;
        break;
      }
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
  assert.equal(ready, true, `Party server did not start: ${serverOutput}`);

  async function connect() {
    const socket = new WebSocket(`ws://localhost:${port}/party`);
    sockets.push(socket);
    await once(socket, "open");
    return socket;
  }

  const host = await connect();
  const hostedPromise = waitForMessage(host, "hosted");
  send(host, {
    type: "host",
    capacity: 4,
    player: { name: "Host", color: "#ff0000" }
  });
  const hosted = await hostedPromise;

  async function join(name, color) {
    const socket = await connect();
    const joinedPromise = waitForMessage(socket, "joined");
    send(socket, {
      type: "join",
      code: hosted.room.code,
      player: { name, color }
    });
    return { socket, joined: await joinedPromise };
  }

  const firstGuest = await join("First guest", "#0000ff");
  const disconnectedGuest = await join("Disconnected guest", "#00ff00");
  const continuingGuest = await join("Continuing guest", "#ffff00");

  const launched = sockets.map((socket) => waitForMessage(socket, "launch"));
  send(host, {
    type: "launch",
    code: hosted.room.code,
    category: "CompArch",
    quiz: "test1"
  });
  await Promise.all(launched);

  const started = sockets.map((socket) => waitForMessage(socket, "quiz-start"));
  send(host, {
    type: "quiz-start",
    code: hosted.room.code,
    config: {
      questionSequence: [0],
      orderMode: "static",
      timeLimitMinutes: null,
      perQuestionTimeMinutes: null
    }
  });
  await Promise.all(started);

  const firstGuestLeft = waitForMessage(firstGuest.socket, "left");
  const explicitLeaveUpdate = waitForMessage(host, "room-state");
  send(firstGuest.socket, { type: "leave", code: hosted.room.code });
  await firstGuestLeft;
  const afterExplicitLeave = await explicitLeaveUpdate;
  assert.equal(afterExplicitLeave.room.stage, "quiz");
  assert.equal(afterExplicitLeave.room.players.length, 3);

  const reconnectedGuest = await connect();
  const guestRejoined = waitForMessage(reconnectedGuest, "joined");
  send(reconnectedGuest, {
    type: "join",
    code: hosted.room.code,
    playerId: disconnectedGuest.joined.playerId
  });
  await guestRejoined;
  const disconnectUpdate = waitForMessage(
    host,
    "room-state",
    (message) => message.room.stage === "quiz" && message.room.players.length === 2
  );
  const disconnected = once(reconnectedGuest, "close");
  reconnectedGuest.close();
  await disconnected;
  const afterDisconnect = await disconnectUpdate;
  assert.equal(afterDisconnect.room.stage, "quiz");
  assert.equal(afterDisconnect.room.players.length, 2);

  const reconnectedHost = await connect();
  const hostRejoined = waitForMessage(reconnectedHost, "joined");
  send(reconnectedHost, {
    type: "join",
    code: hosted.room.code,
    playerId: hosted.playerId
  });
  await hostRejoined;
  const hostDeparture = waitForMessage(continuingGuest.socket, "game-over");
  const hostClosed = once(reconnectedHost, "close");
  reconnectedHost.close();
  await hostClosed;
  const ended = await hostDeparture;
  assert.equal(ended.reason, "player-left");
  assert.equal(ended.departedPlayerId, hosted.playerId);
});

test("procedural party quizzes track activity and reveal submitted answers", async (t) => {
  const port = 19080 + Math.floor(Math.random() * 1000);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: process.cwd(),
    env: { ...process.env, PORT: String(port) },
    stdio: ["ignore", "pipe", "pipe"]
  });
  const sockets = [];
  let serverOutput = "";
  server.stdout.on("data", (chunk) => { serverOutput += chunk.toString(); });
  server.stderr.on("data", (chunk) => { serverOutput += chunk.toString(); });
  t.after(() => {
    sockets.forEach((socket) => socket.close());
    server.kill();
  });

  let ready = false;
  for (let attempt = 0; attempt < 40; attempt++) {
    if (server.exitCode !== null) throw new Error(`Party server exited: ${serverOutput}`);
    try {
      const response = await fetch(`http://localhost:${port}/healthz`);
      if (response.ok) {
        ready = true;
        break;
      }
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
  assert.equal(ready, true, `Party server did not start: ${serverOutput}`);

  async function connect() {
    const socket = new WebSocket(`ws://localhost:${port}/party`);
    sockets.push(socket);
    await once(socket, "open");
    return socket;
  }

  const host = await connect();
  const hostedPromise = waitForMessage(host, "hosted");
  send(host, { type: "host", capacity: 2, player: { name: "Host", color: "#ff0000" } });
  const hosted = await hostedPromise;
  const guest = await connect();
  const joinedPromise = waitForMessage(guest, "joined");
  send(guest, {
    type: "join",
    code: hosted.room.code,
    player: { name: "Guest", color: "#0000ff" }
  });
  await joinedPromise;

  const hostLaunch = waitForMessage(host, "launch");
  const guestLaunch = waitForMessage(guest, "launch");
  send(host, { type: "launch", code: hosted.room.code, category: "CompArch", quiz: "binary" });
  await Promise.all([hostLaunch, guestLaunch]);

  const hostStarted = waitForMessage(host, "quiz-start");
  const guestStarted = waitForMessage(guest, "quiz-start");
  send(host, {
    type: "quiz-start",
    code: hosted.room.code,
    config: {
      proceduralType: "binary",
      proceduralSettings: {
        gameType: "twos",
        operation: "+",
        questions: 2,
        timerLimit: 0,
        guide: false,
        decimal: false
      },
      questionSequence: [0, 1]
    }
  });
  await Promise.all([hostStarted, guestStarted]);

  const hostQuestion = waitForMessage(host, "question");
  const guestQuestion = waitForMessage(guest, "question");
  send(host, {
    type: "question",
    code: hosted.room.code,
    questionNumber: 0,
    badge: "TWO'S COMPLEMENT",
    prompt: "Find the two's complement of this binary number",
    challenge: "00000101 = ?",
    answerKind: "binary",
    correctAnswer: "11111011"
  });
  const [questionForHost, questionForGuest] = await Promise.all([hostQuestion, guestQuestion]);
  assert.equal(questionForGuest.challenge, "00000101 = ?");
  assert.equal("correctAnswer" in questionForGuest, false);
  assert.equal("correctAnswer" in questionForHost, false);

  await t.test("selected Host Display players can advance binary and hexadecimal quizzes", async (t) => {
  const port = 20080 + Math.floor(Math.random() * 1000);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: process.cwd(),
    env: { ...process.env, PORT: String(port) },
    stdio: ["ignore", "pipe", "pipe"]
  });
  const sockets = [];
  let serverOutput = "";
  server.stdout.on("data", (chunk) => { serverOutput += chunk.toString(); });
  server.stderr.on("data", (chunk) => { serverOutput += chunk.toString(); });
  t.after(() => {
    sockets.forEach((socket) => socket.close());
    server.kill();
  });

  let ready = false;
  for (let attempt = 0; attempt < 40; attempt++) {
    if (server.exitCode !== null) throw new Error(`Party server exited: ${serverOutput}`);
    try {
      const response = await fetch(`http://localhost:${port}/healthz`);
      if (response.ok) {
        ready = true;
        break;
      }
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
  assert.equal(ready, true, `Party server did not start: ${serverOutput}`);

  async function connect() {
    const socket = new WebSocket(`ws://localhost:${port}/party`);
    sockets.push(socket);
    await once(socket, "open");
    return socket;
  }

  for (const quiz of ["binary", "hexadecimal"]) {
    const host = await connect();
    const hostedPromise = waitForMessage(host, "hosted");
    send(host, {
      type: "host",
      capacity: 3,
      player: { name: `${quiz} Host`, color: "#ff0000" }
    });
    const hosted = await hostedPromise;

    const displayPlayer = await connect();
    const displayJoinedPromise = waitForMessage(displayPlayer, "joined");
    send(displayPlayer, {
      type: "join",
      code: hosted.room.code,
      player: { name: `${quiz} Display`, color: "#0000ff" }
    });
    const displayJoined = await displayJoinedPromise;

    const otherPlayer = await connect();
    const otherJoinedPromise = waitForMessage(otherPlayer, "joined");
    send(otherPlayer, {
      type: "join",
      code: hosted.room.code,
      player: { name: `${quiz} Other`, color: "#00ff00" }
    });
    await otherJoinedPromise;

    const hostDisplayState = waitForMessage(host, "room-state", (message) =>
      message.room.hostDisplay &&
      message.room.hostDisplayPlayerId === displayJoined.playerId
    );
    send(host, {
      type: "host-display-options",
      code: hosted.room.code,
      enabled: true,
      playerId: displayJoined.playerId
    });
    await hostDisplayState;

    const launchPromises = [host, displayPlayer, otherPlayer]
      .map((socket) => waitForMessage(socket, "launch"));
    send(host, {
      type: "launch",
      code: hosted.room.code,
      category: "CompArch",
      quiz
    });
    await Promise.all(launchPromises);

    const settings = {
      gameType: "conversion",
      operation: "+",
      questions: 2,
      timerLimit: 0,
      guide: false,
      decimal: false,
      ...(quiz === "hexadecimal" ? { conversionMode: "b2h", hexGuide: false } : {})
    };
    const startPromises = [host, displayPlayer, otherPlayer]
      .map((socket) => waitForMessage(socket, "quiz-start"));
    send(host, {
      type: "quiz-start",
      code: hosted.room.code,
      config: {
        proceduralType: quiz,
        proceduralSettings: settings,
        questionSequence: [0, 1]
      }
    });
    await Promise.all(startPromises);

    const answerKind = quiz === "binary" ? "number" : "text";
    const correctAnswer = quiz === "binary" ? "42" : "A";
    const questionPromises = [host, displayPlayer, otherPlayer]
      .map((socket) => waitForMessage(socket, "question"));
    send(host, {
      type: "question",
      code: hosted.room.code,
      questionNumber: 0,
      badge: quiz.toUpperCase(),
      prompt: "Solve this party question",
      challenge: "Question 1 = ?",
      answerKind,
      correctAnswer
    });
    await Promise.all(questionPromises);

    const revealPromises = [host, displayPlayer, otherPlayer]
      .map((socket) => waitForMessage(socket, "reveal"));
    send(displayPlayer, {
      type: "answer",
      code: hosted.room.code,
      questionNumber: 0,
      answer: correctAnswer
    });
    send(otherPlayer, {
      type: "answer",
      code: hosted.room.code,
      questionNumber: 0,
      answer: quiz === "binary" ? "43" : "B"
    });
    await Promise.all(revealPromises);

    const nextPromises = [host, displayPlayer, otherPlayer]
      .map((socket) => waitForMessage(socket, "next-question"));
    send(displayPlayer, { type: "next-question", code: hosted.room.code });
    await Promise.all(nextPromises);

    const secondQuestionPromises = [host, displayPlayer, otherPlayer]
      .map((socket) => waitForMessage(socket, "question"));
    send(displayPlayer, {
      type: "question",
      code: hosted.room.code,
      questionNumber: 1,
      badge: quiz.toUpperCase(),
      prompt: "Solve this party question",
      challenge: "Question 2 = ?",
      answerKind,
      correctAnswer
    });
    const secondQuestions = await Promise.all(secondQuestionPromises);
    assert.ok(secondQuestions.every((message) => message.questionNumber === 1));
  }
  });

  const activity = waitForMessage(host, "player-progress");
  send(guest, { type: "player-progress", code: hosted.room.code, status: "answering" });
  assert.deepEqual(await activity.then(({ playerId, status }) => ({
    playerId,
    status
  })), { playerId: (await joinedPromise).playerId, status: "answering" });

  const guestLocked = waitForMessage(host, "answer-locked");
  send(guest, { type: "answer", code: hosted.room.code, questionNumber: 0, answer: "11111011" });
  await guestLocked;
  const hostReveal = waitForMessage(host, "reveal");
  const guestReveal = waitForMessage(guest, "reveal");
  send(host, { type: "answer", code: hosted.room.code, questionNumber: 0, answer: "00000000" });
  const [hostResult, guestResult] = await Promise.all([hostReveal, guestReveal]);
  assert.deepEqual(hostResult, guestResult);
  assert.equal(hostResult.correctAnswer, "11111011");
  assert.equal(hostResult.answers.find((entry) => entry.answer === "11111011").correct, true);
  assert.equal(hostResult.answers.find((entry) => entry.answer === "00000000").correct, false);

  const hostNext = waitForMessage(host, "next-question");
  const guestNext = waitForMessage(guest, "next-question");
  send(host, { type: "next-question", code: hosted.room.code });
  await Promise.all([hostNext, guestNext]);
  const hostBinaryQuestion = waitForMessage(host, "question");
  const guestBinaryQuestion = waitForMessage(guest, "question");
  send(host, {
    type: "question",
    code: hosted.room.code,
    questionNumber: 1,
    badge: "BINARY → DECIMAL",
    prompt: "Convert this binary number to decimal",
    challenge: "10110101 = ?",
    answerKind: "number",
    correctAnswer: "181",
    displayBits: "10110101"
  });
  const [, binaryQuestionForGuest] = await Promise.all([hostBinaryQuestion, guestBinaryQuestion]);
  assert.equal(binaryQuestionForGuest.displayBits, "10110101");
  assert.equal("correctAnswer" in binaryQuestionForGuest, false);
});

test("players can join an active procedural quiz and receive join and leave events", async (t) => {
  const port = 21080 + Math.floor(Math.random() * 1000);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: process.cwd(),
    env: { ...process.env, PORT: String(port) },
    stdio: ["ignore", "pipe", "pipe"]
  });
  const sockets = [];
  let serverOutput = "";
  server.stdout.on("data", (chunk) => { serverOutput += chunk.toString(); });
  server.stderr.on("data", (chunk) => { serverOutput += chunk.toString(); });
  t.after(() => {
    sockets.forEach((socket) => socket.close());
    server.kill();
  });

  let ready = false;
  for (let attempt = 0; attempt < 40; attempt++) {
    if (server.exitCode !== null) throw new Error(`Party server exited: ${serverOutput}`);
    try {
      const response = await fetch(`http://localhost:${port}/healthz`);
      if (response.ok) {
        ready = true;
        break;
      }
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
  assert.equal(ready, true, `Party server did not start: ${serverOutput}`);

  async function connect() {
    const socket = new WebSocket(`ws://localhost:${port}/party`);
    sockets.push(socket);
    await once(socket, "open");
    return socket;
  }

  const host = await connect();
  const hostedPromise = waitForMessage(host, "hosted");
  send(host, { type: "host", capacity: 4, player: { name: "Host", color: "#ff0000" } });
  const hosted = await hostedPromise;

  const guest = await connect();
  const joinedPromise = waitForMessage(guest, "joined");
  const joinedEvent = waitForMessage(host, "player-joined");
  send(guest, {
    type: "join",
    code: hosted.room.code,
    player: { name: "Guest", color: "#0000ff" }
  });
  await joinedPromise;
  assert.equal((await joinedEvent).player.name, "Guest");

  const launchMessages = [host, guest].map((socket) => waitForMessage(socket, "launch"));
  send(host, { type: "launch", code: hosted.room.code, category: "CompArch", quiz: "binary" });
  await Promise.all(launchMessages);

  const startedMessages = [host, guest].map((socket) => waitForMessage(socket, "quiz-start"));
  send(host, {
    type: "quiz-start",
    code: hosted.room.code,
    config: {
      proceduralType: "binary",
      proceduralSettings: {
        gameType: "twos",
        operation: "+",
        questions: 2,
        timerLimit: 0,
        guide: false,
        decimal: false
      },
      questionSequence: [0, 1]
    }
  });
  await Promise.all(startedMessages);

  const questionMessages = [host, guest].map((socket) => waitForMessage(socket, "question"));
  send(host, {
    type: "question",
    code: hosted.room.code,
    questionNumber: 0,
    badge: "BINARY",
    prompt: "Convert this binary value",
    challenge: "00000101 = ?",
    answerKind: "binary",
    correctAnswer: "11111011"
  });
  await Promise.all(questionMessages);

  const latePlayer = await connect();
  const roomFoundPromise = waitForMessage(latePlayer, "room-found");
  send(latePlayer, { type: "check-room", code: hosted.room.code });
  const roomFound = await roomFoundPromise;
  assert.equal(roomFound.room.stage, "quiz");

  const lateJoinedPromise = waitForMessage(latePlayer, "joined");
  const hostJoinNotice = waitForMessage(host, "player-joined");
  const guestJoinNotice = waitForMessage(guest, "player-joined");
  send(latePlayer, {
    type: "join",
    code: hosted.room.code,
    player: { name: "Late Player", color: "#00ff00" }
  });
  const lateJoin = await lateJoinedPromise;
  assert.equal(lateJoin.room.stage, "quiz");
  assert.equal(lateJoin.room.question.questionNumber, 0);
  assert.equal(lateJoin.room.activity.find((entry) => entry.playerId === lateJoin.playerId).status, "thinking");
  assert.equal((await hostJoinNotice).player.name, "Late Player");
  assert.equal((await guestJoinNotice).player.name, "Late Player");

  const lockedNotices = [host, guest].map((socket) =>
    waitForMessage(socket, "answer-locked", (message) => message.playerId === lateJoin.playerId)
  );
  send(latePlayer, {
    type: "answer",
    code: hosted.room.code,
    questionNumber: 0,
    answer: "11111011"
  });
  await Promise.all(lockedNotices);

  const leftPromise = waitForMessage(latePlayer, "left");
  const hostLeftNotice = waitForMessage(host, "player-left");
  const guestLeftNotice = waitForMessage(guest, "player-left");
  send(latePlayer, { type: "leave", code: hosted.room.code });
  await leftPromise;
  assert.equal((await hostLeftNotice).player.name, "Late Player");
  assert.equal((await guestLeftNotice).player.name, "Late Player");
});
