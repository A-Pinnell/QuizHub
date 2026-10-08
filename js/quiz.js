const questionBank = window.questionBank || {};
const codes = window.questionCodes || {};
const themes = window.quizThemes || {};
const resolveAssetUrl=(path)=>new URL(path, window.location.href).toString();

const soundFiles={
  correct:resolveAssetUrl('./sfx/Correct.wav'),
  highlight:resolveAssetUrl('./sfx/highlight.wav'),
  incorrect:resolveAssetUrl('./sfx/Incorrect.wav'),
  begin:resolveAssetUrl('./sfx/QuizBegin.wav'),
  popup:resolveAssetUrl('./sfx/Popup.wav'),
  started:resolveAssetUrl('./secret/Started.mp3'),
  comboUp:resolveAssetUrl('./sfx/ComboUp.wav')
};

const soundCache={};
let soundsMuted=localStorage.getItem('quizHubMuted')==='true';
Object.entries(soundFiles).forEach(([name,path])=>{
  const sound=new Audio(path);
  sound.preload='auto';
  soundCache[name]=sound;
});

let audioUnlocked=false;
function unlockQuizAudio(){
  if(audioUnlocked) return;
  audioUnlocked=true;
  Object.values(soundCache).forEach(sound => {
    try {
      sound.load();
      sound.muted = false;
    } catch (error) {
      console.warn('Could not unlock audio:', error);
    }
  });
  if(!musicMuted && quizMusic && quizMusic.paused){
    startQuizMusic();
  }
  updateMeta();
}

function playSound(name){
  if(soundsMuted) return;
  unlockQuizAudio();
  const soundName=window.quizHubPreferences.blancMode && ['popup','begin','select'].includes(name)
    ? 'started'
    : name;
  const sound=soundCache[soundName];
  if(!sound) return;
  try {
    const soundClone=sound.cloneNode();
    soundClone.currentTime=0;
    soundClone.play().catch(()=>{});
  } catch (error) {
    console.warn('Could not play sound:', error);
  }
}

document.addEventListener('pointerover',event=>{
  const button=event.target.closest('button');
  if(button && !button.contains(event.relatedTarget)) playSound('highlight');
});
document.addEventListener('pointerdown',event=>{
  const button=event.target.closest('button');
  if(button && !button.classList.contains('sound-toggle') && !button.classList.contains('music-toggle')){
    playSound('highlight');
  }
});

const soundToggle=document.getElementById('soundToggle');
function updateSoundToggle(){
  soundToggle.textContent=soundsMuted?'🔇':'🔊';
  soundToggle.setAttribute('aria-label',soundsMuted?'Unmute sounds':'Mute sounds');
  soundToggle.setAttribute('aria-pressed',String(soundsMuted));
}
soundToggle.addEventListener('click',()=>{
  soundsMuted=!soundsMuted;
  localStorage.setItem('quizHubMuted',String(soundsMuted));
  unlockQuizAudio();
  updateSoundToggle();
});
updateSoundToggle();

let musicMuted=localStorage.getItem('quizHubMusicMuted')==='true';
const musicToggle=document.getElementById('musicToggle');
const requestedMusicCategory=new URLSearchParams(location.search).get('category');
const quizMusicFile=
requestedMusicCategory==='DataSci' ? resolveAssetUrl('./music/DataSciMusic.wav') 
: requestedMusicCategory==='CloudComp' ? resolveAssetUrl('./music/CloudCompMusic.wav') 
: requestedMusicCategory==='SoftEngi' ? resolveAssetUrl('./music/SoftEngiMusic.wav') 
: resolveAssetUrl('./music/QuizMusic.wav');
const quizMusic=new Audio(window.quizHubPreferences.resolveQuizMusic(quizMusicFile));
const isPreloadedQuiz=window.self!==window.top;
let quizMusicPending=false;
quizMusic.loop=true;
quizMusic.volume=.45;
function updateMusicToggle(){
  musicToggle.textContent=musicMuted?'♫̸':'♫';
  musicToggle.setAttribute('aria-label',musicMuted?'Unmute music':'Mute music');
  musicToggle.setAttribute('aria-pressed',String(musicMuted));
}
function startQuizMusic(){
  if(isPreloadedQuiz || musicMuted) return;
  quizMusic.play()
    .then(()=>{quizMusicPending=false;})
    .catch(()=>{quizMusicPending=true;});
}
musicToggle.addEventListener('click',()=>{
  musicMuted=!musicMuted;
  localStorage.setItem('quizHubMusicMuted',String(musicMuted));
  unlockQuizAudio();
  if(musicMuted) quizMusic.pause();
  else if(quizStarted) startQuizMusic();
  updateMusicToggle();
});
updateMusicToggle();
startQuizMusic();
document.addEventListener('pointerdown',unlockQuizAudio,{capture:true});
document.addEventListener('touchstart',unlockQuizAudio,{capture:true,passive:true});
document.addEventListener('click',unlockQuizAudio,{capture:true});
document.addEventListener('keydown',unlockQuizAudio,{capture:true});
window.addEventListener('pageshow',startQuizMusic);
document.addEventListener('visibilitychange',()=>{
  if(document.visibilityState==='visible') startQuizMusic();
});

const params = new URLSearchParams(location.search);
const requestedCategory = params.get("category");
const requestedQuiz = params.get("quiz");
const partyRoomCode=(params.get("partyRoom")||"").toUpperCase();
const partyPlayerId=params.get("partyPlayer")||"";
const partyHost=params.get("partyHost")==="true";
const networkPartyActive=/^[A-Z]{4}$/.test(partyRoomCode) && Boolean(partyPlayerId);
const defaultCategory = Object.keys(questionBank)[0] || "CompArch";
const category = requestedCategory && (questionBank[requestedCategory] || codes[requestedCategory]) ? requestedCategory : defaultCategory;
const socIndiReviewSections=category==="SocIndi" && requestedQuiz==="reviewQuiz" &&
  questionBank.SocIndi && questionBank.SocIndi.review && !Array.isArray(questionBank.SocIndi.review)
  ? questionBank.SocIndi.review
  : null;
const availableReviewSections=socIndiReviewSections?Object.keys(socIndiReviewSections):[];
const requestedReviewSections=params.get("reviewSections");
let selectedReviewSections=requestedReviewSections===null
  ? [...availableReviewSections]
  : [...new Set(requestedReviewSections.split(",").filter(section=>availableReviewSections.includes(section)))];
const requestedTimeLimit=params.get("timeLimit");
const requestedQuestionTimeLimit=Number.parseInt(params.get("questionTimeLimit"),10);
const initialQuestionTimeLimit=Number.isInteger(requestedQuestionTimeLimit) &&
  requestedQuestionTimeLimit>=1 && requestedQuestionTimeLimit<=60
  ? requestedQuestionTimeLimit
  : null;

function resolveQuestionBank(course, quizId = null) {
  const source = questionBank[course];
  if (Array.isArray(source)) return source;
  if (!source || typeof source !== "object") return [];

  if (quizId && Array.isArray(source[quizId])) return source[quizId];

  if (quizId === "textbookQuiz") {
    return Array.isArray(source.textbook)
      ? source.textbook
      : Array.isArray(source.textbookQuestions)
        ? source.textbookQuestions
        : [];
  }

  if (quizId === "reviewQuiz") {
    return Array.isArray(source.review)
      ? source.review
      : source.review && typeof source.review === "object"
        ? Object.values(source.review).flat()
      : Array.isArray(source.reviewQuestions)
        ? source.reviewQuestions
        : [];
  }

  return Array.isArray(source.review)
    ? source.review
    : Array.isArray(source.textbook)
      ? source.textbook
      : Object.values(source).find(Array.isArray) || [];
}

function getSelectedQuestionBank(){
  if(!socIndiReviewSections) return resolveQuestionBank(category, requestedQuiz);
  return selectedReviewSections.flatMap(section=>socIndiReviewSections[section] || []);
}

let bank = getSelectedQuestionBank();
const rawMiniQuestions = params.get("miniQuestions");
const customQuestionSequence = rawMiniQuestions
  ? rawMiniQuestions.split(",").map((value) => Number.parseInt(value, 10)).filter((value) => Number.isInteger(value) && value >= 0)
  : [];
