const resolveAssetUrl=(path)=>new URL(path, window.location.href).toString();

const soundFiles={
  highlight:resolveAssetUrl('sfx/highlight.wav'),
  popup:resolveAssetUrl('sfx/Popup.wav'),
  arrow:resolveAssetUrl('sfx/ArrowButton.wav'),
  select:resolveAssetUrl('sfx/QuizSelect.wav'),
  incorrect:resolveAssetUrl('sfx/Incorrect.wav'),
  titleEnd:resolveAssetUrl('sfx/TitleEnd.wav')
};

const soundCache={};
let soundsMuted=localStorage.getItem('quizHubMuted')==='true';
Object.entries(soundFiles).forEach(([name,path])=>{
  const sound=new Audio(path);
  sound.preload='auto';
  soundCache[name]=sound;
});

function playSound(name){
  if(soundsMuted) return;
  const sound=soundCache[name].cloneNode();
  sound.currentTime=0;
  sound.play().catch(()=>{});
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
  updateSoundToggle();
});
updateSoundToggle();

let musicMuted=localStorage.getItem('quizHubMusicMuted')==='true';
const musicToggle=document.getElementById('musicToggle');
const menuMusic=new Audio(resolveAssetUrl('music/MenuMusic.wav'));
let menuVisible=false;
menuMusic.loop=true;
menuMusic.volume=.45;
function updateMusicToggle(){
  musicToggle.textContent=musicMuted?'♫̸':'♫';
  musicToggle.setAttribute('aria-label',musicMuted?'Unmute music':'Mute music');
  musicToggle.setAttribute('aria-pressed',String(musicMuted));
}
function startMenuMusic(){
  if(menuVisible && !musicMuted) menuMusic.play().catch(()=>{});
}
musicToggle.addEventListener('click',()=>{
  musicMuted=!musicMuted;
  localStorage.setItem('quizHubMusicMuted',String(musicMuted));
  if(musicMuted) menuMusic.pause();
  else startMenuMusic();
  updateMusicToggle();
});
document.addEventListener('pointerdown',startMenuMusic);
document.addEventListener('touchstart',startMenuMusic,{passive:true});
updateMusicToggle();

document.addEventListener('keydown',event=>{
  if(event.key.toLowerCase()!=='m' || event.target.tagName==='INPUT') return;
  event.preventDefault();
  const muted=!(soundsMuted && musicMuted);
  soundsMuted=muted;
  musicMuted=muted;
  localStorage.setItem('quizHubMuted',String(muted));
  localStorage.setItem('quizHubMusicMuted',String(muted));
  if(muted) menuMusic.pause();
  else startMenuMusic();
  updateSoundToggle();
  updateMusicToggle();
});

const welcomeText="Let's Get Started!";
const menuDate=document.getElementById('menuDate');
const menuTime=document.getElementById('menuTime');
const dateFormatter=new Intl.DateTimeFormat(undefined,{weekday:'short',year:'numeric',month:'short',day:'numeric'});
const timeFormatter=new Intl.DateTimeFormat(undefined,{hour:'numeric',minute:'2-digit',second:'2-digit'});
function updateMenuDateTime(){
  const now=new Date();
  menuDate.textContent=dateFormatter.format(now);
  menuTime.textContent=timeFormatter.format(now);
}
updateMenuDateTime();
setInterval(updateMenuDateTime,1000);

const welcomeLine=document.getElementById('welcomeLine');
[...welcomeText].forEach(ch=>{
  const span=document.createElement('span');
  span.className='letter';
  span.textContent=ch===' '? ' ' : ch;
  welcomeLine.appendChild(span);
});

let leaving=false;
let preloadFrame=null;
let quizLoaded=false;
let welcomeVisible=false;
let navigationTarget='';
let selectedCourse='';
let quizMenuTrigger=null;

const courseCodes={
  CompArch:'COMP-2453',
  CloudComp:'COMP-4312',
  SocIndi: "SOCI-2755",
  DataSci: 'COMP-4112'
};

