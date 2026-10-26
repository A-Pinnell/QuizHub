"use strict";

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const {
  randomUUID,
  randomInt,
  randomBytes,
  scryptSync,
  timingSafeEqual
} = require("node:crypto");
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
  ".mjs": "text/javascript; charset=utf-8",
  ".mp3": "audio/mpeg",
  ".ogg": "audio/ogg",
  ".otf": "font/otf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".wav": "audio/wav",
  ".wasm": "application/wasm"
};
const rooms = new Map();
const presenceSessions = new Map();
const presenceLifetimeMs = 90_000;
const quizThemes = new Set(["default", "quizhub", "ai-model", "blended"]);
const netHubDataDirectory = process.env.QUIZHUB_DATA_DIR || path.join(root, "data");
const netHubDatabasePath = path.join(netHubDataDirectory, "nethub.json");
const netHubSessions = new Map();
let netHubMutationQueue = Promise.resolve();
const netHubLoginFailures = new Map();
const netHubPinSaltBytes = 16;
const netHubPinHashBytes = 64;
const netHubLoginWindowMs = 15 * 60 * 1000;
const netHubMaxLoginFailures = 5;
const netHubMaxRequestBytes = 16 * 1024 * 1024;
const netHubMaxMusicBytes = 10 * 1024 * 1024;
const netHubMaxQuestions = 250;
const netHubMusicTracks = new Set([
  "default", "BonusTrack", "Practice1", "Practice2", "CompArch", "CloudComp",
  "DataSci", "StatisticPractice", "DataSciLautest", "SoftEngi", "CompGFX",
  "CompGFXLautest", "SocIndi", "NetHubBonus1", "NetHubBonus2"
]);

function validateNetHubDatabase(database) {
  if (!database || !Array.isArray(database.users) || !Array.isArray(database.quizzes)) {
    throw new Error("The NetHub database has an invalid format.");
  }
  return database;
}

function readLocalNetHubDatabase() {
  if (!fs.existsSync(netHubDatabasePath)) return { users: [], quizzes: [] };
  return validateNetHubDatabase(JSON.parse(fs.readFileSync(netHubDatabasePath, "utf8")));
}

async function readNetHubDatabase() {
  return readLocalNetHubDatabase();
}

async function writeNetHubDatabase(database) {
  fs.mkdirSync(netHubDataDirectory, { recursive: true });
  const temporaryPath = `${netHubDatabasePath}.${randomUUID()}.tmp`;
  fs.writeFileSync(temporaryPath, JSON.stringify(database), { mode: 0o600 });
  fs.renameSync(temporaryPath, netHubDatabasePath);
}

function netHubJson(response, status, payload) {
  response.writeHead(status, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Cache-Control": "no-store",
    "Content-Type": "application/json; charset=utf-8",
    "X-Content-Type-Options": "nosniff"
  });
  response.end(status === 204 ? undefined : JSON.stringify(payload));
}

function readNetHubRequestBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    let tooLarge = false;
    request.on("data", (chunk) => {
      if (tooLarge) return;
      body += chunk.toString();
      if (body.length > netHubMaxRequestBytes) {
        tooLarge = true;
        body = "";
      }
    });
    request.on("error", reject);
    request.on("end", () => {
      if (tooLarge) {
        reject(Object.assign(new Error("Request body is too large."), { status: 413 }));
        return;
      }
      try {
        resolve(JSON.parse(body || "{}"));
      } catch {
        reject(Object.assign(new Error("Request body must be valid JSON."), { status: 400 }));
      }
    });
  });
}

function cleanNetHubQuestion(question, index) {
  if (!question || typeof question !== "object" || Array.isArray(question)) {
    throw Object.assign(new Error(`Question ${index + 1} must be an object.`), { status: 400 });
  }
  const prompt = typeof question.q === "string" ? question.q.trim() : "";
  const answers = question.a;
  if (!prompt || prompt.length > 1200) {
    throw Object.assign(new Error(`Question ${index + 1} needs text (up to 1,200 characters).`), { status: 400 });
  }
  if (!Array.isArray(answers) || answers.length < 2 || answers.length > 4 ||
      !answers.every((answer) => typeof answer === "string" && answer.trim() && answer.length <= 300)) {
    throw Object.assign(new Error(`Question ${index + 1} must have 2–4 answer choices, each up to 300 characters.`), { status: 400 });
  }
  if (!Number.isInteger(question.c) || question.c < 0 || question.c >= answers.length) {
    throw Object.assign(new Error(`Question ${index + 1} has an invalid correct-answer index.`), { status: 400 });
  }
  const cleanQuestion = {
    q: prompt,
    a: answers.map((answer) => answer.trim()),
    c: question.c
  };
  for (const imageKey of ["i", "image"]) {
    if (question[imageKey] === undefined) continue;
    const image = typeof question[imageKey] === "string" ? question[imageKey].trim() : "";
    let imageUrl;
    try {
      imageUrl = new URL(image, "https://quizhub.invalid");
    } catch {
      imageUrl = null;
    }
    if (!image || image.length > 2048 || !["http:", "https:"].includes(imageUrl?.protocol)) {
      throw Object.assign(new Error(`Question ${index + 1} has an invalid image URL.`), { status: 400 });
    }
    cleanQuestion[imageKey] = image;
  }
  if (question.interaction !== undefined) {
    const interaction = question.interaction;
    if (!interaction || typeof interaction !== "object" || Array.isArray(interaction)) {
      throw Object.assign(new Error(`Question ${index + 1} has invalid interaction data.`), { status: 400 });
    }
    if (interaction.type === "mesh-table") {
      const validMeshTable =
        ["vertices", "faces"].includes(interaction.table) &&
        typeof interaction.rowPrefix === "string" &&
        interaction.rowPrefix.length > 0 &&
        interaction.rowPrefix.length <= 8 &&
        Array.isArray(interaction.columnHeaders) &&
        interaction.columnHeaders.length > 0 &&
        interaction.columnHeaders.length <= 8 &&
        interaction.columnHeaders.every(
          (header) => typeof header === "string" && header.trim() && header.length <= 100
        ) &&
        Array.isArray(interaction.correctTable) &&
        interaction.correctTable.length > 0 &&
        interaction.correctTable.length <= 100 &&
        interaction.correctTable.every(
          (row) =>
            Array.isArray(row) &&
            row.length === interaction.columnHeaders.length &&
            row.every(
              (value) => typeof value === "string" && value.trim() && value.length <= 300
            )
        );
      if (!validMeshTable) {
        throw Object.assign(new Error(`Question ${index + 1} has an invalid mesh table.`), { status: 400 });
      }
    }
    cleanQuestion.interaction = interaction;
  }
  return cleanQuestion;
}