const miniQuizMode = params.get("miniQuiz") === "true" || customQuestionSequence.length > 0;
const partyModeRequested=params.get("partyMode")==="true" || networkPartyActive;
let partyPlayers=[];
let partyConfigError="";
let partyHideLockedAnswers=false;
if(partyModeRequested){
  try{
    const savedPartyPlayers=JSON.parse(sessionStorage.getItem("quizHubPartyPlayers") || "null");
    if(!Array.isArray(savedPartyPlayers) || savedPartyPlayers.length<2 || savedPartyPlayers.length>50){
      throw new Error("Party mode needs between two and fifty player profiles.");
    }
    partyPlayers=savedPartyPlayers.map((player,index)=>({
      id:typeof player.id==="string" && player.id ? player.id : `player-${index+1}`,
      name:typeof player.name==="string" && player.name.trim() ? player.name.trim().slice(0,24) : `Player ${index+1}`,
      color:typeof player.color==="string" && /^#[0-9a-f]{6}$/i.test(player.color) ? player.color : "#4688e8",
      photo:typeof player.photo==="string" && player.photo.startsWith("data:image/") ? player.photo : "",
      score:0
    }));
    const partySetup=JSON.parse(sessionStorage.getItem("quizHubPartySetup") || "null");
    partyHideLockedAnswers=partySetup?.hideLockedAnswers===true;
  }catch(error){
    partyConfigError=error.message;
  }
}
const partyModeActive=partyModeRequested && (partyPlayers.length>=2 || networkPartyActive);
if(networkPartyActive && partyPlayers.length<2){
  partyConfigError="The shared player list could not be loaded.";
}
let partyTurns=[];
let partyChoices=[];
let partyHistory=[];
let partyCurrentPlayer=null;
let partyTurnAnimating=false;
let partyTurnAnimation=null;
let partyTurnTimer=null;
let partyTurnToken=0;
const partyConnection=networkPartyActive?new window.QuizHubPartyClient():null;
let partyConnectionReady=false;
let partyStartPending=false;

const theme = themes[category] || themes.CompArch || {
  pageBg: "#6f7d86",
  visualBg: "#348ac0",
  courseText: "#0e426c",
  questionText: "#0e426c",
  panelBg: "#6f7d86",
  panelBorder: "#91a4bf",
  buttonBg: "#b9bec0",
  buttonAccent: "#7a1731",
  success: "#39c85a",
  danger: "#d94b4b"
};

const root = document.documentElement;
root.style.setProperty("--quiz-page-bg", theme.pageBg);
root.style.setProperty("--quiz-visual-bg", theme.visualBg);
root.style.setProperty("--quiz-course-text", theme.courseText);
root.style.setProperty("--quiz-question-text", theme.questionText);
root.style.setProperty("--quiz-hud-text", theme.hudText || "#111111");
root.style.setProperty("--quiz-panel-bg", theme.panelBg);
root.style.setProperty("--quiz-panel-border", theme.panelBorder);
root.style.setProperty("--quiz-button-bg", theme.buttonBg);
root.style.setProperty("--quiz-button-accent", theme.buttonAccent);
root.style.setProperty("--quiz-success-color", theme.success);
root.style.setProperty("--quiz-danger-color", theme.danger);

const courseCode = document.getElementById("courseCode");
const answersEl = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const skipButton = document.getElementById("skip");
const nextButton = document.getElementById("next");
const quitButton = document.getElementById("quit");
const fade = document.getElementById("fade");
const setup = document.getElementById("quizSetup");
const content = document.getElementById("quizContent");
const countInput = document.getElementById("questionCount");
const countMax = document.getElementById("countMax");
const setupCount = document.getElementById("setupCount");
const setupError = document.getElementById("setupError");
const socIndiTimeLimits=document.getElementById("socIndiTimeLimits");
const perQuestionTimeLimit=document.getElementById("perQuestionTimeLimit");
const reviewSectionDialog=document.getElementById("reviewSectionDialog");
const reviewSectionTrigger=document.getElementById("reviewSectionTrigger");
const reviewSectionClose=document.getElementById("reviewSectionClose");
const reviewSectionDone=document.getElementById("reviewSectionDone");
const reviewSectionChoices=document.getElementById("reviewSectionChoices");
const beginButton = document.getElementById("beginQuiz");
const setupTitle=document.getElementById("setupTitle");
const exitSetupButton = document.getElementById("exitSetup");
const timer = document.getElementById("timer");
const questionTimer=document.getElementById("questionTimer");
const scoreDisplay = document.getElementById('scoreDisplay');
const comboDisplay = document.getElementById('comboDisplay');
const comboPopup = document.getElementById('comboPopup');
const questionDisplay = document.getElementById('questionDisplay');

const partyScoreDisplay=document.getElementById("partyScoreDisplay");
const partyScoreToggle=document.getElementById("partyScoreToggle");
const partySettingsSummary=document.getElementById("partySettingsSummary");
const partyPlayerLeftDialog=document.getElementById("partyPlayerLeftDialog");
const partyPlayerLeftMessage=document.getElementById("partyPlayerLeftMessage");
const questionTitle = document.getElementById('questionTitle');
const isSoftEngi = category === "SoftEngi";
const softengiSidebar = document.getElementById('softengiSidebar');
const softengiScore = document.getElementById('softengiScore');
const softengiCombo = document.getElementById('softengiCombo');
const softengiAccuracy = document.getElementById('softengiAccuracy');
const softengiProgress = document.getElementById('softengiProgress');
const softengiProgressTrack = document.querySelector('.softengi-progress-track');
const softengiProgressBar = document.getElementById('softengiProgressBar');
const softengiTime = document.getElementById('softengiTime');

if (isSoftEngi) {
  document.body.classList.add('softengi-mode');
  softengiSidebar.hidden = false;
  const softengiComposer = document.querySelector('.softengi-composer');
  const questionHeading = questionTitle.closest('.quiz-heading');
  if (softengiComposer && questionHeading) {
    softengiComposer.parentElement.insertBefore(questionHeading, softengiComposer);
    softengiComposer.after(feedback);
  }
}
if(partyModeActive) document.body.classList.add("party-mode");
if(partyModeRequested && !partyModeActive){
  setupError.textContent=`Party mode could not start: ${partyConfigError}`;
  beginButton.disabled=true;
}
if(networkPartyActive){
  beginButton.disabled=!partyHost;
  partySettingsSummary.hidden=false;
  partySettingsSummary.textContent="Waiting for the host to choose quiz settings…";
  if(!partyHost){
    beginButton.textContent="WAITING FOR HOST";
    setup.classList.add("party-network-guest");
    setupTitle.textContent="Waiting for Host";
    setupError.textContent="Waiting for the host to configure and start the quiz…";
    setup.querySelectorAll("input, select, #reviewSectionTrigger").forEach((control)=>{
      control.disabled=true;
    });
    skipButton.hidden=true;
    nextButton.hidden=true;
    quitButton.textContent="LEAVE GAME";
    quitButton.setAttribute("aria-label","Leave game");
  }
}

courseCode.textContent = `${codes[category] || category} - QUIZ`;
let totalAvailable = bank.length;
countInput.max = Math.max(1, totalAvailable);
countInput.value = Math.max(1, totalAvailable);
countMax.textContent = `of ${totalAvailable}`;
setupCount.textContent = `${totalAvailable} question${totalAvailable === 1 ? "" : "s"} available in this quiz.`;

let orderMode = "random";
let timeLimitMinutes = null;
let perQuestionTimeMinutes = initialQuestionTimeLimit;
let selectedQuestionCount = totalAvailable;
let questionSequence = [];
let sequencePosition = 0;
let current = null;
let currentQuestionIndex = null;
let questionNumber = 0;
let score = 0;
let combo = 0;
let longestCombo = 0;
const partyComboStreaks=new Map();
const partyLongestComboStreaks=new Map();
let answered = false;
let history = [];
let quizStarted = false;
let remainingSeconds = null;
let timerInterval = null;
let remainingQuestionSeconds = null;
let questionTimerInterval = null;
let quizEnded = false;
let questionTypingTimer = null;
let feedbackTypingTimer = null;

socIndiTimeLimits.hidden=!socIndiReviewSections;
for(let minutes=1;minutes<=60;minutes++){
  const option=document.createElement("option");
  option.value=String(minutes);
  option.textContent=`${minutes} minute${minutes===1?"":"s"}`;
  perQuestionTimeLimit.appendChild(option);
}
if(initialQuestionTimeLimit!==null){
  perQuestionTimeLimit.value=String(initialQuestionTimeLimit);
}
if(requestedTimeLimit!==null){
  const timeOption=[...document.querySelectorAll('input[name="timeLimit"]')]
    .find(input=>input.value===requestedTimeLimit &&
      (!["100","150"].includes(input.value) || Boolean(socIndiReviewSections)));
  if(timeOption) timeOption.checked=true;
}

if(socIndiReviewSections){
  reviewSectionTrigger.hidden=false;
  availableReviewSections.forEach(section=>{
    const label=document.createElement("label");
    label.className="review-section-choice";
    const checkbox=document.createElement("input");
    checkbox.type="checkbox";
    checkbox.value=section;
    checkbox.checked=selectedReviewSections.includes(section);
    const text=document.createElement("span");
    text.textContent=section;
    label.append(checkbox,text);
    reviewSectionChoices.appendChild(label);
    checkbox.addEventListener("change",()=>{
      selectedReviewSections=[...reviewSectionChoices.querySelectorAll("input:checked")].map(input=>input.value);
      bank=getSelectedQuestionBank();
      totalAvailable=bank.length;
      const currentCount=Number.parseInt(countInput.value,10);
      countInput.max=Math.max(1,totalAvailable);
      countInput.value=Math.min(Number.isFinite(currentCount)?currentCount:totalAvailable,Math.max(1,totalAvailable));
      selectedQuestionCount=Number.parseInt(countInput.value,10);
      countMax.textContent=`of ${totalAvailable}`;
      setupCount.textContent=`${totalAvailable} question${totalAvailable===1?"":"s"} available in the selected sections.`;
      reviewSectionTrigger.textContent=`Choose review sections (${selectedReviewSections.length} selected)`;
      setupError.textContent="";
      publishPartySettings();
    });
  });
  reviewSectionTrigger.textContent=`Choose review sections (${selectedReviewSections.length} selected)`;
  reviewSectionTrigger.addEventListener("click",()=>reviewSectionDialog.showModal());
  reviewSectionClose.addEventListener("click",()=>reviewSectionDialog.close());
  reviewSectionDone.addEventListener("click",()=>reviewSectionDialog.close());
}