const courseQuizCatalog={
  CompArch:[
    {id:'quiz1', label:'First Slides Practice', detail:'for Sept 23'},
    {id:'binary-quiz', label:'Binary Arithmetic', detail:'Standalone binary conversion practice', external:'binary-quiz.html'}
  ],
  CloudComp:[
    {id:'quiz1', label:'First Slides Practice', detail:'for Sept 24'}
  ],
  SocIndi:[
    {id:'reviewQuiz', label:'Review Quiz', detail:'Based on D2L Review Questions'},
    {id:'textbookQuiz', label:'Textbook Quiz', detail:'Based on Textbook contents'},
  ],
  DataSci:[
    {id:'test1', label:'Test 1 Practice', detail:'for Oct 22'}
  ]
};

function renderQuizOptions(course){
  const container=document.querySelector('.quiz-options');
  if(!container) return;

  const options = courseQuizCatalog[course] || courseQuizCatalog.CompArch;
  container.innerHTML='';

  options.forEach((quiz)=>{
    const button=document.createElement('button');
    button.type='button';
    button.className='quiz-option';
    button.dataset.quiz=quiz.id;
    button.innerHTML=`<span>${quiz.label}</span><small>${quiz.detail}</small>`;
    button.addEventListener('click',()=>{
      if(!selectedCourse) return;
      playSound('select');
      if(quiz.external){
        startExternalQuiz(quiz.external);
        return;
      }
      startQuiz(selectedCourse, button.dataset.quiz);
    });
    container.appendChild(button);
  });

  const firstButton=container.querySelector('.quiz-option');
  if(firstButton) firstButton.focus();
}

function preloadQuiz(category, quiz){
  preloadFrame=document.createElement('iframe');
  preloadFrame.className='preload-frame';
  navigationTarget='quiz.html?category='+encodeURIComponent(category)+'&quiz='+encodeURIComponent(quiz);
  preloadFrame.src=navigationTarget;
  preloadFrame.onload=()=>{
    quizLoaded=true;
    if(welcomeVisible) showLoadingComplete();
  };
  document.body.appendChild(preloadFrame);
}

function startExternalQuiz(target){
  if(leaving) return;
  menuMusic.pause();
  menuMusic.currentTime=0;
  closeQuizMenu();
  leaving=true;
  document.querySelectorAll('.card').forEach(c=>c.disabled=true);
  quizLoaded=false;
  preloadFrame=document.createElement('iframe');
  preloadFrame.className='preload-frame';
  navigationTarget=target;
  preloadFrame.src=navigationTarget;
  preloadFrame.onload=()=>{
    quizLoaded=true;
    if(welcomeVisible) showLoadingComplete();
  };
  document.body.appendChild(preloadFrame);
  setTimeout(()=>document.body.classList.add('leaving'),520);
  setTimeout(()=>{
    welcomeVisible=true;
    document.body.classList.add('show-welcome');
    if(quizLoaded) showLoadingComplete();
  },1180);
  setTimeout(()=>{
    if(!quizLoaded){
      const status=document.getElementById('loadingStatus');
      status.textContent='Loading...';
    }
  },4500);
}

function showLoadingComplete(){
  const status=document.getElementById('loadingStatus');
  status.textContent='Loading Complete';
  status.classList.remove('complete');
  void status.offsetWidth;
  status.classList.add('complete');
  setTimeout(()=>document.body.classList.add('welcome-out'),900);
  setTimeout(()=>{ window.location.href=navigationTarget; },1650);
}

function closeQuizMenu(){
  const modal=document.getElementById('quizModal');
  const returnFocus=quizMenuTrigger;
  document.activeElement?.blur();
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  selectedCourse='';
  quizMenuTrigger=null;
  if(returnFocus?.isConnected) returnFocus.focus();
}

function openQuizMenu(course){
  quizMenuTrigger=document.activeElement?.closest('.course-card') || null;
  selectedCourse=course;
  playSound('popup');
  const modal=document.getElementById('quizModal');
  document.getElementById('quizMenuCourse').textContent = courseCodes[course] || course;
  renderQuizOptions(course);
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
}

