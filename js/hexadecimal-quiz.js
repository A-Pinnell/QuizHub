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
  let party = null;
  let partyQuestion = null;

  const music = $("music");
  const resolveAssetUrl = (path) => new URL(path, window.location.href).toString();
  const defaultMusicSource = music.src;
  music.src = window.quizHubPreferences.resolveQuizMusic(defaultMusicSource);
  music.loop = !window.quizHubPreferences.isQuizMusicRotation;
  const soundFiles = {
    correct: resolveAssetUrl("./sfx/Correct.wav"),
    highlight: resolveAssetUrl("./sfx/highlight.wav"),
    incorrect: resolveAssetUrl("./sfx/Incorrect.wav"),
    begin: resolveAssetUrl("./sfx/QuizBegin.wav"),
    popup: resolveAssetUrl("./sfx/Popup.wav"),
    started: resolveAssetUrl("./secret/Started.mp3")
  };
  const soundCache = {};
  let activeHighlightSound = null;
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
    if (name === "highlight" && activeHighlightSound &&
      !activeHighlightSound.paused && !activeHighlightSound.ended) return;
    unlockBinaryAudio();
    const soundName = window.quizHubPreferences.secretMode && ["popup", "begin", "select"].includes(name)
      ? "started"
      : name;
    const defaultSource = soundFiles[soundName];
    if (!defaultSource) return;
    const soundSource = window.quizHubPreferences.resolveSfx(soundName, defaultSource);
    const sound = soundSource === defaultSource
      ? soundCache[soundName].cloneNode()
      : new Audio(soundSource);
    if (name === "highlight") activeHighlightSound = sound;
    try {
      sound.currentTime = 0;
      sound.play().catch(() => {});
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
    if (party) {
      state.remaining = Math.max(1, Number(state.timerLimit) * 60);
      renderTimer();
      state.timerId = setInterval(() => {
        if (state.paused || !state.accepting) return;
        state.remaining -= 1;
        renderTimer();
        if (state.remaining <= 0) {
          clearInterval(state.timerId);
          state.accepting = false;
          if (party.isHost) party.timeout();
        }
      }, 1000);
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
    music.loop = !window.quizHubPreferences.isQuizMusicRotation;
    if (!state.music) { music.pause(); return; }
    music.volume = .45;
    music.play().catch(() => {});
  }
  music.addEventListener("ended", () => {
    if (!window.quizHubPreferences.isQuizMusicRotation || !state.music || state.paused) return;
    music.src = window.quizHubPreferences.getNextQuizMusic(
      music.currentSrc || music.src,
      defaultMusicSource
    );
    music.load();
    updateMusic();
  });
  window.QuizHubMusicPicker.attach({
    button: $("quizMusicCycle"),
    isSoundEnabled: () => state.sound,
    isMusicEnabled: () => state.music && !state.paused,
    onSelectionStart: () => music.pause(),
    onTrackSelected: (shouldPlay, reshuffle) => {
      music.src = reshuffle
        ? window.quizHubPreferences.getNextQuizMusic(
            music.currentSrc || music.src,
            defaultMusicSource
          )
        : window.quizHubPreferences.resolveQuizMusic(defaultMusicSource);
      music.load();
      if (shouldPlay) updateMusic();
    }
  });

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
          party?.updateActivity("answering");
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

  function toHex(value, minDigits = 1) {
    return Number(value).toString(16).toUpperCase().padStart(minDigits, "0");
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
      // Generate an exact division so the result is always an integer.
      b = randomInt(1, 255);
      const quotient = randomInt(0, Math.floor(255 / b));
      a = b * quotient;
      answer = quotient;
    }

    state.first = a;
    state.second = b;
    // Do not clamp the result to FF. Addition can reach 1FE and
    // multiplication can reach FE01. Keep at least two hex digits.
    state.answer = toHex(answer, 2);

    const host = $("operationProblem");
    host.replaceChildren();
    $("operationBadge").textContent = operationNames[state.operation];

    const title = document.createElement("div");
    title.className = "conversion-title";
    title.textContent = "Solve this hexadecimal question";

    const first = document.createElement("div");
    first.className = "conversion-decimal";
    first.textContent = `0x${toHex(a, 2)}`;

    const op = document.createElement("div");
    op.className = "conversion-equals";
    op.textContent = operationSymbols[state.operation];

    const second = document.createElement("div");
    second.className = "conversion-decimal";
    second.textContent = `0x${toHex(b, 2)}`;

    const eq = document.createElement("div");
    eq.className = "conversion-equals";
    eq.textContent = "=";

    const input = document.createElement("input");
    input.className = "decimal-answer-input";
    input.id = "conversionAnswer";
    input.type = "text";
    input.inputMode = "text";
    input.placeholder = "0x00";
    // Show the hexadecimal prefix in the answer field as well. The input
    // accepts either 0x09 or 09, but displays the expected format clearly.
    // Results can be up to 4 hex digits (FE01), plus the 0x prefix.
    input.maxLength = 6;
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
    if (party) {
      state.remaining = Math.max(1, Number(state.timerLimit) * 60);
      renderTimer();
      state.timerId = setInterval(() => {
        if (state.paused || !state.accepting) return;
        state.remaining -= 1;
        renderTimer();
        if (state.remaining <= 0) {
          clearInterval(state.timerId);
          state.accepting = false;
          if (party.isHost) party.timeout();
        }
      }, 1000);
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
    if (party) {
      party.start(getPartySettings());
      return;
    }
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
    if (party) {
      party.next();
      return;
    }
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
    if (party) return;
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
    if (party) {
      const answer = partyQuestion?.answerKind === "binary"
        ? state.userBits.join("")
        : $("conversionAnswer")?.value.trim() || "";
      if (!answer) {
        showFeedback("Enter an answer first.", false);
        return;
      }
      showFeedback("Submitting answer…", true);
      party.sendAnswer(partyQuestion?.answerKind === "text" ? answer.replace(/^0x/i, "") : answer);
      return;
    }

    let userAnswer = "";

    if (state.gameType === "operation") {
      const chosen = $("conversionAnswer")?.value.trim() || "";
      if (chosen === "") {
        showFeedback("Enter the hex answer first.", false);
        return;
      }
      // Allow the user to enter either 0x09 or 09, while comparing only
      // the hexadecimal digits.
      userAnswer = chosen.toUpperCase().replace(/^0X/, "");
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
      showFeedback(`✕ Incorrect — 0x${expected}.`, false);
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
    if (party) {
      $("resultsMenuButton").textContent = "Leave Party";
      $("againButton").disabled = true;
    }
    playSound("popup");
    playTone(620, .1);
  }

  function openSetup() {
    if (party) {
      party.leave();
      return;
    }
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
  $("exitSetup").addEventListener("click", () => { if (party) party.leave(); else { music.pause(); music.currentTime = 0; window.location.href = "index.html"; } });
  $("gameMenuButton").addEventListener("click", () => { if (party || confirm("Leave this quiz and return to the setup menu? Your current progress will be lost.")) openSetup(); });
  $("endGameButton").addEventListener("click", () => { if (party) party.end(); else finishGame("GAME ENDED"); });
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

  function getPartySettings() {
    return {
      gameType: state.gameType,
      conversionMode: state.conversionMode,
      operation: state.operation,
      questions: state.questions,
      timerLimit: state.timerLimit,
      guide: state.guide,
      hexGuide: state.hexGuide,
      decimal: state.decimal
    };
  }

  function selectPartyChoice(groupId, value) {
    $(groupId).querySelectorAll(".choice").forEach((button) => {
      button.classList.toggle("selected", button.dataset.value === String(value));
    });
  }

  function describePartyQuestion() {
    let prompt;
    let challenge;
    let answerKind;
    if (state.gameType === "operation") {
      prompt = "Solve this hexadecimal arithmetic problem";
      challenge = `0x${toHex(state.first, 2)} ${operationSymbols[state.operation]} 0x${toHex(state.second, 2)} = ?`;
      answerKind = "text";
    } else if (state.conversionMode === "b2h") {
      prompt = "Convert this binary number to hexadecimal";
      challenge = `${bitsFor(state.first).join("")} = ?`;
      answerKind = "text";
    } else if (state.conversionMode === "h2d") {
      prompt = "Convert this hexadecimal value to decimal";
      challenge = `0x${toHex(state.first)} = ?`;
      answerKind = "number";
    } else if (state.conversionMode === "d2h") {
      prompt = "Convert this decimal value to hexadecimal";
      challenge = `${state.first} = ?`;
      answerKind = "text";
    } else {
      prompt = "Convert this hexadecimal value to binary";
      challenge = `0x${toHex(state.first)} = ?`;
      answerKind = "binary";
    }
    return {
      badge: $("operationBadge").textContent,
      prompt,
      challenge,
      answerKind,
      correctAnswer: String(state.answer)
    };
  }

  function renderPartyQuestion(question) {
    partyQuestion = question;
    state.accepting = true;
    state.nextPending = false;
    setNextButtonVisible(false);
    state.userBits = [];
    $("operationBadge").textContent = question.badge;
    $("conversionProblem").classList.remove("hidden");
    $("operationProblem").classList.add("hidden");
    $("feedback").textContent = "";
    $("feedback").className = "feedback";
    const host = $("conversionProblem");
    host.replaceChildren();
    const title = document.createElement("div");
    title.className = "conversion-title";
    title.textContent = question.prompt;
    const challenge = document.createElement("div");
    challenge.className = "conversion-decimal";
    challenge.textContent = question.challenge.replace(" = ?", "");
    const equals = document.createElement("div");
    equals.className = "conversion-equals";
    equals.textContent = "=";
    host.append(title, challenge, equals);
    if (question.answerKind === "binary") {
      const user = document.createElement("div");
      user.id = "userBits";
      user.className = "user-bits-host";
      host.appendChild(user);
      state.userBits = Array(8).fill("0");
      renderUserBits();
    } else {
      const input = document.createElement("input");
      input.className = "decimal-answer-input";
      input.id = "conversionAnswer";
      input.type = question.answerKind === "number" ? "number" : "text";
      input.inputMode = question.answerKind === "number" ? "numeric" : "text";
      input.placeholder = "?";
      input.maxLength = question.answerKind === "number" ? 3 : 6;
      input.setAttribute("aria-label", question.answerKind === "number" ? "Decimal answer" : "Hexadecimal answer");
      host.appendChild(input);
    }
    addSubmitButton(host);
    $("questionHint").textContent = question.answerKind === "binary"
      ? "Tap each bit to switch it between 0 and 1, then submit."
      : question.answerKind === "number"
        ? "Enter your decimal answer, then submit."
        : "Enter your hexadecimal answer, then submit.";
    show("gameScreen");
    startTimer();
  }

  function beginPartyGame() {
    state.current = 0;
    state.score = 0;
    state.correct = 0;
    state.incorrect = 0;
    state.paused = false;
    state.accepting = false;
    state.nextPending = false;
    $("againButton").disabled = false;
    $("resultsMenuButton").textContent = "Leave Party";
    updateGuideVisibility();
    updateStats();
    show("gameScreen");
    updateMusic();
    playSound("begin");
  }

  function applyPartySettings(settings) {
    state.gameType = settings.gameType;
    state.conversionMode = settings.conversionMode;
    state.operation = settings.operation;
    state.questions = settings.questions;
    state.timerLimit = settings.timerLimit;
    state.guide = settings.guide;
    state.hexGuide = settings.hexGuide;
    state.decimal = settings.decimal;
    selectPartyChoice("gameTypeChoices", state.gameType);
    selectPartyChoice("practiceTypeChoices", state.conversionMode);
    selectPartyChoice("operationChoices", state.operation);
    selectPartyChoice("questionChoices", state.questions);
    $("timerMinutes").value = String(state.timerLimit || 30);
    updateTimerSelection();
    [$("guideOff"), $("guideOn")].forEach((button) => button.classList.toggle("selected", button.dataset.value === (state.guide ? "on" : "off")));
    [$("hexGuideOff"), $("hexGuideOn")].forEach((button) => button.classList.toggle("selected", button.dataset.value === (state.hexGuide ? "on" : "off")));
    setToggle($("decimalToggle"), state.decimal);
    document.body.classList.toggle("show-decimals", state.decimal);
    updateSetupVisibility();
  }

  party = window.QuizHubProceduralParty.attach({
    kind: "hexadecimal",
    createQuestion: () => {
      setNextButtonVisible(false);
      makeProblem();
      startTimer();
      partyQuestion = describePartyQuestion();
      return partyQuestion;
    },
    renderQuestion: renderPartyQuestion,
    setQuestionNumber: (questionNumber) => {
      state.current = questionNumber + 1;
      updateStats();
    },
    applySettings: applyPartySettings,
    beginGame: beginPartyGame,
    setAnswerLocked: () => { state.accepting = false; clearInterval(state.timerId); },
    onReveal: (reveal, id) => {
      state.accepting = false;
      clearInterval(state.timerId);
      const ownAnswer = reveal.answers.find((entry) => entry.playerId === id);
      if (ownAnswer && !party.isHostDisplay) {
        state.correct += ownAnswer.correct ? 1 : 0;
        state.incorrect += ownAnswer.correct ? 0 : 1;
        state.score = ownAnswer.score;
        updateStats();
      }
      setNextButtonVisible(party.canAdvance);
    },
    onAnswerLocked: () => showFeedback("Answer locked in. Waiting for everyone else.", true),
    onError: (message) => showFeedback(message, false),
    finishGame: () => finishGame("QUIZ COMPLETE")
  });

  if (party) {
    $("endGameButton").textContent = "End Party Quiz";
    if (!party.canAdvance) $("endGameButton").classList.add("hidden");
    $("pauseButton").classList.add("hidden");
    $("skipButton").classList.add("hidden");
    $("nextQuestionButton").addEventListener("click", () => {
      if (party.canAdvance) party.next();
    });
    document.addEventListener("input", (event) => {
      if (event.target.id === "conversionAnswer") party.updateActivity("answering");
    });
  }
})();