function cleanNetHubMusic(music) {
  if (!music || typeof music !== "object" || Array.isArray(music)) {
    throw Object.assign(new Error("Choose a valid quiz music track."), { status: 400 });
  }
  if (music.upload !== undefined) {
    const upload = music.upload;
    if (!upload || typeof upload !== "object" || Array.isArray(upload) ||
        typeof upload.name !== "string" || !upload.name.trim() || upload.name.length > 120) {
      throw Object.assign(new Error("The uploaded music file has invalid metadata."), { status: 400 });
    }
    const extension = upload.name.toLowerCase().split(".").pop();
    const match = typeof upload.data === "string"
      ? upload.data.match(/^data:(audio\/(?:mpeg|wav));base64,([A-Za-z0-9+/]*={0,2})$/)
      : null;
    if (!match || match[1] !== upload.type ||
        (match[1] === "audio/mpeg" && extension !== "mp3") ||
        (match[1] === "audio/wav" && extension !== "wav")) {
      throw Object.assign(new Error("Upload a valid MP3 or WAV audio file."), { status: 400 });
    }
    const audio = Buffer.from(match[2], "base64");
    const isWav = match[1] === "audio/wav" &&
      audio.length >= 12 &&
      audio.toString("ascii", 0, 4) === "RIFF" &&
      audio.toString("ascii", 8, 12) === "WAVE";
    const isMp3 = match[1] === "audio/mpeg" &&
      audio.length >= 2 &&
      (audio.toString("ascii", 0, 3) === "ID3" ||
        (audio[0] === 0xff && (audio[1] & 0xe0) === 0xe0));
    if (audio.length > netHubMaxMusicBytes) {
      throw Object.assign(new Error("Quiz music must be no larger than 10 MB."), { status: 400 });
    }
    if (!audio.length || (!isWav && !isMp3)) {
      throw Object.assign(new Error("Upload a valid MP3 or WAV audio file."), { status: 400 });
    }
    return {
      upload: {
        name: upload.name.trim(),
        type: match[1],
        data: `data:${match[1]};base64,${audio.toString("base64")}`
      }
    };
  }
  if (typeof music.track !== "string" || !netHubMusicTracks.has(music.track)) {
    throw Object.assign(new Error("Choose a valid quiz music track."), { status: 400 });
  }
  return { track: music.track };
}

function cleanNetHubQuiz(payload) {
  const title = typeof payload?.title === "string" ? payload.title.trim() : "";
  const courseName = typeof payload?.courseName === "string" ? payload.courseName.trim() : "";
  const courseKey = typeof payload?.courseKey === "string" ? payload.courseKey.trim() : "";
  const theme = payload?.theme;
  if (!title || title.length > 64 || !courseName || courseName.length > 64 ||
      !/^[A-Za-z0-9_-]{1,48}$/.test(courseKey)) {
    throw Object.assign(new Error("Enter a quiz title and course name (up to 64 characters)."), { status: 400 });
  }
  if (!quizThemes.has(theme)) {
    throw Object.assign(new Error("Choose a valid quiz theme."), { status: 400 });
  }
  if (!Array.isArray(payload.questions) || payload.questions.length < 1 ||
      payload.questions.length > netHubMaxQuestions) {
    throw Object.assign(new Error(`A quiz must contain 1–${netHubMaxQuestions} questions.`), { status: 400 });
  }
  const cleanQuiz = {
    title,
    courseName,
    courseKey,
    theme,
    allowShortAnswer: payload.allowShortAnswer === true,
    questions: payload.questions.map(cleanNetHubQuestion)
  };
  if (payload.music !== undefined) cleanQuiz.music = cleanNetHubMusic(payload.music);
  return cleanQuiz;
}

function netHubQuizSummary(quiz, users) {
  const owner = users.find((user) => user.id === quiz.ownerId);
  return {
    id: quiz.id,
    title: quiz.title,
    courseName: quiz.courseName,
    courseKey: quiz.courseKey,
    theme: quiz.theme,
    allowShortAnswer: quiz.allowShortAnswer,
    questionCount: quiz.questions.length,
    author: owner?.username || "QuizHub user",
    createdAt: quiz.createdAt,
    updatedAt: quiz.updatedAt
  };
}

function netHubAuthorizedUser(request, database) {
  const authorization = request.headers.authorization || "";
  const token = authorization.startsWith("Bearer ") ? authorization.slice(7) : "";
  const userId = netHubSessions.get(token);
  return userId ? database.users.find((user) => user.id === userId) || null : null;
}

function hashNetHubPin(pin, salt = randomBytes(netHubPinSaltBytes)) {
  return {
    salt: salt.toString("hex"),
    hash: scryptSync(pin, salt, netHubPinHashBytes).toString("hex")
  };
}

