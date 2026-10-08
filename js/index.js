const resolveAssetUrl=(path)=>new URL(path, window.location.href).toString();

const soundFiles={
  highlight:resolveAssetUrl('sfx/highlight.wav'),
  popup:resolveAssetUrl('sfx/Popup.wav'),
  arrow:resolveAssetUrl('sfx/ArrowButton.wav'),
  select:resolveAssetUrl('sfx/QuizSelect.wav'),
  incorrect:resolveAssetUrl('sfx/Incorrect.wav'),
  titleEnd:resolveAssetUrl('sfx/TitleEnd.wav'),
  started:resolveAssetUrl('secret/Started.ogg'),
  loading:resolveAssetUrl('secret/Loading.mp3')
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
  const blancSubstituteSounds=['popup','select','begin'];
  const soundName=window.quizHubPreferences.blancMode && blancSubstituteSounds.includes(name)?'started':name;
  const sound=soundCache[soundName].cloneNode();
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
function setSoundsMuted(muted){
  soundsMuted=Boolean(muted);
  window.quizHubPreferences.setSoundMuted(soundsMuted);
  updateSoundToggle();
}
soundToggle.addEventListener('click',()=>{
  setSoundsMuted(!soundsMuted);
});
updateSoundToggle();

let musicMuted=localStorage.getItem('quizHubMusicMuted')==='true';
const musicToggle=document.getElementById('musicToggle');
const menuMusic=new Audio(resolveAssetUrl('music/MenuMusic.wav'));
const normalMenuMusicSource=resolveAssetUrl('music/MenuMusic.wav');
const blancMenuMusicSource=resolveAssetUrl('secret/BEN.wav');
const quizMusicPreview=document.getElementById('quizMusicPreview');
const quizPreviewMusic=new Audio();
quizPreviewMusic.loop=true;
quizPreviewMusic.preload='auto';
quizPreviewMusic.volume=.45;
let quizPreviewPlaying=false;
let menuVisible=false;
let menuMusicFadeFrame=null;
let menuMusicFadePending=false;
menuMusic.loop=true;
menuMusic.volume=.45;
function updateMusicToggle(){
  musicToggle.textContent=musicMuted?'♫̸':'♫';
  musicToggle.setAttribute('aria-label',musicMuted?'Unmute music':'Mute music');
  musicToggle.setAttribute('aria-pressed',String(musicMuted));
}
function setMusicMuted(muted){
  musicMuted=Boolean(muted);
  window.quizHubPreferences.setMusicMuted(musicMuted);
  if(musicMuted){
    menuMusic.pause();
    quizPreviewMusic.pause();
  }else if(quizPreviewPlaying){
    startQuizMusicPreview();
  }else{
    startMenuMusic();
  }
  updateMusicToggle();
}
function updateQuizMusicPreview(){
  quizMusicPreview.textContent=quizPreviewPlaying?'■':'▶';
  quizMusicPreview.setAttribute('aria-label',quizPreviewPlaying?'Stop selected quiz music preview':'Preview selected quiz music');
  quizMusicPreview.setAttribute('aria-pressed',String(quizPreviewPlaying));
  quizMusicPreview.title=quizPreviewPlaying?'Stop selected quiz music preview':'Preview selected quiz music';
}
function startQuizMusicPreview(){
  if(!menuVisible || musicMuted || !quizPreviewPlaying) return;
  if(menuMusicFadeFrame!==null){
    cancelAnimationFrame(menuMusicFadeFrame);
    menuMusicFadeFrame=null;
  }
  menuMusic.pause();
  quizPreviewMusic.src=window.quizHubPreferences.resolveQuizMusic('music/QuizMusic.wav');
  quizPreviewMusic.play().catch(error=>{
    quizPreviewPlaying=false;
    updateQuizMusicPreview();
    if(settingsModal.classList.contains('open')){
      settingsError.textContent=`Could not play quiz music preview: ${error.message}`;
    }
  });
}
function stopQuizMusicPreview(resumeMenuMusic=true){
  quizPreviewPlaying=false;
  quizPreviewMusic.pause();
  quizPreviewMusic.currentTime=0;
  updateQuizMusicPreview();
  if(resumeMenuMusic) startMenuMusic();
}
function startMenuMusic(fadeIn=false){
  if(fadeIn) menuMusicFadePending=true;
  if(!menuVisible || musicMuted || quizPreviewPlaying) return;

  const menuMusicSource=window.quizHubPreferences.blancMode?blancMenuMusicSource:normalMenuMusicSource;
  if(menuMusic.src!==menuMusicSource){
    menuMusic.src=menuMusicSource;
    menuMusic.currentTime=0;
  }

  if(menuMusicFadeFrame!==null){
    cancelAnimationFrame(menuMusicFadeFrame);
    menuMusicFadeFrame=null;
  }

  if(!menuMusicFadePending){
    menuMusic.volume=.45;
    menuMusic.play().catch(()=>{});
    return;
  }

  menuMusic.volume=0;
  menuMusic.play().then(()=>{
    menuMusicFadePending=false;
    const fadeStartedAt=performance.now();
    const fadeDuration=1150;
    const raiseVolume=(now)=>{
      if(musicMuted){
        menuMusic.volume=0;
        menuMusicFadeFrame=null;
        return;
      }
      const progress=Math.min((now-fadeStartedAt)/fadeDuration,1);
      menuMusic.volume=.45*progress;
      if(progress<1) menuMusicFadeFrame=requestAnimationFrame(raiseVolume);
      else menuMusicFadeFrame=null;
    };
    menuMusicFadeFrame=requestAnimationFrame(raiseVolume);
  }).catch(()=>{});
}
musicToggle.addEventListener('click',()=>{
  setMusicMuted(!musicMuted);
});
quizMusicPreview.addEventListener('click',()=>{
  if(quizPreviewPlaying) stopQuizMusicPreview();
  else{
    quizPreviewPlaying=true;
    updateQuizMusicPreview();
    startQuizMusicPreview();
  }
});
document.addEventListener('pointerdown',()=>startMenuMusic());
document.addEventListener('touchstart',()=>startMenuMusic(),{passive:true});
updateMusicToggle();
updateQuizMusicPreview();

document.addEventListener('keydown',event=>{
  if(event.key.toLowerCase()!=='m' || event.target.tagName==='INPUT') return;
  event.preventDefault();
  const muted=!(soundsMuted && musicMuted);
  setSoundsMuted(muted);
  setMusicMuted(muted);
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
let navigationStarted=false;
let loadingSoundPlayed=false;
let loadingCompleteScheduled=false;
let navigationTarget='';
let selectedCourse='';
let quizMenuTrigger=null;
let partyModeActive=false;
let partyPlayers=[];

const courseCodes={
  CompArch:'COMP-2453',
  CloudComp:'COMP-4312',
  SocIndi: "SOCI-2755",
  DataSci: 'COMP-4112',
  SoftEngi: 'COMP-3415'
};

const courseQuizCatalog={
  CompArch:[
    {id:'quiz1', label:'First Slides Practice', detail:'for Sept 23'},
    {id:'binary-quiz', label:'Binary Practice', detail:'Standalone binary practice', external:'binary-quiz.html'},
    {id:'hexadecimal-quiz', label:'Hexadecimal Practice', detail:'Standalone hexadecimal practice', external:'hexadecimal-quiz.html'}
  ],
  CloudComp:[
    {id:'quiz1', label:'First Slides Practice', detail:'for Sept 24'},
    {id:'quiz2', label:'Week 4 Slides Practice', detail:'for Oct 8'}
  ],
  SocIndi:[
    {id:'reviewQuiz', label:'Exam 1 Quiz', detail:'Based on expected Exam 1 material'},
    {id:'textbookQuiz', label:'Textbook Quiz', detail:'Based on Textbook contents'},
  ],
  DataSci:[
    {id:'test1', label:'Test 1 Practice', detail:'for Oct 22'}
  ],
  SoftEngi:[
    {id:'test1', label:'Lectures 1–6 Practice', detail:'for Oct 8'}
  ]
};

function renderQuizOptions(course){
  const container=document.querySelector('.quiz-options');
  if(!container) return;

  const options = (courseQuizCatalog[course] || courseQuizCatalog.CompArch)
    .filter((quiz)=>!partyModeActive || !quiz.external);
  container.innerHTML='';
  document.getElementById('quizMenuTitle').textContent=partyModeActive
    ? 'Choose a party quiz'
    : 'Choose an Option';
  document.querySelector('#quizModal .quiz-menu > p').textContent=partyModeActive
    ? 'Take turns choosing answers. The best-scoring player wins.'
    : 'Select which quiz you would like to take.';

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
  const target=new URL('quiz.html',window.location.href);
  target.searchParams.set('category',category);
  target.searchParams.set('quiz',quiz);
  if(partyModeActive) target.searchParams.set('partyMode','true');
  navigationTarget=target.toString();
  navigationStarted=false;
  preloadFrame.src=navigationTarget;
  preloadFrame.onload=()=>{
    quizLoaded=true;
    if(welcomeVisible) showLoadingComplete();
  };
  document.body.appendChild(preloadFrame);
}

function startMenuExit(){
  document.body.classList.remove('leaving','motion-fade-leaving');
  if(window.quizHubPreferences.motionMode !== 'default'){
    document.body.classList.add('motion-fade-leaving');
  }else{
    document.body.classList.add('leaving');
  }
}

function startExternalQuiz(target){
  if(leaving) return;
  stopQuizMusicPreview(false);
  menuMusic.pause();
  menuMusic.currentTime=0;
  closeQuizMenu();
  leaving=true;
  navigationStarted=false;
  loadingSoundPlayed=false;
  loadingCompleteScheduled=false;
  document.querySelectorAll('.card').forEach(c=>c.disabled=true);
  quizLoaded=false;
  preloadFrame=document.createElement('iframe');
  preloadFrame.className='preload-frame';
  navigationTarget=target;
  preloadFrame.src=navigationTarget;
  preloadFrame.onload=()=>{
    quizLoaded=true;
    if(welcomeVisible){
      if(window.quizHubPreferences.disableLoadingAnimation && !window.quizHubPreferences.blancMode) navigateToQuiz();
      else showLoadingComplete();
    }
  };
  document.body.appendChild(preloadFrame);
  setTimeout(startMenuExit,520);
  setTimeout(()=>{
    welcomeVisible=true;
    if(window.quizHubPreferences.disableLoadingAnimation && !window.quizHubPreferences.blancMode){
      if(quizLoaded) navigateToQuiz();
    }else{
      showLoadingScreen();
      if(quizLoaded) showLoadingComplete();
    }
  },1180);
  setTimeout(()=>{
    if(!quizLoaded){
      const status=document.getElementById('loadingStatus');
      status.textContent='Loading...';
    }
  },4500);
}

function showLoadingComplete(){
  if(loadingCompleteScheduled) return;
  loadingCompleteScheduled=true;
  if(window.quizHubPreferences.disableLoadingAnimation && !window.quizHubPreferences.blancMode){
    navigateToQuiz();
    return;
  }
  if(window.quizHubPreferences.blancMode){
    setTimeout(navigateToQuiz,1650);
    return;
  }
  const status=document.getElementById('loadingStatus');
  status.textContent='Loading Complete';
  status.classList.remove('complete');
  void status.offsetWidth;
  status.classList.add('complete');
  setTimeout(()=>document.body.classList.add('welcome-out'),900);
  setTimeout(navigateToQuiz,1650);
}

function showLoadingScreen(){
  if(window.quizHubPreferences.blancMode){
    document.body.classList.add('blanc-loading');
    if(!loadingSoundPlayed){
      playSound('loading');
      loadingSoundPlayed=true;
    }
  }
  document.body.classList.add('show-welcome');
}

function navigateToQuiz(){
  if(navigationStarted) return;
  navigationStarted=true;
  window.location.href=navigationTarget;
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
  if(partyModeActive){
    try{
      sessionStorage.setItem('quizHubPartyPlayers',JSON.stringify(partyPlayers));
    }catch(error){
      document.getElementById('partyModeError').textContent=`Could not save player profiles: ${error.message}`;
      return;
    }
  }
  stopQuizMusicPreview(false);
  menuMusic.pause();
  menuMusic.currentTime=0;
  closeQuizMenu();
  leaving=true;
  navigationStarted=false;
  loadingSoundPlayed=false;
  loadingCompleteScheduled=false;
  document.querySelectorAll('.card').forEach(c=>c.disabled=true);
  quizLoaded=false;
  preloadQuiz(course, quiz);
  setTimeout(startMenuExit,520);
  setTimeout(()=>{
    welcomeVisible=true;
    if(window.quizHubPreferences.disableLoadingAnimation && !window.quizHubPreferences.blancMode){
      if(quizLoaded) navigateToQuiz();
    }else{
      showLoadingScreen();
      if(quizLoaded) showLoadingComplete();
    }
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

const partyModeModal=document.getElementById('partyModeModal');
const partyPlayerCount=document.getElementById('partyPlayerCount');
const partyPlayerSetup=document.getElementById('partyPlayerSetup');
const partyModeError=document.getElementById('partyModeError');
const partyModeToggle=document.getElementById('partyModeToggle');
const partyHideLockedAnswers=document.getElementById('partyHideLockedAnswers');
const partySetupStorageKey='quizHubPartySetup';
const defaultPartyColors=['#e8505b','#3686e8','#22a06b','#9254de','#e39426'];
let partyProfileDrafts=defaultPartyColors.map((color,index)=>({name:`Player ${index+1}`,color,photo:''}));
let selectedPartyPlayerCount=2;
let hidePartyLockedAnswers=false;
let partyModeTrigger=null;

function updatePartyModeToggle(){
  partyModeToggle.classList.toggle('party-rainbow',selectedPartyPlayerCount===2 || selectedPartyPlayerCount===5);
}

function persistPartySetup(){
  try{
    sessionStorage.setItem(partySetupStorageKey,JSON.stringify({
      count:selectedPartyPlayerCount,
      players:partyProfileDrafts,
      hideLockedAnswers:hidePartyLockedAnswers
    }));
    return true;
  }catch(error){
    partyModeError.textContent=`Could not remember player setup for this session: ${error.message}`;
    return false;
  }
}

function restorePartySetup(){
  try{
    const saved=JSON.parse(sessionStorage.getItem(partySetupStorageKey) || 'null');
    if(!saved || !Array.isArray(saved.players)) return;
    if(Number.isInteger(saved.count) && saved.count>=1 && saved.count<=5){
      selectedPartyPlayerCount=saved.count;
    }
    hidePartyLockedAnswers=saved.hideLockedAnswers===true;
    partyHideLockedAnswers.checked=hidePartyLockedAnswers;
    partyProfileDrafts=defaultPartyColors.map((color,index)=>{
      const player=saved.players[index];
      return {
        name:typeof player?.name==='string' ? player.name.slice(0,24) : `Player ${index+1}`,
        color:typeof player?.color==='string' && /^#[0-9a-f]{6}$/i.test(player.color) ? player.color : color,
        photo:typeof player?.photo==='string' && player.photo.startsWith('data:image/') ? player.photo : ''
      };
    });
  }catch(error){
    console.error('Could not restore party setup:',error);
    partyModeError.textContent=`Could not restore the saved player setup: ${error.message}`;
  }
  updatePartyModeToggle();
}

restorePartySetup();
updatePartyModeToggle();

function createPartyProfile(index,profile={}){
    const card=document.createElement('fieldset');
    card.className='party-player-card';
    card.dataset.playerIndex=String(index);
    const legend=document.createElement('legend');
    legend.textContent=`Player ${index+1}`;
    const row=document.createElement('div');
    row.className='party-player-fields';

    const avatar=document.createElement('div');
    avatar.className='party-player-avatar';
    avatar.style.setProperty('--party-player-color',profile.color || '#e8505b');
    if(profile.photo){
      const image=document.createElement('img');
      image.src=profile.photo;
      image.alt='';
      avatar.appendChild(image);
    }else{
      avatar.textContent=(profile.name || `Player ${index+1}`).trim().charAt(0).toUpperCase();
    }

    const nameLabel=document.createElement('label');
    nameLabel.className='party-player-name';
    nameLabel.textContent='Name';
    const nameInput=document.createElement('input');
    nameInput.type='text';
    nameInput.maxLength=24;
    nameInput.required=true;
    nameInput.value=profile.name || `Player ${index+1}`;
    nameInput.setAttribute('aria-label',`Player ${index+1} name`);
    nameLabel.appendChild(nameInput);

    const colorLabel=document.createElement('label');
    colorLabel.className='party-player-color';
    colorLabel.textContent='Color';
    const colorInput=document.createElement('input');
    colorInput.type='color';
    colorInput.value=profile.color || ['#e8505b','#3686e8','#22a06b','#9254de','#e39426'][index];
    colorInput.setAttribute('aria-label',`Player ${index+1} color`);
    colorLabel.appendChild(colorInput);

    const photoLabel=document.createElement('label');
    photoLabel.className='party-player-photo';
    photoLabel.textContent='Upload picture';
    const photoInput=document.createElement('input');
    photoInput.type='file';
    photoInput.accept='image/*';
    photoInput.setAttribute('aria-label',`Upload a picture for player ${index+1}`);
    photoLabel.appendChild(photoInput);
    row.append(nameLabel,colorLabel,photoLabel);
    card.append(legend,avatar,row);

    nameInput.addEventListener('input',()=>{
      const image=avatar.querySelector('img');
      if(image) avatar.replaceChildren(image);
      else avatar.textContent=nameInput.value.trim().charAt(0).toUpperCase();
    });
    colorInput.addEventListener('input',()=>avatar.style.setProperty('--party-player-color',colorInput.value));
    photoInput.addEventListener('change',()=>{
      const file=photoInput.files && photoInput.files[0];
      if(!file) return;
      if(!file.type.startsWith('image/')){
        partyModeError.textContent='Choose an image file for the player picture.';
        photoInput.value='';
        return;
      }
      if(file.size>10*1024*1024){
        partyModeError.textContent='Choose an image smaller than 10 MB.';
        photoInput.value='';
        return;
      }
      card.dataset.photoPending='true';
      partyModeError.textContent='';
      const reader=new FileReader();
      reader.onload=()=>{
        const image=new Image();
        image.onload=()=>{
          const canvas=document.createElement('canvas');
          const scale=Math.min(1,256/Math.max(image.naturalWidth,image.naturalHeight));
          canvas.width=Math.max(1,Math.round(image.naturalWidth*scale));
          canvas.height=Math.max(1,Math.round(image.naturalHeight*scale));
          const context=canvas.getContext('2d');
          if(!context){
            partyModeError.textContent='Could not process that player picture.';
          }else{
            context.drawImage(image,0,0,canvas.width,canvas.height);
            const photo=canvas.toDataURL('image/jpeg',.82);
            avatar.replaceChildren(Object.assign(document.createElement('img'),{src:photo,alt:''}));
            card.dataset.photo=photo;
            capturePartyDrafts();
          }
          delete card.dataset.photoPending;
        };
        image.onerror=()=>{
          delete card.dataset.photoPending;
          partyModeError.textContent='Could not load that player picture.';
        };
        image.src=String(reader.result);
      };
      reader.onerror=()=>{
        delete card.dataset.photoPending;
        partyModeError.textContent='Could not read that player picture.';
      };
      reader.readAsDataURL(file);
    });
    return card;
}

function renderPartyProfiles(){
    const count=Number.parseInt(partyPlayerCount.value,10);
    if(!Number.isInteger(count) || count<1 || count>5) return;
    selectedPartyPlayerCount=count;
    partyPlayerSetup.replaceChildren(...partyProfileDrafts.slice(0,count).map((profile,index)=>createPartyProfile(index,profile)));
    updatePartyModeToggle();
    persistPartySetup();
}

function capturePartyDrafts(){
    [...partyPlayerSetup.querySelectorAll('.party-player-card')].forEach((card)=>{
      const index=Number.parseInt(card.dataset.playerIndex,10);
      if(!Number.isInteger(index) || index<0 || index>=5) return;
      partyProfileDrafts[index]={
        name:card.querySelector('.party-player-name input').value,
        color:card.querySelector('.party-player-color input').value,
        photo:card.dataset.photo || partyProfileDrafts[index]?.photo || ''
      };
    });
    persistPartySetup();
}

partyModeToggle.addEventListener('click',()=>{
    partyModeTrigger=document.activeElement;
    partyModeError.textContent='';
    partyPlayerCount.value=String(selectedPartyPlayerCount);
    renderPartyProfiles();
    partyModeModal.classList.add('open');
    partyModeModal.setAttribute('aria-hidden','false');
    partyPlayerCount.focus();
});
partyPlayerCount.addEventListener('change',renderPartyProfiles);
partyHideLockedAnswers.addEventListener('change',()=>{
  hidePartyLockedAnswers=partyHideLockedAnswers.checked;
  persistPartySetup();
});
partyPlayerSetup.addEventListener('input',capturePartyDrafts);
partyPlayerSetup.addEventListener('change',capturePartyDrafts);
document.querySelectorAll('[data-close-party-mode]').forEach((element)=>element.addEventListener('click',()=>{
    partyModeModal.classList.remove('open');
    partyModeModal.setAttribute('aria-hidden','true');
    partyModeActive=false;
    partyPlayers=[];
    if(partyModeTrigger?.isConnected) partyModeTrigger.focus();
}));
document.getElementById('partyModeStart').addEventListener('click',()=>{
    if(partyPlayerSetup.querySelector('[data-photo-pending="true"]')){
      partyModeError.textContent='Wait for player pictures to finish processing.';
      return;
    }
    capturePartyDrafts();
    const cards=[...partyPlayerSetup.querySelectorAll('.party-player-card')];
    const selectedPlayers=cards.map((card,index)=>({
      id:`player-${index+1}`,
      name:card.querySelector('.party-player-name input').value.trim() || `Player ${index+1}`,
      color:card.querySelector('.party-player-color input').value,
      photo:card.dataset.photo || ''
    }));
    partyProfileDrafts.forEach((profile,index)=>{
      if(selectedPlayers[index]) profile.name=selectedPlayers[index].name;
    });
    if(!persistPartySetup()) return;
    partyPlayers=selectedPartyPlayerCount===1 ? [] : selectedPlayers;
    partyModeActive=selectedPartyPlayerCount>1;
    partyModeError.textContent='';
    partyModeModal.classList.remove('open');
    partyModeModal.setAttribute('aria-hidden','true');
    if(partyModeTrigger?.isConnected) partyModeTrigger.focus();
    playSound('select');
    showMenuPage(0);
    document.querySelector('.menu .course-card:not(.coming-soon)')?.focus();
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

const settingsModal=document.getElementById('settingsModal');
const optionsToggle=document.getElementById('optionsToggle');
const motionModeSlider=document.getElementById('motionModeSlider');
const fullscreenSetting=document.getElementById('fullscreenSetting');
const quizMusicSetting=document.getElementById('quizMusicSetting');
const textSizeSetting=document.getElementById('textSizeSetting');
const blancQuizMusicOption=document.getElementById('blancQuizMusicOption');
const soundMutedSetting=document.getElementById('soundMutedSetting');
const musicMutedSetting=document.getElementById('musicMutedSetting');
const disableLoadingSetting=document.getElementById('disableLoadingSetting');
const highContrastSetting=document.getElementById('highContrastSetting');
const blancModeSetting=document.getElementById('blancModeSetting');
const blancModeSettingRow=document.getElementById('blancModeSettingRow');
const universityName=document.getElementById('universityName');
const resetSettingsButton=document.getElementById('resetSettings');
const settingsError=document.getElementById('settingsError');
const motionModeNames=['default','minimal','reduced'];
const motionModeLabels=['Default','Minimal','Reduced'];
let settingsTrigger=null;
let blancUnlockProgress=0;
let blancUnlockSoundPlayed=false;
let blancModeUnlocked=false;

function syncSettings(){
  const motionIndex=motionModeNames.indexOf(window.quizHubPreferences.motionMode);
  motionModeSlider.value=String(motionIndex);
  motionModeSlider.setAttribute('aria-valuetext',motionModeLabels[motionIndex]);
  document.querySelectorAll('input[name="answerSide"]').forEach(input=>{
    input.checked=input.value===window.quizHubPreferences.answerSide;
  });
  fullscreenSetting.checked=document.fullscreenElement===document.documentElement;
  fullscreenSetting.disabled=!document.fullscreenElement &&
    typeof document.documentElement.requestFullscreen!=='function';
  blancQuizMusicOption.hidden=!window.quizHubPreferences.blancMode;
  quizMusicSetting.value=window.quizHubPreferences.quizMusic;
  textSizeSetting.value=window.quizHubPreferences.textSize;
  soundMutedSetting.checked=window.quizHubPreferences.soundMuted;
  musicMutedSetting.checked=window.quizHubPreferences.musicMuted;
  disableLoadingSetting.checked=window.quizHubPreferences.disableLoadingAnimation;
  highContrastSetting.checked=window.quizHubPreferences.highContrast;
  blancModeSetting.checked=window.quizHubPreferences.blancMode;
  blancModeSettingRow.hidden=!window.quizHubPreferences.blancMode && !blancModeUnlocked;
}

function closeSettings(){
  blancUnlockProgress=0;
  const returnFocus=settingsTrigger;
  document.activeElement?.blur();
  settingsModal.classList.remove('open');
  settingsModal.setAttribute('aria-hidden','true');
  optionsToggle.setAttribute('aria-expanded','false');
  settingsTrigger=null;
  if(returnFocus?.isConnected) returnFocus.focus();
}

function openSettings(){
  blancUnlockProgress=0;
  settingsTrigger=optionsToggle;
  syncSettings();
  settingsModal.classList.add('open');
  settingsModal.setAttribute('aria-hidden','false');
  optionsToggle.setAttribute('aria-expanded','true');
  motionModeSlider.focus();
}

document.addEventListener('keydown',event=>{
  if(!settingsModal.classList.contains('open')) return;
  const code='ben';
  const key=event.key;
  if(key===code[blancUnlockProgress]){
    event.preventDefault();
    blancUnlockProgress++;
  }else{
    blancUnlockProgress=key==='b'?1:0;
  }
  if(blancUnlockProgress===code.length){
    blancUnlockProgress=0;
    blancModeUnlocked=true;
    blancModeSettingRow.hidden=false;
    if(!blancUnlockSoundPlayed){
      playSound('loading');
      blancUnlockSoundPlayed=true;
    }
  }
});

optionsToggle.addEventListener('click',()=>{
  playSound('popup');
  settingsError.textContent='';
  openSettings();
});
motionModeSlider.addEventListener('input',()=>{
  const motionIndex=Number(motionModeSlider.value);
  const motionMode=motionModeNames[motionIndex];
  motionModeSlider.setAttribute('aria-valuetext',motionModeLabels[motionIndex]);
  window.quizHubPreferences.setMotionMode(motionMode);
});
quizMusicSetting.addEventListener('change',()=>{
  window.quizHubPreferences.setQuizMusic(quizMusicSetting.value);
  if(quizPreviewPlaying) startQuizMusicPreview();
});
textSizeSetting.addEventListener('change',()=>{
  window.quizHubPreferences.setTextSize(textSizeSetting.value);
});
soundMutedSetting.addEventListener('change',()=>{
  setSoundsMuted(soundMutedSetting.checked);
});
musicMutedSetting.addEventListener('change',()=>{
  setMusicMuted(musicMutedSetting.checked);
});
disableLoadingSetting.addEventListener('change',()=>{
  window.quizHubPreferences.setDisableLoadingAnimation(disableLoadingSetting.checked);
});
highContrastSetting.addEventListener('change',()=>{
  window.quizHubPreferences.setHighContrast(highContrastSetting.checked);
});
blancModeSetting.addEventListener('change',()=>{
  window.quizHubPreferences.setBlancMode(blancModeSetting.checked);
  blancQuizMusicOption.hidden=!blancModeSetting.checked;
  quizMusicSetting.value=window.quizHubPreferences.quizMusic;
  if(blancModeSetting.checked){
    playSound('started');
  }
  if(quizPreviewPlaying) startQuizMusicPreview();
  updateBlancTitle(blancModeSetting.checked);
  if(!quizPreviewPlaying) startMenuMusic(true);
});
resetSettingsButton.addEventListener('click',()=>{
  window.quizHubPreferences.reset();
  setSoundsMuted(false);
  setMusicMuted(false);
  updateBlancTitle(false);
  blancModeUnlocked=false;
  blancModeSettingRow.hidden=true;
  if(quizPreviewPlaying) startQuizMusicPreview();
  syncSettings();
  settingsError.textContent='';
  if(document.fullscreenElement){
    document.exitFullscreen().catch(error=>{
      settingsError.textContent=`Could not exit fullscreen: ${error.message}`;
    });
  }
});
document.querySelectorAll('input[name="answerSide"]').forEach(input=>{
  input.addEventListener('change',()=>{
    if(input.checked) window.quizHubPreferences.setAnswerSide(input.value);
  });
});
fullscreenSetting.addEventListener('change',()=>{
  settingsError.textContent='';
  if(fullscreenSetting.checked){
    if(typeof document.documentElement.requestFullscreen!=='function'){
      fullscreenSetting.checked=false;
      settingsError.textContent='Fullscreen is not available in this browser.';
      return;
    }
    document.documentElement.requestFullscreen().catch(error=>{
      fullscreenSetting.checked=document.fullscreenElement===document.documentElement;
      settingsError.textContent=`Could not enter fullscreen: ${error.message}`;
    });
  }else{
    if(!document.fullscreenElement) return;
    document.exitFullscreen().catch(error=>{
      fullscreenSetting.checked=document.fullscreenElement===document.documentElement;
      settingsError.textContent=`Could not exit fullscreen: ${error.message}`;
    });
  }
});
document.addEventListener('fullscreenchange',()=>{
  fullscreenSetting.checked=document.fullscreenElement===document.documentElement;
});
document.querySelectorAll('[data-close-settings]').forEach(el=>{
  el.addEventListener('click',closeSettings);
});

const textbookLibraryLink=document.getElementById('textbookLibraryLink');
textbookLibraryLink.addEventListener('click',event=>{
  if(event.button!==0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  if(document.body.classList.contains('library-leaving')) return;
  document.body.classList.add('library-leaving');
  window.setTimeout(()=>window.location.assign(textbookLibraryLink.href),220);
});

patchnotesContent.textContent=`
Version 2.0
- Improved Cloud Computing Quiz 2
- Fixed music loop for Cloud Computing
- Party mode has been added! Play with up to 5 people and see who can get the most points!
- A new option has been added to all quizzes, allow you to set a timer per-question alongside a general quiz timer. How fast can you be?
- New combo system! The more correct anwsers you get, the more your combo increases. Can you keep a perfect combo?
- The win screen has been updated with various adjustments
- A scrollbar has been added to the quiz sidetab, for larger options on smaller screens
- A new options menu has been added, with options for reduced motion, text size, quiz view, fullscreen, music select and other toggles!
- A sociology exam 1 quiz has been added, with the new feature to select which section you would like to take. This quiz also allows for 100 and 150 minute time limit.
- A mysterious secret toggle has been hidden in the options menu... somehow, you have to get it started... if you dare

Version 1.6
- Added Cloud Computing Quiz based on Slide 4
- Cloud Computing now has unique music
- Added Software Engineering Lectures 1–6 practice with a visual twist, let's just say it's the one they play when the world gets loud!
- Returning to the menu is now faster, and skips the animations

Version 1.5
- Hexadecimal Operation practice now functions
- UI Updates
- Added Sociology Textbook Practice, focus on the entire textbook

Version 1.4
- Added Hexadecimal Practice, with options for Binary -> Hex, Hex -> Decimal, Decimal -> Hex and Hex -> Binary.
- Added Hexadecimal Practice for Operations, including Addition, Subtraction, Multiplication and Division
- Added Hexadecimal Practice Guide, to show the hexadecimal letter values for 10 through 15
- Added Manual next question button to Binary and Hexadecimal games, to allow review of correct anwser
- Changed time limit in Hexadecimal and Binary game to be for each individual question
- Added sorting on win screen for general quizzes, to allow you to just see correct and incorrect anwsers
- Added incorrect question retaking for general quizzes, to allow specific review of incorrect questions
- General Optimization
- Removed "in example" questions on Comp Arch
- Improved question wording flow

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
    if(settingsModal.classList.contains('open')) closeSettings();
    return;
  }

  if(event.target.tagName==='INPUT' || document.getElementById('quizModal').classList.contains('open') ||
    patchnotesModal.classList.contains('open') || settingsModal.classList.contains('open')) return;

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
const originalStemText=stemLetters.map(letter=>letter.textContent);
function updateBlancTitle(enabled){
  const blancTitle=['B','e','n',' ','H','u','b'];
  universityName.textContent=enabled?"Ben's Domain":'Lakehead University - Barrie STEM Hub';
  stemLetters.forEach((letter,index)=>{
    letter.textContent=enabled?blancTitle[index] || '':originalStemText[index];
    letter.hidden=enabled && index>=blancTitle.length;
  });
  stemTitle.setAttribute('aria-label',enabled?'Ben Hub':'Lakehead STEM Hub');
  document.title=enabled?'Ben Hub':'Quiz Hub';
}
updateBlancTitle(window.quizHubPreferences.blancMode);
const titleEndSound=new Audio(soundFiles.titleEnd);
let titleEndPending=false;
function tryPlayTitleEnd(){
  if(!titleEndPending || soundsMuted) return;
  titleEndSound.currentTime=0;
  titleEndSound.play().then(()=>{titleEndPending=false;}).catch(()=>{});
}
stemLetters.forEach(letter=>letter.addEventListener('animationstart',event=>{
  const lastVisibleLetter=stemLetters.filter(item=>!item.hidden).at(-1);
  if(event.animationName==='titleEntrance' && event.currentTarget===lastVisibleLetter){
    titleEndPending=true;
    tryPlayTitleEnd();
  }
}));
document.addEventListener('pointerdown',tryPlayTitleEnd);
function pulseStem(){
  if(leaving)return;
  stemTitle.classList.remove('animating');
  void stemTitle.offsetWidth;
  stemTitle.classList.add('animating');
}

window.addEventListener('pageshow',event=>{
  if(!event.persisted && !document.body.classList.contains('leaving') &&
    !document.body.classList.contains('motion-fade-leaving') &&
    !document.body.classList.contains('library-leaving'))return;
  leaving=false;
  welcomeVisible=false;
  quizLoaded=false;
  navigationTarget='';
  document.body.classList.remove('leaving','motion-fade-leaving','library-leaving','show-welcome','welcome-out');
  document.querySelectorAll('.card').forEach(card=>{card.disabled=false;});
  if(preloadFrame){
    preloadFrame.remove();
    preloadFrame=null;
  }
  menuVisible=true;
  document.body.classList.add('intro-complete','menu-visible');
  startMenuMusic();
});

const returnParams = new URLSearchParams(window.location.search);
const returningFromSetup = returnParams.get('fromSetup') === '1';
const returningFromWin = returnParams.get('fromWin') === '1';
if (returningFromSetup || returningFromWin) {
  const cleanUrl = new URL(window.location.href);
  cleanUrl.searchParams.delete(returningFromSetup ? 'fromSetup' : 'fromWin');
  window.history.replaceState(null, '', cleanUrl);
}

if (returningFromSetup) {
  menuVisible=true;
  document.body.classList.add('menu-return-setup','skip-title-intro','intro-complete','menu-visible');
  startMenuMusic(true);
} else if (returningFromWin) {
  document.body.classList.add('menu-return-win','skip-title-intro','intro-complete');
  setTimeout(()=>{
    menuVisible=true;
    document.body.classList.add('menu-visible');
    startMenuMusic();
  },1450);
} else {
  // Animated title entrance first; only after it finishes is the full menu revealed.
  setTimeout(()=>document.body.classList.add('intro-complete'),1450);
  setTimeout(()=>{
    menuVisible=true;
    document.body.classList.add('menu-visible');
    startMenuMusic();
  },2550);
}

// First title bounce occurs 15 seconds after the initial menu reveal, then every 15 seconds.
setTimeout(()=>{
  pulseStem();
  setInterval(pulseStem,15000);
},15000);