function startQuiz(course, quiz){
  if(leaving)return;
  menuMusic.pause();
  menuMusic.currentTime=0;
  closeQuizMenu();
  leaving=true;
  document.querySelectorAll('.card').forEach(c=>c.disabled=true);
  quizLoaded=false;
  preloadQuiz(course, quiz);
  setTimeout(()=>document.body.classList.add('leaving'),520);
  setTimeout(()=>{
    welcomeVisible=true;
    document.body.classList.add('show-welcome');
    if(quizLoaded) showLoadingComplete();
  },1180);
  setTimeout(()=>{
    if(!quizLoaded){
      const status=document.getElementById('loadingStatus');
      status.textContent='Loading...';
    }
  },4500);
}

document.querySelectorAll('.course-card').forEach(card=>{
  card.addEventListener('click',()=>{
    // Coming Soon courses intentionally do nothing.
    if(card.dataset.comingSoon==='true'){
      playSound('incorrect');
      return;
    }
    openQuizMenu(card.dataset.course);
  });
});

const menuTrack=document.getElementById('menuTrack');
const menuPages=[...document.querySelectorAll('.menu-track .menu')];
let menuPage=0;

function showMenuPage(page){
  menuPage=(page+menuPages.length)%menuPages.length;
  menuTrack.style.transform=`translateX(-${menuPage*50}%)`;
}

document.querySelectorAll('.menu-arrow').forEach(arrow=>{
  arrow.addEventListener('click',()=>{
    playSound('arrow');
    showMenuPage(arrow.classList.contains('menu-arrow-left') ? menuPage-1 : menuPage+1);
  });
});

let keyboardNavigation=false;
document.addEventListener('pointerdown',()=>{keyboardNavigation=false;});
document.addEventListener('focusin',event=>{
  const button=event.target.closest('.course-card, .menu-arrow, .quiz-option');
  if(button && keyboardNavigation){
    playSound('highlight');
    keyboardNavigation=false;
  }
});

document.querySelectorAll('[data-close-quiz-menu]').forEach(el=>{
  el.addEventListener('click',closeQuizMenu);
});

const patchnotesModal=document.getElementById('patchnotesModal');
const patchnotesContent=document.getElementById('patchnotesContent');
let patchnotesTrigger=null;
function closePatchnotes(){
  const returnFocus=patchnotesTrigger;
  document.activeElement?.blur();
  patchnotesModal.classList.remove('open');
  patchnotesModal.setAttribute('aria-hidden','true');
  patchnotesTrigger=null;
  if(returnFocus?.isConnected) returnFocus.focus();
}
function openPatchnotes(){
  patchnotesTrigger=document.getElementById('patchnotesButton');
  patchnotesModal.classList.add('open');
  patchnotesModal.setAttribute('aria-hidden','false');
  document.querySelector('.patchnotes-close').focus();
}
document.getElementById('patchnotesButton').addEventListener('click',()=>{
  playSound('popup');
  openPatchnotes();
});
document.querySelectorAll('[data-close-patchnotes]').forEach(el=>{
  el.addEventListener('click',closePatchnotes);
});

patchnotesContent.textContent=`
Version 1.3
- Fixed minor bugs
- Added Binary Arithmetic practice to Computer Arch, allowing you to practice binary to decimal and vise versa, as well as operations with binary!
Version 1.2
- Fixed back button through browser softlocking
- Mobile Adjustments, including fix to sound on mobile
- Added Data Science Test 1 Practice, including new music and 235 questions based on the slides!
- Adjusted Sound mixing

Version 1.1
- Fixed mobile presentation

Version 1.0
- Music and SFX have been added globally. They can be turned off with the buttons or by pressing M
- More course options available on Main Menu
- Added scrollable menu, to allow for expanded course selection
- Corrections to Comp Arch First Slide Quiz
- Added Cloud Computing, with practice quiz based on first slides
- Fixed bug where win screen would crash
- Fixed bug with Setup Menu in Mobile
- You can now use your keyboard for controlling elements of the page
- The date and time are now shown in the main menu
- You can now return to the main menu from the setup screen
- GFX have been improved
- You can now quit the win screen without needing to scroll down
- This patch notes menu now exists
- Removed Herobrine

Beta v0.1
- Inital release with Intro Comp Arch Quiz 1
`;