function verifyNetHubPin(pin, user) {
  const salt = Buffer.from(user.pinSalt, "hex");
  const expected = Buffer.from(user.pinHash, "hex");
  if (salt.length !== netHubPinSaltBytes || expected.length !== netHubPinHashBytes) return false;
  const actual = scryptSync(pin, salt, netHubPinHashBytes);
  return timingSafeEqual(actual, expected);
}

function cleanNetHubUsername(value) {
  const username = typeof value === "string" ? value.trim() : "";
  if (!/^[A-Za-z0-9_-]{3,20}$/.test(username)) {
    throw Object.assign(new Error("Username must be 3–20 letters, numbers, underscores, or hyphens."), { status: 400 });
  }
  return username;
}

async function serveNetHub(request, response) {
  const url = new URL(request.url, "http://localhost");
  if (request.method === "OPTIONS") {
    netHubJson(response, 204, {});
    return;
  }
  try {
    if (request.method === "GET" && url.pathname === "/api/nethub/healthz") {
      readLocalNetHubDatabase();
      netHubJson(response, 200, { status: "ok", netHub: true });
      return;
    }
    let database = await readNetHubDatabase();
    const quizPath = url.pathname.match(/^\/api\/nethub\/quizzes(?:\/([0-9a-f-]{36}))?$/i);
    if (request.method === "GET" && url.pathname === "/api/nethub/quizzes") {
      netHubJson(response, 200, {
        quizzes: database.quizzes
          .slice()
          .sort((left, right) => right.createdAt.localeCompare(left.createdAt))
          .map((quiz) => netHubQuizSummary(quiz, database.users))
      });
      return;
    }
    if (request.method === "GET" && quizPath?.[1]) {
      const quiz = database.quizzes.find((item) => item.id === quizPath[1]);
      if (!quiz) {
        netHubJson(response, 404, { error: "Quiz not found." });
        return;
      }
      netHubJson(response, 200, {
        quiz: { ...netHubQuizSummary(quiz, database.users), questions: quiz.questions, music: quiz.music }
      });
      return;
    }
    if (request.method === "POST" && url.pathname === "/api/nethub/auth") {
      const payload = await readNetHubRequestBody(request);
      database = await readNetHubDatabase();
      const username = cleanNetHubUsername(payload.username);
      const pin = typeof payload.pin === "string" ? payload.pin : "";
      if (!/^\d{4}$/.test(pin)) {
        netHubJson(response, 400, { error: "Password must be exactly four digits." });
        return;
      }
      const normalizedUsername = username.toLocaleLowerCase("en");
      const rateKey = `${request.socket.remoteAddress || "unknown"}:${normalizedUsername}`;
      const attempts = netHubLoginFailures.get(rateKey);
      if (attempts && attempts.expiresAt > Date.now() && attempts.count >= netHubMaxLoginFailures) {
        netHubJson(response, 429, { error: "Too many incorrect passwords. Try again in 15 minutes." });
        return;
      }
      const existing = database.users.find((user) => user.normalizedUsername === normalizedUsername);
      let user = existing;
      let created = false;
      if (existing) {
        if (!verifyNetHubPin(pin, existing)) {
          const current = attempts && attempts.expiresAt > Date.now()
            ? attempts
            : { count: 0, expiresAt: Date.now() + netHubLoginWindowMs };
          current.count++;
          netHubLoginFailures.set(rateKey, current);
          netHubJson(response, 401, { error: "Username or 4-digit password is incorrect." });
          return;
        }
      } else {
        const pinHash = hashNetHubPin(pin);
        user = {
          id: randomUUID(),
          username,
          normalizedUsername,
          pinSalt: pinHash.salt,
          pinHash: pinHash.hash,
          createdAt: new Date().toISOString()
        };
        database.users.push(user);
        await writeNetHubDatabase(database);
        created = true;
      }
      netHubLoginFailures.delete(rateKey);
      const token = randomBytes(32).toString("base64url");
      netHubSessions.set(token, user.id);
      netHubJson(response, 200, { token, username: user.username, created });
      return;
    }
    if (request.method === "POST" && url.pathname === "/api/nethub/logout") {
      const token = (request.headers.authorization || "").replace(/^Bearer /, "");
      if (token) netHubSessions.delete(token);
      netHubJson(response, 200, { signedOut: true });
      return;
    }
    const user = netHubAuthorizedUser(request, database);
    if (request.method === "GET" && url.pathname === "/api/nethub/mine") {
      if (!user) {
        netHubJson(response, 401, { error: "Sign in to view your uploads." });
        return;
      }
      netHubJson(response, 200, {
        quizzes: database.quizzes
          .filter((quiz) => quiz.ownerId === user.id)
          .map((quiz) => ({
            ...netHubQuizSummary(quiz, database.users),
            questions: quiz.questions,
            music: quiz.music
          }))
      });
      return;
    }
    if ((request.method === "POST" && url.pathname === "/api/nethub/quizzes") ||
        (["PUT", "DELETE"].includes(request.method) && quizPath?.[1])) {
      if (!user) {
        netHubJson(response, 401, { error: "Sign in to manage your uploads." });
        return;
      }
      if (request.method === "DELETE") {
        const index = database.quizzes.findIndex((quiz) => quiz.id === quizPath[1]);
        if (index === -1) {
          netHubJson(response, 404, { error: "Quiz not found." });
          return;
        }
        if (database.quizzes[index].ownerId !== user.id) {
          netHubJson(response, 403, { error: "You can only delete your own quizzes." });
          return;
        }
        database.quizzes.splice(index, 1);
        await writeNetHubDatabase(database);
        netHubJson(response, 200, { deleted: true });
        return;
      }
      const payload = await readNetHubRequestBody(request);
      database = await readNetHubDatabase();
      const cleanQuiz = cleanNetHubQuiz(payload);
      if (request.method === "PUT") {
        const quiz = database.quizzes.find((item) => item.id === quizPath[1]);
        if (!quiz) {
          netHubJson(response, 404, { error: "Quiz not found." });
          return;
        }
        if (quiz.ownerId !== user.id) {
          netHubJson(response, 403, { error: "You can only edit your own quizzes." });
          return;
        }
        Object.assign(quiz, cleanQuiz, { updatedAt: new Date().toISOString() });
        await writeNetHubDatabase(database);
        netHubJson(response, 200, { quiz: netHubQuizSummary(quiz, database.users) });
        return;
      }
      const quiz = {
        id: randomUUID(),
        ownerId: user.id,
        ...cleanQuiz,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      database.quizzes.push(quiz);
      await writeNetHubDatabase(database);
      netHubJson(response, 201, { quiz: netHubQuizSummary(quiz, database.users) });
      return;
    }
    netHubJson(response, 404, { error: "NetHub endpoint not found." });
  } catch (error) {
    const status = Number.isInteger(error.status) ? error.status : 500;
    if (status === 500) console.error("NetHub request failed:", error);
    netHubJson(response, status, {
      error: status === 500 ? "NetHub is temporarily unavailable." : error.message
    });
  }
}

function removeExpiredPresenceSessions(now = Date.now()) {
  for (const [sessionId, lastSeen] of presenceSessions) {
    if (now - lastSeen >= presenceLifetimeMs) presenceSessions.delete(sessionId);
  }
}

function queueNetHubMutation(request, response) {
  netHubMutationQueue = netHubMutationQueue
    .then(() => serveNetHub(request, response))
    .catch((error) => {
      console.error("NetHub mutation queue failed:", error);
      if (!response.headersSent) {
        netHubJson(response, 500, { error: "NetHub is temporarily unavailable." });
      }
    });
  return netHubMutationQueue;
}

const presenceCleanupTimer = setInterval(removeExpiredPresenceSessions, 30_000);
presenceCleanupTimer.unref();

function presenceResponse(response, status, body) {
  response.writeHead(status, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Cache-Control": "no-store",
    "Content-Type": "application/json; charset=utf-8"
  });
  response.end(body === null ? undefined : JSON.stringify(body));
}

