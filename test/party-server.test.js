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

  async function verifyPartyQuizLaunch(category, quiz, netHubQuizId = null) {
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
      quiz,
      ...(netHubQuizId ? { netHubQuizId } : {})
    });
    const [hostLaunchMessage, guestLaunchMessage] = await Promise.all([
      hostLaunchPromise,
      guestLaunchPromise
    ]);
    for (const launch of [hostLaunchMessage, guestLaunchMessage]) {
      assert.equal(launch.category, category);
      assert.equal(launch.quiz, quiz);
      assert.equal(launch.netHubQuizId, netHubQuizId);
    }
    quizHost.close();
    quizGuest.close();
  }

  await verifyPartyQuizLaunch("CompArch", "test1");
  await verifyPartyQuizLaunch("CompArch", "quiz2");
  await verifyPartyQuizLaunch("CompArch", "quiz3");
  await verifyPartyQuizLaunch("CloudComp", "test1");
  await verifyPartyQuizLaunch("CompArch", "binary");
  await verifyPartyQuizLaunch("CompArch", "hexadecimal");
  const netHubQuizId = "123e4567-e89b-42d3-a456-426614174000";
  await verifyPartyQuizLaunch(
    "NetHub",
    `nethub_${netHubQuizId.replaceAll("-", "")}`,
    netHubQuizId
  );

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
    earlyPointBonus: true,
    competitionMode: false
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

  const updatedGuestPhoto = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
  const updatedGuestProfile = {
    name: "Guest Updated",
    color: "#21ab65",
    photo: updatedGuestPhoto
  };
  const guestProfileUpdate = waitForMessage(
    guest,
    "room-state",
    (message) => message.room.players.some(
      (player) => player.id === joined.playerId && player.name === updatedGuestProfile.name
    )
  );
  const hostSeesGuestProfileUpdate = waitForMessage(
    host,
    "room-state",
    (message) => message.room.players.some(
      (player) => player.id === joined.playerId && player.name === updatedGuestProfile.name
    )
  );
  send(guest, { type: "update-profile", code: hosted.room.code, player: updatedGuestProfile });
  const [guestProfileState, hostGuestProfileState] = await Promise.all([
    guestProfileUpdate,
    hostSeesGuestProfileUpdate
  ]);
  for (const state of [guestProfileState, hostGuestProfileState]) {
    const updatedPlayer = state.room.players.find((player) => player.id === joined.playerId);
    assert.equal(updatedPlayer.name, updatedGuestProfile.name);
    assert.equal(updatedPlayer.color, updatedGuestProfile.color);
    assert.equal(updatedPlayer.photo, updatedGuestProfile.photo);
    assert.equal(updatedPlayer.ready, true);
    assert.equal(updatedPlayer.score, 0);
  }

  const updatedHostProfile = {
    name: "Host Updated",
    color: "#bd32a7",
    photo: updatedGuestPhoto
  };
  const hostProfileUpdate = waitForMessage(
    host,
    "room-state",
    (message) => message.room.players.some(
      (player) => player.id === hosted.playerId && player.name === updatedHostProfile.name
    )
  );
  const guestSeesHostProfileUpdate = waitForMessage(
    guest,
    "room-state",
    (message) => message.room.players.some(
      (player) => player.id === hosted.playerId && player.name === updatedHostProfile.name
    )
  );
  send(host, { type: "update-profile", code: hosted.room.code, player: updatedHostProfile });
  await Promise.all([hostProfileUpdate, guestSeesHostProfileUpdate]);

  const duplicateProfileName = waitForMessage(guest, "error");
  send(guest, {
    type: "update-profile",
    code: hosted.room.code,
    player: { ...updatedGuestProfile, name: " host updated " }
  });
  assert.match((await duplicateProfileName).message, /name is already in the room/i);

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
    player:{name:"hOST uPDATED",color:"#ff00ff",photo:""}
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
    earlyPointBonus: true,
    competitionMode: false
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
    player: { name: "Guest Updated", color: "#0000ff", photo: "" }
  });
  joined = await rejoinedPromise;
  await rejoinRoomUpdate;
  assert.equal(joined.room.players.length, 2);
  assert.equal(joined.room.players.every((player) => player.ready), true);

  const checkRoomPromise = waitForMessage(guest, "room-found");
  send(guest, { type: "check-room", code: hosted.room.code });
  const checkedRoom=(await checkRoomPromise).room;
  assert.equal(checkedRoom.players, 2);
  assert.deepEqual(
    checkedRoom.profiles.map((profile)=>profile.name).sort(),
    ["Guest Updated","Host Updated"]
  );

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
  const profileUpdateAfterLaunch = waitForMessage(guest, "error");
  send(guest, {
    type: "update-profile",
    code: hosted.room.code,
    player: { name: "Too Late", color: "#000000", photo: "" }
  });
  assert.match((await profileUpdateAfterLaunch).message, /only be changed in the lobby/i);

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
    earlyPointBonus: true,
    competitionMode: false
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
  const [hostReplayStartMessage, guestReplayStartMessage] = await Promise.all([
    hostReplayStart,
    guestReplayStart
  ]);
  for (const player of hostReplayStartMessage.players) {
    assert.equal(player.score, 0, "replay starts with a fresh current-quiz score");
    assert.equal(player.overallScore, player.id === joined.playerId ? 3 : 1);
  }
  assert.deepEqual(
    guestReplayStartMessage.players.map(({ id, score, overallScore }) => ({
      id,
      score,
      overallScore
    })),
    hostReplayStartMessage.players.map(({ id, score, overallScore }) => ({
      id,
      score,
      overallScore
    }))
  );
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
  const unselectedMusicChange = waitForMessage(displayOther, "error");
  send(displayOther, {
    type: "host-display-music",
    code: displayHosted.room.code,
    selection: "NetHubBonus9",
    reshuffle: false,
    useAlternateTrack9: false
  });
  assert.match((await unselectedMusicChange).message, /Host Display account or selected Host Display player/i);
  const displayMusicChange = waitForMessage(displayHost, "host-display-music");
  const playerMusicChange = waitForMessage(displayGuest, "host-display-music");
  send(displayGuest, {
    type: "host-display-music",
    code: displayHosted.room.code,
    selection: "NetHubBonus10",
    reshuffle: false,
    useAlternateTrack9: false
  });
  const playerSelectedTrack = {
    type: "host-display-music",
    selection: "NetHubBonus10",
    reshuffle: false,
    useAlternateTrack9: false
  };
  assert.deepEqual(await displayMusicChange, playerSelectedTrack);
  assert.deepEqual(await playerMusicChange, playerSelectedTrack);

  const hostMusicChange = waitForMessage(displayHost, "host-display-music");
  const playerReceivesHostMusicChange = waitForMessage(displayGuest, "host-display-music");
  send(displayHost, {
    type: "host-display-music",
    code: displayHosted.room.code,
    selection: "NetHubBonus9",
    reshuffle: false,
    useAlternateTrack9: true
  });
  const hostSelectedTrack = {
    type: "host-display-music",
    selection: "NetHubBonus9",
    reshuffle: false,
    useAlternateTrack9: true
  };
  assert.deepEqual(await hostMusicChange, hostSelectedTrack);
  assert.deepEqual(await playerReceivesHostMusicChange, hostSelectedTrack);
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
      capacity: 4,
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
  const hostAfterJoin = waitForMessage(host, "room-state", (message) =>
    message.room.players.some((player) => player.name === "Late Player")
  );
  const guestAfterJoin = waitForMessage(guest, "room-state", (message) =>
    message.room.players.some((player) => player.name === "Late Player")
  );
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
  const [hostJoinSnapshot, guestJoinSnapshot] = await Promise.all([hostAfterJoin, guestAfterJoin]);
  assert.equal(hostJoinSnapshot.room.players.find((player) => player.name === "Late Player").score, 0);
  assert.equal(guestJoinSnapshot.room.players.find((player) => player.name === "Late Player").score, 0);

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

  const revealMessages = [host, guest, latePlayer].map((socket) => waitForMessage(socket, "reveal"));
  send(host, {
    type: "answer",
    code: hosted.room.code,
    questionNumber: 0,
    answer: "00000000"
  });
  send(guest, {
    type: "answer",
    code: hosted.room.code,
    questionNumber: 0,
    answer: "00000001"
  });
  const reveals = await Promise.all(revealMessages);
  const lateAnswer = reveals[0].answers.find((entry) => entry.playerId === lateJoin.playerId);
  assert.equal(lateAnswer.answer, "11111011");
  assert.equal(lateAnswer.score, 3);

  const leftPromise = waitForMessage(latePlayer, "left");
  const hostLeftNotice = waitForMessage(host, "player-left");
  const guestLeftNotice = waitForMessage(guest, "player-left");
  const hostAfterLeave = waitForMessage(host, "room-state", (message) =>
    !message.room.players.some((player) => player.id === lateJoin.playerId)
  );
  const guestAfterLeave = waitForMessage(guest, "room-state", (message) =>
    !message.room.players.some((player) => player.id === lateJoin.playerId)
  );
  send(latePlayer, { type: "leave", code: hosted.room.code });
  await leftPromise;
  assert.equal((await hostLeftNotice).player.name, "Late Player");
  assert.equal((await guestLeftNotice).player.name, "Late Player");
  await Promise.all([hostAfterLeave, guestAfterLeave]);

  const returningPlayer = await connect();
  const rejoined = waitForMessage(returningPlayer, "joined");
  const hostAfterRejoin = waitForMessage(host, "room-state", (message) =>
    message.room.players.some((player) => player.name === "Late Player")
  );
  send(returningPlayer, {
    type: "join",
    code: hosted.room.code,
    player: { name: "Late Player", color: "#00ff00" }
  });
  const returned = await rejoined;
  const restoredPlayer = returned.room.players.find((player) => player.name === "Late Player");
  assert.equal(restoredPlayer.score, 3);
  assert.equal(restoredPlayer.overallScore, 3);
  assert.notEqual(restoredPlayer.id, lateJoin.playerId);
  assert.ok((await hostAfterRejoin).room.players.some((player) => player.id === restoredPlayer.id));
});

