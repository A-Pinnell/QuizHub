(() => {
  "use strict";

  function attach(options) {
    const params = new URLSearchParams(window.location.search);
    const roomCode = params.get("partyRoom");
    const playerId = params.get("partyPlayer");
    if (params.get("partyMode") !== "true" || !roomCode || !playerId) return null;

    const isHost = params.get("partyHost") === "true";
    const hostDisplay = params.get("hostDisplay") === "true";
    const hostDisplayPlayerId = params.get("hostDisplayPlayer") || "";
    const gameShell = document.querySelector(".game-shell");
    const gameLayout = document.createElement("div");
    gameLayout.className = "party-game-layout";
    gameShell.parentNode.insertBefore(gameLayout, gameShell);
    gameLayout.appendChild(gameShell);
    document.body.classList.add("party-mode-active");
    const roomCodeBadge = document.createElement("div");
    roomCodeBadge.className = "party-room-code-badge";
    roomCodeBadge.setAttribute("role", "group");
    roomCodeBadge.setAttribute("aria-label", "Party room code");
    const roomCodeLabel = document.createElement("span");
    roomCodeLabel.textContent = "ROOM CODE";
    const roomCodeText = document.createElement("strong");
    roomCodeText.textContent = roomCode;
    roomCodeBadge.append(roomCodeLabel, roomCodeText);
    document.body.appendChild(roomCodeBadge);
    const status = document.createElement("p");
    status.className = "party-quiz-status";
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");
    status.textContent = isHost ? "Connecting to your party…" : "Connecting to the party host…";
    document.querySelector(".setup-panel")?.append(status);

    const roster = document.createElement("section");
    roster.className = "party-quiz-roster hidden";
    roster.setAttribute("aria-label", "Player activity");
    roster.innerHTML = "<h2>Players</h2><ul></ul>";
    gameLayout.appendChild(roster);

    const results = document.createElement("section");
    results.className = "party-quiz-reveal hidden";
    results.setAttribute("aria-live", "polite");
    results.innerHTML = "<h2>Correct answer</h2><p class=\"party-correct-answer\"></p><ul></ul>";
    document.querySelector(".problem-panel")?.append(results);

    const client = new window.QuizHubPartyClient();
    const startButton = document.getElementById("startButton");
    const startButtonText = startButton.textContent;
    let room = null;
    let gameStarted = false;
    let currentQuestionNumber = -1;
    let localQuestionNumber = -1;
    let players = [];
    const savedPlayers = (() => {
      try {
        return JSON.parse(sessionStorage.getItem("quizHubPartyPlayers") || "[]");
      } catch (error) {
        console.error("Could not restore party players:", error);
        return [];
      }
    })();

    function renderRoster(activity = []) {
      const list = roster.querySelector("ul");
      const statuses = new Map(activity.map((item) => [item.playerId, item.status]));
      const participants = players.filter((player) => !(hostDisplay && player.host));
      list.replaceChildren(...participants.map((player) => {
        const item = document.createElement("li");
        const name = document.createElement("span");
        name.textContent = savedPlayers.find((saved) => saved.id === player.id)?.name || player.name;
        const state = document.createElement("strong");
        const activityState = statuses.get(player.id) || "thinking";
        state.textContent = activityState === "answering" ? "Answering"
          : activityState === "answered" ? "Answered" : "Thinking";
        state.className = `party-activity-${activityState}`;
        item.append(name, state);
        return item;
      }));
      roster.classList.remove("hidden");
    }

    function renderRoom(nextRoom) {
      room = nextRoom;
      players = room.players || [];
      document.body.classList.toggle("party-host-display", hostDisplay && isHost);
      renderRoster(room.activity || []);
      if (room.stage === "setup") {
        status.textContent = isHost
          ? "Choose the quiz settings and start when everyone is ready."
          : "Waiting for the host to choose settings and start the quiz.";
      }
      if (room.stage === "quiz" && room.quizConfig?.proceduralType && !gameStarted) {
        options.applySettings(room.quizConfig.proceduralSettings);
        options.beginGame();
        gameStarted = true;
      }
      if (room.question?.procedural) {
        currentQuestionNumber = room.question.questionNumber;
        options.setQuestionNumber(currentQuestionNumber);
        options.renderQuestion(room.question);
        if (room.answersLocked?.includes(playerId)) options.setAnswerLocked();
      }
      if (room.reveal) renderReveal(room.reveal);
      if (room.stage === "results") options.finishGame();
    }

    function renderReveal(reveal) {
      const list = results.querySelector("ul");
      results.querySelector(".party-correct-answer").textContent = reveal.correctAnswer;
      list.replaceChildren(...reveal.answers
        .filter((entry) => !(hostDisplay && players.find((player) => player.id === entry.playerId)?.host))
        .map((entry) => {
        const player = players.find((candidate) => candidate.id === entry.playerId);
        const item = document.createElement("li");
        const name = document.createElement("span");
        name.textContent = savedPlayers.find((saved) => saved.id === entry.playerId)?.name || player?.name || "Player";
        const answer = document.createElement("strong");
        answer.textContent = entry.answer || "No answer";
        answer.className = entry.correct ? "party-answer-correct" : "party-answer-incorrect";
        item.append(name, answer);
        return item;
        }));
      results.classList.remove("hidden");
      roster.classList.add("hidden");
      options.onReveal(reveal, playerId);
      status.textContent = isHost || playerId === hostDisplayPlayerId
        ? "Everyone has answered. Continue when ready."
        : "Everyone has answered. Waiting for the next question.";
    }

    function showServerError(message) {
      status.textContent = message;
      console.error("Party quiz error:", message);
    }

    async function sendQuestion(questionNumber) {
      currentQuestionNumber = questionNumber;
      results.classList.add("hidden");
      roster.classList.remove("hidden");
      renderRoster(players.map((player) => ({
        playerId: player.id,
        status: hostDisplay && player.host ? "answered" : "thinking"
      })));
      options.setQuestionNumber(questionNumber);
      const question = options.createQuestion();
      localQuestionNumber = questionNumber;
      await client.send({
        type: "question",
        code: roomCode,
        questionNumber,
        ...question
      });
    }

    client.on("joined", (message) => {
      renderRoom(message.room);
    });
    client.on("room-state", (message) => renderRoom(message.room));
    client.on("quiz-start", (message) => {
      room = { ...room, stage: "quiz", quizConfig: message.config, players: message.players };
      players = room.players;
      options.applySettings(message.config.proceduralSettings);
      options.beginGame();
      gameStarted = true;
      renderRoster(players.map((player) => ({
        playerId: player.id,
        status: hostDisplay && player.host ? "answered" : "thinking"
      })));
      if (isHost) sendQuestion(0).catch((error) => showServerError(error.message));
    });
    client.on("question", (message) => {
      currentQuestionNumber = message.questionNumber;
      results.classList.add("hidden");
      renderRoster(players.map((player) => ({
        playerId: player.id,
        status: hostDisplay && player.host ? "answered" : "thinking"
      })));
      if (!(isHost && localQuestionNumber === message.questionNumber)) {
        options.setQuestionNumber(message.questionNumber);
        options.renderQuestion(message);
      }
      status.textContent = "Solve the question and submit your answer.";
    });
    client.on("player-progress", (message) => {
      const activity = new Map(room?.activity?.map((item) => [item.playerId, item.status]) || []);
      activity.set(message.playerId, message.status);
      if (room) room.activity = [...activity].map(([id, playerStatus]) => ({ playerId: id, status: playerStatus }));
      renderRoster(room?.activity || []);
    });
    client.on("answer-locked", (message) => {
      const activity = new Map(room?.activity?.map((item) => [item.playerId, item.status]) || []);
      activity.set(message.playerId, "answered");
      if (room) room.activity = [...activity].map(([id, playerStatus]) => ({ playerId: id, status: playerStatus }));
      renderRoster(room?.activity || []);
    });
    client.on("reveal", renderReveal);
    client.on("next-question", () => {
      if (isHost || playerId === hostDisplayPlayerId) {
        sendQuestion(currentQuestionNumber + 1).catch((error) => showServerError(error.message));
      }
    });
    client.on("game-over", () => options.finishGame());
    client.on("host-changed", (message) => {
      if (message.hostId !== playerId) return;
      showServerError("The host left. This party quiz has ended.");
      options.finishGame();
    });
    client.on("error", (message) => {
      if (isHost && room?.stage === "setup") startButton.disabled = false;
      showServerError(message.message);
    });
    client.on("close", () => showServerError("The party connection closed."));

    const profile = (() => {
      try {
        return JSON.parse(sessionStorage.getItem("quizHubPartyProfile") || "null");
      } catch (error) {
        console.error("Could not restore your party profile:", error);
        return null;
      }
    })();
    const ownProfile = savedPlayers.find((player) => player.id === playerId);
    if (!profile?.name && !ownProfile?.name) {
      showServerError("Your party profile could not be restored. Return to the lobby and try again.");
    } else {
      client.send({
        type: "join",
        code: roomCode,
        playerId,
        player: profile || { name: ownProfile.name, color: ownProfile.color, photo: ownProfile.photo }
      }).catch((error) => showServerError(error.message));
    }

    if (!isHost) {
      startButton.disabled = true;
      startButton.textContent = "Waiting for Host";
      document.querySelectorAll(".setup-grid .choice, .setup-grid .timer-mode, .setup-grid input")
        .forEach((control) => { control.disabled = true; });
    }

    return {
      start: async (settings) => {
        if (!isHost || !room || room.stage !== "setup") return;
        startButton.disabled = true;
        status.textContent = "Starting the party quiz…";
        const questionCount = settings.questions === "endless" ? 5000 : settings.questions;
        try {
          await client.send({
            type: "quiz-start",
            code: roomCode,
            config: {
              proceduralType: options.kind,
              proceduralSettings: settings,
              questionSequence: Array.from({ length: questionCount }, (_, index) => index),
              orderMode: "static",
              timeLimitMinutes: null,
              perQuestionTimeMinutes: null,
              reviewSections: []
            }
          });
        } catch (error) {
          startButton.disabled = false;
          showServerError(error.message);
        }
      },
      sendAnswer: async (answer) => {
        try {
          await client.send({
            type: "answer",
            code: roomCode,
            questionNumber: currentQuestionNumber,
            answer
          });
          options.setAnswerLocked();
          status.textContent = "Answer locked in. Waiting for everyone else.";
        } catch (error) {
          showServerError(error.message);
        }
      },
      updateActivity: (activity) => {
        if (currentQuestionNumber < 0) return;
        client.send({
          type: "player-progress",
          code: roomCode,
          status: activity
        }).catch((error) => showServerError(error.message));
      },
      next: () => client.send({ type: "next-question", code: roomCode })
        .catch((error) => showServerError(error.message)),
      end: () => client.send({ type: "end-game", code: roomCode, reason: "ended" })
        .catch((error) => showServerError(error.message)),
      timeout: () => client.send({ type: "question-timeout", code: roomCode })
        .catch((error) => showServerError(error.message)),
      leave: async () => {
        try {
          await client.send({ type: "leave", code: roomCode });
          window.location.href = "index.html";
        } catch (error) {
          showServerError(error.message);
        }
      },
      isHost,
      isHostDisplay: hostDisplay && isHost,
      canAdvance: isHost || playerId === hostDisplayPlayerId,
      getStartButtonText: () => startButtonText
    };
  }

  window.QuizHubProceduralParty = { attach };
})();
