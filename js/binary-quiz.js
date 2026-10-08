(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const state = {
    gameType: "conversion",
    operation: "+",
    questions: 10,
    timerLimit: 30,
    music: true,
    sound: true,
    decimal: false,
    guide: false,
    current: 0,
    score: 0,
    correct: 0,
    incorrect: 0,
    answer: 0,
    first: 0,
    second: 0,
    conversionDirection: "b2d",
    userBits: [],
    remaining: 0,
    paused: false,
    accepting: false,
    nextPending: false,
    timerId: null,
    feedbackTimer: null
  };

  const music = $("music");
  const resolveAssetUrl = (path) => new URL(path, window.location.href).toString();
  music.src = window.quizHubPreferences.resolveQuizMusic(music.src);
  const soundFiles = {
    correct: resolveAssetUrl("./sfx/Correct.wav"),
    highlight: resolveAssetUrl("./sfx/highlight.wav"),
    incorrect: resolveAssetUrl("./sfx/Incorrect.wav"),
    begin: resolveAssetUrl("./sfx/QuizBegin.wav"),
    popup: resolveAssetUrl("./sfx/Popup.wav"),
    started: resolveAssetUrl("./secret/Started.ogg")
  };
  const soundCache = {};
  Object.entries(soundFiles).forEach(([name, path]) => {
    const sound = new Audio(path);
    sound.preload = "auto";
    soundCache[name] = sound;
  });

  let audioContext = null;
  let audioUnlocked = false;
  const operationNames = { "+": "ADDITION", "-": "SUBTRACTION", "*": "MULTIPLICATION", "/": "DIVISION" };
  const operationSymbols = { "+": "+", "-": "−", "*": "×", "/": "÷" };

  function unlockBinaryAudio() {
    if (audioUnlocked) return;
    audioUnlocked = true;
    Object.values(soundCache).forEach(sound => {
      try {
        sound.load();
        sound.muted = false;
      } catch (_) {}
    });
  }

  function playSound(name) {
    if (!state.sound) return;
    unlockBinaryAudio();
    const soundName = window.quizHubPreferences.blancMode && ["popup", "begin", "select"].includes(name)
      ? "started"
      : name;
    const sound = soundCache[soundName];
    if (!sound) return;
    try {
      const soundClone = sound.cloneNode();
      soundClone.currentTime = 0;
      soundClone.play().catch(() => {});
    } catch (_) {}
  }

  document.addEventListener("pointerdown", unlockBinaryAudio, { capture: true });
  document.addEventListener("touchstart", unlockBinaryAudio, { capture: true, passive: true });
  document.addEventListener("keydown", unlockBinaryAudio, { capture: true });

  function show(screenId) {
    ["setupScreen", "gameScreen", "resultsScreen"].forEach(id => $(id).classList.toggle("hidden", id !== screenId));
  }

  function chooseGroup(containerId, callback) {
    $(containerId).querySelectorAll(".choice").forEach(button => button.addEventListener("click", () => {
      $(containerId).querySelectorAll(".choice").forEach(b => b.classList.remove("selected"));
      button.classList.add("selected");
      callback(button.dataset.value);
    }));
  }

  chooseGroup("gameTypeChoices", value => { state.gameType = value; updateSetupVisibility(); });
  chooseGroup("operationChoices", value => state.operation = value);
  chooseGroup("questionChoices", value => state.questions = value === "endless" ? "endless" : Number(value));

  const timerInput = $("timerMinutes");
  const noTimerToggle = $("noTimerToggle");

  function updateTimerSelection() {
    const enabled = Number(state.timerLimit) > 0;
    timerInput.disabled = !enabled;
    noTimerToggle.classList.toggle("selected", !enabled);
    noTimerToggle.setAttribute("aria-pressed", String(!enabled));
    noTimerToggle.textContent = enabled ? "No Time Limit" : "Timer Off";
    if (!enabled && state.timerLimit === 0) {
      timerInput.value = timerInput.value && Number(timerInput.value) > 0 ? String(timerInput.value) : "30";
    }
  }

  timerInput.addEventListener("input", () => {
    const parsed = Number(timerInput.value);
    if (!Number.isFinite(parsed)) {
      state.timerLimit = 1;
      timerInput.value = "1";
      updateTimerSelection();
      return;
    }
    const clamped = Math.min(60, Math.max(1, Math.round(parsed)));
    state.timerLimit = clamped;
    timerInput.value = String(clamped);
    updateTimerSelection();
  });

  noTimerToggle.addEventListener("click", () => {
    if (Number(state.timerLimit) > 0) {
      state.timerLimit = 0;
      timerInput.disabled = true;
      timerInput.value = "30";
      updateTimerSelection();
      return;
    }
    const restored = Number(timerInput.value) > 0 ? Number(timerInput.value) : 30;
    state.timerLimit = Math.min(60, Math.max(1, Math.round(restored)));
    timerInput.value = String(state.timerLimit);
    updateTimerSelection();
    timerInput.focus();
  });

  timerInput.addEventListener("focus", () => {
    if (Number(state.timerLimit) === 0) {
      state.timerLimit = 30;
      timerInput.value = "30";
    }
    updateTimerSelection();
  });

  [$("guideOff"), $("guideOn")].forEach(button => button.addEventListener("click", () => {
    [$("guideOff"), $("guideOn")].forEach(b => b.classList.remove("selected"));
    button.classList.add("selected");
    state.guide = button.dataset.value === "on";
  }));

  function updateSetupVisibility() {
    $("operationSetting").classList.toggle("hidden", state.gameType !== "operation");
  }

  function setToggle(button, enabled) {
    button.classList.toggle("active", enabled);
    button.querySelector("strong").textContent = enabled ? "ON" : "OFF";
  }

  $("musicToggle").addEventListener("click", () => { state.music = !state.music; setToggle($("musicToggle"), state.music); updateMusic(); });
  $("soundToggle").addEventListener("click", () => { state.sound = !state.sound; setToggle($("soundToggle"), state.sound); if (state.sound) { playSound("popup"); playTone(520, .06, "square"); } });
  $("decimalToggle").addEventListener("click", () => { state.decimal = !state.decimal; setToggle($("decimalToggle"), state.decimal); document.body.classList.toggle("show-decimals", state.decimal); });

  function updateMusic() {
    if (!state.music) { music.pause(); return; }
    music.volume = .45;
    music.play().catch(() => {});
  }

  function playTone(freq, duration = .08, type = "sine") {
    if (!state.sound) return;
    try {
      audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
      const o = audioContext.createOscillator(), g = audioContext.createGain();
      o.type = type;
      o.frequency.value = freq;
      g.gain.setValueAtTime(.045, audioContext.currentTime);
      g.gain.exponentialRampToValueAtTime(.001, audioContext.currentTime + duration);
      o.connect(g);
      g.connect(audioContext.destination);
      o.start();
      o.stop(audioContext.currentTime + duration);
    } catch (_) {}
  }

  function randomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
  function bitsFor(value, width = 8) { return value.toString(2).padStart(width, "0").slice(-width).split(""); }

  function bitButtons(bits, editable, className = "answer-bits") {
    const wrap = document.createElement("div");
    wrap.className = `bits ${className}`;
    bits.forEach((bit, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = `bit ${bit === "1" ? "on" : ""}`;
      b.textContent = bit;
      b.dataset.index = String(i);
      b.dataset.editable = editable ? "true" : "false";
      if (editable) {
        b.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          const index = Number(b.dataset.index);
          const next = state.userBits[index] === "1" ? "0" : "1";
          state.userBits[index] = next;
          b.textContent = next;
          b.classList.toggle("on", next === "1");
          playTone(360 + index * 35, .04, "square");
        });
      } else {
        b.disabled = true;
      }
      wrap.appendChild(b);
    });
    return wrap;
  }

  function renderUserBits() {
    const host = $("userBits");
    if (!host) return;
    host.replaceChildren(bitButtons(state.userBits, true));
  }

  function makeConversionProblem() {
    const value = randomInt(0, 255);
    state.answer = value;
    state.first = value;
    state.conversionDirection = Math.random() < .5 ? "b2d" : "d2b";
    const host = $("conversionProblem");
    host.replaceChildren();
    const title = document.createElement("div");
    title.className = "conversion-title";

    if (state.conversionDirection === "b2d") {
      $("operationBadge").textContent = "BINARY → DECIMAL";
      title.textContent = "Convert this binary number to decimal";
      host.append(title, bitButtons(bitsFor(value), false, "given-bits"));
      const eq = document.createElement("div");
      eq.className = "conversion-equals";
      eq.textContent = "=";
      host.appendChild(eq);
      const answer = document.createElement("input");
      answer.className = "decimal-answer-input";
      answer.id = "conversionAnswer";
      answer.type = "number";
      answer.min = "0";
      answer.max = "255";
      answer.inputMode = "numeric";
      answer.placeholder = "?";
      answer.setAttribute("aria-label", "Decimal answer");
      host.appendChild(answer);
      state.userBits = [];
      $("questionHint").textContent = "Enter the decimal answer, then submit.";
    } else {
      $("operationBadge").textContent = "DECIMAL → BINARY";
      title.textContent = "Convert this decimal number to binary";
      const decimal = document.createElement("div");
      decimal.className = "conversion-decimal";
      decimal.textContent = value;
      host.append(title, decimal);
      const eq = document.createElement("div");
      eq.className = "conversion-equals";
      eq.textContent = "=";
      host.appendChild(eq);
      const user = document.createElement("div");
      user.id = "userBits";
      user.className = "user-bits-host";
      host.appendChild(user);
      state.userBits = Array(8).fill("0");
      renderUserBits();
      $("questionHint").textContent = "Click each bit to switch it between 0 and 1, then submit.";
    }

    addSubmitButton(host);
    state.accepting = true;
  }

  function makeTwosComplementProblem() {
    const sourceValue = randomInt(0, 255);
    const sourceBits = sourceValue.toString(2).padStart(8, "0");
    state.answer = ((~sourceValue) + 1) & 0xFF;
    state.first = sourceValue;
    const host = $("conversionProblem");
    host.replaceChildren();
    $("operationBadge").textContent = "TWO'S COMPLEMENT";

    const title = document.createElement("div");
    title.className = "conversion-title";
    title.textContent = "Find the two's complement of this binary number";

    const binary = document.createElement("div");
    binary.className = "conversion-decimal";
    binary.textContent = sourceBits;

    const eq = document.createElement("div");
    eq.className = "conversion-equals";
    eq.textContent = "=";

    const user = document.createElement("div");
    user.id = "userBits";
    user.className = "user-bits-host";

    host.append(title, bitButtons(sourceBits.split(""), false, "given-bits"), eq, user);
    state.userBits = Array(8).fill("0");
    renderUserBits();
    $("questionHint").textContent = "";
    addSubmitButton(host);
    state.accepting = true;
  }

  function addConversionDecimalControls(host) {
    const controls = document.createElement("div");
    controls.className = "decimal-keypad";
    controls.id = "decimalKeypad";
    for (let n = 0; n <= 255; n++) {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = n;
      b.className = "decimal-choice";
      b.dataset.value = n;
      b.addEventListener("click", () => {
        state.userBits = String(n).split("");
        $("conversionAnswer").textContent = n;
        controls.querySelectorAll(".selected").forEach(x => x.classList.remove("selected"));
        b.classList.add("selected");
      });
      controls.appendChild(b);
    }
    host.appendChild(controls);
  }

  function addSubmitButton(host) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "submit-answer";
    button.id = "submitAnswer";
    button.textContent = "Submit Answer →";
    button.addEventListener("click", submitAnswer);
    host.appendChild(button);
  }

  function makeOperationProblem() {
    let a, b, answer;
    if (state.operation === "+") { a = randomInt(0, 127); b = randomInt(0, 255 - a); answer = a + b; }
    else if (state.operation === "-") { a = randomInt(0, 255); b = randomInt(0, a); answer = a - b; }
    else if (state.operation === "*") { a = randomInt(0, 15); b = randomInt(0, 15); answer = a * b; }
    else { b = randomInt(1, 15); answer = randomInt(0, 15); a = b * answer; }

    state.first = a;
    state.second = b;
    state.answer = answer;
    $("operationBadge").textContent = operationNames[state.operation];
    const host = $("operationProblem");
    host.replaceChildren();
    state.userBits = Array(8).fill("0");
    const table = document.createElement("div");
    table.className = "binary-operation";
    const row = (value, symbol, answerRow = false) => {
      const r = document.createElement("div");
      r.className = "operation-row" + (answerRow ? " answer-row" : "");
      const sign = document.createElement("span");
      sign.className = "operation-sign";
      sign.textContent = symbol || "";
      r.appendChild(sign);
      r.appendChild(bitButtons(answerRow ? state.userBits : bitsFor(value), answerRow, answerRow ? "operation-answer-bits" : "given-bits"));
      return r;
    };
    table.append(row(a, ""), row(b, operationSymbols[state.operation]), row(answer, "=", true));
    host.appendChild(table);
    $("questionHint").textContent = "Click each answer bit to switch it between 0 and 1, then submit.";
    const submit = document.createElement("button");
    submit.type = "button";
    submit.className = "submit-answer";
    submit.id = "submitAnswer";
    submit.textContent = "Submit Answer →";
    submit.addEventListener("click", submitAnswer);
    host.appendChild(submit);
    state.accepting = true;
  }

  function makeProblem() {
    $("conversionProblem").classList.toggle("hidden", state.gameType === "operation");
    $("operationProblem").classList.toggle("hidden", state.gameType !== "operation");
    const feedback = $("feedback");
    feedback.textContent = "";
    feedback.className = "feedback";

    if (state.gameType === "operation") {
      makeOperationProblem();
      return;
    }

    if (state.gameType === "twos") {
      makeTwosComplementProblem();
      return;
    }

    makeConversionProblem();
  }

  function updateStats() {
    $("score").textContent = state.score;
    $("correct").textContent = state.correct;
    $("incorrect").textContent = state.incorrect;
    $("questionNumber").textContent = `${state.current} / ${state.questions === "endless" ? "∞" : state.questions}`;
  }

  function setNextButtonVisible(visible) {
    const nextButton = $("nextQuestionButton");
    if (!nextButton) return;
    nextButton.classList.toggle("hidden", !visible);
  }

  function startTimer() {
    clearInterval(state.timerId);
    if (Number(state.timerLimit) <= 0) {
      $("timerBox").classList.add("disabled");
      $("timer").textContent = "—";
      return;
    }
    const minutes = Number(state.timerLimit) || 1;
    const seconds = Math.max(1, Math.min(60 * 60, minutes * 60));
    $("timerBox").classList.remove("disabled");
    state.remaining = seconds;
    renderTimer();
    state.timerId = setInterval(() => {
      if (state.paused) return;
      state.remaining -= 1;
      renderTimer();
      if (state.remaining <= 0) {
        clearInterval(state.timerId);
        state.accepting = false;
        state.nextPending = true;
        setNextButtonVisible(true);
        state.incorrect += 1;
        showFeedback("⏱ Time's up", false);
        updateStats();
        clearTimeout(state.feedbackTimer);
      }
    }, 1000);
  }

  function renderTimer() {
    const m = Math.floor(state.remaining / 60);
    const s = state.remaining % 60;
    $("timer").textContent = m ? `${m}:${String(s).padStart(2, "0")}` : `${s}s`;
    $("timerBox").classList.toggle("warning", state.remaining <= 10);
  }

  function startGame() {
    clearInterval(state.timerId);
    clearTimeout(state.feedbackTimer);
    state.current = 1;
    state.score = 0;
    state.correct = 0;
    state.incorrect = 0;
    state.paused = false;
    state.accepting = false;
    state.nextPending = false;
    setNextButtonVisible(false);
    show("gameScreen");
    $("placeValueGuide").classList.toggle("hidden", !state.guide);
    updateStats();
    startTimer();
    updateMusic();
    makeProblem();
    playSound("begin");
    playTone(620, .09);
  }

  function advanceQuestion() {
    if (!state.nextPending && state.accepting) return;
    clearInterval(state.timerId);
    state.nextPending = false;
    setNextButtonVisible(false);
    if (state.questions !== "endless" && state.current >= state.questions) {
      finishGame("QUIZ COMPLETE");
      return;
    }
    state.current += 1;
    updateStats();
    makeProblem();
    startTimer();
  }

  function skipQuestion() {
    if (!state.accepting || state.paused) return;
    clearInterval(state.timerId);
    state.accepting = false;
    state.nextPending = true;
    setNextButtonVisible(true);
    state.incorrect += 1;
    showFeedback("⏭ Skipped", false);
    updateStats();
    clearTimeout(state.feedbackTimer);
  }

  function submitAnswer() {
    if (!state.accepting || state.paused) return;

    let userAnswer;

    if (state.gameType === "operation") {
      userAnswer = parseInt(state.userBits.join(""), 2);
    } else if (state.gameType === "twos") {
      userAnswer = parseInt(state.userBits.join(""), 2);
    } else {
      if (state.conversionDirection === "b2d") {
        const chosen = $("conversionAnswer")?.value.trim() || "";
        if (chosen === "") {
          showFeedback("Enter a decimal answer first.", false);
          return;
        }
        userAnswer = Number(chosen);
        if (!Number.isInteger(userAnswer) || userAnswer < 0 || userAnswer > 255) {
          showFeedback("Enter a whole number from 0 to 255.", false);
          return;
        }
      } else {
        userAnswer = parseInt(state.userBits.join(""), 2);
      }
    }

    state.accepting = false;
    state.nextPending = true;
    clearInterval(state.timerId);
    setNextButtonVisible(true);

    const ok = userAnswer === state.answer;
    if (ok) {
      state.correct++;
      state.score += 100;
      showFeedback("✓ Correct!", true);
      playSound("correct");
      playTone(740, .08);
      setTimeout(() => playTone(980, .1), 65);
    } else {
      state.incorrect++;
      const expected = state.gameType === "twos"
        ? state.answer.toString(2).padStart(8, "0")
        : state.answer.toString(2).padStart(8, "0") + ` (${state.answer})`;
      showFeedback(`✕ Incorrect — ${expected}.`, false);
      playSound("incorrect");
      playTone(180, .14, "sawtooth");
    }

    updateStats();
    clearTimeout(state.feedbackTimer);
  }

  function showFeedback(text, good) {
    const f = $("feedback");
    f.textContent = text;
    f.className = `feedback ${good ? "good" : "bad"}`;
  }

  function finishGame(title = "QUIZ COMPLETE") {
    clearInterval(state.timerId);
    state.accepting = false;
    state.nextPending = false;
    setNextButtonVisible(false);
    $("resultsTitle").textContent = title;
    $("finalScore").textContent = state.score;
    $("finalCorrect").textContent = state.correct;
    $("finalIncorrect").textContent = state.incorrect;
    const total = state.correct + state.incorrect;
    $("finalAccuracy").textContent = total ? `${Math.round(state.correct / total * 100)}%` : "0%";
    show("resultsScreen");
    playSound("popup");
    playTone(620, .1);
  }

  function openSetup() {
    clearInterval(state.timerId);
    state.paused = false;
    state.nextPending = false;
    setNextButtonVisible(false);
    $("pauseOverlay").classList.add("hidden");
    music.pause();
    music.currentTime = 0;
    show("setupScreen");
  }

  function togglePause() {
    state.paused = !state.paused;
    $("pauseOverlay").classList.toggle("hidden", !state.paused);
    $("pauseButton").textContent = state.paused ? "Resume" : "Pause";
    if (state.paused) music.pause();
    else updateMusic();
  }

  $("startButton").addEventListener("click", startGame);
  $("exitSetup").addEventListener("click", () => { music.pause(); music.currentTime = 0; window.location.href = "index.html"; });
  $("gameMenuButton").addEventListener("click", () => { if (confirm("Leave this quiz and return to the setup menu? Your current progress will be lost.")) openSetup(); });
  $("endGameButton").addEventListener("click", () => finishGame("GAME ENDED"));
  $("skipButton").addEventListener("click", skipQuestion);
  $("nextQuestionButton").addEventListener("click", () => {
    if (state.nextPending) {
      advanceQuestion();
    }
  });
  $("pauseButton").addEventListener("click", togglePause);
  $("resumeButton").addEventListener("click", togglePause);
  $("pauseMenuButton").addEventListener("click", openSetup);
  $("resultsMenuButton").addEventListener("click", openSetup);
  $("againButton").addEventListener("click", startGame);
  $("musicButton").addEventListener("click", () => { state.music = !state.music; $("musicButton").textContent = `♫ Music: ${state.music ? "On" : "Off"}`; setToggle($("musicToggle"), state.music); updateMusic(); });
  $("soundButton").addEventListener("click", () => { state.sound = !state.sound; $("soundButton").textContent = `🔊 Sound: ${state.sound ? "On" : "Off"}`; setToggle($("soundToggle"), state.sound); if (state.sound) { playSound("popup"); playTone(520, .06); } });

  setToggle($("musicToggle"), state.music);
  setToggle($("soundToggle"), state.sound);
  setToggle($("decimalToggle"), state.decimal);
  updateTimerSelection();
  updateSetupVisibility();
})();
