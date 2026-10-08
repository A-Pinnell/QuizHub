(function(){
  "use strict";

  const storage = window.localStorage;
  const root = document.documentElement;
  const savedMotionMode = storage.getItem("quizHubMotionMode");
  const storageKey = (name)=>name === "soundMuted"
    ? "quizHubMuted"
    : `quizHub${name[0].toUpperCase()}${name.slice(1)}`;
  const quizMusicSources = {
    run: "./secret/RUN.mp3",
    CompArch: "./music/QuizMusic.wav",
    CloudComp: "./music/CloudCompMusic.wav",
    DataSci: "./music/DataSciMusic.wav",
    SoftEngi: "./music/SoftEngiMusic.wav"
  };
  const regularQuizMusicOptions = ["default", ...Object.keys(quizMusicSources).filter((source) => source !== "run")];
  const blancQuizMusicOptions = ["run", ...regularQuizMusicOptions];
  const blancMode = storage.getItem("quizHubBlancMode") === "true";
  const savedQuizMusic = storage.getItem("quizHubQuizMusic");
  const textSizes = ["small", "default", "large"];
  const textSizeScales = { small: 0.8, default: 1, large: 1.25 };
  const preferences = {
    motionMode: ["default", "minimal", "reduced"].includes(savedMotionMode)
      ? savedMotionMode
      : storage.getItem("quizHubReduceMotion") === "true" ? "reduced" : "default",
    answerSide: storage.getItem("quizHubAnswerSide") === "left" ? "left" : "right",
    highContrast: storage.getItem("quizHubHighContrast") === "true",
    disableLoadingAnimation: storage.getItem("quizHubDisableLoadingAnimation") === "true",
    blancMode,
    quizMusic: (blancMode ? blancQuizMusicOptions : regularQuizMusicOptions).includes(savedQuizMusic)
      ? savedQuizMusic
      : blancMode ? "run" : "default",
    textSize: textSizes.includes(storage.getItem("quizHubTextSize"))
      ? storage.getItem("quizHubTextSize")
      : "default"
  };

  function apply(){
    root.classList.toggle("motion-minimal", preferences.motionMode === "minimal");
    root.classList.toggle("reduce-motion", preferences.motionMode === "reduced");
    root.classList.toggle("high-contrast", preferences.highContrast);
    root.classList.toggle("blanc-mode", preferences.blancMode);
    root.dataset.quizAnswerSide = preferences.answerSide;
    root.dataset.quizTextSize = preferences.textSize;
    root.style.setProperty("--quiz-text-scale", String(textSizeScales[preferences.textSize]));
  }

  function update(name, value){
    if(name === "motionMode" && ["default", "minimal", "reduced"].includes(value)){
      preferences.motionMode = value;
      storage.setItem("quizHubMotionMode", value);
      storage.setItem("quizHubReduceMotion", String(value === "reduced"));
    }else if(name === "answerSide" && (value === "left" || value === "right")){
      preferences.answerSide = value;
      storage.setItem("quizHubAnswerSide", preferences.answerSide);
    }else if(name === "highContrast" || name === "disableLoadingAnimation" ||
      name === "blancMode" ||
      name === "soundMuted" || name === "musicMuted"){
      storage.setItem(storageKey(name), String(Boolean(value)));
      if(name === "highContrast") preferences.highContrast = Boolean(value);
      if(name === "disableLoadingAnimation") preferences.disableLoadingAnimation = Boolean(value);
      if(name === "blancMode"){
        preferences.blancMode = Boolean(value);
        if(preferences.blancMode){
          preferences.quizMusic = "run";
          storage.setItem("quizHubQuizMusic", "run");
        }else if(preferences.quizMusic === "run"){
          preferences.quizMusic = "default";
          storage.setItem("quizHubQuizMusic", "default");
        }
      }
    }else if(name === "quizMusic" &&
      (value === "default" || Object.prototype.hasOwnProperty.call(quizMusicSources, value) &&
        (value !== "run" || preferences.blancMode))){
      preferences.quizMusic = value;
      storage.setItem("quizHubQuizMusic", value);
    }else if(name === "textSize" && textSizes.includes(value)){
      preferences.textSize = value;
      storage.setItem("quizHubTextSize", value);
    }else{
      throw new TypeError(`Invalid QuizHub preference: ${name}`);
    }

    apply();
    window.dispatchEvent(new CustomEvent("quizhub:preferenceschange", {
      detail: {
        ...preferences,
        soundMuted: storage.getItem(storageKey("soundMuted")) === "true",
        musicMuted: storage.getItem(storageKey("musicMuted")) === "true"
      }
    }));
  }

  function reset(){
    [
      "quizHubMotionMode",
      "quizHubReduceMotion",
      "quizHubAnswerSide",
      "quizHubHighContrast",
      "quizHubDisableLoadingAnimation",
      "quizHubBlancMode",
      "quizHubQuizMusic",
      "quizHubTextSize",
      "quizHubMuted",
      "quizHubMusicMuted"
    ].forEach((key)=>storage.removeItem(key));
    preferences.motionMode = "default";
    preferences.answerSide = "right";
    preferences.highContrast = false;
    preferences.disableLoadingAnimation = false;
    preferences.blancMode = false;
    preferences.quizMusic = "default";
    preferences.textSize = "default";
    apply();
    window.dispatchEvent(new CustomEvent("quizhub:preferenceschange", {
      detail: {
        ...preferences,
        soundMuted: false,
        musicMuted: false
      }
    }));
  }

  apply();
  window.quizHubPreferences = {
    get motionMode(){ return preferences.motionMode; },
    get reduceMotion(){ return preferences.motionMode === "reduced"; },
    get answerSide(){ return preferences.answerSide; },
    get highContrast(){ return preferences.highContrast; },
    get disableLoadingAnimation(){ return preferences.disableLoadingAnimation; },
    get blancMode(){ return preferences.blancMode; },
    get quizMusic(){ return preferences.quizMusic; },
    get textSize(){ return preferences.textSize; },
    get soundMuted(){ return storage.getItem(storageKey("soundMuted")) === "true"; },
    get musicMuted(){ return storage.getItem(storageKey("musicMuted")) === "true"; },
    setMotionMode(value){ update("motionMode", value); },
    setAnswerSide(value){ update("answerSide", value); },
    setHighContrast(value){ update("highContrast", value); },
    setDisableLoadingAnimation(value){ update("disableLoadingAnimation", value); },
    setBlancMode(value){ update("blancMode", value); },
    setQuizMusic(value){ update("quizMusic", value); },
    setTextSize(value){ update("textSize", value); },
    resolveQuizMusic(defaultSource){
      const selectedSource = quizMusicSources[preferences.quizMusic];
      return new URL(selectedSource || defaultSource, window.location.href).toString();
    },
    setSoundMuted(value){ update("soundMuted", value); },
    setMusicMuted(value){ update("musicMuted", value); },
    reset
  };
})();
