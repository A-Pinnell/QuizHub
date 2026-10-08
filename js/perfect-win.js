window.addEventListener("load", function(){
  "use strict";

  const params = new URLSearchParams(window.location.search);
  let results = null;
  const rawResults = params.get("results");

  if(rawResults){
    try{
      results = JSON.parse(rawResults);
    }catch(error){
      console.error("Could not read perfect-run results from the URL:",error);
    }
  }

  if(!results){
    try{
      const savedResults = sessionStorage.getItem("lakeheadQuizResults");
      if(savedResults) results = JSON.parse(savedResults);
    }catch(error){
      console.error("Could not read saved perfect-run results:",error);
    }
  }

  if(!results || !Array.isArray(results.history)){
    window.location.replace("win.html");
    return;
  }

  const questionCount = Math.max(1, Number(results.total) || results.history.length);
  const score = Number.isFinite(Number(results.score)) ? Number(results.score) : 0;
  const category = typeof results.category === "string" ? results.category : "Mixed STEM";
  const quizType = typeof results.quizType === "string" ? results.quizType : "reviewQuiz";
  const numberTrack = document.getElementById("numberTrack");
  const progress = document.getElementById("progress");
  const countdown = document.getElementById("countdown");
  const finale = document.getElementById("finale");
  const confetti = document.getElementById("confetti");
  const retryButton = document.getElementById("retry");
  const menuButton = document.getElementById("menu");
  const title = document.getElementById("congratulations");
  const perfectScore = document.getElementById("perfectScore");
  const actions = document.querySelector(".actions");
  const motionMode = window.quizHubPreferences.motionMode;
  const reducedMotion = motionMode === "reduced" ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const minimalMotion = motionMode === "minimal" && !reducedMotion;
  const colors = ["#53e27c", "#ffe16b", "#59d8ff", "#ff75b8", "#ffffff", "#b38cff"];
  perfectScore.textContent = `SCORE ${score} / ${questionCount}`;
  let currentNumber = 0;
  let confettiInterval = null;
  let verificationTimer = null;
  let sixSecondPauseTimer = null;
  let spotlightFrameId = null;
  let spotlightResumeTime = null;
  let trackPausedAtSixSeconds = false;
  let spotlightAngleAtStop = 0;
  let spotlightStopTime = null;
  let spotlightMotionStarted = false;
  const spotlights = [...document.querySelectorAll(".aurora")];

  const soundToggle = document.getElementById("soundToggle");
  let soundsMuted = localStorage.getItem("quizHubMuted") === "true";
  const perfectTrack = document.getElementById("perfectTrack");
  perfectTrack.loop = false;
  perfectTrack.volume = 0.8;
  const winSound = new Audio("sfx/Win.wav");
  winSound.preload = "auto";

  function updateSoundToggle(){
    soundToggle.textContent = soundsMuted ? "🔇" : "🔊";
    soundToggle.setAttribute("aria-label", soundsMuted ? "Unmute sounds" : "Mute sounds");
    soundToggle.setAttribute("aria-pressed", String(soundsMuted));
  }

  soundToggle.addEventListener("click", function(){
    soundsMuted = !soundsMuted;
    localStorage.setItem("quizHubMuted", String(soundsMuted));
    perfectTrack.muted = soundsMuted;
    winSound.muted = soundsMuted;
    updateSoundToggle();
  });
  perfectTrack.muted = soundsMuted;
  winSound.muted = soundsMuted;
  updateSoundToggle();

  function appendConfetti(){
    const fragment = document.createDocumentFragment();
    const count = minimalMotion ? 5 : 9;

    for(let index = 0; index < count; index++){
      const piece = document.createElement("i");
      piece.className = "confetti-piece";
      piece.style.setProperty("--left", `${Math.random() * 100}%`);
      piece.style.setProperty("--size", `${5 + Math.random() * 8}px`);
      piece.style.setProperty("--radius", Math.random() > .7 ? "50%" : "2px");
      piece.style.setProperty("--color", colors[Math.floor(Math.random() * colors.length)]);
      piece.style.setProperty("--delay", `${Math.random() * .35}s`);
      piece.style.setProperty("--duration", `${3.2 + Math.random() * 2.4}s`);
      piece.style.setProperty("--drift", `${Math.round(Math.random() * 260 - 130)}px`);
      piece.style.setProperty("--spin", `${Math.round(Math.random() * 1080 - 540)}deg`);
      piece.addEventListener("animationend", () => piece.remove(), { once: true });
      fragment.appendChild(piece);
    }

    confetti.appendChild(fragment);
  }

  function startConfetti(){
    if(reducedMotion) return;
    appendConfetti();
    confettiInterval = window.setInterval(appendConfetti, minimalMotion ? 800 : 220);
  }

  function showFinale(){
    progress.textContent = `${questionCount} OF ${questionCount} QUESTIONS — FLAWLESS`;
    shootSpotlightsAlongCurrentAngles();
    window.setTimeout(() => {
      countdown.classList.add("countdown-out");
      if(trackPausedAtSixSeconds){
        trackPausedAtSixSeconds = false;
        if(!perfectTrack.ended){
          perfectTrack.play().catch((error) => {
            console.warn("Could not resume the perfect-run music:", error);
          });
        }
      }
      window.setTimeout(() => {
        finale.hidden = false;
        startConfetti();
      }, reducedMotion ? 60 : 650);
    }, reducedMotion ? 0 : 500);
  }

  function showVerifiedNumber(index){
    const row = numberTrack.children[index];
    row.classList.add("checked", "current");
    numberTrack.style.transform = `translateX(-${index * 100}%)`;
    progress.textContent = `QUESTION ${index + 1} OF ${questionCount}`;

    if(index > 0) numberTrack.children[index - 1].classList.remove("current");
  }

  function startSpotlightMotion(){
    if(motionMode !== "default" || reducedMotion || spotlightMotionStarted) return;
    spotlightMotionStarted = true;
    const reducedSpeed = 360 / 36;
    const fastSpeed = reducedMotion ? reducedSpeed : 360 / 0.6;
    const normalSpeed = reducedMotion ? reducedSpeed : 360 / 5;
    const startingSpeed = normalSpeed;
    const decelerationDuration = 0.5;
    const decelerationStart = 5.7 - decelerationDuration;
    const trackStart = perfectTrack.currentTime;
    const cruiseDuration = Math.max(0, decelerationStart - trackStart);
    const acceleration = cruiseDuration > 0
      ? (fastSpeed - startingSpeed) / cruiseDuration
      : 0;
    const cruiseAngle = startingSpeed * cruiseDuration
      + 0.5 * acceleration * cruiseDuration * cruiseDuration;

    function setSpotlightAngle(angle){
      spotlights.forEach((spotlight) => {
        spotlight.style.setProperty("--spin-angle", `${angle}deg`);
      });
    }

    function updateSpotlights(timestamp){
      const trackTime = perfectTrack.currentTime;

      if(spotlightStopTime === null){
        if(trackTime < decelerationStart){
          const elapsed = Math.max(0, trackTime - trackStart);
          spotlightAngleAtStop = startingSpeed * elapsed
            + 0.5 * acceleration * elapsed * elapsed;
        }else{
          const progress = Math.min(1, (trackTime - decelerationStart) / decelerationDuration);
          const easedProgress = 0.5 * progress + Math.sin(Math.PI * progress) / (2 * Math.PI);
          spotlightAngleAtStop = cruiseAngle + easedProgress * decelerationDuration * fastSpeed;
        }
        setSpotlightAngle(spotlightAngleAtStop);

        if(trackTime >= 5.7){
          spotlightStopTime = timestamp;
          spotlightResumeTime = timestamp + 1000;
        }
      }else if(timestamp >= spotlightResumeTime){
        spotlightAngleAtStop = spotlightAngleAtStop + (timestamp - spotlightResumeTime) * normalSpeed / 1000;
        spotlightResumeTime = timestamp;
        setSpotlightAngle(spotlightAngleAtStop);
      }

      spotlightFrameId = window.requestAnimationFrame(updateSpotlights);
    }

    spotlightFrameId = window.requestAnimationFrame(updateSpotlights);
  }

  function shootSpotlightsAlongCurrentAngles(){
    if(!spotlightMotionStarted) return;
    if(spotlightFrameId !== null){
      window.cancelAnimationFrame(spotlightFrameId);
      spotlightFrameId = null;
    }

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const centerX = viewportWidth / 2;
    const centerY = viewportHeight / 2;
    const travelDistance = Math.max(viewportWidth, viewportHeight, ...spotlights.map((spotlight) => spotlight.offsetWidth)) * 1.6;

    spotlights.forEach((spotlight) => {
      const currentStyle = getComputedStyle(spotlight);
      const bounds = spotlight.getBoundingClientRect();
      const angle = Math.atan2(
        bounds.top + bounds.height / 2 - centerY,
        bounds.left + bounds.width / 2 - centerX
      );
      const targetAngle = angle * 180 / Math.PI;
      const offsetX = Math.cos(angle) * travelDistance;
      const offsetY = Math.sin(angle) * travelDistance;

      spotlight.animate([
        { transform: currentStyle.transform, opacity: currentStyle.opacity },
        {
          transform: `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px)) rotate(${targetAngle}deg) translateX(31vmin)`,
          opacity: 0
        }
      ], {
        duration: reducedMotion ? 0 : 500,
        easing: "cubic-bezier(.45,0,1,1)",
        fill: "forwards"
      });
    });
  }

  for(let number = 1; number <= questionCount; number++){
    const row = document.createElement("div");
    row.className = "number";
    const value = document.createElement("span");
    value.textContent = String(number);
    const check = document.createElement("span");
    check.className = "number-check";
    check.textContent = "✓";
    row.append(value, check);
    numberTrack.appendChild(row);
  }

  Array.from("CONGRATULATIONS!").forEach((character, index) => {
    const letter = document.createElement("span");
    letter.className = "rainbow-letter";
    letter.style.setProperty("--letter-index", String(index));
    letter.style.setProperty("--letter-delay", `${index * 0.045}s`);
    letter.style.setProperty("--letter-hue", `${index * 24}deg`);
    letter.textContent = character;
    title.appendChild(letter);
  });
  title.lastElementChild.addEventListener("animationend", function(event){
    if(event.animationName !== "letterIn") return;
    if(!soundsMuted) winSound.play().catch((error) => {
      console.warn("Could not play the perfect-run win sound:", error);
    });
    actions.classList.add("actions-visible");
  });

  function startPerfectSequence(){
    document.getElementById("celebration").classList.add("sequence-started");
    const trackPauseTime = 5.7;
    function pauseAtTrackPauseTime(){
      if(perfectTrack.currentTime >= trackPauseTime){
        if(!countdown.classList.contains("countdown-out")){
          perfectTrack.pause();
          trackPausedAtSixSeconds = true;
        }
        sixSecondPauseTimer = null;
        return;
      }
      sixSecondPauseTimer = window.setTimeout(pauseAtTrackPauseTime, 5);
    }

    sixSecondPauseTimer = window.setTimeout(
      pauseAtTrackPauseTime,
      Math.max(0, (trackPauseTime - perfectTrack.currentTime) * 1000)
    );

    window.setTimeout(() => {
      startSpotlightMotion();
      const verificationStart = performance.now();
      const verificationDuration = 5000;
      const stepDuration = verificationDuration / questionCount;
      numberTrack.style.setProperty(
        "--number-step-duration",
        `${Math.min(220, stepDuration * 0.65)}ms`
      );
      numberTrack.style.setProperty(
        "--number-check-duration",
        `${Math.min(160, stepDuration * 0.6)}ms`
      );

      function tickVerification(timestamp){
        const elapsed = Math.min(verificationDuration, timestamp - verificationStart);
        const targetNumber = Math.min(questionCount, Math.floor(elapsed / stepDuration) + 1);

        while(currentNumber < targetNumber){
          showVerifiedNumber(currentNumber);
          currentNumber++;
        }

        if(elapsed < verificationDuration){
          verificationTimer = window.requestAnimationFrame(tickVerification);
          return;
        }

        verificationTimer = null;
        showFinale();
      }

      tickVerification(performance.now());
    }, 1000);
  }

  retryButton.addEventListener("click", function(){
    const target = new URL("quiz.html", window.location.href);
    target.searchParams.set("category", category);
    target.searchParams.set("quiz", quizType);
    if(Number.isFinite(Number(results.timeLimitMinutes)) && Number(results.timeLimitMinutes)>0){
      target.searchParams.set("timeLimit",String(Number(results.timeLimitMinutes)));
    }
    if(Number.isInteger(Number(results.perQuestionTimeMinutes)) &&
      Number(results.perQuestionTimeMinutes)>=1 && Number(results.perQuestionTimeMinutes)<=60){
      target.searchParams.set("questionTimeLimit",String(Number(results.perQuestionTimeMinutes)));
    }
    if (Array.isArray(results.reviewSections)) {
      target.searchParams.set("reviewSections", results.reviewSections.join(","));
    }
    window.location.href = target.toString();
  });
  menuButton.addEventListener("click", function(){
    window.location.href = "index.html?fromWin=1";
  });
  window.addEventListener("beforeunload", function(){
    if(confettiInterval !== null) window.clearInterval(confettiInterval);
    if(verificationTimer !== null) window.cancelAnimationFrame(verificationTimer);
    if(sixSecondPauseTimer !== null) window.clearTimeout(sixSecondPauseTimer);
    if(spotlightFrameId !== null) window.cancelAnimationFrame(spotlightFrameId);
  });

  perfectTrack.play().then(startPerfectSequence).catch((error) => {
    console.warn("Could not play the perfect-run music:", error);
    startPerfectSequence();
  });
});