function servePresence(request, response) {
  if (request.method === "OPTIONS") {
    presenceResponse(response, 204, null);
    return;
  }
  if (request.method === "GET") {
    removeExpiredPresenceSessions();
    presenceResponse(response, 200, { activeSessions: presenceSessions.size });
    return;
  }
  if (request.method !== "POST" && request.method !== "DELETE") {
    response.writeHead(405, { Allow: "GET, POST, DELETE, OPTIONS" }).end("Method not allowed");
    return;
  }

  let requestBody = "";
  let bodyTooLarge = false;
  request.on("data", (chunk) => {
    requestBody += chunk.toString();
    if (requestBody.length > 1024) {
      bodyTooLarge = true;
      requestBody = "";
    }
  });
  request.on("end", () => {
    if (bodyTooLarge) {
      presenceResponse(response, 413, { error: "Request body is too large." });
      return;
    }
    let payload;
    try {
      payload = JSON.parse(requestBody);
    } catch {
      presenceResponse(response, 400, { error: "Invalid JSON body." });
      return;
    }
    if (
      !payload ||
      typeof payload.sessionId !== "string" ||
      !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(payload.sessionId)
    ) {
      presenceResponse(response, 400, { error: "A valid anonymous session ID is required." });
      return;
    }
    if (request.method === "POST") {
      presenceSessions.set(payload.sessionId, Date.now());
    } else {
      presenceSessions.delete(payload.sessionId);
    }
    removeExpiredPresenceSessions();
    presenceResponse(response, 200, { activeSessions: presenceSessions.size });
  });
}

function send(socket, message) {
  if (socket.readyState === WebSocket.OPEN) socket.send(JSON.stringify(message));
}