function shuffle(array){
  const copy = [...array];
  for(let i=copy.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [copy[i],copy[j]]=[copy[j],copy[i]];
  }
  return copy;
}

function shuffleWithoutConsecutiveDuplicates(array){
  const copy = [...array];

  if (copy.length < 2) return copy;

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  for (let i = 1; i < copy.length; i++) {
    if (copy[i] === copy[i - 1]) {
      const swapIndex = copy.findIndex((value, index) => index > i && value !== copy[i - 1]);
      if (swapIndex !== -1) {
        [copy[i], copy[swapIndex]] = [copy[swapIndex], copy[i]];
      }
    }
  }

  return copy;
}

function buildQuestionSequence(){
  const originalSequence = bank.map((_, index) => index);

  if (orderMode === 'random') {
    questionSequence = shuffle(originalSequence);
    if (originalSequence.length > 1 && questionSequence.every((value, index) => value === originalSequence[index])) {
      questionSequence = buildQuestionSequence();
      return;
    }
  } else {
    questionSequence = originalSequence;
  }

  questionSequence = questionSequence.slice(0, selectedQuestionCount);
  sequencePosition = 0;
}

function updateMeta(){
  if (scoreDisplay) scoreDisplay.textContent = `Score: ${score}`;
  if (comboDisplay) comboDisplay.textContent = `Combo: ${combo}`;
  if (questionDisplay) {
    if (current) {
      const remaining = Math.max(0, selectedQuestionCount - questionNumber);
      questionDisplay.textContent = `Question ${questionNumber} of ${selectedQuestionCount} • ${remaining} left`;
    } else {
      questionDisplay.textContent = 'Question 0 of 0';
    }
  }
  if (softengiScore) softengiScore.textContent = `${score} / ${selectedQuestionCount}`;
  if (softengiCombo) softengiCombo.textContent = String(combo);
  if (softengiAccuracy) {
    const accuracy = history.length ? Math.round((score / history.length) * 100) : 0;
    softengiAccuracy.textContent = `${accuracy}%`;
  }
  if (softengiProgress) {
    softengiProgress.textContent = current
      ? `${questionNumber} / ${selectedQuestionCount}`
      : `0 / ${totalAvailable}`;
  }
  if (softengiProgressTrack && softengiProgressBar) {
    const progress = selectedQuestionCount ? (questionNumber / selectedQuestionCount) * 100 : 0;
    softengiProgressTrack.setAttribute('aria-valuenow', String(Math.round(progress)));
    softengiProgressBar.style.width = `${progress}%`;
  }
  updatePartyScoreDisplay();
}

function resetPartyComboStreaks(){
  partyComboStreaks.clear();
  partyLongestComboStreaks.clear();
  partyPlayers.forEach((player)=>partyComboStreaks.set(player.id,0));
  partyPlayers.forEach((player)=>partyLongestComboStreaks.set(player.id,0));
  combo=0;
  longestCombo=0;
}

function updatePartyComboStreaks(correctPlayerIds){
  const correctPlayers=new Set(correctPlayerIds);
  let anyStreakIncreased=false;
  partyPlayers.forEach((player)=>{
    const previousStreak=partyComboStreaks.get(player.id)||0;
    const streak=correctPlayers.has(player.id)?previousStreak+1:0;
    partyComboStreaks.set(player.id,streak);
    partyLongestComboStreaks.set(
      player.id,
      Math.max(partyLongestComboStreaks.get(player.id)||0,streak)
    );
    if(streak>previousStreak) anyStreakIncreased=true;
  });
  combo=networkPartyActive
    ? partyComboStreaks.get(partyPlayerId)||0
    : Math.max(0,...partyComboStreaks.values());
  longestCombo=Math.max(longestCombo,combo);
  if(anyStreakIncreased && combo>1) showComboPopup();
}

function updatePartyScoreDisplay(){
  if(!partyScoreDisplay) return;
  partyScoreDisplay.hidden=!partyModeActive;
  partyScoreToggle.hidden=!partyModeActive;
  if(!partyModeActive) return;
  partyScoreDisplay.replaceChildren(...partyPlayers.map((player)=>{
    const score=document.createElement("span");
    score.className="party-player-score-item";
    score.style.setProperty("--party-player-color",player.color);
    score.textContent=`${player.name}: ${player.score}`;
    score.setAttribute("aria-label",`${player.name}: ${player.score} points`);
    return score;
  }));
}

function updatePartySettingsSummary(config){
  if(!networkPartyActive || !partySettingsSummary) return;
  partySettingsSummary.hidden=false;
  if(!config){
    partySettingsSummary.textContent="Waiting for the host to choose quiz settings…";
    return;
  }
  const quizTime=config.timeLimitMinutes===null
    ? "No quiz time limit"
    : `${config.timeLimitMinutes} minute quiz limit`;
  const questionTime=config.perQuestionTimeMinutes===null
    ? "No per-question timer"
    : `${config.perQuestionTimeMinutes} minute per-question timer`;
  const reviewSections=Array.isArray(config.reviewSections) && config.reviewSections.length
    ? ` · Sections: ${config.reviewSections.join(", ")}`
    : "";
  const questionCount=Number.isInteger(config.questionCount)
    ? config.questionCount
    : config.questionSequence?.length;
  if(!Number.isInteger(questionCount)) return;
  partySettingsSummary.textContent=
    `Host settings: ${questionCount} questions · ${config.orderMode==="static"?"Static":"Random"} order · ${quizTime} · ${questionTime}${reviewSections}`;
}

function publishPartySettings(){
  if(!networkPartyActive || !partyHost || quizStarted) return;
  const questionCount=Number.parseInt(countInput.value,10);
  if(!Number.isInteger(questionCount) || questionCount<1 || questionCount>totalAvailable) return;
  const selectedTime=document.querySelector('input[name="timeLimit"]:checked');
  const selectedOrder=document.querySelector('input[name="order"]:checked');
  const questionMinutes=perQuestionTimeLimit.value==="none"
    ? null
    : Number.parseInt(perQuestionTimeLimit.value,10);
  const config={
    questionCount,
    orderMode:selectedOrder?.value==="static"?"static":"random",
    timeLimitMinutes:selectedTime && selectedTime.value!=="none"
      ? Number(selectedTime.value)
      : null,
    perQuestionTimeMinutes:Number.isInteger(questionMinutes)?questionMinutes:null,
    reviewSections:socIndiReviewSections?selectedReviewSections:[]
  };
  partyConnection.send({type:"quiz-config",code:partyRoomCode,config}).catch((error)=>{
    setupError.textContent=`Could not share quiz settings: ${error.message}`;
  });
  updatePartySettingsSummary(config);
}

function createPartyAvatar(player,className){
  const avatar=document.createElement("span");
  avatar.className=className;
  avatar.style.setProperty("--party-player-color",player.color);
  if(window.quizHubPreferences.blancMode || player.photo){
    const image=document.createElement("img");
    image.src=window.quizHubPreferences.blancMode?"secret/blanc.png":player.photo;
    image.alt="";
    avatar.appendChild(image);
  }else{
    avatar.textContent=player.name.trim().charAt(0).toUpperCase();
  }
  return avatar;
}



function setPartyAnswerAvailability(available){
  answersEl.querySelectorAll(".answer").forEach((button)=>{button.disabled=!available;});
  skipButton.disabled=!available;
}

function updatePartyAnswerMarker(button){
  let markers=button.querySelector(".party-answer-voters");
  if(!markers){
    markers=document.createElement("span");
    markers.className="party-answer-voters";
    button.appendChild(markers);
  }
  markers.replaceChildren();
  if(partyHideLockedAnswers && !answered){
    markers.hidden=true;
    return;
  }
  partyChoices.filter((choice)=>choice.selectedIndex===Number(button.dataset.originalIndex))
    .forEach((choice)=>{
      const player=partyPlayers.find((entry)=>entry.id===choice.playerId);
      if(player){
        const voter=document.createElement("span");
        voter.className="party-answer-voter";
        voter.setAttribute("role","img");
        voter.title=`${player.name} locked in this answer`;
        voter.setAttribute("aria-label",`${player.name} locked in this answer`);
        const avatar=createPartyAvatar(player,"party-answer-avatar");
        avatar.setAttribute("aria-hidden","true");
        voter.append(
          avatar,
          Object.assign(document.createElement("span"),{
            className:"party-answer-voter-name",
            textContent:player.name
          })
        );
        markers.appendChild(voter);
      }
    });
  markers.hidden=markers.childElementCount===0;
}

