"use strict";

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { randomUUID, randomInt } = require("node:crypto");
const { WebSocket, WebSocketServer } = require("ws");

const root = __dirname;
const port = Number.parseInt(process.env.PORT || "8080", 10);
const roomCodeAlphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ";
const roomLifetimeMs = 2 * 60 * 60 * 1000;
const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mp3": "audio/mpeg",
  ".ogg": "audio/ogg",
  ".otf": "font/otf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".wav": "audio/wav"
};
const rooms = new Map();

function send(socket, message) {
  if (socket.readyState === WebSocket.OPEN) socket.send(JSON.stringify(message));
}

function publicRoom(room) {
  return {
    code: room.code,
    capacity: room.capacity,
    stage: room.stage,
    category: room.category,
    quiz: room.quiz,
    quizConfig: room.quizConfig,
    hideLockedAnswers: room.hideLockedAnswers,
    question: room.question && {
      questionNumber: room.question.questionNumber,
      questionIndex: room.question.questionIndex,
      answerOrder: room.question.answerOrder
    },
    answersLocked: room.answersLocked,
    reveal: room.reveal,
    players: [...room.players.values()].map(({ id, name, color, photo, ready, host, score, socket }) => ({
      id, name, color, photo, ready, host, score, connected: socket?.readyState === WebSocket.OPEN
    }))
  };
}

function broadcast(room, message) {
  const serialized = JSON.stringify(message);
  room.players.forEach((player) => {
    if (player.socket?.readyState === WebSocket.OPEN) player.socket.send(serialized);
  });
}

function broadcastExcept(room, message, excludedPlayerId) {
  const serialized = JSON.stringify(message);
  room.players.forEach((player) => {
    if (player.id !== excludedPlayerId && player.socket?.readyState === WebSocket.OPEN) {
      player.socket.send(serialized);
    }
  });
}

function broadcastRoom(room) {
  broadcast(room, { type: "room-state", room: publicRoom(room) });
}

function allReady(room) {
  return room.players.size === room.capacity &&
    [...room.players.values()].every((player) => player.ready && player.socket?.readyState === WebSocket.OPEN);
}

function generateRoomCode() {
  for (let attempt = 0; attempt < 100; attempt++) {
    let code = "";
    for (let index = 0; index < 4; index++) {
      code += roomCodeAlphabet[randomInt(roomCodeAlphabet.length)];
    }
    if (!rooms.has(code)) return code;
  }
  throw new Error("Could not generate an available room code.");
}

function cleanProfile(profile) {
  if (!profile || typeof profile !== "object") throw new TypeError("A player profile is required.");
  const name = typeof profile.name === "string" ? profile.name.trim().slice(0, 24) : "";
  const color = typeof profile.color === "string" && /^#[0-9a-f]{6}$/i.test(profile.color)
    ? profile.color
    : "#4688e8";
  const photo = typeof profile.photo === "string" && /^data:image\/jpeg;base64,[a-z0-9+/=]+$/i.test(profile.photo)
    ? profile.photo
    : "";
  if (!name) throw new TypeError("Enter a player name.");
  if (photo.length > 450_000) throw new TypeError("Player images must be smaller than 330 KB.");
  return { name, color, photo };
}

function findPlayer(room, playerId) {
  return typeof playerId === "string" ? room.players.get(playerId) : null;
}

function sendError(socket, message) {
  send(socket, { type: "error", message });
}

function revealRoomAnswers(room) {
  if (!room.question || room.reveal || room.answers.size !== room.players.size) return;
  const correctIndex = room.question.correctIndex;
  const answerDetails = [...room.players.values()].map((member) => {
    const selected = room.answers.get(member.id);
    const correct = selected === correctIndex;
    if (correct) member.score++;
    return { playerId: member.id, selectedIndex: selected, correct, score: member.score };
  });
  room.reveal = { correctIndex, answers: answerDetails };
  broadcast(room, { type: "reveal", ...room.reveal });
}

