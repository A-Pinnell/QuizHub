"use strict";

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { randomUUID, randomInt } = require("node:crypto");
const { WebSocket, WebSocketServer } = require("ws");
const mixedStudy = require("./js/mixed-study.js");

const root = __dirname;
const port = Number.parseInt(process.env.PORT || "8080", 10);
const roomCodeAlphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ";
const roomLifetimeMs = 2 * 60 * 60 * 1000;
const playerHandoffGraceMs = 60 * 1000;
const maxRoomPlayers = 50;
const maxQuizQuestions = 5000;
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
const quizThemes = new Set(["default", "quizhub", "ai-model", "blended"]);

function send(socket, message) {
  if (socket.readyState === WebSocket.OPEN) socket.send(JSON.stringify(message));
}

function publicRoom(room) {
  return {
    code: room.code,
    capacity: room.capacity,
    stage: room.stage,
    hostDisplay: room.hostDisplay,
    hostDisplayPlayerId: room.hostDisplayPlayerId,
    partyOptions: room.partyOptions,
    category: room.category,
    quiz: room.quiz,
    quizTheme: room.quizTheme,
    mixedSources: room.mixedSources,
    quizConfig: room.quizConfig,
    question: room.question && {
      questionNumber: room.question.questionNumber,
      questionIndex: room.question.questionIndex,
      answerOrder: room.question.answerOrder
    },
    answersLocked: room.answersLocked,
    reveal: room.reveal,
    players: [...room.players.values()].map(({ id, name, color, photo, ready, host, score, overallScore, socket }) => ({
      id, name, color, photo, ready, host, score, overallScore, connected: socket?.readyState === WebSocket.OPEN
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
  return room.players.size >= 2 && room.players.size <= room.capacity &&
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
  const firstCorrectPlayerId = room.firstCorrectPlayerId;
  const answerDetails = [...room.players.values()].map((member) => {
    const selected = room.answers.get(member.id);
    const correct = selected === correctIndex;
    const pointsEarned = correct
      ? room.partyOptions.earlyPointBonus && member.id === firstCorrectPlayerId ? 3 : 1
      : 0;
    member.score += pointsEarned;
    member.overallScore += pointsEarned;
    return {
      playerId: member.id,
      selectedIndex: selected,
      correct,
      pointsEarned,
      score: member.score,
      overallScore: member.overallScore
    };
  });
  room.reveal = { correctIndex, answers: answerDetails };
  broadcast(room, { type: "reveal", ...room.reveal });
}

function removePlayer(room, player) {
  if (!player) return;
  if (room.players.get(player.id) !== player) return;
  if (player.expireTimer) clearTimeout(player.expireTimer);
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
  if (room.hostDisplayPlayerId === player.id) room.hostDisplayPlayerId = null;
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
    if (!Number.isInteger(capacity) || capacity < 2 || capacity > maxRoomPlayers) {
      sendError(socket, `Choose a room size between 2 and ${maxRoomPlayers} players.`);
      return;
    }
    try {
      const code = generateRoomCode();
      const player = {
        ...profile,
        id: randomUUID(),
        ready: true,
        host: true,
        score: 0,
        overallScore: 0,
        socket,
        expireTimer: null
      };
      const hostDisplay = message.hostDisplay === true;
      const room = {
        code, capacity, stage: "lobby", players: new Map([[player.id, player]]),
        question: null, answersLocked: [], reveal: null, quizConfig: null, mixedSources: null,
        hostDisplay: false, hostDisplayPlayerId: null, quizTheme: null,
        partyOptions: { showPlayerScores: true, showLockedAnswers: true, earlyPointBonus: true }
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
      room: {
        code: room.code,
        capacity: room.capacity,
        players: room.players.size,
        profiles: [...room.players.values()].map(({ name, color }) => ({ name, color }))
      }
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
      reconnectingPlayer.handoff = false;
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
    const normalizedName=profile.name.toLocaleLowerCase();
    if([...room.players.values()].some(
      (existingPlayer)=>existingPlayer.name.toLocaleLowerCase()===normalizedName
    )){
      sendError(socket,"That player name is already in the room. Choose a different name.");
      return;
    }
    const player = {
      ...profile,
      id: randomUUID(),
      ready: true,
      host: false,
      score: 0,
      overallScore: 0,
      socket,
      expireTimer: null
    };
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
      const hostDisplayPlayer = room.hostDisplayPlayerId
        ? findPlayer(room, room.hostDisplayPlayerId)
        : null;
      if (room.hostDisplay && (!hostDisplayPlayer ||
          hostDisplayPlayer.socket?.readyState !== WebSocket.OPEN)) {
        return sendError(socket, "Select a connected player account in Party Options before starting.");
      }
      if (room.stage !== "lobby") return sendError(socket, "The quiz has already been selected.");
      if (room.hostDisplay && room.players.size < 3) {
        return sendError(socket, "Host Display needs at least one other player in addition to the host and selected answering account.");
      }
      const category = typeof message.category === "string" ? message.category : "";
      const quiz = typeof message.quiz === "string" ? message.quiz : "";
      if (message.quizTheme !== undefined && !quizThemes.has(message.quizTheme)) {
        return sendError(socket, "Select a valid quiz style.");
      }
      const validQuizzes = {
        CompArch: ["quiz1", "test1"],
        CompGFX: ["test1"],
        CloudComp: ["quiz1", "quiz2", "test1"],
        SocIndi: ["reviewQuiz", "textbookQuiz"],
        DataSci: ["test1"],
        SoftEngi: ["test1"]
      };
      let mixedSources = null;
      if (category === "MixedStudy" && quiz === "mixed") {
        try {
          mixedSources = mixedStudy.normalizeSources(message.mixedSources);
        } catch (error) {
          return sendError(socket, error.message);
        }
      } else if (!validQuizzes[category]?.includes(quiz)) {
        return sendError(socket, "Select a valid course and quiz.");
      }
      room.stage = "setup";
      room.category = category;
      room.quiz = quiz;
      room.quizTheme = message.quizTheme || "default";
      room.mixedSources = mixedSources;
      room.quizConfig = null;
      room.players.forEach((member) => { member.handoff = true; });
      broadcast(room, {
        type: "launch",
        category,
        quiz,
        quizTheme: room.quizTheme,
        mixedSources
      });
      break;
    }
    case "party-options": {
      if (!player.host || room.stage !== "lobby") {
        return sendError(socket, "Only the host can change party options in the lobby.");
      }
      const options = message.options;
      if (!options || typeof options.showPlayerScores !== "boolean" ||
          typeof options.showLockedAnswers !== "boolean" ||
          typeof options.earlyPointBonus !== "boolean") {
        return sendError(socket, "Invalid party options.");
      }
      room.partyOptions = {
        showPlayerScores: options.showPlayerScores,
        showLockedAnswers: options.showLockedAnswers,
        earlyPointBonus: options.earlyPointBonus
      };
      broadcastRoom(room);
      break;
    }
    case "host-display-options": {
      if (!player.host || room.stage !== "lobby") {
        return sendError(socket, "Only the host can change Host Display in the lobby.");
      }
      if (typeof message.enabled !== "boolean" ||
          !(message.playerId === "" || typeof message.playerId === "string")) {
        return sendError(socket, "Invalid Host Display settings.");
      }
      const selectedPlayer = message.playerId ? findPlayer(room, message.playerId) : null;
      if (message.enabled && message.playerId &&
          (!selectedPlayer || selectedPlayer.host || selectedPlayer.id === player.id)) {
        return sendError(socket, "Choose an account belonging to another player in the room.");
      }
      room.hostDisplay = message.enabled;
      room.hostDisplayPlayerId = message.enabled ? selectedPlayer?.id || null : null;
      broadcastRoom(room);
      break;
    }
    case "replay": {
      if (!player.host || room.stage !== "results") {
        return sendError(socket, "Only the host can replay the party quiz.");
      }
      if (room.players.size < 2) {
        return sendError(socket, "At least two players must remain in the party to replay.");
      }
      if (!allReady(room)) {
        return sendError(socket, "Wait until every player has reconnected before replaying.");
      }
      room.stage = "setup";
      room.quizConfig = null;
      room.question = null;
      room.answers = new Map();
      room.answersLocked = [];
      room.reveal = null;
      room.firstCorrectPlayerId = null;
      room.players.forEach((member) => {
        if (member.expireTimer) clearTimeout(member.expireTimer);
        member.expireTimer = null;
        member.score = 0;
        member.handoff = true;
      });
      broadcast(room, {
        type: "replay",
        category: room.category,
        quiz: room.quiz,
        quizTheme: room.quizTheme,
        mixedSources: room.mixedSources
      });
      break;
    }
    case "choose-new-quiz": {
      if (!player.host || room.stage !== "results") {
        return sendError(socket, "Only the host can choose another party quiz.");
      }
      if (!allReady(room)) {
        return sendError(socket, "Wait until every player has reconnected before returning to the lobby.");
      }
      room.stage = "lobby";
      room.category = null;
      room.quiz = null;
      room.quizTheme = null;
      room.mixedSources = null;
      room.quizConfig = null;
      room.question = null;
      room.answers = new Map();
      room.answersLocked = [];
      room.reveal = null;
      room.firstCorrectPlayerId = null;
      room.players.forEach((member) => {
        if (member.expireTimer) clearTimeout(member.expireTimer);
        member.expireTimer = null;
        member.score = 0;
        member.handoff = true;
      });
      broadcast(room, { type: "choose-new-quiz" });
      broadcastRoom(room);
      break;
    }
    case "quiz-config": {
      if (!player.host || room.stage !== "setup") {
        return sendError(socket, "Only the host can change quiz settings.");
      }
      const config = message.config;
      const timeLimits = [10, 20, 30, 60, 100, 150];
      if (!config || !Number.isInteger(config.questionCount) ||
          config.questionCount < 1 || config.questionCount > maxQuizQuestions ||
          !["random", "static"].includes(config.orderMode) ||
          !(config.timeLimitMinutes === null || timeLimits.includes(config.timeLimitMinutes)) ||
          !(config.perQuestionTimeMinutes === null ||
            (Number.isInteger(config.perQuestionTimeMinutes) &&
              config.perQuestionTimeMinutes >= 1 && config.perQuestionTimeMinutes <= 60)) ||
          !Array.isArray(config.reviewSections) || config.reviewSections.length > 50 ||
          !config.reviewSections.every((section) => typeof section === "string" && section.length <= 100)) {
        return sendError(socket, "Invalid quiz settings.");
      }
      room.quizConfig = {
        questionCount: config.questionCount,
        orderMode: config.orderMode,
        timeLimitMinutes: config.timeLimitMinutes,
        perQuestionTimeMinutes: config.perQuestionTimeMinutes,
        reviewSections: [...new Set(config.reviewSections)]
      };
      broadcastRoom(room);
      break;
    }
    case "quiz-start": {
      if (!player.host || room.stage !== "setup") return sendError(socket, "Only the host can start the quiz.");
      const config = message.config;
      if (!config || !Array.isArray(config.questionSequence) ||
          config.questionSequence.length < 1 || config.questionSequence.length > maxQuizQuestions ||
          !config.questionSequence.every((index) => Number.isInteger(index) && index >= 0)) {
        return sendError(socket, "Invalid quiz question sequence.");
      }
      room.quizConfig = { ...config, partyOptions: room.partyOptions };
      room.stage = "quiz";
      room.questionNumber = -1;
      room.players.forEach((member) => { member.score = 0; });
      broadcast(room, {
        type: "quiz-start",
        config: room.quizConfig,
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
      if (room.hostDisplay) {
        room.answers.set(player.id, null);
        room.answersLocked.push(player.id);
      }
      room.firstCorrectPlayerId = null;
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
      if (room.hostDisplay && player.host) {
        return sendError(socket, "The host is displaying the quiz and cannot submit an answer.");
      }
      if (message.questionNumber !== room.questionNumber) return sendError(socket, "That question is no longer open.");
      if (room.answers.has(player.id)) return sendError(socket, "Your answer is already locked in.");
      if (message.answerIndex !== null &&
          (!Number.isInteger(message.answerIndex) || !room.question.answerOrder.includes(message.answerIndex))) {
        return sendError(socket, "Choose one of the available answers.");
      }
      room.answers.set(player.id, message.answerIndex);
      if (message.answerIndex === room.question.correctIndex && room.firstCorrectPlayerId === null) {
        room.firstCorrectPlayerId = player.id;
      }
      room.answersLocked = [...room.answers.keys()];
      if (room.answers.size < room.players.size) {
        broadcast(room, {
          type: "answer-locked",
          playerId: player.id,
          lockedCount: room.answers.size,
          ...(room.partyOptions.showLockedAnswers ? { answerIndex: message.answerIndex } : {})
        });
        return;
      }
      revealRoomAnswers(room);
      break;
    }
    case "skip-question": {
      if (!room.hostDisplay || player.id !== room.hostDisplayPlayerId) {
        return sendError(socket, "Only the selected Host Display player can skip the question for everyone.");
      }
      if (room.stage !== "quiz" || !room.question || room.reveal) {
        return sendError(socket, "There is no open question to skip.");
      }
      if (message.questionNumber !== room.questionNumber) {
        return sendError(socket, "That question is no longer open.");
      }
      room.players.forEach((member) => {
        if (!room.answers.has(member.id)) room.answers.set(member.id, null);
      });
      room.answersLocked = [...room.answers.keys()];
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
      const isDisplayPlayer=room.hostDisplay && player.id===room.hostDisplayPlayerId;
      if ((!player.host && !isDisplayPlayer) || !room.reveal) {
        return sendError(socket, "Only the host or selected Host Display player can advance after answers are revealed.");
      }
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
      const isDisplayPlayer=room.hostDisplay && player.id===room.hostDisplayPlayerId;
      if ((!player.host && !isDisplayPlayer) || room.stage !== "quiz") {
        return sendError(socket, "Only the host or selected Host Display player can end the quiz.");
      }
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
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*"
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
    if (room.stage === "results" || player.handoff) {
      player.expireTimer = setTimeout(() => {
        if (player.socket || room.players.get(player.id) !== player) return;
        if (room.stage === "quiz" || room.stage === "setup") {
          room.stage = "results";
          broadcastExcept(room, {
            type: "game-over",
            players: publicRoom(room).players,
            reason: "player-left",
            departedPlayerId: player.id
          }, player.id);
        }
        removePlayer(room, player);
      }, playerHandoffGraceMs);
      player.expireTimer.unref();
      return;
    }
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