function buildNetworkAnswerOrder(question,questionNumberIndex,questionIndex){
  const indexes=question.a.map((answer,index)=>answer==="BLANK"?null:index).filter((index)=>index!==null);
  if(indexes.length<2 || indexes.length>4) throw new Error("Online party questions must have between two and four answer choices.");
  let seed=Array.from(`${partyRoomCode}:${questionNumberIndex}:${questionIndex}`)
    .reduce((value,character)=>Math.imul(value^character.charCodeAt(0),16777619)>>>0,2166136261);
  for(let index=indexes.length-1;index>0;index--){
    seed=(Math.imul(seed,1664525)+1013904223)>>>0;
    const swap=seed%(index+1);
    [indexes[index],indexes[swap]]=[indexes[swap],indexes[index]];
  }
  return indexes;
}

function getNetworkQuestion(question,questionIndex){
  const answerEntries=question.a
    .map((answer,index)=>({answer,index}))
    .filter((entry)=>entry.answer!=="BLANK");
  const correctPosition=answerEntries.findIndex((entry)=>entry.index===question.c);
  if(correctPosition<0) throw new Error("Could not locate the correct answer for an online party question.");
  const answers=answerEntries.map((entry)=>entry.answer);
  if(answers.length>4) throw new Error("Online party questions cannot have more than four answer choices.");
  if(answers.length===4) return {...question,a:answers,c:correctPosition};
  const seen=new Set(answers.map((answer)=>String(answer).trim().toLowerCase()));
  const candidates=[];
  bank.forEach((entry)=>{
    if(!entry || !Array.isArray(entry.a)) return;
    entry.a.forEach((answer)=>{
      if(typeof answer!=="string" || answer==="BLANK") return;
      const key=answer.trim().toLowerCase();
      if(key && !seen.has(key)){
        seen.add(key);
        candidates.push(answer);
      }
    });
  });
  if(candidates.length<4-answers.length){
    throw new Error("Could not find enough answer choices to build an A–D question.");
  }
  let seed=Array.from(`${partyRoomCode}:${questionIndex}`)
    .reduce((value,character)=>Math.imul(value^character.charCodeAt(0),16777619)>>>0,2166136261);
  for(let index=candidates.length-1;index>0;index--){
    seed=(Math.imul(seed,1664525)+1013904223)>>>0;
    const swap=seed%(index+1);
    [candidates[index],candidates[swap]]=[candidates[swap],candidates[index]];
  }
  return {...question,a:[...answers,...candidates.slice(0,4-answers.length)],c:correctPosition};
}

function updateNetworkPlayers(players){
  if(!Array.isArray(players)) return;
  players.forEach((updated)=>{
    const player=partyPlayers.find((candidate)=>candidate.id===updated.id);
    if(player && Number.isFinite(Number(updated.score))) player.score=Number(updated.score);
  });
  updatePartyScoreDisplay();
}

function startNetworkQuiz(config,roomSnapshot=null){
  if(!config || !Array.isArray(config.questionSequence) || config.questionSequence.length<1){
    setupError.textContent="The host sent an invalid quiz setup.";
    return;
  }
  partyStartPending=false;
  beginButton.disabled=!partyHost;
  questionSequence=config.questionSequence.slice();
  selectedQuestionCount=questionSequence.length;
  countInput.value=String(selectedQuestionCount);
  orderMode=config.orderMode==="static"?"static":"random";
  timeLimitMinutes=Number.isFinite(config.timeLimitMinutes)?config.timeLimitMinutes:null;
  perQuestionTimeMinutes=Number.isFinite(config.perQuestionTimeMinutes)?config.perQuestionTimeMinutes:null;
  if(Array.isArray(config.reviewSections) && socIndiReviewSections){
    selectedReviewSections=config.reviewSections.filter((section)=>availableReviewSections.includes(section));
    bank=getSelectedQuestionBank();
  }
  score=0;
  resetPartyComboStreaks();
  history=[];
  partyHistory=[];
  sequencePosition=0;
  quizStarted=true;
  setup.classList.remove("party-network-guest");
  if(isSoftEngi) document.body.classList.add("softengi-active");
  playSound("begin");
  startQuizMusic();
  setup.hidden=true;
  content.hidden=false;
  startTimer();
  updateMeta();
  if(roomSnapshot?.question){
    const question=roomSnapshot.question;
    displayNetworkQuestion(question);
    if(roomSnapshot.reveal) revealNetworkQuestion(roomSnapshot.reveal);
    else if(roomSnapshot.answersLocked?.includes(partyPlayerId)){
      answered=true;
      stopQuestionTimer();
      answersEl.querySelectorAll(".answer").forEach((button)=>{button.disabled=true;});
      skipButton.disabled=true;
      feedback.textContent="Your answer is locked in. Waiting for the other players…";
      feedback.className="motivation visible";

    }
  }else if(partyHost) loadQuestion();
  else{

  }
}

function displayNetworkQuestion(message){
  if(!Array.isArray(message.answerOrder) || message.answerOrder.length!==4) return;
  if(message.questionNumber<0 || message.questionNumber>=questionSequence.length ||
      questionSequence[message.questionNumber]!==message.questionIndex || !bank[message.questionIndex]){
    setupError.textContent="The host sent a question that does not match this quiz.";
    return;
  }
  if(partyHost && currentQuestionIndex===message.questionIndex && questionNumber===message.questionNumber+1) return;
  sequencePosition=message.questionNumber;
  currentQuestionIndex=message.questionIndex;
  partyChoices=[];
  try{
    current=getNetworkQuestion(bank[currentQuestionIndex],currentQuestionIndex);
  }catch(error){
    setupError.textContent=error.message;
    return;
  }
  questionNumber=sequencePosition+1;
  renderQuestion(message.answerOrder);
  startQuestionTimer();

}

function lockNetworkAnswerUi(selectedIndex){
  answered=true;
  stopQuestionTimer();
  if(selectedIndex!==null){
    const ownChoice=partyChoices.find((choice)=>choice.playerId===partyPlayerId);
    if(ownChoice) ownChoice.selectedIndex=selectedIndex;
    else partyChoices.push({playerId:partyPlayerId,selectedIndex});
    const selectedButton=answersEl.querySelector(`.answer[data-original-index="${selectedIndex}"]`);
    if(selectedButton) updatePartyAnswerMarker(selectedButton);
  }
  answersEl.querySelectorAll(".answer").forEach((button)=>{
    button.disabled=true;
    if(selectedIndex!==null && Number(button.dataset.originalIndex)===selectedIndex){
      button.classList.add("party-answer-locked");
    }
  });
  skipButton.disabled=true;
  nextButton.disabled=true;
  feedback.textContent="Answer locked in. Waiting for the other players…";
  feedback.className="motivation visible";

}

function submitNetworkAnswer(selectedIndex){
  if(!quizStarted || quizEnded || answered) return;
  lockNetworkAnswerUi(selectedIndex);
  partyConnection.send({
    type:"answer",
    code:partyRoomCode,
    questionNumber:questionNumber-1,
    answerIndex:selectedIndex
  }).catch((error)=>{
    setupError.textContent=`Could not submit answer: ${error.message}`;
  });
}

function revealNetworkQuestion(message){
  if(!current || !Array.isArray(message.answers)) return;
  stopQuestionTimer();
  answered=true;
  partyChoices=message.answers.map((entry)=>({
    playerId:entry.playerId,
    selectedIndex:entry.selectedIndex
  }));
  message.answers.forEach((entry)=>{
    const player=partyPlayers.find((candidate)=>candidate.id===entry.playerId);
    if(player && Number.isFinite(Number(entry.score))) player.score=Number(entry.score);
  });
  const buttons=[...answersEl.querySelectorAll(".answer")];
  buttons.forEach((button)=>{
    const index=Number(button.dataset.originalIndex);
    button.disabled=true;
    if(index===message.correctIndex) button.classList.add("correct");
    if(message.answers.some((entry)=>entry.selectedIndex===index && index!==message.correctIndex)){
      button.classList.add("wrong");
    }
    updatePartyAnswerMarker(button);
  });
  const ownAnswer=message.answers.find((entry)=>entry.playerId===partyPlayerId);
  const ownPlayer=partyPlayers.find((player)=>player.id===partyPlayerId);
  const correctAnswer=current.a[message.correctIndex];
  const correctCount=message.answers.filter((entry)=>entry.correct).length;
  updatePartyComboStreaks(
    message.answers.filter((entry)=>entry.correct).map((entry)=>entry.playerId)
  );
  history.push({
    question:current.q,
    questionIndex:currentQuestionIndex,
    selected:!ownAnswer || ownAnswer.selectedIndex===null?"":current.a[ownAnswer.selectedIndex],
    correctAnswer,
    correct:ownAnswer?.correct===true,
    skipped:ownAnswer?.selectedIndex===null,
    timedOut:false
  });
  partyHistory.push({
    question:current.q,
    correctAnswer,
    selections:message.answers.map((entry)=>{
      const player=partyPlayers.find((candidate)=>candidate.id===entry.playerId);
      return {
        playerId:entry.playerId,
        playerName:player?.name||"",
        selected:entry.selectedIndex===null?"":current.a[entry.selectedIndex],
        correct:entry.correct===true
      };
    }),
    timedOut:false
  });
  score=partyPlayers.reduce((total,player)=>total+player.score,0);
  feedback.textContent=`${correctCount} of ${partyPlayers.length} players answered correctly. Correct answer: ${formatPowerText(correctAnswer)}`;
  feedback.className=`motivation visible ${ownAnswer?.correct?"right":"wrong"}`;
  nextButton.disabled=!partyHost;
  skipButton.disabled=true;

  updateMeta();
  if(partyHost){
    if(questionNumber>=selectedQuestionCount){
      nextButton.textContent="FINISH QUIZ";
      nextButton.setAttribute("aria-label","Finish quiz");
    }else{
      nextButton.textContent="NEXT";
      nextButton.setAttribute("aria-label","Next question");
    }
  }
}