function removePlayer(room, player) {
  if (!player) return;
  if (room.players.get(player.id) !== player) return;
  room.players.delete(player.id);
  if (room.players.size === 0) {
    clearTimeout(room.expiration);
    rooms.delete(room.code);
    return;
  }
  if (player.host) {
    const newHost = room.players.values().next().value;
    newHost.host = true;
    broadcast(room, { type: "host-changed", hostId: newHost.id });
  }
  broadcastRoom(room);
}

function handleMessage(socket, rawMessage) {
  let message;
  try {
    message = JSON.parse(rawMessage.toString());
  } catch {
    sendError(socket, "Invalid message format.");
    return;
  }
  if (!message || typeof message.type !== "string") {
    sendError(socket, "Invalid message.");
    return;
  }

  if (message.type === "host") {
    let profile;
    try {
      profile = cleanProfile(message.player);
    } catch (error) {
      sendError(socket, error.message);
      return;
    }
    const capacity = Number(message.capacity);
    if (!Number.isInteger(capacity) || capacity < 2 || capacity > 5) {
      sendError(socket, "Choose between 2 and 5 total players.");
      return;
    }
    try {
      const code = generateRoomCode();
      const player = { ...profile, id: randomUUID(), ready: true, host: true, score: 0, socket, expireTimer: null };
      const room = {
        code, capacity, stage: "lobby", players: new Map([[player.id, player]]),
        question: null, answersLocked: [], reveal: null, quizConfig: null,
        hideLockedAnswers: message.hideLockedAnswers === true
      };
      room.expiration = setTimeout(() => {
        broadcast(room, { type: "error", message: "This room expired." });
        room.players.forEach((member) => member.socket?.close(4000, "Room expired"));
        rooms.delete(code);
      }, roomLifetimeMs);
      room.expiration.unref();
      rooms.set(code, room);
      socket.roomCode = code;
      socket.playerId = player.id;
      send(socket, { type: "hosted", playerId: player.id, room: publicRoom(room) });
      return;
    } catch (error) {
      sendError(socket, error.message);
      return;
    }
  }

  const code = typeof message.code === "string" ? message.code.toUpperCase() : "";
  const room = rooms.get(code);
  if (message.type === "check-room") {
    if (!room || room.stage !== "lobby") {
      sendError(socket, "No active lobby has that room code.");
      return;
    }
    send(socket, {
      type: "room-found",
      room: { code: room.code, capacity: room.capacity, players: room.players.size }
    });
    return;
  }
  if (message.type === "join") {
    if (!room) {
      sendError(socket, "No active lobby has that room code.");
      return;
    }
    const reconnectingPlayer = findPlayer(room, message.playerId);
    if (reconnectingPlayer) {
      if (reconnectingPlayer.socket && reconnectingPlayer.socket !== socket) {
        reconnectingPlayer.socket.close(4001, "Player reconnected");
      }
      if (reconnectingPlayer.expireTimer) clearTimeout(reconnectingPlayer.expireTimer);
      reconnectingPlayer.expireTimer = null;
      reconnectingPlayer.socket = socket;
      socket.roomCode = code;
      socket.playerId = reconnectingPlayer.id;
      send(socket, { type: "joined", playerId: reconnectingPlayer.id, room: publicRoom(room) });
      broadcastRoom(room);
      return;
    }
    if (room.stage !== "lobby") {
      sendError(socket, "This game has already started.");
      return;
    }
    if (room.players.size >= room.capacity) {
      sendError(socket, "This lobby is full.");
      return;
    }
    let profile;
    try {
      profile = cleanProfile(message.player);
    } catch (error) {
      sendError(socket, error.message);
      return;
    }
    const player = { ...profile, id: randomUUID(), ready: true, host: false, score: 0, socket, expireTimer: null };
    room.players.set(player.id, player);
    socket.roomCode = code;
    socket.playerId = player.id;
    send(socket, { type: "joined", playerId: player.id, room: publicRoom(room) });
    broadcastRoom(room);
    return;
  }

  if (!room) {
    sendError(socket, "That game is no longer available.");
    return;
  }
  const player = findPlayer(room, socket.playerId);
  if (!player || player.socket !== socket) {
    sendError(socket, "Reconnect to the lobby before sending game actions.");
    return;
  }

  switch (message.type) {
    case "launch": {
      if (!player.host) return sendError(socket, "Only the host can choose the quiz.");
      if (!allReady(room)) return sendError(socket, "Wait until every player is ready.");
      if (room.stage !== "lobby") return sendError(socket, "The quiz has already been selected.");
      const category = typeof message.category === "string" ? message.category : "";
      const quiz = typeof message.quiz === "string" ? message.quiz : "";
      const validQuizzes = {
        CompArch: ["quiz1"],
        CloudComp: ["quiz1", "quiz2"],
        SocIndi: ["reviewQuiz", "textbookQuiz"],
        DataSci: ["test1"],
        SoftEngi: ["test1"]
      };
      if (!validQuizzes[category]?.includes(quiz)) {
        return sendError(socket, "Select a valid course and quiz.");
      }
      room.stage = "setup";
      room.category = category;
      room.quiz = quiz;
      broadcast(room, { type: "launch", category, quiz });
      break;
    }
    case "quiz-start": {
      if (!player.host || room.stage !== "setup") return sendError(socket, "Only the host can start the quiz.");
      const config = message.config;
      if (!config || !Array.isArray(config.questionSequence) ||
          config.questionSequence.length < 1 || config.questionSequence.length > 500 ||
          !config.questionSequence.every((index) => Number.isInteger(index) && index >= 0)) {
        return sendError(socket, "Invalid quiz question sequence.");
      }
      room.quizConfig = config;
      room.stage = "quiz";
      room.questionNumber = -1;
      room.players.forEach((member) => { member.score = 0; });
      broadcast(room, {
        type: "quiz-start",
        config,
        hideLockedAnswers: room.hideLockedAnswers,
        players: publicRoom(room).players
      });
      break;
    }
    case "question": {
      if (!player.host || room.stage !== "quiz") return sendError(socket, "Only the host can advance questions.");
      const { questionNumber, questionIndex, answerOrder } = message;
      if (!Number.isInteger(questionNumber) || questionNumber !== room.questionNumber + 1 ||
          questionNumber >= room.quizConfig.questionSequence.length ||
          room.quizConfig.questionSequence[questionNumber] !== questionIndex ||
          !Array.isArray(answerOrder) || answerOrder.length < 2 || answerOrder.length > 4 ||
          !answerOrder.every((index) => Number.isInteger(index) && index >= 0 && index < 4) ||
          new Set(answerOrder).size !== answerOrder.length) {
        return sendError(socket, "Invalid quiz question.");
      }
      room.questionNumber = questionNumber;
      const correctIndex = message.correctIndex;
      if (!Number.isInteger(correctIndex) || !answerOrder.includes(correctIndex)) {
        return sendError(socket, "Invalid correct-answer reference.");
      }
      room.question = { questionNumber, questionIndex, answerOrder, correctIndex };
      room.answersLocked = [];
      room.answers = new Map();
      room.reveal = null;
      broadcast(room, {
        type: "question",
        questionNumber: room.question.questionNumber,
        questionIndex: room.question.questionIndex,
        answerOrder: room.question.answerOrder
      });
      break;
    }
    case "answer": {
      if (room.stage !== "quiz" || !room.question) return sendError(socket, "There is no open question.");
      if (message.questionNumber !== room.questionNumber) return sendError(socket, "That question is no longer open.");
      if (room.answers.has(player.id)) return sendError(socket, "Your answer is already locked in.");
      if (message.answerIndex !== null &&
          (!Number.isInteger(message.answerIndex) || !room.question.answerOrder.includes(message.answerIndex))) {
        return sendError(socket, "Choose one of the available answers.");
      }
      room.answers.set(player.id, message.answerIndex);
      room.answersLocked = [...room.answers.keys()];
      if (room.answers.size < room.players.size) {
        broadcast(room, {
          type: "answer-locked",
          playerId: player.id,
          lockedCount: room.answers.size,
          answerIndex: message.answerIndex
        });
        return;
      }
      revealRoomAnswers(room);
      break;
    }
    case "question-timeout": {
      if (!player.host || room.stage !== "quiz" || !room.question) {
        return sendError(socket, "Only the host can time out the question.");
      }
      room.players.forEach((member) => {
        if (!room.answers.has(member.id)) room.answers.set(member.id, null);
      });
      room.answersLocked = [...room.answers.keys()];
      revealRoomAnswers(room);
      break;
    }
    case "next-question": {
      if (!player.host || !room.reveal) return sendError(socket, "Wait for all answers to be revealed.");
      if (room.questionNumber + 1 >= room.quizConfig.questionSequence.length) {
        room.stage = "results";
        broadcast(room, { type: "game-over", players: publicRoom(room).players });
      } else {
        room.reveal = null;
        room.question = null;
        broadcast(room, { type: "next-question" });
      }
      break;
    }
    case "end-game": {
      if (!player.host || room.stage !== "quiz") return sendError(socket, "Only the host can end the quiz.");
      room.stage = "results";
      broadcast(room, {
        type: "game-over",
        players: publicRoom(room).players,
        reason: message.reason === "time" ? "time" : "ended"
      });
      break;
    }
    case "leave": {
      if (room.stage === "quiz" || room.stage === "setup") {
        room.stage = "results";
        broadcastExcept(room, {
          type: "game-over",
          players: publicRoom(room).players,
          reason: "player-left",
          departedPlayerId: player.id
        }, player.id);
      }
      send(socket, { type: "left" });
      removePlayer(room, player);
      break;
    }
    default:
      sendError(socket, "Unsupported game action.");
  }
}

