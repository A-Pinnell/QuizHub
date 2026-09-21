(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const state = {
    gameType: "conversion",
    conversionMode: "b2h",
    operation: "+",
    questions: 10,
    timerLimit: 30,
    music: true,
    sound: true,
    decimal: false,
    guide: false,
    hexGuide: false,
    current: 0,
    score: 0,
    correct: 0,
    incorrect: 0,
    answer: "",
    first: 0,
    second: 0,
    conversionDirection: "b2h",
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
  const soundFiles = {
    correct: resolveAssetUrl("./sfx/Correct.wav"),
    highlight: resolveAssetUrl("./sfx/highlight.wav"),
    incorrect: resolveAssetUrl("./sfx/Incorrect.wav"),
    begin: resolveAssetUrl("./sfx/QuizBegin.wav"),
    popup: resolveAssetUrl("./sfx/Popup.wav")
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
    const sound = soundCache[name];
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
  chooseGroup("practiceTypeChoices", value => { state.conversionMode = value; });
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
    updateGuideVisibility();
  }));

  [$("hexGuideOff"), $("hexGuideOn")].forEach(button => button.addEventListener("click", () => {
    [$("hexGuideOff"), $("hexGuideOn")].forEach(b => b.classList.remove("selected"));
    button.classList.add("selected");
    state.hexGuide = button.dataset.value === "on";
    updateGuideVisibility();
  }));

  function updateGuideVisibility() {
    $("placeValueGuide").classList.toggle("hidden", !state.guide);
    $("hexGuide").classList.toggle("hidden", !state.hexGuide);
  }

  function updateSetupVisibility() {
    const practiceSetting = $("practiceSetting");
    const operationSetting = $("operationSetting");
    if (practiceSetting) practiceSetting.classList.toggle("hidden", state.gameType !== "conversion");
    if (operationSetting) operationSetting.classList.toggle("hidden", state.gameType !== "operation");
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

  function toHex(value) {
    return Number(value).toString(16).toUpperCase();
  }

  function makeBinaryToHexProblem() {
    const value = randomInt(0, 255);
    state.answer = toHex(value);
    state.first = value;
    state.conversionDirection = "b2h";
    const host = $("conversionProblem");
    host.replaceChildren();
    const title = document.createElement("div");
    title.className = "conversion-title";
    $("operationBadge").textContent = "BINARY → HEX";
    title.textContent = "Convert this binary number to hexadecimal";
    host.append(title, bitButtons(bitsFor(value), false, "given-bits"));
    const eq = document.createElement("div");
    eq.className = "conversion-equals";
    eq.textContent = "=";
    host.appendChild(eq);
    const answer = document.createElement("input");
    answer.className = "decimal-answer-input";
    answer.id = "conversionAnswer";
    answer.type = "text";
    answer.inputMode = "text";
    answer.placeholder = "?";
    answer.maxLength = 2;
    answer.setAttribute("aria-label", "Hexadecimal answer");
    host.appendChild(answer);
    state.userBits = [];
    $("questionHint").textContent = "Enter the hexadecimal value (0–F) for this byte.";
    addSubmitButton(host);
    state.accepting = true;
  }

  function makeHexToDecimalProblem() {
    const value = randomInt(0, 255);
    state.answer = String(value);
    state.first = value;
    state.conversionDirection = "h2d";
    const host = $("conversionProblem");
    host.replaceChildren();
    const title = document.createElement("div");
    title.className = "conversion-title";
    $("operationBadge").textContent = "HEX → DECIMAL";
    title.textContent = "Convert this hexadecimal value to decimal";
    const hexValue = document.createElement("div");
    hexValue.className = "conversion-decimal";
    hexValue.textContent = toHex(value);
    host.append(title, hexValue);
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
    $("questionHint").textContent = "Type the decimal value for this hex number.";
    addSubmitButton(host);
    state.accepting = true;
  }

  function makeDecimalToHexProblem() {
    const value = randomInt(0, 255);
    state.answer = toHex(value);
    state.first = value;
    state.conversionDirection = "d2h";
    const host = $("conversionProblem");
    host.replaceChildren();
    const title = document.createElement("div");
    title.className = "conversion-title";
    $("operationBadge").textContent = "DECIMAL → HEX";
    title.textContent = "Convert this decimal value to hexadecimal";
    const decimal = document.createElement("div");
    decimal.className = "conversion-decimal";
    decimal.textContent = value;
    host.append(title, decimal);
    const eq = document.createElement("div");
    eq.className = "conversion-equals";
    eq.textContent = "=";
    host.appendChild(eq);
    const answer = document.createElement("input");
    answer.className = "decimal-answer-input";
    answer.id = "conversionAnswer";
    answer.type = "text";
    answer.inputMode = "text";
    answer.placeholder = "?";
    answer.maxLength = 2;
    answer.setAttribute("aria-label", "Hexadecimal answer");
    host.appendChild(answer);
    $("questionHint").textContent = "Enter the hex value for this decimal number.";
    addSubmitButton(host);
    state.accepting = true;
  }

  function makeHexToBinaryProblem() {
    const value = randomInt(0, 255);
    state.answer = value.toString(2).padStart(8, "0");
    state.first = value;
    state.conversionDirection = "h2b";
    const host = $("conversionProblem");
    host.replaceChildren();
    const title = document.createElement("div");
    title.className = "conversion-title";
    $("operationBadge").textContent = "HEX → BINARY";
    title.textContent = "Convert this hexadecimal value to binary";
    const hexValue = document.createElement("div");
    hexValue.className = "conversion-decimal";
    hexValue.textContent = toHex(value);
    host.append(title, hexValue);
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
    addSubmitButton(host);
    state.accepting = true;
  }

  function makeHexOperationProblem() {
    // Each operand is a full two-digit hexadecimal byte (00–FF).
    // Results are not limited to one byte: addition can reach 1FE and
    // multiplication can reach FE01.
    let a = 0;
    let b = 0;
    let answer = 0;

    if (state.operation === "+") {
      a = randomInt(0, 255);
      b = randomInt(0, 255);
      answer = a + b;
    } else if (state.operation === "-") {
      // Keep subtraction non-negative.
      a = randomInt(0, 255);
      b = randomInt(0, a);
      answer = a - b;
    } else if (state.operation === "*") {
      a = randomInt(0, 255);
      b = randomInt(0, 255);
      answer = a * b;
    } else {
      // Generate an exact division using byte-sized operands so there
      // are no fractional hexadecimal answers.
      b = randomInt(1, 255);
      const quotient = randomInt(0, Math.floor(255 / b));
      a = b * quotient;
      answer = quotient;
    }

    state.first = a;
    state.second = b;
    // Preserve the complete mathematical result. Do not clamp it to FF.
    state.answer = toHex(answer);

    const host = $("operationProblem");
    host.replaceChildren();
    $("operationBadge").textContent = operationNames[state.operation];

    const title = document.createElement("div");
    title.className = "conversion-title";
    title.textContent = "Solve this hexadecimal question";

    const first = document.createElement("div");
    first.className = "conversion-decimal";
    first.textContent = toHex(a);

    const op = document.createElement("div");
    op.className = "conversion-equals";
    op.textContent = operationSymbols[state.operation];

    const second = document.createElement("div");
    second.className = "conversion-decimal";
    second.textContent = toHex(b);

    const eq = document.createElement("div");
    eq.className = "conversion-equals";
    eq.textContent = "=";

    const input = document.createElement("input");
    input.className = "decimal-answer-input";
    input.id = "conversionAnswer";
    input.type = "text";
    input.inputMode = "text";
    input.placeholder = "?";
    // Addition needs up to 3 hex digits (1FE); multiplication needs up to
    // 4 hex digits (FE01).
    input.maxLength = 4;
    input.setAttribute("aria-label", "Hexadecimal answer");

    host.append(title, first, op, second, eq, input);
    $("questionHint").textContent = "Enter the hexadecimal result, then submit.";
    addSubmitButton(host);
    state.accepting = true;
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

  function makeProblem() {
    $("conversionProblem").classList.toggle("hidden", state.gameType !== "conversion");
    $("operationProblem").classList.toggle("hidden", state.gameType !== "operation");
    updateGuideVisibility();
    const feedback = $("feedback");
    feedback.textContent = "";
    feedback.className = "feedback";

    if (state.gameType === "operation") {
      makeHexOperationProblem();
      return;
    }

    switch (state.conversionMode) {
      case "b2h":
        makeBinaryToHexProblem();
        break;
      case "h2d":
        makeHexToDecimalProblem();
        break;
      case "d2h":
        makeDecimalToHexProblem();
        break;
      case "h2b":
      default:
        makeHexToBinaryProblem();
        break;
    }
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
    updateGuideVisibility();
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

    let userAnswer = "";

    if (state.gameType === "operation") {
      const chosen = $("conversionAnswer")?.value.trim() || "";
      if (chosen === "") {
        showFeedback("Enter the hex answer first.", false);
        return;
      }
      userAnswer = chosen.toUpperCase();
    } else if (state.conversionMode === "h2d") {
      const chosen = $("conversionAnswer")?.value.trim() || "";
      if (chosen === "") {
        showFeedback("Enter a decimal answer first.", false);
        return;
      }
      userAnswer = Number(chosen);
    } else if (state.conversionMode === "b2h" || state.conversionMode === "d2h") {
      const chosen = $("conversionAnswer")?.value.trim() || "";
      if (chosen === "") {
        showFeedback("Enter the answer first.", false);
        return;
      }
      userAnswer = chosen.toUpperCase();
    } else {
      userAnswer = state.userBits.join("");
    }

    state.accepting = false;
    state.nextPending = true;
    clearInterval(state.timerId);
    setNextButtonVisible(true);

    const ok = typeof userAnswer === "number" ? Number(userAnswer) === Number(state.answer) : String(userAnswer).toUpperCase() === String(state.answer).toUpperCase();

    if (ok) {
      state.correct++;
      state.score += 100;
      showFeedback("✓ Correct!", true);
      playSound("correct");
      playTone(740, .08);
      setTimeout(() => playTone(980, .1), 65);
    } else {
      state.incorrect++;
      const expected = typeof state.answer === "number" ? state.answer : String(state.answer).toUpperCase();
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
