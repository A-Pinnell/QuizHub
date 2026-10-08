"use strict";

const { spawn } = require("node:child_process");
const { once } = require("node:events");
const { test } = require("node:test");
const assert = require("node:assert/strict");
const WebSocket = require("ws");

function waitForMessage(socket, type) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      socket.off("message", onMessage);
      reject(new Error(`Timed out waiting for ${type}.`));
    }, 3000);
    function onMessage(data) {
      const message = JSON.parse(data.toString());
      if (message.type !== type) return;
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
    answerIndex: 0
  });
  assert.equal((await lockedPromise).answerIndex, 0);

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
  assert.equal(guestResult.answers.find((answer) => answer.playerId === joined.playerId).score, 0);

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