function serveStatic(request, response) {
  const url = new URL(request.url, "http://localhost");
  if (url.pathname === "/healthz") {
    response.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    }).end(JSON.stringify({ status: "ok" }));
    return;
  }
  let pathname;
  try {
    pathname = decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname);
  } catch {
    response.writeHead(400).end("Bad request");
    return;
  }
  const pathParts = pathname.split("/").filter(Boolean);
  const filePath = path.resolve(root, `.${pathname}`);
  const privateFiles = new Set(["package.json", "package-lock.json", "server.js"]);
  if (!filePath.startsWith(root + path.sep) ||
      pathParts.some((part) => part.startsWith(".") || part === "node_modules" || part === "test") ||
      privateFiles.has(pathParts[0])) {
    response.writeHead(404).end("Not found");
    return;
  }
  fs.stat(filePath, (statError, stat) => {
    if (statError || !stat.isFile()) {
      response.writeHead(404).end("Not found");
      return;
    }
    response.writeHead(200, {
      "Content-Length": stat.size,
      "Content-Type": mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream",
      "X-Content-Type-Options": "nosniff",
      "Cache-Control": path.extname(filePath) === ".html" ? "no-cache" : "public, max-age=300"
    });
    fs.createReadStream(filePath).pipe(response);
  });
}