function beginPartyQuestion(){
  if(networkPartyActive) return;
  if(!partyModeActive) return;
  if(partyTurnTimer!==null){
    clearTimeout(partyTurnTimer);
    partyTurnTimer=null;
  }
  if(partyTurnAnimation!==null){
    clearInterval(partyTurnAnimation);
    partyTurnAnimation=null;
  }
  partyTurnToken++;
  partyTurnAnimating=false;
  partyChoices=[];
  partyTurns=shuffle(partyPlayers.map((player)=>player.id));
  partyCurrentPlayer=null;

  setPartyAnswerAvailability(false);
  assignNextPartyPlayer();
}

function assignNextPartyPlayer(){
  if(partyTurns.length===0 || answered || quizEnded) return;
  const token=++partyTurnToken;
  const candidates=partyTurns.map((id)=>partyPlayers.find((player)=>player.id===id)).filter(Boolean);
  if(candidates.length===1){
    partyCurrentPlayer=candidates[0];
    partyTurnAnimating=false;
    showPartyTurn(partyCurrentPlayer);
    setPartyAnswerAvailability(true);
    return;
  }
  partyTurnAnimating=true;
  setPartyAnswerAvailability(false);
  const chosen=candidates[Math.floor(Math.random()*candidates.length)];
  let frame=0;
  const frameCount=10;
  showPartyTurn(candidates[0],true);
  partyTurnAnimation=setInterval(()=>{
    if(token!==partyTurnToken){
      clearInterval(partyTurnAnimation);
      partyTurnAnimation=null;
      return;
    }
    frame++;
    const visiblePlayer=frame>=frameCount?chosen:candidates[frame%candidates.length];
    showPartyTurn(visiblePlayer,true);
    if(frame>=frameCount){
      clearInterval(partyTurnAnimation);
      partyTurnAnimation=null;
      partyCurrentPlayer=chosen;
      partyTurnAnimating=false;
      showPartyTurn(chosen);
      setPartyAnswerAvailability(true);
    }
  },75);
}

function finishPartyQuestion(timedOut=false){
  if(!partyModeActive || answered || quizEnded) return;
  if(partyTurnTimer!==null){
    clearTimeout(partyTurnTimer);
    partyTurnTimer=null;
  }
  if(partyTurnAnimation!==null){
    clearInterval(partyTurnAnimation);
    partyTurnAnimation=null;
  }
  partyTurnToken++;
  partyTurnAnimating=false;
  partyCurrentPlayer=null;
  stopQuestionTimer();
  answered=true;
  let correctThisQuestion=0;
  partyChoices.forEach((choice)=>{
    if(choice.selectedIndex===current.c){
      const player=partyPlayers.find((entry)=>entry.id===choice.playerId);
      if(player){
        player.score++;
        correctThisQuestion++;
      }
    }
  });
  if(correctThisQuestion>0) score+=correctThisQuestion;
  updatePartyComboStreaks(
    partyChoices
      .filter((choice)=>choice.selectedIndex===current.c)
      .map((choice)=>choice.playerId)
  );
  partyHistory.push({
    question:current.q,
    correctAnswer:current.a[current.c],
    selections:partyChoices.map((choice)=>{
      const player=partyPlayers.find((entry)=>entry.id===choice.playerId);
      return {
        playerId:choice.playerId,
        playerName:player?player.name:"",
        selected:choice.selectedIndex===null?"":current.a[choice.selectedIndex],
        correct:choice.selectedIndex===current.c
      };
    }),
    timedOut
  });
  const buttons=[...answersEl.querySelectorAll(".answer")];
  buttons.forEach((button)=>{
    const index=Number(button.dataset.originalIndex);
    button.disabled=true;
    if(index===current.c) button.classList.add("correct");
    if(partyChoices.some((choice)=>choice.selectedIndex===index && index!==current.c)){
      button.classList.add("wrong");
    }
    updatePartyAnswerMarker(button);
  });
  feedback.textContent=`${correctThisQuestion} player${correctThisQuestion===1?"":"s"} got it right. Correct answer: ${formatPowerText(current.a[current.c])}`;
  feedback.className="motivation visible";
  nextButton.disabled=false;
  skipButton.disabled=true;

  updateMeta();
}

function recordPartySelection(selectedIndex){
  if(!quizStarted || quizEnded || answered || !partyCurrentPlayer || partyTurnAnimating) return;
  const player=partyCurrentPlayer;
  partyChoices.push({playerId:player.id,selectedIndex});
  partyTurns=partyTurns.filter((id)=>id!==player.id);
  if(selectedIndex!==null){
    const button=answersEl.querySelector(`.answer[data-original-index="${selectedIndex}"]`);
    if(button) updatePartyAnswerMarker(button);
  }
  partyCurrentPlayer=null;
  setPartyAnswerAvailability(false);
  if(partyTurns.length===0){
    finishPartyQuestion();
    return;
  }

  partyTurnTimer=setTimeout(()=>{
    partyTurnTimer=null;
    assignNextPartyPlayer();
  },260);
}

function formatTime(seconds){
  const safe = Math.max(0, Number(seconds) || 0);
  const mins = Math.floor(safe/60);
  const secs = safe % 60;
  return `${String(mins).padStart(2,"0")}:${String(secs).padStart(2,"0")}`;
}

function toSuperscript(value){
  const map = { '0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹' };
  return String(value).split('').map((char) => map[char] || char).join('');
}

function formatPowerText(value){
  if (typeof value !== 'string') return value;

  return value.replace(/(\d+)\s*\^\s*(\d+)/g, (_, base, exponent) => {
    return `${base}${toSuperscript(exponent)}`;
  });
}

function showQuestionTitle(){
  if (!questionTitle || !current) return;
  if (questionTypingTimer !== null) {
    clearInterval(questionTypingTimer);
    questionTypingTimer = null;
  }

  if (!isSoftEngi) {
    questionTitle.textContent = formatPowerText(current.q);
    return;
  }

  const emojis = ['✨','💡','🧠','🚀','🔍','🎯'];
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  const title = `${formatPowerText(current.q)} ${emoji}`;
  const titleLength = Array.from(title).length;
  questionTitle.classList.toggle('question-long', titleLength > 100);
  questionTitle.classList.toggle('question-very-long', titleLength > 160);
  questionTitle.classList.add('typing');

  const motionMode = window.quizHubPreferences.motionMode;
  if (motionMode === 'reduced' ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    questionTitle.textContent = title;
    questionTitle.classList.remove('typing');
    return;
  }

  const characters = Array.from(title);
  let position = 0;
  questionTitle.textContent = '';
  const typeNextCharacter = () => {
    questionTitle.textContent = characters.slice(0, position + 1).join('');
    position++;
    if (position >= characters.length) {
      clearInterval(questionTypingTimer);
      questionTypingTimer = null;
      questionTitle.classList.remove('typing');
    }
  };

  typeNextCharacter();
  const defaultTypingSpeed = titleLength > 120 ? 8 : 12;
  const typingSpeed = motionMode === 'minimal'
    ? Math.max(1, Math.round(defaultTypingSpeed * 0.75))
    : defaultTypingSpeed;
  questionTypingTimer = setInterval(typeNextCharacter, typingSpeed);
}