test("Competition Mode rank scoring scales to two players and Top Thief swaps awards", async (t) => {
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
      if ((await fetch(`http://localhost:${port}/`)).ok) {
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
  async function join(socket, code, name) {
    const joined = waitForMessage(socket, "joined");
    send(socket, { type: "join", code, player: { name, color: "#4688e8" } });
    return joined;
  }

  const host = await connect();
  const hostedPromise = waitForMessage(host, "hosted");
  send(host, {
    type: "host",
    capacity: 3,
    player: { name: "Scoring Host", color: "#ff0000" }
  });
  const hosted = await hostedPromise;
  const firstPlayer = await connect();
  const firstJoin = await join(firstPlayer, hosted.room.code, "First Player");
  const lastPlayer = await connect();
  const lastJoin = await join(lastPlayer, hosted.room.code, "Last Player");

  const displayEnabled = waitForMessage(host, "room-state", (message) =>
    message.room.hostDisplayPlayerId === firstJoin.playerId
  );
  send(host, {
    type: "host-display-options",
    code: hosted.room.code,
    enabled: true,
    playerId: firstJoin.playerId
  });
  await displayEnabled;
  const competitionEnabled = waitForMessage(host, "room-state", (message) =>
    message.room.partyOptions.competitionMode
  );
  send(host, {
    type: "party-options",
    code: hosted.room.code,
    options: {
      showPlayerScores: true,
      showLockedAnswers: false,
      earlyPointBonus: true,
      competitionMode: true
    }
  });
  await competitionEnabled;

  const launches = [host, firstPlayer, lastPlayer].map((socket) =>
    waitForMessage(socket, "launch")
  );
  send(host, {
    type: "launch",
    code: hosted.room.code,
    category: "CompArch",
    quiz: "quiz1"
  });
  await Promise.all(launches);
  const starts = [host, firstPlayer, lastPlayer].map((socket) =>
    waitForMessage(socket, "quiz-start")
  );
  send(host, {
    type: "quiz-start",
    code: hosted.room.code,
    config: {
      questionSequence: Array.from({ length: 22 }, (_, index) => index),
      orderMode: "static",
      timeLimitMinutes: null,
      perQuestionTimeMinutes: null,
      reviewSections: []
    }
  });
  await Promise.all(starts);

  async function openQuestion(questionNumber) {
    const questions = [host, firstPlayer, lastPlayer].map((socket) =>
      waitForMessage(socket, "question", (message) =>
        message.questionNumber === questionNumber
      )
    );
    send(firstPlayer, {
      type: "question",
      code: hosted.room.code,
      questionNumber,
      questionIndex: questionNumber,
      answerOrder: [0, 1, 2, 3],
      correctIndex: 2
    });
    await Promise.all(questions);
  }
  async function answer(socket, questionNumber) {
    const confirmed = waitForMessage(socket, "answer-confirmed");
    send(socket, {
      type: "answer",
      code: hosted.room.code,
      questionNumber,
      answerIndex: 2
    });
    await confirmed;
  }

  await openQuestion(0);
  const firstRevealPromise = waitForMessage(host, "reveal");
  await answer(firstPlayer, 0);
  await answer(lastPlayer, 0);
  const firstReveal = await firstRevealPromise;
  assert.equal(
    firstReveal.answers.find((entry) => entry.playerId === firstJoin.playerId).pointsEarned,
    6
  );
  assert.equal(
    firstReveal.answers.find((entry) => entry.playerId === lastJoin.playerId).pointsEarned,
    1
  );

  const nextQuestion = [host, firstPlayer, lastPlayer].map((socket) =>
    waitForMessage(socket, "next-question")
  );
  send(firstPlayer, { type: "next-question", code: hosted.room.code });
  await Promise.all(nextQuestion);
  await openQuestion(1);

  const chargesReady = waitForMessage(host, "room-state", (message) =>
    message.room.players
      .filter((member) => !member.host)
      .every((member) => member.competitionCharge === 30)
  );
  send(host, {
    type: "dev-set-competition-charge",
    code: hosted.room.code,
    allPlayers: true,
    charge: 30
  });
  await chargesReady;
  const topThiefApplied = waitForMessage(lastPlayer, "powerup-applied", (message) =>
    message.powerup === "top-thief"
  );
  const topThiefActive = waitForMessage(host, "room-state", (message) =>
    message.room.topThiefPlayerId === lastJoin.playerId
  );
  send(lastPlayer, {
    type: "competition-powerup",
    code: hosted.room.code,
    powerup: "top-thief"
  });
  await Promise.all([topThiefApplied, topThiefActive]);
  const duplicateTopThief = waitForMessage(firstPlayer, "error");
  send(firstPlayer, {
    type: "competition-powerup",
    code: hosted.room.code,
    powerup: "top-thief"
  });
  assert.match((await duplicateTopThief).message, /already active this question/i);

  const topThiefRevealPromise = waitForMessage(host, "reveal");
  await answer(firstPlayer, 1);
  await answer(lastPlayer, 1);
  const topThiefReveal = await topThiefRevealPromise;
  assert.equal(
    topThiefReveal.answers.find((entry) => entry.playerId === firstJoin.playerId).pointsEarned,
    1
  );
  assert.equal(
    topThiefReveal.answers.find((entry) => entry.playerId === lastJoin.playerId).pointsEarned,
    6
  );
});

test("Competition Mode scores All In and validates Split and Icey powerups", async (t) => {
  const port = 19080 + Math.floor(Math.random() * 1000);
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
  async function join(socket, code, name) {
    const joined = waitForMessage(socket, "joined");
    send(socket, { type: "join", code, player: { name, color: "#4688e8" } });
    return joined;
  }

  const host = await connect();
  const hostedPromise = waitForMessage(host, "hosted");
  send(host, {
    type: "host",
    capacity: 4,
    player: { name: "Competition Host", color: "#ff0000" }
  });
  const hosted = await hostedPromise;
  const displayPlayer = await connect();
  const displayJoin = await join(displayPlayer, hosted.room.code, "Display Player");
  const otherPlayer = await connect();
  const otherJoin = await join(otherPlayer, hosted.room.code, "Other Player");
  let thirdPlayer = await connect();
  const thirdJoin = await join(thirdPlayer, hosted.room.code, "Third Player");

  const missingDisplayError = waitForMessage(host, "error");
  send(host, {
    type: "party-options",
    code: hosted.room.code,
    options: {
      showPlayerScores: true,
      showLockedAnswers: false,
      earlyPointBonus: true,
      competitionMode: true
    }
  });
  assert.match((await missingDisplayError).message, /requires Host Display/);

  const displayEnabled = waitForMessage(host, "room-state", (message) =>
    message.room.hostDisplay && message.room.hostDisplayPlayerId === displayJoin.playerId
  );
  send(host, {
    type: "host-display-options",
    code: hosted.room.code,
    enabled: true,
    playerId: displayJoin.playerId
  });
  await displayEnabled;
  const competitionEnabled = waitForMessage(host, "room-state", (message) =>
    message.room.partyOptions.competitionMode === true
  );
  send(host, {
    type: "party-options",
    code: hosted.room.code,
    options: {
      showPlayerScores: true,
      showLockedAnswers: false,
      earlyPointBonus: true,
      competitionMode: true
    }
  });
  await competitionEnabled;

  const launches = [host, displayPlayer, otherPlayer, thirdPlayer].map((socket) =>
    waitForMessage(socket, "launch")
  );
  send(host, {
    type: "launch",
    code: hosted.room.code,
    category: "CompArch",
    quiz: "quiz1"
  });
  await Promise.all(launches);
  const starts = [host, displayPlayer, otherPlayer, thirdPlayer].map((socket) =>
    waitForMessage(socket, "quiz-start")
  );
  send(host, {
    type: "quiz-start",
    code: hosted.room.code,
    config: {
      questionSequence: Array.from({ length: 22 }, (_, index) => index),
      orderMode: "static",
      timeLimitMinutes: null,
      perQuestionTimeMinutes: null,
      reviewSections: []
    }
  });
  const startMessages = await Promise.all(starts);
  assert.equal(startMessages[1].config.partyOptions.competitionMode, true);

  const chargeSet = waitForMessage(host, "room-state", (message) =>
    message.room.players.filter((player) => !player.host)
      .every((player) => player.competitionCharge === 10)
  );
  send(host, {
    type: "dev-set-competition-charge",
    code: hosted.room.code,
    allPlayers: true,
    charge: 10
  });
  await chargeSet;
  const chargeReset = waitForMessage(host, "room-state", (message) =>
    message.room.players.filter((player) => !player.host)
      .every((player) => player.competitionCharge === 0)
  );
  const guestChargeDenied = waitForMessage(otherPlayer, "error");
  send(otherPlayer, {
    type: "dev-set-competition-charge",
    code: hosted.room.code,
    playerId: otherJoin.playerId,
    charge: 10
  });
  assert.match((await guestChargeDenied).message, /only the host/i);
  send(host, {
    type: "dev-set-competition-charge",
    code: hosted.room.code,
    allPlayers: true,
    charge: 0
  });
  await chargeReset;

  async function openQuestion(questionNumber) {
    const messages = [host, displayPlayer, otherPlayer, thirdPlayer].map((socket) =>
      waitForMessage(socket, "question", (message) => message.questionNumber === questionNumber)
    );
    send(displayPlayer, {
      type: "question",
      code: hosted.room.code,
      questionNumber,
      questionIndex: questionNumber,
      answerOrder: [0, 1, 2, 3],
      correctIndex: 2
    });
    return Promise.all(messages);
  }
  async function answer(socket, playerId, questionNumber, answerIndex) {
    const locked = waitForMessage(socket, "answer-confirmed");
    send(socket, {
      type: "answer",
      code: hosted.room.code,
      questionNumber,
      answerIndex
    });
    return locked.catch((error) => {
      throw new Error(
        `No answer lock for player ${playerId} on question ${questionNumber}: ${error.message}`
      );
    });
  }
  async function wager(socket, playerId, questionNumber) {
    const locked = waitForMessage(host, "all-in-locked", (message) =>
      message.playerId === playerId
    );
    send(socket, {
      type: "all-in-decision",
      code: hosted.room.code,
      questionNumber,
      allIn: true
    });
    const result = await locked;
    const expectedName = playerId === displayJoin.playerId
      ? "Display Player"
      : playerId === otherJoin.playerId ? "Other Player" : "Third Player";
    assert.equal(result.playerName, expectedName);
    return result;
  }
  async function nextQuestion(questionNumber) {
    const messages = [host, displayPlayer, otherPlayer, thirdPlayer].map((socket) =>
      waitForMessage(socket, "next-question")
    );
    send(displayPlayer, { type: "next-question", code: hosted.room.code });
    await Promise.all(messages);
    return openQuestion(questionNumber);
  }
  async function answerCorrectAndPass(questionNumber) {
    const revealPromise = waitForMessage(host, "reveal");
    await answer(displayPlayer, displayJoin.playerId, questionNumber, 2);
    await answer(otherPlayer, otherJoin.playerId, questionNumber, 2);
    await answer(thirdPlayer, thirdJoin.playerId, questionNumber, 2);
    return revealPromise;
  }

  await openQuestion(0);
  const zeroScoreAllInError = waitForMessage(displayPlayer, "error");
  send(displayPlayer, {
    type: "all-in-decision",
    code: hosted.room.code,
    questionNumber: 0,
    allIn: true
  });
  assert.match((await zeroScoreAllInError).message, /need points/i);
  await answer(displayPlayer, displayJoin.playerId, 0, 0);
  const firstRevealPromise = waitForMessage(host, "reveal");
  await answer(otherPlayer, otherJoin.playerId, 0, 2);
  await answer(thirdPlayer, thirdJoin.playerId, 0, 2);
  const firstReveal = await firstRevealPromise;
  assert.equal(
    firstReveal.answers.find((entry) => entry.playerId === displayJoin.playerId).pointsEarned,
    0
  );
  const firstCorrect = firstReveal.answers.find((entry) => entry.playerId === otherJoin.playerId);
  assert.equal(firstCorrect.pointsEarned, 6);
  assert.equal(firstCorrect.competitionCharge, 1);
  assert.equal(
    firstReveal.answers.find((entry) => entry.playerId === thirdJoin.playerId).pointsEarned,
    1
  );

  for (let questionNumber = 1; questionNumber <= 9; questionNumber++) {
    await nextQuestion(questionNumber);
    let reveal;
    if (questionNumber === 2) {
      const firstChainWager = await wager(
        displayPlayer,
        displayJoin.playerId,
        questionNumber
      );
      const secondChainWager = await wager(
        otherPlayer,
        otherJoin.playerId,
        questionNumber
      );
      assert.equal(firstChainWager.allInMultiplier, 2);
      assert.equal(secondChainWager.allInMultiplier, 3);
      const revealPromise = waitForMessage(host, "reveal");
      await answer(displayPlayer, displayJoin.playerId, questionNumber, 2);
      await answer(otherPlayer, otherJoin.playerId, questionNumber, 2);
      await answer(thirdPlayer, thirdJoin.playerId, questionNumber, 2);
      reveal = await revealPromise;
      assert.equal(
        reveal.answers.find((entry) => entry.playerId === displayJoin.playerId).pointsEarned,
        18
      );
      assert.equal(
        reveal.answers.find((entry) => entry.playerId === otherJoin.playerId).pointsEarned,
        24
      );
      assert.equal(
        reveal.answers.find((entry) => entry.playerId === displayJoin.playerId).score,
        27
      );
      assert.equal(
        reveal.answers.find((entry) => entry.playerId === otherJoin.playerId).score,
        36
      );
    } else if (questionNumber === 3) {
      const firstChainWager = await wager(
        displayPlayer,
        displayJoin.playerId,
        questionNumber
      );
      const secondChainWager = await wager(
        otherPlayer,
        otherJoin.playerId,
        questionNumber
      );
      const thirdChainWager = await wager(
        thirdPlayer,
        thirdJoin.playerId,
        questionNumber
      );
      assert.equal(firstChainWager.allInMultiplier, 2);
      assert.equal(secondChainWager.allInMultiplier, 3);
      assert.equal(thirdChainWager.allInMultiplier, 4);
      const revealPromise = waitForMessage(host, "reveal");
      await answer(displayPlayer, displayJoin.playerId, questionNumber, 2);
      await answer(otherPlayer, otherJoin.playerId, questionNumber, 2);
      await answer(thirdPlayer, thirdJoin.playerId, questionNumber, 2);
      reveal = await revealPromise;
      assert.equal(
        reveal.answers.find((entry) => entry.playerId === displayJoin.playerId).pointsEarned,
        81
      );
      assert.equal(
        reveal.answers.find((entry) => entry.playerId === otherJoin.playerId).pointsEarned,
        108
      );
      assert.equal(
        reveal.answers.find((entry) => entry.playerId === thirdJoin.playerId).pointsEarned,
        9
      );
    } else if (questionNumber === 4) {
      await wager(displayPlayer, displayJoin.playerId, questionNumber);
      const revealPromise = waitForMessage(host, "reveal");
      await answer(displayPlayer, displayJoin.playerId, questionNumber, 0);
      await answer(otherPlayer, otherJoin.playerId, questionNumber, 2);
      await answer(thirdPlayer, thirdJoin.playerId, questionNumber, 2);
      reveal = await revealPromise;
      const allInLoss = reveal.answers.find(
        (entry) => entry.playerId === displayJoin.playerId
      );
      assert.equal(allInLoss.pointsEarned, -108);
      assert.equal(allInLoss.score, 0);
    } else {
      reveal = await answerCorrectAndPass(questionNumber);
    }
    if (questionNumber === 1) {
      assert.equal(
        reveal.answers.find((entry) => entry.playerId === displayJoin.playerId).pointsEarned,
        9
      );
      assert.equal(
        reveal.answers.find((entry) => entry.playerId === otherJoin.playerId).pointsEarned,
        6
      );
      assert.equal(
        reveal.answers.find((entry) => entry.playerId === thirdJoin.playerId).pointsEarned,
        1
      );
    }
  }
  await nextQuestion(10);
  const splitApplied = waitForMessage(otherPlayer, "powerup-applied");
  const chargeAfterSplit = waitForMessage(otherPlayer, "room-state", (message) =>
    message.room.players.find((player) => player.id === otherJoin.playerId)?.competitionCharge === 0
  );
  send(otherPlayer, {
    type: "competition-powerup",
    code: hosted.room.code,
    powerup: "split"
  });
  const split = await splitApplied;
  await chargeAfterSplit;
  assert.equal(split.powerup, "split");
  assert.equal(split.removedAnswers.length, 2);
  assert.equal(split.removedAnswers.includes(2), false);
  const removedAnswerError = waitForMessage(otherPlayer, "error");
  send(otherPlayer, {
    type: "answer",
    code: hosted.room.code,
    questionNumber: 10,
    answerIndex: split.removedAnswers[0]
  });
  assert.match((await removedAnswerError).message, /removed by Split/);
  const splitRevealPromise = waitForMessage(host, "reveal");
  await answer(displayPlayer, displayJoin.playerId, 10, 2);
  await answer(otherPlayer, otherJoin.playerId, 10, 2);
  await answer(thirdPlayer, thirdJoin.playerId, 10, 2);
  const splitReveal = await splitRevealPromise;
  assert.equal(
    splitReveal.answers.find((entry) => entry.playerId === otherJoin.playerId).competitionCharge,
    1
  );

  for (let questionNumber = 11; questionNumber <= 14; questionNumber++) {
    await nextQuestion(questionNumber);
    await answerCorrectAndPass(questionNumber);
  }

  const chargeForPowerups = waitForMessage(host, "room-state", (message) =>
    message.room.players.find((player) => player.id === otherJoin.playerId)?.competitionCharge === 50 &&
    message.room.players.find((player) => player.id === thirdJoin.playerId)?.competitionCharge === 0
  );
  send(host, {
    type: "dev-set-competition-charge",
    code: hosted.room.code,
    playerId: otherJoin.playerId,
    charge: 50
  });
  send(host, {
    type: "dev-set-competition-charge",
    code: hosted.room.code,
    playerId: thirdJoin.playerId,
    charge: 0
  });
  await chargeForPowerups.catch((error) => {
    throw new Error(`Setting powerup test charges failed: ${error.message}`);
  });

  await nextQuestion(15);
  const streakApplied = waitForMessage(otherPlayer, "powerup-applied", (message) =>
    message.powerup === "streak-bonus"
  );
  const streakAnnouncement = waitForMessage(host, "powerup-used", (message) =>
    message.powerup === "streak-bonus"
  );
  send(otherPlayer, {
    type: "competition-powerup",
    code: hosted.room.code,
    powerup: "streak-bonus"
  });
  await streakApplied;
  assert.equal((await streakAnnouncement).player.name, "Other Player");

  const unaffordableShield = waitForMessage(thirdPlayer, "error");
  send(thirdPlayer, {
    type: "competition-powerup",
    code: hosted.room.code,
    powerup: "shield"
  });
  assert.match((await unaffordableShield).message, /not have enough charge/i);
  const shieldCharge = waitForMessage(host, "room-state", (message) =>
    message.room.players.find((player) => player.id === thirdJoin.playerId)
      ?.competitionCharge === 10
  );
  send(host, {
    type: "dev-set-competition-charge",
    code: hosted.room.code,
    playerId: thirdJoin.playerId,
    charge: 10
  });
  await shieldCharge;
  const reflectedShieldApplied = waitForMessage(thirdPlayer, "powerup-applied", (message) =>
    message.powerup === "shield"
  );
  const shieldAnnouncement = waitForMessage(host, "powerup-used", (message) =>
    message.powerup === "shield"
  );
  const shieldChargeSpent = waitForMessage(host, "room-state", (message) =>
    message.room.players.find((player) => player.id === thirdJoin.playerId)
      ?.competitionCharge === 0
  );
  send(thirdPlayer, {
    type: "competition-powerup",
    code: hosted.room.code,
    powerup: "shield"
  });
  await reflectedShieldApplied;
  assert.equal((await shieldAnnouncement).player.name, "Third Player");
  await shieldChargeSpent;

  const ghostResult = waitForMessage(otherPlayer, "powerup-applied", (message) =>
    message.powerup === "ghost"
  );
  const ghostAnswer = waitForMessage(otherPlayer, "ghost-answer-revealed");
  const ghostAnnouncement = waitForMessage(host, "powerup-used", (message) =>
    message.powerup === "ghost"
  );
  send(otherPlayer, {
    type: "competition-powerup",
    code: hosted.room.code,
    powerup: "ghost",
    targetPlayerId: displayJoin.playerId
  });
  const ghost = await ghostResult;
  assert.equal(ghost.targetPlayerId, displayJoin.playerId);
  assert.equal(ghost.pending, true);
  assert.equal(Object.hasOwn(await ghostAnnouncement, "answerIndex"), false);
  await answer(displayPlayer, displayJoin.playerId, 15, 1);
  const revealedGhostAnswer = await ghostAnswer;
  assert.equal(revealedGhostAnswer.targetPlayerId, displayJoin.playerId);
  assert.equal(revealedGhostAnswer.answerIndex, 1);

  const scrambledAnnouncement = waitForMessage(host, "powerup-used", (message) =>
    message.powerup === "scramble"
  );
  const scrambledCharge = waitForMessage(host, "room-state", (message) =>
    message.room.players.find((player) => player.id === otherJoin.playerId)?.competitionCharge === 20
  );
  send(otherPlayer, {
    type: "competition-powerup",
    code: hosted.room.code,
    powerup: "scramble"
  });
  const scrambleNotice = await scrambledAnnouncement;
  assert.equal(scrambleNotice.questions, 3);
  await scrambledCharge;
  const activeScrambleError = waitForMessage(otherPlayer, "error", (message) =>
    message.message === "Scramble is already in effect."
  );
  send(otherPlayer, {
    type: "competition-powerup",
    code: hosted.room.code,
    powerup: "scramble"
  });
  await activeScrambleError;

  const iceyApplied = waitForMessage(otherPlayer, "powerup-applied", (message) =>
    message.powerup === "icey"
  );
  const iceyTargeted = waitForMessage(displayPlayer, "player-icey");
  const iceyAnnouncement = waitForMessage(host, "powerup-used", (message) =>
    message.powerup === "icey"
  );
  send(otherPlayer, {
    type: "competition-powerup",
    code: hosted.room.code,
    powerup: "icey",
    targetPlayerIds: [displayJoin.playerId]
  });
  const icey = await iceyApplied;
  assert.equal((await iceyTargeted).playerId, displayJoin.playerId);
  assert.equal((await iceyAnnouncement).targets[0].id, displayJoin.playerId);
  assert.deepEqual(
    icey.targets.map(({ playerId, blocked }) => ({
      playerId,
      blocked
    })),
    [{ playerId: displayJoin.playerId, blocked: false }]
  );
  const powerupReveal = waitForMessage(host, "reveal");
  await answer(otherPlayer, otherJoin.playerId, 15, 2);
  await answer(thirdPlayer, thirdJoin.playerId, 15, 2);
  const revealWithStreak = await powerupReveal;
  assert.equal(
    revealWithStreak.answers.find((entry) => entry.playerId === otherJoin.playerId).pointsEarned,
    8
  );

  const question16Messages = await nextQuestion(16);
  assert.ok(question16Messages.every((message) =>
    message.scrambledPlayerIds.includes(displayJoin.playerId) &&
    message.scrambledPlayerIds.includes(thirdJoin.playerId) &&
    !message.scrambledPlayerIds.includes(otherJoin.playerId)
  ));
  const thirdScoreBeforeShield = revealWithStreak.answers.find(
    (entry) => entry.playerId === thirdJoin.playerId
  ).score;
  await wager(thirdPlayer, thirdJoin.playerId, 16);
  const shieldedWrongAnswer = waitForMessage(host, "reveal");
  await answer(displayPlayer, displayJoin.playerId, 16, 2);
  await answer(otherPlayer, otherJoin.playerId, 16, 2);
  await answer(thirdPlayer, thirdJoin.playerId, 16, 0);
  const shieldedReveal = await shieldedWrongAnswer;
  const shieldedAnswer = shieldedReveal.answers.find(
    (entry) => entry.playerId === thirdJoin.playerId
  );
  assert.equal(shieldedAnswer.pointsEarned, 0);
  assert.equal(shieldedAnswer.score, thirdScoreBeforeShield);
  assert.equal(shieldedAnswer.competitionShield, false);
  for (const questionNumber of [17, 18]) {
    const questionMessages = await nextQuestion(questionNumber);
    assert.ok(questionMessages.every((message) =>
      message.scrambledPlayerIds.includes(displayJoin.playerId) &&
      message.scrambledPlayerIds.includes(thirdJoin.playerId) &&
      !message.scrambledPlayerIds.includes(otherJoin.playerId)
    ));
    assert.ok(questionMessages.every((message) =>
      JSON.stringify(message.scrambledPlayerIds) ===
        JSON.stringify(questionMessages[0].scrambledPlayerIds)
    ));
    await answer(otherPlayer, otherJoin.playerId, questionNumber, 2);
    await answer(thirdPlayer, thirdJoin.playerId, questionNumber, 2);
    const timeout = waitForMessage(host, "reveal");
    send(host, { type: "question-timeout", code: hosted.room.code });
    await timeout;
  }
  const question19 = await nextQuestion(19);
  assert.ok(question19.every((message) =>
    !message.scrambledPlayerIds.includes(otherJoin.playerId) &&
    !message.scrambledPlayerIds.includes(displayJoin.playerId) &&
    !message.scrambledPlayerIds.includes(thirdJoin.playerId)
  ));
  const currentCharges = waitForMessage(host, "room-state", (message) =>
    message.room.players.find((player) => player.id === otherJoin.playerId)?.competitionCharge === 40 &&
    message.room.players.find((player) => player.id === thirdJoin.playerId)?.competitionCharge === 8
  );
  send(host, {
    type: "dev-set-competition-charge",
    code: hosted.room.code,
    playerId: otherJoin.playerId,
    charge: 40
  });
  send(host, {
    type: "dev-set-competition-charge",
    code: hosted.room.code,
    playerId: thirdJoin.playerId,
    charge: 8
  });
  await currentCharges;

  const privateAnswerLock = waitForMessage(host, "answer-locked");
  await answer(thirdPlayer, thirdJoin.playerId, 19, 2);
  const hiddenLock = await privateAnswerLock;
  assert.equal(Object.hasOwn(hiddenLock, "playerId"), false);
  const revealEvents = [host, displayPlayer, otherPlayer, thirdPlayer].map((socket) =>
    waitForMessage(socket, "reveal-players-activated")
  );
  const revealCharge = waitForMessage(otherPlayer, "room-state", (message) =>
    message.room.players.find((player) => player.id === otherJoin.playerId)?.competitionCharge === 30
  );
  const revealAnnouncement = waitForMessage(host, "powerup-used", (message) =>
    message.powerup === "reveal-players"
  );
  send(otherPlayer, {
    type: "competition-powerup",
    code: hosted.room.code,
    powerup: "reveal-players"
  });
  const revealed = await Promise.all(revealEvents);
  for (const event of revealed) {
    assert.deepEqual(event.answeredPlayers, [{
      id: thirdJoin.playerId,
      name: "Third Player",
      answerIndex: 2
    }]);
  }
  await revealCharge;
  assert.equal(Object.hasOwn(await revealAnnouncement, "answeredPlayers"), false);

  const reconnectedThirdPlayer = await connect();
  const revealedSnapshotPromise = waitForMessage(reconnectedThirdPlayer, "joined");
  send(reconnectedThirdPlayer, {
    type: "join",
    code: hosted.room.code,
    playerId: thirdJoin.playerId
  });
  const revealedSnapshot = await revealedSnapshotPromise;
  assert.equal(revealedSnapshot.room.revealPlayersActive, true);
  assert.deepEqual(revealedSnapshot.room.revealedAnsweredPlayers, [{
    id: thirdJoin.playerId,
    name: "Third Player",
    answerIndex: 2
  }]);
  thirdPlayer = reconnectedThirdPlayer;

  const drainResult = waitForMessage(otherPlayer, "powerup-applied", (message) =>
    message.powerup === "charge-drain"
  );
  const drainedRoomState = waitForMessage(host, "room-state", (message) =>
    message.room.players.find((player) => player.id === thirdJoin.playerId)?.competitionCharge === 0
  );
  send(otherPlayer, {
    type: "competition-powerup",
    code: hosted.room.code,
    powerup: "charge-drain",
    targetPlayerId: thirdJoin.playerId
  });
  const drained = await drainResult;
  assert.equal(Object.hasOwn(drained, "amount"), false);
  const drainedState = await drainedRoomState.catch((error) => {
    throw new Error(`Drain room-state update missing: ${error.message}`);
  });
  assert.equal(
    drainedState.room.players.find((player) => player.id === otherJoin.playerId).competitionCharge,
    15
  );
  assert.equal(
    drainedState.room.players.find((player) => player.id === thirdJoin.playerId).competitionCharge,
    0
  );

  const thiefTarget = drainedState.room.players.find((member) =>
    member.id !== otherJoin.playerId && !member.host && member.score > 0
  );
  assert.ok(thiefTarget, "Thief requires an opponent with points to steal.");
  const otherScoreBeforeThief = drainedState.room.players.find(
    (member) => member.id === otherJoin.playerId
  );
  const lowThiefCharge = waitForMessage(host, "room-state", (message) =>
    message.room.players.find((member) => member.id === otherJoin.playerId)
      ?.competitionCharge === 5
  );
  send(host, {
    type: "dev-set-competition-charge",
    code: hosted.room.code,
    playerId: otherJoin.playerId,
    charge: 5
  });
  await lowThiefCharge;
  const unaffordableThief = waitForMessage(otherPlayer, "error");
  send(otherPlayer, {
    type: "competition-powerup",
    code: hosted.room.code,
    powerup: "thief",
    targetPlayerId: thiefTarget.id,
    amount: 3
  });
  assert.match((await unaffordableThief).message, /not have enough charge/i);
  const thiefChargeUpdate = waitForMessage(host, "room-state", (message) =>
    message.room.players.find((member) => member.id === otherJoin.playerId)
      ?.competitionCharge === 25
  );
  send(host, {
    type: "dev-set-competition-charge",
    code: hosted.room.code,
    playerId: otherJoin.playerId,
    charge: 25
  });
  await thiefChargeUpdate;
  const thiefResultPromise = waitForMessage(otherPlayer, "powerup-applied", (message) =>
    message.powerup === "thief"
  );
  const thiefTargetSocket = thiefTarget.id === thirdJoin.playerId
    ? thirdPlayer
    : displayPlayer;
  const thiefTargetNotice = waitForMessage(thiefTargetSocket, "thief-stolen");
  const thiefAnnouncement = waitForMessage(host, "powerup-used", (message) =>
    message.powerup === "thief"
  );
  const thiefRoomState = waitForMessage(host, "room-state", (message) =>
    message.room.players.find((member) => member.id === otherJoin.playerId)
      ?.competitionCharge === 19
  );
  send(otherPlayer, {
    type: "competition-powerup",
    code: hosted.room.code,
    powerup: "thief",
    targetPlayerId: thiefTarget.id,
    amount: 3
  });
  const thiefResult = await thiefResultPromise;
  const stolenNotice = await thiefTargetNotice;
  const thiefPopup = await thiefAnnouncement;
  const afterThief = await thiefRoomState;
  assert.equal(thiefResult.targetPlayerId, thiefTarget.id);
  assert.equal(thiefResult.amount, 3);
  assert.equal(stolenNotice.playerId, otherJoin.playerId);
  assert.equal(stolenNotice.amount, thiefResult.amount);
  assert.equal(thiefPopup.amount, thiefResult.amount);
  const thiefScoreAfter = afterThief.room.players.find(
    (member) => member.id === otherJoin.playerId
  );
  const targetScoreAfter = afterThief.room.players.find(
    (member) => member.id === thiefTarget.id
  );
  assert.equal(thiefScoreAfter.score, otherScoreBeforeThief.score + thiefResult.amount);
  assert.equal(targetScoreAfter.score, thiefTarget.score - thiefResult.amount);
  assert.equal(thiefScoreAfter.overallScore, otherScoreBeforeThief.overallScore + thiefResult.amount);
  assert.equal(targetScoreAfter.overallScore, thiefTarget.overallScore - thiefResult.amount);

  const keeperChargeUpdate = waitForMessage(host, "room-state", (message) =>
    message.room.players.find((member) => member.id === otherJoin.playerId)
      ?.competitionCharge === 20
  );
  send(host, {
    type: "dev-set-competition-charge",
    code: hosted.room.code,
    playerId: otherJoin.playerId,
    charge: 20
  });
  await keeperChargeUpdate;
  const keeperApplied = waitForMessage(otherPlayer, "powerup-applied", (message) =>
    message.powerup === "streak-keeper"
  );
  const keeperAnnouncement = waitForMessage(host, "powerup-used", (message) =>
    message.powerup === "streak-keeper"
  );
  const keeperCharge = waitForMessage(otherPlayer, "room-state", (message) =>
    message.room.players.find((player) => player.id === otherJoin.playerId)?.competitionCharge === 0
  );
  send(otherPlayer, {
    type: "competition-powerup",
    code: hosted.room.code,
    powerup: "streak-keeper"
  });
  await keeperApplied;
  assert.equal((await keeperAnnouncement).player.name, "Other Player");
  await keeperCharge;

  const otherAnswerLocks = [host, displayPlayer, otherPlayer, thirdPlayer].map((socket) =>
    waitForMessage(socket, "answer-locked")
  );
  await answer(otherPlayer, otherJoin.playerId, 19, 1);
  const futureOtherLocks = await Promise.all(otherAnswerLocks.map((promise, index) =>
    promise.catch((error) => {
      throw new Error(`Future Other Player lock missing for socket ${index}: ${error.message}`);
    })
  ));
  for (const lock of futureOtherLocks) {
    assert.equal(lock.playerId, otherJoin.playerId);
    assert.equal(lock.answerIndex, 1);
  }
  const revealAfterTimeout = waitForMessage(host, "reveal");
  send(host, { type: "question-timeout", code: hosted.room.code });
  const keeperReveal = await revealAfterTimeout;
  const keeperResult = keeperReveal.answers.find((entry) =>
    entry.playerId === otherJoin.playerId
  );
  assert.equal(keeperResult.streakKept, true);
  assert.equal(keeperResult.competitionStreakKeeper, false);
  assert.equal(keeperResult.competitionPowerupsUsed, 9);
  await nextQuestion(20);
  const chargesForIcey = waitForMessage(host, "room-state", (message) =>
    message.room.players.filter((player) => !player.host)
      .every((player) => player.competitionCharge === 25)
  );
  send(host, {
    type: "dev-set-competition-charge",
    code: hosted.room.code,
    allPlayers: true,
    charge: 25
  });
  await chargesForIcey;
  const renewedShield = waitForMessage(thirdPlayer, "powerup-applied", (message) =>
    message.powerup === "shield"
  );
  send(thirdPlayer, {
    type: "competition-powerup",
    code: hosted.room.code,
    powerup: "shield"
  });
  await renewedShield;
  const blockedIceyApplied = waitForMessage(otherPlayer, "powerup-applied", (message) =>
    message.powerup === "icey"
  );
  const blockedIceyAnnouncement = waitForMessage(host, "powerup-used", (message) =>
    message.powerup === "icey"
  );
  send(otherPlayer, {
    type: "competition-powerup",
    code: hosted.room.code,
    powerup: "icey",
    targetPlayerIds: [thirdJoin.playerId]
  });
  const blockedIcey = await blockedIceyApplied;
  assert.deepEqual(blockedIcey.targets, [{
    playerId: thirdJoin.playerId,
    blocked: true
  }]);
  assert.equal((await blockedIceyAnnouncement).targets[0].blocked, true);
  const hiddenNextQuestionLock = waitForMessage(host, "answer-locked");
  await answer(thirdPlayer, thirdJoin.playerId, 20, 2);
  const hiddenNextQuestion = await hiddenNextQuestionLock;
  assert.equal(Object.hasOwn(hiddenNextQuestion, "playerId"), false);
  assert.equal(Object.hasOwn(hiddenNextQuestion, "answerIndex"), false);
  const hiddenSnapshotSocket = await connect();
  const hiddenSnapshotPromise = waitForMessage(hiddenSnapshotSocket, "joined");
  send(hiddenSnapshotSocket, {
    type: "join",
    code: hosted.room.code,
    playerId: thirdJoin.playerId
  });
  const hiddenSnapshot = await hiddenSnapshotPromise;
  assert.equal(hiddenSnapshot.room.revealPlayersActive, false);
  assert.deepEqual(hiddenSnapshot.room.revealedAnsweredPlayers, []);
  thirdPlayer = hiddenSnapshotSocket;
  const finishedGame = waitForMessage(host, "game-over");
  send(host, { type: "end-game", code: hosted.room.code, reason: "ended" });
  const finalResults = await finishedGame;
  assert.equal(
    finalResults.players.find((player) => player.id === otherJoin.playerId)
      .competitionPowerupsUsed,
    10
  );

  const incompatibleHost = await connect();
  const incompatibleHosted = waitForMessage(incompatibleHost, "hosted");
  send(incompatibleHost, {
    type: "host",
    capacity: 3,
    player: { name: "Procedural Host", color: "#ff0000" }
  });
  const proceduralRoom = await incompatibleHosted;
  const proceduralDisplay = await connect();
  const proceduralDisplayJoin = await join(proceduralDisplay, proceduralRoom.room.code, "Procedural Display");
  const proceduralOther = await connect();
  await join(proceduralOther, proceduralRoom.room.code, "Procedural Other");
  const displayOptionUpdate = waitForMessage(incompatibleHost, "room-state", (message) =>
    message.room.hostDisplayPlayerId === proceduralDisplayJoin.playerId
  );
  send(incompatibleHost, {
    type: "host-display-options",
    code: proceduralRoom.room.code,
    enabled: true,
    playerId: proceduralDisplayJoin.playerId
  });
  await displayOptionUpdate;
  const modeUpdate = waitForMessage(incompatibleHost, "room-state", (message) =>
    message.room.partyOptions.competitionMode
  );
  send(incompatibleHost, {
    type: "party-options",
    code: proceduralRoom.room.code,
    options: {
      showPlayerScores: true,
      showLockedAnswers: false,
      earlyPointBonus: true,
      competitionMode: true
    }
  });
  await modeUpdate;
  const proceduralLaunches = [incompatibleHost, proceduralDisplay, proceduralOther].map((socket) =>
    waitForMessage(socket, "launch")
  );
  send(incompatibleHost, {
    type: "launch",
    code: proceduralRoom.room.code,
    category: "CompArch",
    quiz: "binary"
  });
  await Promise.all(proceduralLaunches);
  const proceduralStarts = [incompatibleHost, proceduralDisplay, proceduralOther].map((socket) =>
    waitForMessage(socket, "quiz-start")
  );
  send(incompatibleHost, {
    type: "quiz-start",
    code: proceduralRoom.room.code,
    config: {
      questionSequence: [0],
      proceduralType: "binary",
      proceduralSettings: {
        gameType: "conversion",
        operation: "+",
        questions: 1,
        timerLimit: 0,
        guide: false,
        decimal: false
      }
    }
  });
  const proceduralStartMessages = await Promise.all(proceduralStarts);
  assert.equal(proceduralStartMessages[0].config.partyOptions.competitionMode, false);
});