function publicRoom(room) {
  return {
    code: room.code,
    capacity: room.capacity,
    stage: room.stage,
    excludedQuizzesEnabled: room.excludedQuizzesEnabled === true,
    hostDisplay: room.hostDisplay,
    hostDisplayPlayerId: room.hostDisplayPlayerId,
    partyOptions: room.partyOptions,
    category: room.category,
    quiz: room.quiz,
    netHubQuizId: room.netHubQuizId,
    quizTheme: room.quizTheme,
    mixedSources: room.mixedSources,
    quizConfig: room.quizConfig,
    question: room.question && {
      questionNumber: room.question.questionNumber,
      questionIndex: room.question.questionIndex,
      answerOrder: room.question.answerOrder,
      ...(room.question.procedural ? {
        procedural: true,
        prompt: room.question.prompt,
        challenge: room.question.challenge,
        badge: room.question.badge,
        answerKind: room.question.answerKind,
        ...(room.question.displayBits ? { displayBits: room.question.displayBits } : {})
      } : {})
    },
    answersLocked: room.answersLocked,
    activity: [...(room.activity || new Map()).entries()].map(([playerId, status]) => ({ playerId, status })),
    reveal: room.reveal,
    players: [...room.players.values()].map(({ id, name, color, photo, ready, host, score, overallScore, fakePlayer, socket }) => ({
      id, name, color, photo, ready, host, score, overallScore, fakePlayer: fakePlayer === true,
      connected: socket?.readyState === WebSocket.OPEN
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
    [...room.players.values()].every((player) =>
      player.ready && (player.fakePlayer || player.socket?.readyState === WebSocket.OPEN)
    );
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
  const photo = typeof profile.photo === "string" &&
    /^data:image\/(?:jpeg|gif);base64,[a-z0-9+/=]+$/i.test(profile.photo)
    ? profile.photo
    : "";
  if (!name) throw new TypeError("Enter a player name.");
  if (photo.length > 450_000) throw new TypeError("Player images must be smaller than 330 KB.");
  return { name, color, photo };
}

function normalizePlayerName(name) {
  return name.normalize("NFKC").toLocaleLowerCase();
}

function rememberPlayerScore(room, player) {
  if (player.fakePlayer) return;
  room.playerHistory.set(normalizePlayerName(player.name), {
    score: player.score,
    overallScore: player.overallScore
  });
}

function resetRoomQuizScores(room) {
  room.playerHistory.forEach((scores) => { scores.score = 0; });
  room.players.forEach((player) => {
    player.score = 0;
    rememberPlayerScore(room, player);
  });
}

function findPlayer(room, playerId) {
  return typeof playerId === "string" ? room.players.get(playerId) : null;
}

function sendError(socket, message) {
  send(socket, { type: "error", message });
}

function revealRoomAnswers(room) {
  if (!room.question || room.reveal || room.answers.size !== room.players.size) return;
  if (room.question.procedural) {
    const normalizeAnswer = (answer) => {
      if (typeof answer !== "string") return "";
      const trimmed = answer.trim();
      if (room.question.answerKind === "binary") return trimmed;
      if (room.question.answerKind === "number") {
        const number = Number(trimmed);
        return Number.isFinite(number) ? String(number) : trimmed;
      }
      return trimmed.toUpperCase().replace(/^0X/, "").replace(/^0+(?=[0-9A-F])/, "");
    };
    const correctAnswer = normalizeAnswer(room.question.correctAnswer);
    const firstCorrectPlayerId = room.firstCorrectPlayerId;
    const answerDetails = [...room.players.values()].map((member) => {
      const selected = room.answers.get(member.id);
      const answer = typeof selected === "string" ? selected : "";
      const correct = answer !== "" && normalizeAnswer(answer) === correctAnswer;
      const pointsEarned = correct
        ? room.partyOptions.earlyPointBonus && member.id === firstCorrectPlayerId ? 3 : 1
        : 0;
      member.score += pointsEarned;
      member.overallScore += pointsEarned;
      return {
        playerId: member.id,
        answer,
        correct,
        pointsEarned,
        score: member.score,
        overallScore: member.overallScore
      };
    });
    room.reveal = { correctAnswer: room.question.correctAnswer, answers: answerDetails };
    broadcast(room, { type: "reveal", ...room.reveal });
    return;
  }
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
  rememberPlayerScore(room, player);
  room.players.delete(player.id);
  room.answers?.delete(player.id);
  room.activity?.delete(player.id);
  if (player.host) {
    for (const [playerId, member] of room.players) {
      if (!member.fakePlayer) continue;
      room.players.delete(playerId);
      room.answers?.delete(playerId);
    }
  }
  room.answersLocked = room.answersLocked.filter((playerId) => room.players.has(playerId));
  broadcast(room, {
    type: "player-left",
    player: { id: player.id, name: player.name }
  });
  if (room.players.size === 0) {
    clearTimeout(room.expiration);
    rooms.delete(room.code);
    return;
  }
  if (player.host) {
    const newHost = [...room.players.values()].find((member) => !member.fakePlayer);
    if (!newHost) {
      clearTimeout(room.expiration);
      rooms.delete(room.code);
      return;
    }
    newHost.host = true;
    broadcast(room, { type: "host-changed", hostId: newHost.id });
  }
  if (room.hostDisplayPlayerId === player.id) room.hostDisplayPlayerId = null;
  broadcastRoom(room);
  if (room.question && !room.reveal) revealRoomAnswers(room);
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
        handoff: true,
        score: 0,
        overallScore: 0,
        socket,
        expireTimer: null
      };
      const hostDisplay = message.hostDisplay === true;
      const room = {
        code, capacity, stage: "lobby", players: new Map([[player.id, player]]),
        playerHistory: new Map(),
        excludedQuizzesEnabled: false,
        question: null, answersLocked: [], activity: new Map(), reveal: null, quizConfig: null, mixedSources: null,
        hostDisplay: false, hostDisplayPlayerId: null, quizTheme: null,
        netHubQuizId: null,
        partyOptions: { showPlayerScores: true, showLockedAnswers: false, earlyPointBonus: true }
      };
      rememberPlayerScore(room, player);
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
    if (!room || !["lobby", "setup", "quiz"].includes(room.stage)) {
      sendError(socket, "No active lobby has that room code.");
      return;
    }
    send(socket, {
      type: "room-found",
      room: {
        code: room.code,
        capacity: room.capacity,
        players: room.players.size,
        stage: room.stage,
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
    let profile;
    try {
      profile = cleanProfile(message.player);
    } catch (error) {
      sendError(socket, error.message);
      return;
    }
    const normalizedName = normalizePlayerName(profile.name);
    const disconnectedPlayer = [...room.players.values()].find(
      (existingPlayer) => !existingPlayer.fakePlayer &&
        !existingPlayer.host && !existingPlayer.socket &&
        normalizePlayerName(existingPlayer.name) === normalizedName
    );
    if (disconnectedPlayer) {
      if (disconnectedPlayer.expireTimer) clearTimeout(disconnectedPlayer.expireTimer);
      disconnectedPlayer.expireTimer = null;
      disconnectedPlayer.handoff = false;
      disconnectedPlayer.socket = socket;
      disconnectedPlayer.name = profile.name;
      disconnectedPlayer.color = profile.color;
      disconnectedPlayer.photo = profile.photo;
      socket.roomCode = code;
      socket.playerId = disconnectedPlayer.id;
      send(socket, { type: "joined", playerId: disconnectedPlayer.id, room: publicRoom(room) });
      broadcastRoom(room);
      return;
    }
    if (!["lobby", "setup", "quiz"].includes(room.stage)) {
      sendError(socket, "This game is no longer accepting players.");
      return;
    }
    if ([...room.players.values()].some(
      (existingPlayer) => normalizePlayerName(existingPlayer.name) === normalizedName
    )) {
      sendError(socket, "That player name is already in the room. Choose a different name.");
      return;
    }
    if (room.players.size >= room.capacity) {
      sendError(socket, "This lobby is full.");
      return;
    }
    const restoredScore = room.playerHistory.get(normalizedName);
    const player = {
      ...profile,
      id: randomUUID(),
      ready: true,
      host: false,
      handoff: true,
      score: restoredScore?.score || 0,
      overallScore: restoredScore?.overallScore || 0,
      socket,
      expireTimer: null
    };
    room.players.set(player.id, player);
    rememberPlayerScore(room, player);
    if (room.question && !room.reveal) {
      room.activity ||= new Map();
      room.activity.set(player.id, "thinking");
    }
    socket.roomCode = code;
    socket.playerId = player.id;
    send(socket, { type: "joined", playerId: player.id, room: publicRoom(room) });
    broadcastExcept(room, {
      type: "player-joined",
      player: { id: player.id, name: player.name }
    }, player.id);
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
    case "update-profile": {
      if (room.stage !== "lobby") {
        return sendError(socket, "Player profiles can only be changed in the lobby.");
      }
      let profile;
      try {
        profile = cleanProfile(message.player);
      } catch (error) {
        return sendError(socket, error.message);
      }
      const normalizedName = normalizePlayerName(profile.name);
      if ([...room.players.values()].some(
        (member) => member.id !== player.id &&
          normalizePlayerName(member.name) === normalizedName
      )) {
        return sendError(socket, "That player name is already in the room. Choose a different name.");
      }
      const previousName = normalizePlayerName(player.name);
      if (previousName !== normalizedName) room.playerHistory.delete(previousName);
      Object.assign(player, profile);
      rememberPlayerScore(room, player);
      broadcastRoom(room);
      break;
    }
    case "dev-excluded-quizzes": {
      if (!player.host || room.stage !== "lobby") {
        return sendError(socket, "Only the host can change excluded quiz availability in the lobby.");
      }
      if (typeof message.enabled !== "boolean") {
        return sendError(socket, "Choose whether excluded quizzes are enabled.");
      }
      room.excludedQuizzesEnabled = message.enabled;
      broadcastRoom(room);
      break;
    }
    case "dev-add-fake-players": {
      if (!player.host || room.stage !== "lobby") {
        return sendError(socket, "Only the host can add fake players in the lobby.");
      }
      const count = Number(message.count);
      const availableSlots = room.capacity - room.players.size;
      if (!Number.isInteger(count) || count < 1 || count > availableSlots) {
        return sendError(socket, `Add between 1 and ${Math.max(0, availableSlots)} fake players.`);
      }
      const colors = ["#e85d75", "#f2a541", "#54b9a8", "#8d7be8", "#4b9de0"];
      const names = new Set(
        [...room.players.values()].map((member) => member.name.toLocaleLowerCase())
      );
      let nextNameIndex = 1;
      for (let index = 0; index < count; index++) {
        let name;
        do {
          name = `Test Player ${nextNameIndex++}`;
        } while (names.has(name.toLocaleLowerCase()));
        names.add(name.toLocaleLowerCase());
        const fakePlayer = {
          id: randomUUID(),
          name,
          color: colors[(nextNameIndex - 2) % colors.length],
          photo: "",
          ready: true,
          host: false,
          fakePlayer: true,
          score: 0,
          overallScore: 0,
          socket: null,
          expireTimer: null
        };
        room.players.set(fakePlayer.id, fakePlayer);
      }
      broadcastRoom(room);
      break;
    }
    case "dev-clear-fake-players": {
      if (!player.host || room.stage !== "lobby") {
        return sendError(socket, "Only the host can remove fake players in the lobby.");
      }
      for (const [playerId, member] of room.players) {
        if (member.fakePlayer) room.players.delete(playerId);
      }
      room.hostDisplayPlayerId = room.players.has(room.hostDisplayPlayerId)
        ? room.hostDisplayPlayerId
        : null;
      broadcastRoom(room);
      break;
    }
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
      const netHubQuizId = typeof message.netHubQuizId === "string"
        ? message.netHubQuizId
        : null;
      if (message.quizTheme !== undefined && !quizThemes.has(message.quizTheme)) {
        return sendError(socket, "Select a valid quiz style.");
      }
      const validQuizzes = {
        CompArch: ["quiz1", "test1", "binary", "hexadecimal"],
        CompGFX: ["test1", ...(room.excludedQuizzesEnabled ? ["lautest"] : [])],
        CloudComp: ["quiz1", "quiz2", "test1"],
        SocIndi: ["reviewQuiz", "textbookQuiz"],
        DataSci: ["test1", ...(room.excludedQuizzesEnabled ? ["lautest"] : [])],
        SoftEngi: ["test1"]
      };
      let mixedSources = null;
      if (category === "NetHub") {
        if (!netHubQuizId || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(netHubQuizId) ||
            quiz !== `nethub_${netHubQuizId.replaceAll("-", "").toLowerCase()}`) {
          return sendError(socket, "Select a valid NetHub quiz.");
        }
      }
      if (category === "MixedStudy" && quiz === "mixed") {
        try {
          mixedSources = mixedStudy.normalizeSources(message.mixedSources);
        } catch (error) {
          return sendError(socket, error.message);
        }
      } else if (category !== "NetHub" && !validQuizzes[category]?.includes(quiz)) {
        return sendError(socket, "Select a valid course and quiz.");
      }
      room.stage = "setup";
      room.category = category;
      room.quiz = quiz;
      room.netHubQuizId = category === "NetHub" ? netHubQuizId : null;
      room.quizTheme = message.quizTheme || "default";
      room.mixedSources = mixedSources;
      room.quizConfig = null;
      room.players.forEach((member) => { member.handoff = true; });
      broadcast(room, {
        type: "launch",
        category,
        quiz,
        netHubQuizId: room.netHubQuizId,
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
          (!selectedPlayer || selectedPlayer.host || selectedPlayer.fakePlayer ||
            selectedPlayer.id === player.id)) {
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
        member.handoff = true;
      });
      resetRoomQuizScores(room);
      broadcast(room, {
        type: "replay",
        category: room.category,
        quiz: room.quiz,
        netHubQuizId: room.netHubQuizId,
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
      room.netHubQuizId = null;
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
        member.handoff = true;
      });
      resetRoomQuizScores(room);
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
      const proceduralType = room.category === "CompArch" && room.quiz === "binary" ? "binary"
        : room.category === "CompArch" && room.quiz === "hexadecimal" ? "hexadecimal" : null;
      if ((proceduralType && (config.proceduralType !== proceduralType ||
          !config.proceduralSettings || typeof config.proceduralSettings !== "object" ||
          Array.isArray(config.proceduralSettings))) ||
          (!proceduralType && config.proceduralType !== undefined)) {
        return sendError(socket, "Invalid procedural quiz settings.");
      }
      if (proceduralType) {
        const settings = config.proceduralSettings;
        const gameTypes = proceduralType === "binary"
          ? ["conversion", "operation", "twos"] : ["conversion", "operation"];
        const operations = ["+", "-", "*", "/"];
        const validQuestions = settings.questions === "endless" ||
          Number.isInteger(settings.questions) && settings.questions >= 1 && settings.questions <= maxQuizQuestions;
        const validTimer = settings.timerLimit === 0 ||
          Number.isInteger(settings.timerLimit) && settings.timerLimit >= 1 && settings.timerLimit <= 60;
        const validSettings = gameTypes.includes(settings.gameType) &&
          operations.includes(settings.operation) && validQuestions && validTimer &&
          typeof settings.guide === "boolean" && typeof settings.decimal === "boolean" &&
          (proceduralType !== "hexadecimal" ||
            (["b2h", "h2d", "d2h", "h2b"].includes(settings.conversionMode) &&
              typeof settings.hexGuide === "boolean"));
        if (!validSettings || config.questionSequence.length !==
            (settings.questions === "endless" ? maxQuizQuestions : settings.questions)) {
          return sendError(socket, "Invalid procedural quiz settings.");
        }
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
    case "dev-jump-question": {
      if (!player.host || room.stage !== "quiz") {
        return sendError(socket, "Only the host can jump to a question during the quiz.");
      }
      const questionNumber = message.questionNumber;
      if (!Number.isInteger(questionNumber) ||
          questionNumber < 0 ||
          questionNumber >= room.quizConfig.questionSequence.length) {
        return sendError(socket, "Choose a question in the active quiz.");
      }
      room.questionNumber = questionNumber - 1;
      room.question = null;
      room.answers = new Map();
      room.answersLocked = [];
      room.activity = new Map();
      room.firstCorrectPlayerId = null;
      room.reveal = null;
      broadcast(room, { type: "dev-jump-question", questionNumber });
      break;
    }
    case "question": {
      const isDisplayPlayer = room.hostDisplay && player.id === room.hostDisplayPlayerId;
      if ((!player.host && !isDisplayPlayer) || room.stage !== "quiz") {
        return sendError(socket, "Only the host or selected Host Display player can advance questions.");
      }
      if (room.quizConfig.proceduralType) {
        const { questionNumber, prompt, challenge, badge, answerKind, correctAnswer, displayBits } = message;
        if (!Number.isInteger(questionNumber) || questionNumber !== room.questionNumber + 1 ||
            questionNumber >= room.quizConfig.questionSequence.length ||
            room.quizConfig.questionSequence[questionNumber] !== questionNumber ||
            typeof prompt !== "string" || !prompt.trim() || prompt.length > 180 ||
            typeof challenge !== "string" || !challenge.trim() || challenge.length > 160 ||
            typeof badge !== "string" || !badge.trim() || badge.length > 48 ||
            !["binary", "number", "text"].includes(answerKind) ||
            typeof correctAnswer !== "string" || correctAnswer.length > 24 ||
            !correctAnswer.trim() ||
            (displayBits !== undefined && (typeof displayBits !== "string" || !/^[01]{8}$/.test(displayBits)))) {
          return sendError(socket, "Invalid procedural quiz question.");
        }
        room.questionNumber = questionNumber;
        room.question = {
          procedural: true,
          questionNumber,
          prompt: prompt.trim(),
          challenge: challenge.trim(),
          badge: badge.trim(),
          answerKind,
          correctAnswer: correctAnswer.trim(),
          ...(displayBits ? { displayBits } : {})
        };
        room.answers = new Map();
        room.answersLocked = [];
        room.activity = new Map();
        room.players.forEach((member) => {
          room.activity.set(member.id, room.hostDisplay && member.host ? "answered" : "thinking");
        });
        if (room.hostDisplay) {
          room.answers.set(player.id, null);
          room.answersLocked.push(player.id);
        }
        const fakePlayers = [...room.players.values()].filter((member) => member.fakePlayer);
        fakePlayers.forEach((fakePlayer) => {
          room.answers.set(fakePlayer.id, "0");
          room.answersLocked.push(fakePlayer.id);
          room.activity.set(fakePlayer.id, "answered");
        });
        room.firstCorrectPlayerId = null;
        room.reveal = null;
        broadcast(room, {
          type: "question",
          questionNumber,
          procedural: true,
          prompt: room.question.prompt,
          challenge: room.question.challenge,
          badge: room.question.badge,
          answerKind: room.question.answerKind,
          ...(room.question.displayBits ? { displayBits: room.question.displayBits } : {})
        });
        if (room.answers.size === room.players.size) {
          revealRoomAnswers(room);
        }
        break;
      }
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
      room.activity = new Map();
      room.answers = new Map();
      if (room.hostDisplay) {
        room.answers.set(player.id, null);
        room.answersLocked.push(player.id);
      }
      room.firstCorrectPlayerId = null;
      room.reveal = null;
      const fakePlayers = [...room.players.values()].filter((member) => member.fakePlayer);
      for (const fakePlayer of fakePlayers) {
        const wrongAnswers = room.question.answerOrder.filter(
          (answerIndex) => answerIndex !== correctIndex
        );
        const answerIndex = randomInt(100) < 65
          ? correctIndex
          : wrongAnswers[randomInt(wrongAnswers.length)];
        room.answers.set(fakePlayer.id, answerIndex);
        room.answersLocked.push(fakePlayer.id);
      }
      broadcast(room, {
        type: "question",
        questionNumber: room.question.questionNumber,
        questionIndex: room.question.questionIndex,
        answerOrder: room.question.answerOrder
      });
      if (room.answers.size === room.players.size) {
        revealRoomAnswers(room);
      } else if (fakePlayers.length > 0) {
        const startingLockedCount = room.answers.size - fakePlayers.length;
        fakePlayers.forEach((fakePlayer, index) => {
          broadcast(room, {
            type: "answer-locked",
            playerId: fakePlayer.id,
            lockedCount: startingLockedCount + index + 1,
            ...(room.partyOptions.showLockedAnswers
              ? { answerIndex: room.answers.get(fakePlayer.id) }
              : {})
          });
        });
      }
      break;
    }
    case "answer": {
      if (room.stage !== "quiz" || !room.question) return sendError(socket, "There is no open question.");
      if (room.hostDisplay && player.host) {
        return sendError(socket, "The host is displaying the quiz and cannot submit an answer.");
      }
      if (message.questionNumber !== room.questionNumber) return sendError(socket, "That question is no longer open.");
      if (room.answers.has(player.id)) return sendError(socket, "Your answer is already locked in.");
      if (room.question.procedural) {
        if (typeof message.answer !== "string" || message.answer.length > 24) {
          return sendError(socket, "Enter a valid answer.");
        }
        const answer = message.answer.trim();
        if ((room.question.answerKind === "binary" && !/^[01]{8}$/.test(answer)) ||
            (room.question.answerKind === "number" && !/^\d{1,3}$/.test(answer)) ||
            (room.question.answerKind === "text" && !/^[0-9a-fA-F]{1,6}$/.test(answer))) {
          return sendError(socket, "Enter an answer in the requested format.");
        }
        room.answers.set(player.id, answer);
        room.activity.set(player.id, "answered");
        if (room.question.answerKind === "binary"
            ? answer === room.question.correctAnswer
            : room.question.answerKind === "number"
              ? Number(answer) === Number(room.question.correctAnswer)
              : answer.toUpperCase().replace(/^0X/, "").replace(/^0+(?=[0-9A-F])/, "") ===
                room.question.correctAnswer.toUpperCase().replace(/^0X/, "").replace(/^0+(?=[0-9A-F])/, "")) {
          if (room.firstCorrectPlayerId === null) room.firstCorrectPlayerId = player.id;
        }
        room.answersLocked = [...room.answers.keys()];
        if (room.answers.size < room.players.size) {
          broadcast(room, {
            type: "answer-locked",
            playerId: player.id,
            lockedCount: room.answers.size
          });
          return;
        }
        revealRoomAnswers(room);
        break;
      }
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
    case "player-progress": {
      if (room.stage !== "quiz" || !room.question?.procedural ||
          !["thinking", "answering"].includes(message.status) ||
          room.answers.has(player.id) || (room.hostDisplay && player.host)) {
        return sendError(socket, "That activity update is not available.");
      }
      room.activity.set(player.id, message.status);
      broadcast(room, { type: "player-progress", playerId: player.id, status: message.status });
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
        room.activity = new Map();
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
      if (player.host && (room.stage === "quiz" || room.stage === "setup")) {
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
  if (url.pathname === "/presence") {
    servePresence(request, response);
    return;
  }
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
      pathParts.some((part) => part.startsWith(".") || ["node_modules", "test", "data"].includes(part)) ||
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
  const pathname = new URL(request.url, "http://localhost").pathname;
  if (pathname.startsWith("/api/nethub/")) {
    if (["POST", "PUT", "DELETE"].includes(request.method)) {
      queueNetHubMutation(request, response);
    } else {
      serveNetHub(request, response);
    }
    return;
  }
  if (pathname === "/presence") {
    serveStatic(request, response);
    return;
  }
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
        if (player.host && (room.stage === "quiz" || room.stage === "setup")) {
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
      if (player.host) {
        room.stage = "results";
        broadcastExcept(room, {
          type: "game-over",
          players: publicRoom(room).players,
          reason: "player-left",
          departedPlayerId: player.id
        }, player.id);
      }
      removePlayer(room, player);
      return;
    }
    removePlayer(room, player);
  });
});

server.listen(port, () => {
  console.log(`QuizHub is listening on http://localhost:${port}`);
});
