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

  const host = await connect();
  const missingRoomError = waitForMessage(host, "error");
  send(host, { type: "check-room", code: "ZZZZ" });
  assert.match((await missingRoomError).message, /No active lobby/);
  const hostedPromise = waitForMessage(host, "hosted");
  send(host, {
    type: "host",
    capacity: 50,
    player: { name: "Host", color: "#ff0000", photo: "" }
  });
  const hosted = await hostedPromise;
  assert.match(hosted.room.code, /^[A-Z]{4}$/);
  assert.equal(hosted.room.capacity, 50);
  assert.deepEqual(hosted.room.partyOptions, {
    showPlayerScores: true,
    showLockedAnswers: true,
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

  const hostPartyOptions = waitForMessage(host, "room-state", (message) => !message.room.partyOptions.showPlayerScores);
  const guestPartyOptions = waitForMessage(guest, "room-state", (message) => !message.room.partyOptions.showPlayerScores);
  send(host, {
    type: "party-options",
    code: hosted.room.code,
    options: { showPlayerScores: false, showLockedAnswers: false, earlyPointBonus: true }
  });
  const [hostPartyOptionsMessage, guestPartyOptionsMessage] = await Promise.all([hostPartyOptions, guestPartyOptions]);
  assert.deepEqual(hostPartyOptionsMessage.room.partyOptions, {
    showPlayerScores: false,
    showLockedAnswers: false,
    earlyPointBonus: true
  });
  assert.deepEqual(guestPartyOptionsMessage.room.partyOptions, hostPartyOptionsMessage.room.partyOptions);

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
  assert.equal((await checkRoomPromise).room.players, 2);

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
    showLockedAnswers: false,
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
  assert.equal(lockedMessage.answerIndex, undefined);

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

  const hostOver = waitForMessage(host, "game-over");
  const hostRoomState = waitForMessage(host, "room-state");
  const guestLeft = waitForMessage(guest, "left");
  send(guest, { type: "leave", code: hosted.room.code });
  await guestLeft;
  const [ended, updatedRoom] = await Promise.all([hostOver, hostRoomState]);
  assert.equal(ended.reason, "player-left");
  assert.equal(ended.departedPlayerId, joined.playerId);
  assert.equal(updatedRoom.room.players.length, 1);
});