const server = http.createServer((request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" }).end("Method not allowed");
    return;
  }
  serveStatic(request, response);
});
const webSocketServer = new WebSocketServer({ noServer: true, maxPayload: 600_000 });

server.on("upgrade", (request, socket, head) => {
  const url = new URL(request.url, "http://localhost");
  if (url.pathname !== "/party") {
    socket.write("HTTP/1.1 404 Not Found\r\n\r\n");
    socket.destroy();
    return;
  }
  webSocketServer.handleUpgrade(request, socket, head, (webSocket) => {
    webSocketServer.emit("connection", webSocket, request);
  });
});

webSocketServer.on("connection", (socket) => {
  socket.on("message", (message) => handleMessage(socket, message));
  socket.on("close", () => {
    const room = rooms.get(socket.roomCode);
    const player = room && findPlayer(room, socket.playerId);
    if (!player || player.socket !== socket) return;
    player.socket = null;
    if (room.stage === "lobby") {
      removePlayer(room, player);
      return;
    }
    if (room.stage === "quiz" || room.stage === "setup") {
      room.stage = "results";
      broadcastExcept(room, {
        type: "game-over",
        players: publicRoom(room).players,
        reason: "player-left",
        departedPlayerId: player.id
      }, player.id);
      removePlayer(room, player);
      return;
    }
    removePlayer(room, player);
  });
});

server.listen(port, () => {
  console.log(`QuizHub is listening on http://localhost:${port}`);
});
