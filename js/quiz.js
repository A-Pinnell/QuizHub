const questionBank = window.questionBank || {};
const codes = window.questionCodes || {};
const themes = window.quizThemes || {};

const params = new URLSearchParams(location.search);
const requestedCategory = params.get("category");
const defaultCategory = Object.keys(questionBank)[0] || "CompArch";
const category = requestedCategory && (questionBank[requestedCategory] || codes[requestedCategory]) ? requestedCategory : defaultCategory;
const bank = questionBank[category] || [];

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
const beginButton = document.getElementById("beginQuiz");
const timer = document.getElementById("timer");
const scoreDisplay = document.getElementById('scoreDisplay');
const questionDisplay = document.getElementById('questionDisplay');
const questionTitle = document.getElementById('questionTitle');

courseCode.textContent = `${codes[category] || category} - QUIZ`;
const totalAvailable = bank.length;
countInput.max = Math.max(1, totalAvailable);
countInput.value = Math.max(1, totalAvailable);
countMax.textContent = `of ${totalAvailable}`;
setupCount.textContent = `${totalAvailable} question${totalAvailable === 1 ? "" : "s"} available in this quiz.`;

let orderMode = "random";
let timeLimitMinutes = null;
let selectedQuestionCount = totalAvailable;
let questionSequence = [];
let sequencePosition = 0;
let current = null;
let questionNumber = 0;
let score = 0;
let answered = false;
let history = [];
let quizStarted = false;
let remainingSeconds = null;
let timerInterval = null;
let quizEnded = false;

function shuffle(array){
  const copy = [...array];
  for(let i=copy.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [copy[i],copy[j]]=[copy[j],copy[i]];
  }
  return copy;
}

function buildQuestionSequence(){
  const bank = questionBank[category] || [];
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
  if (questionDisplay) {
    if (current) {
      const remaining = Math.max(0, selectedQuestionCount - questionNumber);
      questionDisplay.textContent = `Question ${questionNumber} of ${selectedQuestionCount} • ${remaining} left`;
    } else {
      questionDisplay.textContent = 'Question 0 of 0';
    }
  }
  if (questionTitle) questionTitle.textContent = current ? formatPowerText(current.q) : 'Question';
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

function updateTimer(){
  if(remainingSeconds === null){
    timer.hidden = true;
    return;
  }
  timer.hidden = false;
  timer.textContent = formatTime(remainingSeconds);
  timer.classList.toggle("warning", remainingSeconds <= 60);
}

function stopTimer(){
  if(timerInterval !== null){
    clearInterval(timerInterval);
    timerInterval = null;
  }
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
      endQuiz("time");
    }
  },1000);
}

function renderQuestion(){
  if (!current) return;

  questionTitle.textContent = formatPowerText(current.q);
  nextButton.disabled = true;
  skipButton.disabled = false;
  skipButton.classList.remove('skip-hidden', 'animate-hide');
  skipButton.classList.add('skip-show');
  skipButton.style.removeProperty('opacity');
  skipButton.style.removeProperty('visibility');
  skipButton.style.removeProperty('pointer-events');

  answersEl.innerHTML = '';
  current.a.forEach((answer, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer';
    button.dataset.originalIndex = String(index);
    button.textContent = `${['A','B','C','D'][index]}. ${formatPowerText(answer)}`;
    button.addEventListener('click', () => chooseAnswer(index));
    answersEl.appendChild(button);
  });

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

  const bank = questionBank[category] || [];
  const questionIndex = questionSequence[sequencePosition];

  if (!bank[questionIndex]){
    finishQuiz('complete');
    return;
  }

  current = bank[questionIndex];
  questionNumber = sequencePosition + 1;
  renderQuestion();
}

function finishQuiz(reason="complete"){
  if(quizEnded)return;
  quizEnded=true;
  stopTimer();

  // The result page receives ONLY the questions the user has actually seen.
  // The total remains the configured quiz length, so ending early is explicit.
  const payload = encodeURIComponent(JSON.stringify({
    category,
    score,
    total: selectedQuestionCount,
    seen: history.length,
    completed: reason === "complete",
    endReason: reason,
    history
  }));

  location.href = `win.html?results=${payload}`;
}

function endQuiz(reason="ended"){
  if(!quizStarted || quizEnded)return;
  finishQuiz(reason);
}

function revealQuestion(resultType, selectedIndex=null){
  if(answered || quizEnded)return;
  answered = true;

  const correctIndex = current.c;
  const isCorrect = resultType === "answer" && selectedIndex === correctIndex;

  if (resultType === "answer") {
    if (isCorrect) score++;
  }

  history.push({
    question: current.q,
    selected: resultType === "skip" ? "" : current.a[selectedIndex],
    correctAnswer: current.a[correctIndex],
    correct: isCorrect,
    skipped: resultType === "skip"
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

  if(resultType === "skip"){
    feedback.textContent = `Skipped — the correct answer was: ${formatPowerText(current.a[correctIndex])}`;
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
  revealQuestion('answer', Number(index));
}

function goNext(){
  if (!quizStarted || quizEnded) return;

  if (!answered){
    feedback.textContent = 'Choose an answer or skip the question first.';
    feedback.className = 'feedback error';
    return;
  }

  sequencePosition++;
  loadQuestion();
}

function skip(){
  if (!quizStarted || quizEnded || answered) return;
  revealQuestion('skip');
}

function quit(){
  // END QUIZ intentionally goes straight to the result screen and preserves
  // only the questions that have been displayed and recorded in history.
  endQuiz("ended");
}

function validateSetup(){
  if(totalAvailable < 1){
    setupError.textContent = "There are no questions available for this course.";
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
  const selectedTime = document.querySelector('input[name="timeLimit"]:checked');
  orderMode = selectedOrder ? selectedOrder.value : "random";
  timeLimitMinutes = selectedTime && selectedTime.value !== "none" ? Number(selectedTime.value) : null;
  setupError.textContent = "";
  return true;
}

function beginQuiz(){
  if(quizStarted || !validateSetup())return;

  quizStarted = true;
  buildQuestionSequence();
  setup.hidden = true;
  content.hidden = false;
  startTimer();
  loadQuestion(false);
}


nextButton.addEventListener("click",goNext);
skipButton.addEventListener("click",skip);
quitButton.addEventListener("click",quit);
beginButton.addEventListener("click",beginQuiz);

countInput.addEventListener("input",()=>{
  setupError.textContent = "";
  const value = Number.parseInt(countInput.value,10);
  if(Number.isFinite(value) && value > totalAvailable) countInput.value = totalAvailable;
  if(Number.isFinite(value) && value < 1) countInput.value = 1;
});