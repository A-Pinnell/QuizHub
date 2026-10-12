(function(){
  "use strict";

  const isNativeApp=window.quizHubNativeApp===true;
  const storage = window.localStorage;
  const root = document.documentElement;
  const savedMotionMode = storage.getItem("quizHubMotionMode");
  const storageKey = (name)=>name === "soundMuted"
    ? "quizHubMuted"
    : `quizHub${name[0].toUpperCase()}${name.slice(1)}`;
  const quizMusicSources = {
    run: "./secret/RUN.mp3",
    Practice1: "./music/BinaryTrack.wav",
    Practice2: "./music/HexadecimalTrack.wav",
    CompArch: "./music/QuizMusic.wav",
    CloudComp: "./music/CloudCompMusic.wav",
    DataSci: "./music/DataSciMusic.wav",
    SoftEngi: "./music/SoftEngiMusic.wav",
    CompGFX: "./music/CompGFXMusic.wav",
    SocIndi: "./music/SocIndiMusic.wav"
  };
  const regularQuizMusicOptions = ["default", ...Object.keys(quizMusicSources).filter((source) => source !== "run")];
  const secretQuizMusicOptions = ["run", ...regularQuizMusicOptions];
  const secretMode = storage.getItem("quizHubSecretMode") === "true";
  const savedQuizMusic = storage.getItem("quizHubQuizMusic");
  const textSizes = ["small", "default", "large"];
  const textSizeScales = { small: 0.8, default: 1, large: 1.25 };
  const quizThemes = ["default", "quizhub", "ai-model", "blended"];
  const sfxStyles = ["default", "quizhub", "ps2"];
  const ps2SfxSources = {
    correct: "./sfx/ps2/correct_ps2.wav",
    incorrect: "./sfx/ps2/incorrect_ps2.wav",
    highlight: "./sfx/ps2/highlight_ps2.wav",
    comboUp: "./sfx/ps2/comboup_ps2.wav",
    begin: "./sfx/ps2/quizbegin_ps2.wav",
    popup: "./sfx/ps2/popup_ps2.wav",
    select: "./sfx/ps2/quizselect_ps2.wav",
    titleEnd: "./sfx/ps2/titleend_ps2.wav"
  };
  const preferences = {
    motionMode: ["default", "minimal", "reduced"].includes(savedMotionMode)
      ? savedMotionMode
      : storage.getItem("quizHubReduceMotion") === "true" ? "reduced" : "default",
    answerSide: storage.getItem("quizHubAnswerSide") === "left" ? "left" : "right",
    clamshellMode: storage.getItem("quizHubClamshellMode") === "true",
    dsPuristMode: storage.getItem("quizHubDSPuristMode") === "true",
    highContrast: storage.getItem("quizHubHighContrast") === "true",
    disableLoadingAnimation: storage.getItem("quizHubDisableLoadingAnimation") === "true",
    secretMode,
    quizMusic: (secretMode ? secretQuizMusicOptions : regularQuizMusicOptions).includes(savedQuizMusic)
      ? savedQuizMusic
      : secretMode ? "run" : "default",
    textSize: textSizes.includes(storage.getItem("quizHubTextSize"))
      ? storage.getItem("quizHubTextSize")
      : "default",
    quizTheme: quizThemes.includes(storage.getItem("quizHubQuizTheme"))
      ? storage.getItem("quizHubQuizTheme")
      : "default",
    sfxStyle: sfxStyles.includes(storage.getItem("quizHubSfxStyle"))
      ? storage.getItem("quizHubSfxStyle")
      : "default",
    fullscreen: storage.getItem("quizHubFullscreen") === "true"
  };

  let puristAudioContext = null;
  const puristRoutedMedia = new Map();

  function getPuristAudioContext(){
    if(puristAudioContext) return puristAudioContext;
    const AudioContextType = window.AudioContext || window.webkitAudioContext;
    if(!AudioContextType){
      console.warn("DS Purist Mode audio processing is unavailable in this browser.");
      return null;
    }
    try{
      puristAudioContext = new AudioContextType({ latencyHint: "interactive" });
      return puristAudioContext;
    }catch(error){
      console.warn("Could not initialize DS Purist Mode audio processing:", error);
      puristAudioContext = null;
      return null;
    }
  }

  function updatePuristAudioRoutes(){
    const now = puristAudioContext?.currentTime ?? 0;
    puristRoutedMedia.forEach(({ dry, loFi })=>{
      const puristEnabled = preferences.dsPuristMode;
      dry.gain.setTargetAtTime(puristEnabled ? 0 : 1, now, 0.015);
      loFi.gain.setTargetAtTime(puristEnabled ? 1 : 0, now, 0.015);
    });
  }

  function resumePuristAudioContext(context){
    if(context?.state !== "suspended") return;
    context.resume().catch((error)=>{
      console.warn("Could not resume DS Purist Mode audio processing:", error);
    });
  }

  function routePuristMedia(media){
    if(puristRoutedMedia.has(media)){
      resumePuristAudioContext(puristAudioContext);
      return;
    }
    const mediaUrl = media.currentSrc || media.src;
    if(!mediaUrl) return;
    let sourceUrl;
    try{
      sourceUrl = new URL(mediaUrl, window.location.href);
    }catch(error){
      console.warn("Could not inspect media source for DS Purist Mode:", error);
      return;
    }
    if(sourceUrl.origin !== window.location.origin) return;
    const context = getPuristAudioContext();
    if(!context) return;
    try{
      const source = context.createMediaElementSource(media);
      const dry = context.createGain();
      const lowPass = context.createBiquadFilter();
      const quantizer = context.createWaveShaper();
      const loFi = context.createGain();
      const curve = new Float32Array(257);
      for(let index = 0; index < curve.length; index++){
        const sample = index * 2 / (curve.length - 1) - 1;
        curve[index] = Math.round(sample * 15) / 15;
      }
      lowPass.type = "lowpass";
      lowPass.frequency.value = 3200;
      lowPass.Q.value = 0.7;
      quantizer.curve = curve;
      quantizer.oversample = "none";
      source.connect(dry);
      dry.connect(context.destination);
      source.connect(lowPass);
      lowPass.connect(quantizer);
      quantizer.connect(loFi);
      loFi.connect(context.destination);
      puristRoutedMedia.set(media, { dry, loFi });
      media.addEventListener("ended", ()=>{
        puristRoutedMedia.delete(media);
      }, { once: true });
      updatePuristAudioRoutes();
    }catch(error){
      console.warn("Could not route media through DS Purist Mode:", error);
    }
    resumePuristAudioContext(context);
  }

  const nativeMediaPlay = window.HTMLMediaElement.prototype.play;
  window.HTMLMediaElement.prototype.play = function(...args){
    if(root.classList.contains("ds-purist-mode")) routePuristMedia(this);
    return nativeMediaPlay.apply(this, args);
  };

  function apply(){
    root.classList.toggle("motion-minimal", preferences.motionMode === "minimal");
    root.classList.toggle("reduce-motion", preferences.motionMode === "reduced");
    root.classList.toggle("high-contrast", preferences.highContrast);
    root.classList.toggle("secret-mode", preferences.secretMode);
    root.classList.toggle("clamshell-mode", preferences.clamshellMode);
    root.classList.toggle("ds-purist-mode", preferences.dsPuristMode);
    updatePuristAudioRoutes();
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
    }else if(name === "clamshellMode" && typeof value === "boolean"){
      preferences.clamshellMode = value;
      storage.setItem("quizHubClamshellMode", String(value));
    }else if(name === "dsPuristMode" && typeof value === "boolean"){
      preferences.dsPuristMode = value;
      storage.setItem("quizHubDSPuristMode", String(value));
      resumePuristAudioContext(puristAudioContext);
      updatePuristAudioRoutes();
    }else if(name === "highContrast" || name === "disableLoadingAnimation" ||
      name === "secretMode" ||
      name === "soundMuted" || name === "musicMuted"){
      storage.setItem(storageKey(name), String(Boolean(value)));
      if(name === "highContrast") preferences.highContrast = Boolean(value);
      if(name === "disableLoadingAnimation") preferences.disableLoadingAnimation = Boolean(value);
      if(name === "secretMode"){
        preferences.secretMode = Boolean(value);
        if(preferences.secretMode){
          preferences.quizMusic = "run";
          storage.setItem("quizHubQuizMusic", "run");
        }else if(preferences.quizMusic === "run"){
          preferences.quizMusic = "default";
          storage.setItem("quizHubQuizMusic", "default");
        }
      }
    }else if(name === "quizMusic" &&
      (value === "default" || Object.prototype.hasOwnProperty.call(quizMusicSources, value) &&
        (value !== "run" || preferences.secretMode))){
      preferences.quizMusic = value;
      storage.setItem("quizHubQuizMusic", value);
    }else if(name === "textSize" && textSizes.includes(value)){
      preferences.textSize = value;
      storage.setItem("quizHubTextSize", value);
    }else if(name === "quizTheme" && quizThemes.includes(value)){
      preferences.quizTheme = value;
      storage.setItem("quizHubQuizTheme", value);
    }else if(name === "sfxStyle" && sfxStyles.includes(value)){
      preferences.sfxStyle = value;
      storage.setItem("quizHubSfxStyle", value);
    }else if(name === "fullscreen" && typeof value === "boolean"){
      preferences.fullscreen = value;
      storage.setItem("quizHubFullscreen", String(value));
      if(!value) removeFullscreenRetry();
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
      "quizHubClamshellMode",
      "quizHubDSPuristMode",
      "quizHubHighContrast",
      "quizHubDisableLoadingAnimation",
      "quizHubSecretMode",
      "quizHubQuizMusic",
      "quizHubTextSize",
      "quizHubQuizTheme",
      "quizHubSfxStyle",
      "quizHubMuted",
      "quizHubMusicMuted",
      "quizHubFullscreen"
    ].forEach((key)=>storage.removeItem(key));
    preferences.motionMode = "default";
    preferences.answerSide = "right";
    preferences.clamshellMode = false;
    preferences.dsPuristMode = false;
    preferences.highContrast = false;
    preferences.disableLoadingAnimation = false;
    preferences.secretMode = false;
    preferences.quizMusic = "default";
    preferences.textSize = "default";
    preferences.quizTheme = "default";
    preferences.sfxStyle = "default";
    preferences.fullscreen = false;
    removeFullscreenRetry();
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
  let fullscreenRetryPending=false;
  let fullscreenRequestPending=false;
  function removeFullscreenRetry(){
    document.removeEventListener("pointerdown", retryFullscreen, true);
    document.removeEventListener("keydown", retryFullscreen, true);
    fullscreenRetryPending=false;
  }
  function retryFullscreen(){
    if(isNativeApp || !preferences.fullscreen || fullscreenRequestPending ||
      typeof document.documentElement.requestFullscreen !== "function") return;
    fullscreenRequestPending=true;
    document.documentElement.requestFullscreen().then(()=>{
      fullscreenRequestPending=false;
      removeFullscreenRetry();
    }).catch((error)=>{
      fullscreenRequestPending=false;
      console.warn("Could not restore site fullscreen:", error);
    });
  }
  function scheduleFullscreenRetry(){
    if(fullscreenRetryPending) return;
    fullscreenRetryPending=true;
    document.addEventListener("pointerdown", retryFullscreen, true);
    document.addEventListener("keydown", retryFullscreen, true);
  }

  window.quizHubPreferences = {
    get motionMode(){ return preferences.motionMode; },
    get reduceMotion(){ return preferences.motionMode === "reduced"; },
    get answerSide(){ return preferences.answerSide; },
    get clamshellMode(){ return preferences.clamshellMode; },
    get dsPuristMode(){ return preferences.dsPuristMode; },
    get highContrast(){ return preferences.highContrast; },
    get disableLoadingAnimation(){ return preferences.disableLoadingAnimation; },
    get secretMode(){ return preferences.secretMode; },
    get quizMusic(){ return preferences.quizMusic; },
    get textSize(){ return preferences.textSize; },
    get quizTheme(){ return preferences.quizTheme; },
    get sfxStyle(){ return preferences.sfxStyle; },
    get fullscreen(){ return preferences.fullscreen; },
    get soundMuted(){ return storage.getItem(storageKey("soundMuted")) === "true"; },
    get musicMuted(){ return storage.getItem(storageKey("musicMuted")) === "true"; },
    setMotionMode(value){ update("motionMode", value); },
    setAnswerSide(value){ update("answerSide", value); },
    setClamshellMode(value){ update("clamshellMode", value); },
    setDSPuristMode(value){ update("dsPuristMode", value); },
    setHighContrast(value){ update("highContrast", value); },
    setDisableLoadingAnimation(value){ update("disableLoadingAnimation", value); },
    setSecretMode(value){ update("secretMode", value); },
    setQuizMusic(value){ update("quizMusic", value); },
    setTextSize(value){ update("textSize", value); },
    setQuizTheme(value){ update("quizTheme", value); },
    setSfxStyle(value){ update("sfxStyle", value); },
    setFullscreen(value){ update("fullscreen", value); },
    resolveSfx(name, defaultSource, course = null){
      const usePs2 = preferences.sfxStyle === "ps2" ||
        preferences.sfxStyle === "default" && course === "CompGFX";
      const selectedSource = usePs2 ? ps2SfxSources[name] : null;
      return new URL(selectedSource || defaultSource, window.location.href).toString();
    },
    resolveQuizMusic(defaultSource){
      const selectedSource = quizMusicSources[preferences.quizMusic];
      return new URL(selectedSource || defaultSource, window.location.href).toString();
    },
    setSoundMuted(value){ update("soundMuted", value); },
    setMusicMuted(value){ update("musicMuted", value); },
    reset
  };

  window.addEventListener("pageshow",()=>{
    if(isNativeApp || !preferences.fullscreen || document.fullscreenElement ||
      typeof document.documentElement.requestFullscreen !== "function") return;
    document.documentElement.requestFullscreen().catch((error)=>{
      console.warn("Could not automatically restore site fullscreen:", error);
      scheduleFullscreenRetry();
    });
  });
})();