function typeSoftEngiFeedback(){
  if (!isSoftEngi) return;
  if (feedbackTypingTimer !== null) {
    clearInterval(feedbackTypingTimer);
    feedbackTypingTimer = null;
  }

  const text = feedback.textContent;
  feedback.classList.add('softengi-typing');
  const motionMode = window.quizHubPreferences.motionMode;
  if (!text || motionMode === 'reduced' ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    feedback.classList.remove('softengi-typing');
    return;
  }

  const characters = Array.from(text);
  let position = 0;
  feedback.textContent = '';
  const typeNextCharacter = () => {
    feedback.textContent = characters.slice(0, position + 1).join('');
    position++;
    if (position >= characters.length) {
      clearInterval(feedbackTypingTimer);
      feedbackTypingTimer = null;
      feedback.classList.remove('softengi-typing');
    }
  };

  typeNextCharacter();
  const defaultTypingSpeed = characters.length > 120 ? 8 : 12;
  const typingSpeed = motionMode === 'minimal'
    ? Math.max(1, Math.round(defaultTypingSpeed * 0.75))
    : defaultTypingSpeed;
  feedbackTypingTimer = setInterval(typeNextCharacter, typingSpeed);
}

function updateTimer(){
  if(remainingSeconds === null){
    timer.hidden = true;
    if (softengiTime) softengiTime.textContent = 'No limit';
    return;
  }
  timer.hidden = false;
  timer.textContent = formatTime(remainingSeconds);
  timer.classList.toggle("warning", remainingSeconds <= 60);
  if (softengiTime) softengiTime.textContent = formatTime(remainingSeconds);
}