document.addEventListener('keydown',event=>{
  if(event.key==='Escape'){
    const modal=document.getElementById('quizModal');
    if(modal.classList.contains('open')) closeQuizMenu();
    if(patchnotesModal.classList.contains('open')) closePatchnotes();
    return;
  }

  if(event.target.tagName==='INPUT' || document.getElementById('quizModal').classList.contains('open')) return;

  const pageCards=[...menuPages[menuPage].querySelectorAll('.course-card')];
  const activeIndex=pageCards.indexOf(document.activeElement);
  if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','PageUp','PageDown'].includes(event.key)) return;

  event.preventDefault();
  keyboardNavigation=true;
  if(event.key==='PageUp' || event.key==='PageDown'){
    const nextPage=event.key==='PageUp' ? menuPage-1 : menuPage+1;
    playSound('arrow');
    showMenuPage(nextPage);
    menuPages[(nextPage+menuPages.length)%menuPages.length].querySelector('.course-card')?.focus();
    return;
  }

  if(activeIndex<0){
    pageCards[0]?.focus();
    return;
  }

  const column=activeIndex%3;
  let nextIndex=activeIndex;
  if(event.key==='ArrowUp') nextIndex=(activeIndex-3+pageCards.length)%pageCards.length;
  if(event.key==='ArrowDown') nextIndex=(activeIndex+3)%pageCards.length;
  if(event.key==='ArrowLeft'){
    if(column===0){
      playSound('arrow');
      showMenuPage(menuPage-1);
      menuPages[(menuPage+menuPages.length-1)%menuPages.length].querySelector('.course-card:last-child')?.focus();
      return;
    }
    nextIndex=activeIndex-1;
  }
  if(event.key==='ArrowRight'){
    if(column===2){
      playSound('arrow');
      showMenuPage(menuPage+1);
      menuPages[(menuPage+1)%menuPages.length].querySelector('.course-card')?.focus();
      return;
    }
    nextIndex=activeIndex+1;
  }
  pageCards[nextIndex]?.focus();
});

const stemTitle=document.querySelector('h1');
const stemLetters=[...stemTitle.querySelectorAll('.stem-letter')];
const titleEndSound=new Audio(soundFiles.titleEnd);
let titleEndPending=false;
function tryPlayTitleEnd(){
  if(!titleEndPending || soundsMuted) return;
  titleEndSound.currentTime=0;
  titleEndSound.play().then(()=>{titleEndPending=false;}).catch(()=>{});
}
stemLetters.at(-1).addEventListener('animationstart',event=>{
  if(event.animationName==='titleEntrance'){
    titleEndPending=true;
    tryPlayTitleEnd();
  }
});
document.addEventListener('pointerdown',tryPlayTitleEnd);
function pulseStem(){
  if(leaving)return;
  stemTitle.classList.remove('animating');
  void stemTitle.offsetWidth;
  stemTitle.classList.add('animating');
}

window.addEventListener('pageshow',event=>{
  if(!event.persisted && !document.body.classList.contains('leaving'))return;
  leaving=false;
  welcomeVisible=false;
  quizLoaded=false;
  navigationTarget='';
  document.body.classList.remove('leaving','show-welcome','welcome-out');
  document.querySelectorAll('.card').forEach(card=>{card.disabled=false;});
  if(preloadFrame){
    preloadFrame.remove();
    preloadFrame=null;
  }
  menuVisible=true;
  document.body.classList.add('intro-complete','menu-visible');
  startMenuMusic();
});

// Animated title entrance first; only after it finishes is the full menu revealed.
setTimeout(()=>document.body.classList.add('intro-complete'),1450);
setTimeout(()=>{
  menuVisible=true;
  document.body.classList.add('menu-visible');
  startMenuMusic();
},2550);

// First title bounce occurs 15 seconds after the initial menu reveal, then every 15 seconds.
setTimeout(()=>{
  pulseStem();
  setInterval(pulseStem,15000);
},15000);