function stopTimer(){
  if(timerInterval !== null){
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function updateQuestionTimer(){
  if(remainingQuestionSeconds===null){
    questionTimer.hidden=true;
    questionTimer.classList.remove("flashing");
    return;
  }
  questionTimer.hidden=false;
  questionTimer.textContent=formatTime(remainingQuestionSeconds);
  questionTimer.classList.toggle("flashing",remainingQuestionSeconds<=5);
}

function stopQuestionTimer(){
  if(questionTimerInterval!==null){
    clearInterval(questionTimerInterval);
    questionTimerInterval=null;
  }
  remainingQuestionSeconds=null;
  updateQuestionTimer();
}

function startQuestionTimer(){
  stopQuestionTimer();
  if(perQuestionTimeMinutes===null){
    remainingQuestionSeconds=null;
    updateQuestionTimer();
    return;
  }
  remainingQuestionSeconds=perQuestionTimeMinutes*60;
  updateQuestionTimer();
  questionTimerInterval=setInterval(()=>{
    remainingQuestionSeconds--;
    updateQuestionTimer();
    if(remainingQuestionSeconds<=0){
      stopQuestionTimer();
      playSound("popup");
      if(networkPartyActive && partyHost){
        partyConnection.send({type:"question-timeout",code:partyRoomCode})
          .catch((error)=>{setupError.textContent=`Could not time out the shared question: ${error.message}`;});
      }else if(networkPartyActive){
        answered=true;
        answersEl.querySelectorAll(".answer").forEach((button)=>{button.disabled=true;});
        skipButton.disabled=true;

      }else if(partyModeActive) finishPartyQuestion(true);
      else revealQuestion("timeout");
    }
  },1000);
}

function startTimer(){
  stopTimer();
  if(timeLimitMinutes === null){
    remainingSeconds = null;
    updateTimer();
    return;
  }
  remainingSeconds = timeLimitMinutes * 60;
  updateTimer();
  timerInterval = setInterval(()=>{
    remainingSeconds--;
    updateTimer();
    if(remainingSeconds <= 0){
      stopTimer();
      if(networkPartyActive){
        if(partyHost) partyConnection.send({type:"end-game",code:partyRoomCode,reason:"time"})
          .catch((error)=>{setupError.textContent=`Could not end the shared quiz: ${error.message}`;});
        else if(timer) timer.textContent="00:00";
      }else{
        endQuiz("time");
      }
    }
  },1000);
}

let comboPopupExitAnimation = null;

function showComboPopup(){
  if (comboPopupExitAnimation) {
    comboPopupExitAnimation.cancel();
    comboPopupExitAnimation = null;
  }

  const message = `COMBO UP! ×${combo}`;
  comboPopup.replaceChildren();
  comboPopup.setAttribute('aria-label', message);
  const letterDelayStep = Math.min(0.025, 0.28 / Math.max(1, message.length - 1));
  Array.from(message).forEach((character, index) => {
    const letter = document.createElement('span');
    letter.className = 'combo-popup-letter';
    letter.setAttribute('aria-hidden', 'true');
    letter.textContent = character === ' ' ? '\u00a0' : character;
    letter.style.setProperty('--letter-delay', `${0.32 + index * letterDelayStep}s`);
    comboPopup.appendChild(letter);
  });
  comboPopup.hidden = false;
  comboPopup.classList.remove('combo-popup-active');
  void comboPopup.offsetWidth;
  comboPopup.classList.add('combo-popup-active');
  playSound('comboUp');
}

function hideComboPopup(){
  if (comboPopupExitAnimation) {
    comboPopupExitAnimation.cancel();
    comboPopupExitAnimation = null;
  }
  comboPopup.classList.remove('combo-popup-active');
  comboPopup.hidden = true;
}

function slideComboPopupOut(){
  if (comboPopup.hidden) return;

  const { transform, opacity } = getComputedStyle(comboPopup);
  comboPopup.classList.remove('combo-popup-active');
  comboPopupExitAnimation = comboPopup.animate([
    { transform, opacity },
    { transform: 'translate(150vw, -50%) scale(.9) rotate(5deg)', opacity: 0 }
  ], { duration: 260, easing: 'ease-in', fill: 'forwards' });
  comboPopupExitAnimation.onfinish = hideComboPopup;
}

comboPopup.addEventListener('animationend', (event) => {
  if (event.target === comboPopup && event.animationName === 'comboShoot') {
    hideComboPopup();
  }
});

function renderQuestion(forcedAnswerOrder=null){
  if (!current) return;
  if (feedbackTypingTimer !== null) {
    clearInterval(feedbackTypingTimer);
    feedbackTypingTimer = null;
  }

  showQuestionTitle();
  nextButton.disabled = true;
  skipButton.disabled = false;
  skipButton.classList.remove('skip-hidden', 'animate-hide');
  skipButton.classList.add('skip-show');
  skipButton.style.removeProperty('opacity');
  skipButton.style.removeProperty('visibility');
  skipButton.style.removeProperty('pointer-events');

  const answerIndices = current.a
    .map((_, index) => index)
    .filter(index => current.a[index] !== 'BLANK');
  const randomizedAnswerOrder = forcedAnswerOrder || shuffleWithoutConsecutiveDuplicates(answerIndices);

  answersEl.innerHTML = '';
  const answerLabels = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  randomizedAnswerOrder.forEach((originalIndex, displayIndex) => {
    const answer = current.a[originalIndex];
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer';
    button.dataset.originalIndex = String(originalIndex);
    const answerLabel = answerLabels[displayIndex] || String(displayIndex + 1);
    if (isSoftEngi) {
      button.classList.add('softengi-answer');
      button.setAttribute('aria-label', `${answerLabel}. ${formatPowerText(answer)}`);
      const marker = document.createElement('span');
      marker.className = 'softengi-answer-marker';
      marker.textContent = answerLabel;
      const answerText = document.createElement('span');
      answerText.className = 'softengi-answer-text';
      answerText.textContent = formatPowerText(answer);
      button.append(marker, answerText);
    } else {
      button.textContent = `${answerLabel}. ${formatPowerText(answer)}`;
    }
    button.addEventListener('click', () => chooseAnswer(originalIndex));
    answersEl.appendChild(button);
  });

  const firstAnswer=answersEl.querySelector('.answer');
  if(firstAnswer) firstAnswer.focus();

  feedback.textContent = '';
  feedback.className = 'feedback';
  answered = false;
  updateMeta();
}

function loadQuestion(){
  if (sequencePosition >= questionSequence.length){
    finishQuiz('complete');
    return;
  }

  const questionIndex = questionSequence[sequencePosition];

  if (!bank[questionIndex]){
    finishQuiz('complete');
    return;
  }

  currentQuestionIndex = questionIndex;
  try{
    current = networkPartyActive
      ? getNetworkQuestion(bank[questionIndex],questionIndex)
      : bank[questionIndex];
  }catch(error){
    setupError.textContent=error.message;
    return;
  }
  questionNumber = sequencePosition + 1;
  if(networkPartyActive && partyHost){
    partyChoices=[];
    let answerOrder;
    try{
      answerOrder=buildNetworkAnswerOrder(current,sequencePosition,currentQuestionIndex);
    }catch(error){
      setupError.textContent=error.message;
      return;
    }
    renderQuestion(answerOrder);
    partyConnection.send({
      type:"question",
      code:partyRoomCode,
      questionNumber:sequencePosition,
      questionIndex:currentQuestionIndex,
      answerOrder,
      correctIndex:current.c
    }).catch((error)=>{
      setupError.textContent=`Could not send question to the room: ${error.message}`;
    });
  }else{
    renderQuestion();
  }
  startQuestionTimer();
  beginPartyQuestion();
}

function finishQuiz(reason="complete"){
  if(quizEnded)return;
  quizEnded=true;
  stopTimer();
  stopQuestionTimer();
  partyTurnToken++;
  if(partyTurnAnimation!==null) clearInterval(partyTurnAnimation);
  if(partyTurnTimer!==null) clearTimeout(partyTurnTimer);
  if (questionTypingTimer !== null) {
    clearInterval(questionTypingTimer);
    questionTypingTimer = null;
  }
  if (feedbackTypingTimer !== null) {
    clearInterval(feedbackTypingTimer);
    feedbackTypingTimer = null;
  }

  // The result page receives ONLY the questions the user has actually seen.
  // The total remains the configured quiz length, so ending early is explicit.
  const results = {
    category,
    quizType: requestedQuiz || "reviewQuiz",
    score,
    longestCombo,
    total: selectedQuestionCount,
    timeLimitMinutes,
    perQuestionTimeMinutes,
    isRetake: miniQuizMode,
    partyMode: partyModeActive,
    ...(partyModeActive ? {
      partyPlayers:partyPlayers.map((player)=>({
        ...player,
        longestCombo:partyLongestComboStreaks.get(player.id)||0
      })),
      partyHistory
    } : {}),
    ...(partyModeActive ? {partyCurrentPlayerId:networkPartyActive?partyPlayerId:partyPlayers[0]?.id} : {}),
    seen: history.length,
    completed: reason === "complete",
    endReason: reason,
    ...(socIndiReviewSections ? {reviewSections: selectedReviewSections} : {}),
    history
  };

  try{
    sessionStorage.setItem("lakeheadQuizResults",JSON.stringify(results));
    location.href = partyModeActive ? "party-win.html" : "win.html";
  }catch(error){
    console.error("Could not save quiz results:",error);
    quizEnded=false;
  }
}

function endQuiz(reason="ended"){
  if(!quizStarted || quizEnded)return;
  finishQuiz(reason);
}

function revealQuestion(resultType, selectedIndex=null){
  if(answered || quizEnded)return;
  stopQuestionTimer();
  answered = true;

  const correctIndex = current.c;
  const isCorrect = resultType === "answer" && selectedIndex === correctIndex;

  if (isCorrect) {
    combo++;
    longestCombo = Math.max(longestCombo, combo);
    if (combo > 1) showComboPopup();
  } else {
    combo = 0;
  }

  if (resultType === "answer") {
    playSound(isCorrect ? 'correct' : 'incorrect');
    if (isCorrect) score++;
  }

  history.push({
    question: current.q,
    questionIndex: currentQuestionIndex,
    selected: resultType === "answer" ? current.a[selectedIndex] : "",
    correctAnswer: current.a[correctIndex],
    correct: isCorrect,
    skipped: resultType === "skip",
    timedOut: resultType === "timeout"
  });

  const buttons = [...answersEl.querySelectorAll('.answer')];
  buttons.forEach((button) => {
    const originalIndex = Number(button.dataset.originalIndex);
    button.disabled = true;
    button.classList.remove('correct', 'wrong', 'incorrect');
    if (originalIndex === correctIndex) {
      button.classList.add('correct');
    }
    if (resultType === 'answer' && originalIndex === selectedIndex && !isCorrect) {
      button.classList.add('wrong');
      button.classList.add('incorrect');
    }
  });

  if(resultType === "skip" || resultType === "timeout"){
    const outcome=resultType==="timeout"?"Time expired":"Skipped";
    feedback.textContent = `${outcome} — the correct answer was: ${formatPowerText(current.a[correctIndex])}`;
    feedback.className = "motivation visible wrong";
  }else if(isCorrect){
    feedback.textContent = [
      "Excellent! Keep it going! 🔥",
      "Correct! You're on a roll! ⭐",
      "Nice work! You nailed it! 🎯",
      "That's right! Keep pushing! 💪",
      "Great job! Your STEM skills are showing! 🚀"
    ][Math.floor(Math.random()*5)];
    feedback.className = "motivation visible right";
  }else{
    feedback.textContent = [
      "Not quite — keep going, you've got this! 💪",
      "Good try! Learn from it and keep moving! 🌟",
      "Almost! Don't give up — the next one is yours! 🔥",
      "Keep your momentum! One question doesn't define your score! 🚀",
      "Nice attempt! Stay focused and keep going! 🎯"
    ][Math.floor(Math.random()*5)];
    feedback.className = "motivation visible wrong";
  }

  typeSoftEngiFeedback();

  nextButton.disabled = false;
  skipButton.disabled = true;
  skipButton.classList.remove("skip-show");
  skipButton.classList.add("skip-hidden","animate-hide");
  skipButton.style.setProperty("opacity","0","important");
  skipButton.style.setProperty("visibility","hidden","important");
  skipButton.style.setProperty("pointer-events","none","important");
  updateMeta();
}

function chooseAnswer(index){
  if (!quizStarted || quizEnded || answered) return;
  if(networkPartyActive){
    submitNetworkAnswer(Number(index));
    return;
  }
  if(partyModeActive){
    recordPartySelection(Number(index));
    return;
  }
  revealQuestion('answer', Number(index));
}

function goNext(){
  if (!quizStarted || quizEnded) return;
  if(networkPartyActive && !partyHost) return;

  if (!answered){
    feedback.textContent = 'Choose an answer or skip the question first.';
    feedback.className = 'feedback error';
    return;
  }

  if(networkPartyActive){
    if(!partyHost) return;
    nextButton.disabled=true;
    if(questionNumber>=selectedQuestionCount){
      partyConnection.send({type:"next-question",code:partyRoomCode})
        .catch((error)=>{
          nextButton.disabled=false;
          setupError.textContent=`Could not finish the shared quiz: ${error.message}`;
        });
      return;
    }
    partyConnection.send({type:"next-question",code:partyRoomCode})
      .then(()=>{
        sequencePosition++;
        loadQuestion();
      })
      .catch((error)=>{
        nextButton.disabled=false;
        setupError.textContent=`Could not advance the shared quiz: ${error.message}`;
      });
    return;
  }

  if (sequencePosition + 1 < questionSequence.length) slideComboPopupOut();
  sequencePosition++;
  loadQuestion();
}

function skip(){
  if (!quizStarted || quizEnded || answered) return;
  if(networkPartyActive && !partyHost) return;
  if(networkPartyActive){
    submitNetworkAnswer(null);
    return;
  }
  playSound('popup');
  if(partyModeActive){
    recordPartySelection(null);
    return;
  }
  revealQuestion('skip');
}

function exitSetup(){
  if(quizStarted || quizEnded)return;
  quizMusic.pause();
  fade.classList.add('active');
  setTimeout(()=>{ window.location.href='index.html?fromSetup=1'; },560);
}

function quit(){
  // END QUIZ intentionally goes straight to the result screen and preserves
  // only the questions that have been displayed and recorded in history.
  if(networkPartyActive){
    if(partyHost){
      partyConnection.send({type:"end-game",code:partyRoomCode,reason:"ended"})
        .catch((error)=>{setupError.textContent=`Could not end the shared quiz: ${error.message}`;});
    }else{
      quitButton.disabled=true;
      quitButton.textContent="LEAVING…";
      partyConnection.send({type:"leave",code:partyRoomCode})
        .catch((error)=>{
          quitButton.disabled=false;
          quitButton.textContent="LEAVE GAME";
          setupError.textContent=`Could not leave the shared game: ${error.message}`;
        });
    }
    return;
  }
  endQuiz("ended");
}

function handleNetworkGameOver(message){
  if(message.departedPlayerId===partyPlayerId){
    location.replace("index.html");
    return;
  }
  if(message.reason==="player-left"){
    if(quizEnded) return;
    quizEnded=true;
    stopTimer();
    stopQuestionTimer();
    answersEl.querySelectorAll(".answer").forEach((button)=>{button.disabled=true;});
    nextButton.disabled=true;
    skipButton.disabled=true;
    quitButton.disabled=true;
    const departedPlayer=partyPlayers.find((player)=>player.id===message.departedPlayerId);
    partyPlayerLeftMessage.textContent=departedPlayer
      ? `${departedPlayer.name} left the game. You can return to the menu.`
      : "A player left the game. You can return to the menu.";
    if(!partyPlayerLeftDialog.open) partyPlayerLeftDialog.showModal();
    return;
  }
  if(!quizEnded){
    if(!quizStarted){
      setup.hidden=true;
      content.hidden=false;
      quizStarted=true;
    }
    if(message.players){
      message.players.forEach((updated)=>{
        const player=partyPlayers.find((candidate)=>candidate.id===updated.id);
        if(player && Number.isFinite(Number(updated.score))) player.score=Number(updated.score);
      });
    }
    quizEnded=true;
    stopTimer();
    stopQuestionTimer();
    const result={
      category,
      quizType:requestedQuiz||"reviewQuiz",
      score:partyPlayers.find((player)=>player.id===partyPlayerId)?.score||0,
      longestCombo,
      total:selectedQuestionCount,
      timeLimitMinutes,
      perQuestionTimeMinutes,
      isRetake:false,
      partyMode:true,
      onlineParty:true,
      partyCurrentPlayerId:partyPlayerId,
      partyPlayers:partyPlayers.map((player)=>({
        ...player,
        longestCombo:partyLongestComboStreaks.get(player.id)||0
      })),
      partyHistory,
      history,
      seen:history.length,
      completed:message.reason!=="ended",
      endReason:message.reason||"complete",
      reviewSections:socIndiReviewSections?selectedReviewSections:[]
    };
    try{
      sessionStorage.setItem("lakeheadQuizResults",JSON.stringify(result));
      location.href="party-win.html";
    }catch(error){
      quizEnded=false;
      setupError.textContent=`Could not save the party results: ${error.message}`;
    }
  }
}

function readTimingSettings(){
  const selectedTime = document.querySelector('input[name="timeLimit"]:checked');
  timeLimitMinutes = selectedTime && selectedTime.value !== "none" ? Number(selectedTime.value) : null;
  const perQuestionMinutes=perQuestionTimeLimit.value==="none"
    ? null
    : Number.parseInt(perQuestionTimeLimit.value,10);
  perQuestionTimeMinutes=Number.isInteger(perQuestionMinutes) &&
    perQuestionMinutes>=1 && perQuestionMinutes<=60
    ? perQuestionMinutes
    : null;
}

function validateSetup(){
  if(socIndiReviewSections && selectedReviewSections.length===0){
    setupError.textContent = "Choose at least one review section.";
    return false;
  }

  if(totalAvailable < 1){
    setupError.textContent = "There are no questions available in the selected sections.";
    return false;
  }

  const requested = Number.parseInt(countInput.value,10);
  if(!Number.isFinite(requested) || requested < 1){
    setupError.textContent = "Choose at least 1 question.";
    return false;
  }
  if(requested > totalAvailable){
    setupError.textContent = `This quiz only has ${totalAvailable} question${totalAvailable===1?"":"s"}.`;
    return false;
  }

  selectedQuestionCount = requested;
  const selectedOrder = document.querySelector('input[name="order"]:checked');
  orderMode = selectedOrder ? selectedOrder.value : "random";
  readTimingSettings();
  setupError.textContent = "";
  return true;
}

function beginQuiz(){
  if(quizStarted) return;
  if(networkPartyActive && !partyHost) return;
  if(partyStartPending) return;
  readTimingSettings();

  if (miniQuizMode && customQuestionSequence.length) {
    const validIndexes = customQuestionSequence.filter((index) => index < bank.length);
    if (!validIndexes.length) {
      setupError.textContent = "No missed questions are available to retake.";
      return;
    }
    selectedQuestionCount = validIndexes.length;
    questionSequence = validIndexes.slice();
    sequencePosition = 0;
  } else if (!validateSetup()) {
    return;
  } else {
    buildQuestionSequence();
  }

  if(networkPartyActive){
    partyStartPending=true;
    beginButton.disabled=true;
    setupError.textContent="Starting the shared quiz…";
    partyConnection.send({
      type:"quiz-start",
      code:partyRoomCode,
      config:{
        questionSequence,
        orderMode,
        timeLimitMinutes,
        perQuestionTimeMinutes,
        reviewSections:socIndiReviewSections?selectedReviewSections:[]
      }
    }).catch((error)=>{
      partyStartPending=false;
      beginButton.disabled=false;
      setupError.textContent=`Could not start the shared quiz: ${error.message}`;
    });
    return;
  }

  playSound('begin');
  if(partyModeActive) resetPartyComboStreaks();
  quizStarted = true;
  if (isSoftEngi) document.body.classList.add('softengi-active');
  startQuizMusic();
  setup.hidden = true;
  content.hidden = false;
  startTimer();
  loadQuestion(false);
}


nextButton.addEventListener("click",goNext);
skipButton.addEventListener("click",skip);
quitButton.addEventListener("click",quit);
beginButton.addEventListener("click",beginQuiz);
exitSetupButton.addEventListener("click",exitSetup);

if(networkPartyActive){
  partyConnection.on("joined",(message)=>{
    updateNetworkPlayers(message.room.players);
    updatePartySettingsSummary(message.room.quizConfig);
    partyHideLockedAnswers=false;
    if(message.room.stage==="quiz" && message.room.quizConfig){
      startNetworkQuiz(message.room.quizConfig,message.room);
    }
    else if(partyHost) publishPartySettings();
  });
  partyConnection.on("quiz-start",(message)=>{
    partyHideLockedAnswers=false;
    updateNetworkPlayers(message.players);
    startNetworkQuiz(message.config);
  });
  partyConnection.on("question",displayNetworkQuestion);
  partyConnection.on("answer-locked",(message)=>{
    if(Number.isInteger(message.answerIndex)){
      const choice=partyChoices.find((entry)=>entry.playerId===message.playerId);
      if(choice) choice.selectedIndex=message.answerIndex;
      else partyChoices.push({playerId:message.playerId,selectedIndex:message.answerIndex});
      const selectedButton=answersEl.querySelector(`.answer[data-original-index="${message.answerIndex}"]`);
      if(selectedButton) updatePartyAnswerMarker(selectedButton);
    }

  });
  partyConnection.on("reveal",revealNetworkQuestion);
  partyConnection.on("next-question",()=>{
    if(!partyHost){
      nextButton.disabled=true;
      answered=false;

    }
  });
  partyConnection.on("game-over",handleNetworkGameOver);
  partyConnection.on("left",()=>location.replace("index.html"));
  partyConnection.on("room-state",(message)=>{
    updateNetworkPlayers(message.room.players);
    updatePartySettingsSummary(message.room.quizConfig);
  });
  partyConnection.on("error",(message)=>{
    setupError.textContent=message.message;
    if(!quizStarted && partyHost){
      partyStartPending=false;
      beginButton.disabled=false;
    }
  });
  partyConnection.on("close",()=>{
    if(!quizEnded){
      setupError.textContent="Connection to the shared game was lost. Reconnect before continuing.";
      answersEl.querySelectorAll(".answer").forEach((button)=>{button.disabled=true;});
      nextButton.disabled=true;
      skipButton.disabled=true;
    }
  });
  document.getElementById("partyPlayerLeftReturn").addEventListener("click",()=>{
    location.replace("index.html");
  });
  partyConnection.send({
    type:"join",
    code:partyRoomCode,
    playerId:partyPlayerId,
    player:partyPlayers.find((player)=>player.id===partyPlayerId)
  }).then(()=>{partyConnectionReady=true;}).catch((error)=>{
    setupError.textContent=`Could not reconnect to the party room: ${error.message}`;
    beginButton.disabled=true;
  });
}

document.addEventListener("keydown",event=>{
  if(event.key.toLowerCase()==="m" && event.target.tagName !== "INPUT"){
    event.preventDefault();
    const muted=!(soundsMuted && musicMuted);
    soundsMuted=muted;
    musicMuted=muted;
    localStorage.setItem('quizHubMuted',String(muted));
    localStorage.setItem('quizHubMusicMuted',String(muted));
    if(muted) quizMusic.pause();
    else if(quizStarted) startQuizMusic();
    updateSoundToggle();
    updateMusicToggle();
    return;
  }

  if(!quizStarted || quizEnded || event.target.tagName === "INPUT") return;

  const answerButtons=[...answersEl.querySelectorAll('.answer:not(:disabled)')];
  if(!answerButtons.length) return;

  const activeIndex=answerButtons.indexOf(document.activeElement);
  if(event.key === "ArrowDown" || event.key === "ArrowRight"){
    event.preventDefault();
    answerButtons[(activeIndex + 1 + answerButtons.length) % answerButtons.length].focus();
  }else if(event.key === "ArrowUp" || event.key === "ArrowLeft"){
    event.preventDefault();
    answerButtons[(activeIndex - 1 + answerButtons.length) % answerButtons.length].focus();
  }else if(/^[1-4]$/.test(event.key)){
    event.preventDefault();
    answerButtons[Number(event.key)-1]?.focus();
  }else if(/^[a-d]$/i.test(event.key)){
    event.preventDefault();
    answerButtons[event.key.toLowerCase().charCodeAt(0)-97]?.focus();
  }
});

countInput.addEventListener("input",()=>{
  setupError.textContent = "";
  const value = Number.parseInt(countInput.value,10);
  if(Number.isFinite(value) && value > totalAvailable) countInput.value = totalAvailable;
  if(Number.isFinite(value) && value < 1) countInput.value = 1;
  publishPartySettings();
});
countInput.addEventListener("change",publishPartySettings);
document.querySelectorAll('input[name="order"], input[name="timeLimit"]').forEach((input)=>{
  input.addEventListener("change",publishPartySettings);
});
perQuestionTimeLimit.addEventListener("change",publishPartySettings);
partyScoreToggle.addEventListener("click",()=>{
  const expanded=partyScoreToggle.getAttribute("aria-expanded")==="true";
  document.body.classList.toggle("party-scores-open",!expanded);
  partyScoreToggle.setAttribute("aria-expanded",String(!expanded));
  partyScoreToggle.setAttribute("aria-label",expanded?"View player scores":"Hide player scores");
});

if (miniQuizMode && customQuestionSequence.length) {
  beginQuiz();
}