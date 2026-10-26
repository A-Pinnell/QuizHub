(function(){
  "use strict";
  const params=new URLSearchParams(location.search);
  const code=(params.get("code")||"").toUpperCase();
  let playerId=params.get("playerId")||"";
  let isHost=params.get("host")==="1";
  const codeLabel=document.getElementById("partyRoomCode");
  const status=document.getElementById("partyRoomStatus");
  const playerList=document.getElementById("partyPlayerList");
  const profileEditor=document.getElementById("partyProfileEditor");
  const profileForm=document.getElementById("partyProfileForm");
  const profileNameInput=document.getElementById("partyProfileName");
  const profileColorInput=document.getElementById("partyProfileColor");
  const profilePhotoInput=document.getElementById("partyProfilePhoto");
  const profilePhotoPreview=document.getElementById("partyProfilePhotoPreview");
  const profilePhotoRemoveButton=document.getElementById("partyProfileRemovePhoto");
  const profileSaveButton=document.getElementById("partyProfileSave");
  const profileStatus=document.getElementById("partyProfileStatus");
  const error=document.getElementById("partyLobbyError");
  const leaveButton=document.getElementById("partyLeaveButton");
  const hostControls=document.getElementById("partyHostControls");
  const launchButton=document.getElementById("partyLaunchButton");
  const quizModeSelect=document.getElementById("partyQuizMode");
  const courseQuizPanel=document.getElementById("partyCourseQuiz");
  const mixedStudyPanel=document.getElementById("partyMixedStudy");
  const mixedStudyError=document.getElementById("partyMixedError");
  const mixedStudyChoices=document.getElementById("partyMixedSources");
  const categorySelect=document.getElementById("partyCategory");
  const quizSelect=document.getElementById("partyQuiz");
  const lobbyMusic=document.getElementById("partyLobbyMusic");
  const optionsButton=document.getElementById("partyOptionsButton");
  const optionsDialog=document.getElementById("partyOptionsDialog");
  const showScoresInput=document.getElementById("partyShowScores");
  const showLockedAnswersInput=document.getElementById("partyShowLockedAnswers");
  const earlyBonusInput=document.getElementById("partyEarlyBonus");
  const optionsHint=document.getElementById("partyOptionsHint");
  const hostDisplayInput=document.getElementById("partyHostDisplay");
  const hostDisplayOption=document.getElementById("partyHostDisplayOption");
  const hostDisplayPlayerSelect=document.getElementById("partyHostDisplayPlayer");
  const hostDisplayAccountStatus=document.getElementById("partyHostDisplayAccountStatus");
  const quizCatalog={
    CompArch:[
      ["quiz1","First Slides Practice"],
      ["test1","Midterm Practice"],
      ["binary","Binary Quiz"],
      ["hexadecimal","Hexadecimal Quiz"]
    ],
    CompGFX:[["test1","Midterm Practice"]],
    CloudComp:[
      ["quiz1","First Slides Practice"],
      ["quiz2","Week 4 Slides Practice"],
      ["test1","Midterm Practice"]
    ],
    SocIndi:[["reviewQuiz","Exam 1 Quiz"],["textbookQuiz","Textbook Quiz"]],
    DataSci:[["test1","Test 1 Practice"]],
    SoftEngi:[["test1","Lectures 1–6 Practice"]]
  };
  const localNetHubHosts=new Set(["localhost","127.0.0.1","::1"]);
  const netHubApiBase=window.QUIZHUB_NETHUB_API_URL?.trim()
    ?window.QUIZHUB_NETHUB_API_URL.trim().replace(/\/+$/,"")
    :localNetHubHosts.has(window.location.hostname)?window.location.origin:"";
  if(!/^[A-Z]{4}$/.test(code) || !playerId){
    location.replace("index.html");
    return;
  }
  codeLabel.textContent=code;
  hostControls.hidden=!isHost;
  const startLobbyMusic=()=>{
    lobbyMusic.play().catch((playError)=>{
      if(playError.name!=="NotAllowedError"){
        console.error("Could not play party lobby music:",playError);
      }
    });
  };
  startLobbyMusic();
  ["pointerdown","keydown","touchstart"].forEach((eventName)=>{
    document.addEventListener(eventName,startLobbyMusic,{once:true});
  });
  let room=null;
  const leavingPlayerTimers=new Map();
  let leavingPlayers=[];
  const client=new window.QuizHubPartyClient();
  let savedProfile=(()=>{
    try{return JSON.parse(sessionStorage.getItem("quizHubPartyProfile")||"null");}
    catch(parseError){console.error("Could not restore your party profile:",parseError);return null;}
  })();
  let profilePhoto="";
  let pendingProfile=null;

  function updateProfilePhotoPreview(name=profileNameInput.value){
    profilePhotoPreview.replaceChildren();
    profilePhotoPreview.style.setProperty("--player-color",profileColorInput.value);
    if(profilePhoto){
      const image=document.createElement("img");
      image.src=profilePhoto;
      image.alt="";
      profilePhotoPreview.appendChild(image);
    }else{
      profilePhotoPreview.textContent=name.trim().charAt(0).toUpperCase()||"?";
    }
  }

  function setProfileEditorEnabled(enabled){
    profileNameInput.disabled=!enabled;
    profileColorInput.disabled=!enabled;
    profilePhotoInput.disabled=!enabled;
    profilePhotoRemoveButton.disabled=!enabled;
    profileSaveButton.disabled=!enabled;
  }

  function readProfilePhoto(file){
    return new Promise((resolve,reject)=>{
      if(!file.type.startsWith("image/") || file.size>10*1024*1024){
        reject(new Error("Choose an image smaller than 10 MB."));
        return;
      }
      const reader=new FileReader();
      reader.onerror=()=>reject(new Error("Could not read that picture."));
      reader.onload=()=>{
        const imageData=String(reader.result);
        if(file.type==="image/gif"){
          if(imageData.length>450_000){
            reject(new Error("Choose a GIF smaller than about 330 KB to preserve its animation."));
            return;
          }
          resolve(imageData);
          return;
        }
        const image=new Image();
        image.onerror=()=>reject(new Error("Could not load that picture."));
        image.onload=()=>{
          const scale=Math.min(1,256/Math.max(image.naturalWidth,image.naturalHeight));
          const canvas=document.createElement("canvas");
          canvas.width=Math.max(1,Math.round(image.naturalWidth*scale));
          canvas.height=Math.max(1,Math.round(image.naturalHeight*scale));
          const context=canvas.getContext("2d");
          if(!context){
            reject(new Error("Could not process that picture."));
            return;
          }
          context.drawImage(image,0,0,canvas.width,canvas.height);
          resolve(canvas.toDataURL("image/jpeg",.8));
        };
        image.src=imageData;
      };
      reader.readAsDataURL(file);
    });
  }

  function renderProfileEditor(ownPlayer){
    profileEditor.hidden=!ownPlayer;
    if(!ownPlayer) return;
    if(!profileForm.dataset.initialized){
      profileForm.dataset.initialized="true";
      profileNameInput.value=ownPlayer.name;
      profileColorInput.value=ownPlayer.color;
      profilePhoto=ownPlayer.photo||"";
      updateProfilePhotoPreview(ownPlayer.name);
    }
    const canEdit=room.stage==="lobby" && !pendingProfile;
    setProfileEditorEnabled(canEdit);
    if(room.stage!=="lobby"){
      profileStatus.textContent="Your profile can only be changed while the room is in the lobby.";
    }
  }

  function displayProfile(player){
    if(!room?.hostDisplay || player.id!==room.hostDisplayPlayerId) return player;
    return room.players.find((candidate)=>candidate.host)||player;
  }

  function updateDevMenuContext(statusMessage){
    const fakePlayers=room?.players.filter((player)=>player.fakePlayer) || [];
    const availableFakeSlots=room ? Math.max(0,room.capacity-room.players.length) : 0;
    window.quizHubDevMenu?.updateContext({
      isHost,
      lobbyStage:room?.stage || "",
      excludedQuizzesEnabled:room?.excludedQuizzesEnabled===true,
      fakePlayerLimit:availableFakeSlots,
      fakePlayerEnabled:Boolean(
        room && isHost && room.stage==="lobby" && availableFakeSlots>0
      ),
      removeFakePlayersEnabled:Boolean(
        room && isHost && room.stage==="lobby" && fakePlayers.length>0
      ),
      fakePlayerSummary:room
        ? isHost
          ? `${fakePlayers.length} fake ${fakePlayers.length===1?"player":"players"} · ${availableFakeSlots} open lobby slots`
          : "Only the lobby host can add fake players."
        : "Waiting for lobby state.",
      status:statusMessage || (room
        ? isHost
          ? `${fakePlayers.length} fake ${fakePlayers.length===1?"player":"players"} in this lobby. Lautest is ${room.excludedQuizzesEnabled?"enabled":"disabled"} for everyone here.`
          : "Only the lobby host can change developer options."
        : "Waiting for lobby state.")
    });
  }

  function renderPlayers(){
    if(!room) return;
    isHost=room.players.some((player)=>player.id===playerId && player.host);
    hostControls.hidden=!isHost;
    renderPartyOptions();
    const activePlayerIds=new Set(room.players.map((player)=>player.id));
    leavingPlayers=leavingPlayers.filter((player)=>!activePlayerIds.has(player.id));
    playerList.replaceChildren(...[
      ...room.players,
      ...leavingPlayers.filter((player)=>!activePlayerIds.has(player.id))
    ].map((player)=>{
      const profile=displayProfile(player);
      const card=document.createElement("article");
      card.className=`party-player-card${player.fakePlayer?" fake-player":""}`;
      if(player.leaving) card.classList.add("party-player-leaving");
      card.style.setProperty("--player-color",profile.color);
      const avatar=document.createElement("div");
      avatar.className="party-avatar";
      if(window.quizHubPreferences.secretMode || profile.photo){
        const image=document.createElement("img");
        image.src=window.quizHubPreferences.secretMode?"secret/secret.png":profile.photo;
        image.alt="";
        avatar.appendChild(image);
      }else{
        avatar.textContent=profile.name.charAt(0).toUpperCase();
      }
      const name=document.createElement("strong");
      const hostDisplayLabel=room.hostDisplay
        ? player.host
          ? " (Display)"
          : player.id===room.hostDisplayPlayerId
            ? " (Player)"
            : ""
        : player.host?" (Host)":"";
      name.textContent=profile.name+hostDisplayLabel;
      const ready=document.createElement("span");
      ready.className=`party-ready-status${player.ready?" ready":""}${player.fakePlayer?" fake-player-status":""}`;
      ready.textContent=player.fakePlayer
        ?"Fake player"
        :player.connected?"Ready":"Disconnected";
      ready.classList.toggle("ready",player.connected || player.fakePlayer);
      card.append(avatar,name,ready);
      return card;
    }));
    async function saveHostDisplayOptions(){
      if(!room || !isHost || room.stage!=="lobby") return;
      hostDisplayInput.disabled=true;
      hostDisplayPlayerSelect.disabled=true;
      try{
        await client.send({
          type:"host-display-options",
          code,
          enabled:hostDisplayInput.checked,
          playerId:hostDisplayPlayerSelect.value
        });
      }catch(sendError){
        error.textContent=sendError.message;
        renderPlayers();
      }
    }
    hostDisplayInput.addEventListener("change",saveHostDisplayOptions);
    hostDisplayPlayerSelect.addEventListener("change",saveHostDisplayOptions);
    const ownPlayer=room.players.find((player)=>player.id===playerId);
    if(pendingProfile &&
      ownPlayer?.name===pendingProfile.name &&
      ownPlayer.color===pendingProfile.color &&
      ownPlayer.photo===pendingProfile.photo){
      savedProfile=pendingProfile;
      sessionStorage.setItem("quizHubPartyProfile",JSON.stringify(savedProfile));
      profilePhoto=savedProfile.photo;
      profilePhotoInput.value="";
      pendingProfile=null;
      profileStatus.textContent="Your profile has been updated.";
      profileStatus.classList.remove("error");
      updateProfilePhotoPreview(savedProfile.name);
    }
    renderProfileEditor(ownPlayer);
    leaveButton.disabled=!ownPlayer;
    hostDisplayInput.checked=room.hostDisplay===true;
    hostDisplayInput.disabled=!isHost || room.stage!=="lobby";
    hostDisplayOption.hidden=!room.hostDisplay;
    hostDisplayPlayerSelect.replaceChildren(
      Object.assign(document.createElement("option"),{
        value:"",
        textContent:"Choose a player account"
      }),
      ...room.players.filter((player)=>!player.host && !player.fakePlayer).map((player)=>{
        const option=document.createElement("option");
        option.value=player.id;
        option.textContent=player.name+(player.connected?"":" (disconnected)");
        return option;
      })
    );
    hostDisplayPlayerSelect.value=room.hostDisplayPlayerId||"";
    hostDisplayPlayerSelect.disabled=!isHost || room.stage!=="lobby";
    hostDisplayAccountStatus.textContent=
      "Select a player already in the lobby. That player answers from their device.";
    const minimumPlayers=room.hostDisplay?3:2;
    const allReady=room.players.length>=minimumPlayers && room.players.length<=room.capacity &&
      room.players.every((player)=>player.ready && (player.connected || player.fakePlayer));
    if(room.stage==="lobby"&&categorySelect.value!=="NetHub") renderQuizOptions();
    status.textContent=room.stage==="lobby"
      ? room.players.length<minimumPlayers
        ? room.hostDisplay
          ? `${room.players.length} of ${room.capacity} players · Host Display needs one more player`
          : `${room.players.length} of ${room.capacity} players · waiting for at least one more player`
        : room.hostDisplay && !room.hostDisplayPlayerId
          ? "Choose the player account the host will answer as in Party Options."
        : `${room.players.length} of ${room.capacity} players · the host can start when ready`
      : room.stage==="setup"?"Quiz selected. Waiting for the host to start…"
      : room.stage==="results"?"Game over. Return to the menu to start another room."
      :"Game in progress.";
    const selectedDisplayPlayer=room.players.find(
      (player)=>player.id===room.hostDisplayPlayerId && !player.host && player.connected
    );
    updateLaunchAvailability(allReady,selectedDisplayPlayer);
    updateDevMenuContext();
  }

  window.addEventListener("quizhub:dev-menu-action",async(event)=>{
    const {action,count,value}=event.detail;
    if(!["add-fake-players","remove-fake-players","excluded-quizzes"].includes(action)) return;
    if(!room || !isHost || room.stage!=="lobby"){
      updateDevMenuContext("These developer controls are available to the host in the lobby.");
      return;
    }
    try{
      if(action==="add-fake-players"){
        await client.send({type:"dev-add-fake-players",code,count});
        updateDevMenuContext("Fake players added.");
      }else if(action==="remove-fake-players"){
        await client.send({type:"dev-clear-fake-players",code});
        updateDevMenuContext("Fake players removed.");
      }else{
        await client.send({
          type:"dev-excluded-quizzes",
          code,
          enabled:value
        });
        updateDevMenuContext(value
          ?"Dr. Lau’s Lautest quizzes are enabled for everyone in this room."
          :"Dr. Lau’s Lautest quizzes are disabled for this room.");
      }
    }catch(sendError){
      updateDevMenuContext(sendError.message);
    }
  });

  profileNameInput.addEventListener("input",()=>updateProfilePhotoPreview());
  profileColorInput.addEventListener("input",()=>updateProfilePhotoPreview());
  profilePhotoRemoveButton.addEventListener("click",()=>{
    profilePhoto="";
    profilePhotoInput.value="";
    updateProfilePhotoPreview();
    profileStatus.textContent="Picture removed. Save your profile to apply the change.";
    profileStatus.classList.remove("error");
  });
  profileForm.addEventListener("submit",async(event)=>{
    event.preventDefault();
    if(!room || room.stage!=="lobby" || pendingProfile) return;
    const name=profileNameInput.value.trim();
    if(!name){
      profileStatus.textContent="Enter a player name.";
      profileStatus.classList.add("error");
      profileNameInput.focus();
      return;
    }
    setProfileEditorEnabled(false);
    profileStatus.textContent="Saving profile…";
    profileStatus.classList.remove("error");
    try{
      const selectedPhoto=profilePhotoInput.files?.[0];
      if(selectedPhoto) profilePhoto=await readProfilePhoto(selectedPhoto);
      const nextProfile={
        name,
        color:profileColorInput.value,
        photo:profilePhoto
      };
      pendingProfile=nextProfile;
      updateProfilePhotoPreview(name);
      await client.send({type:"update-profile",code,player:nextProfile});
    }catch(saveError){
      pendingProfile=null;
      profileStatus.textContent=saveError.message;
      profileStatus.classList.add("error");
      setProfileEditorEnabled(room?.stage==="lobby");
      updateProfilePhotoPreview(name);
    }
  });

  function renderPartyOptions(){
    if(!room) return;
    const options=room.partyOptions||{
      showPlayerScores:true,showLockedAnswers:false,earlyPointBonus:true
    };
    showScoresInput.checked=options.showPlayerScores;
    showLockedAnswersInput.checked=options.showLockedAnswers===true;
    earlyBonusInput.checked=options.earlyPointBonus;
    const canEdit=isHost && room.stage==="lobby";
    showScoresInput.disabled=!canEdit;
    showLockedAnswersInput.disabled=!canEdit;
    earlyBonusInput.disabled=!canEdit;
    optionsHint.textContent=canEdit
      ?"The host controls these settings for everyone."
      :"Only the host can change these settings.";
  }

  function enterQuiz(category,quiz,mixedSources=null,quizTheme=room?.quizTheme,netHubQuizId=room?.netHubQuizId){
    if(!room) return;
    const players=room.players
      .filter((player)=>!room.hostDisplay || !player.host)
      .map((player)=>{
        const profile=displayProfile(player);
        return {
          id:player.id,
          name:profile.name,
          color:profile.color,
          photo:profile.photo,
          score:0
        };
      });
    sessionStorage.setItem("quizHubPartyPlayers",JSON.stringify(players));
    sessionStorage.setItem("quizHubPartyProfile",JSON.stringify(savedProfile||{}));
    const target=new URL(
      category==="CompArch"&&quiz==="binary"?"binary-quiz.html":
      category==="CompArch"&&quiz==="hexadecimal"?"hexadecimal-quiz.html":"quiz.html",
      location.href
    );
    target.searchParams.set("category",category);
    target.searchParams.set("quiz",quiz);
    if(netHubQuizId) target.searchParams.set("netHubQuiz",netHubQuizId);
    if(mixedSources) target.searchParams.set("mixedSources",JSON.stringify(mixedSources));
    target.searchParams.set("partyMode","true");
    target.searchParams.set("partyRoom",code);
    target.searchParams.set("partyPlayer",playerId);
    if(room.hostDisplay && quizTheme){
      target.searchParams.set("partyQuizTheme",quizTheme);
    }
    if(isHost) target.searchParams.set("partyHost","true");
    if(room.hostDisplay){
      target.searchParams.set("hostDisplay","true");
      target.searchParams.set("hostDisplayPlayer",room.hostDisplayPlayerId);
    }
    location.href=target.toString();
  }

  async function renderQuizOptions(){
    const previousSelection=quizSelect.value;
    if(categorySelect.value==="NetHub"){
      const requestedCategory=categorySelect.value;
      quizSelect.disabled=true;
      quizSelect.replaceChildren(new Option("Loading NetHub quizzes…",""));
      try{
        if(!netHubApiBase) throw new Error("NetHub's D1 API is not configured. Set QUIZHUB_NETHUB_API_URL in js/party-config.js.");
        const response=await fetch(`${netHubApiBase}/api/nethub/quizzes`,{cache:"no-store"});
        const payload=await response.json();
        if(!response.ok) throw new Error(payload.error||"Could not load NetHub quizzes.");
        if(!Array.isArray(payload.quizzes)) throw new Error("The NetHub quiz list is invalid.");
        if(categorySelect.value!==requestedCategory) return;
        const options=payload.quizzes
          .filter((quiz)=>typeof quiz.id==="string"&&/^[0-9a-f-]{36}$/i.test(quiz.id))
          .map((quiz)=>[
            quiz.id,
            `${quiz.title} · ${quiz.courseName}`,
          ]);
        quizSelect.replaceChildren(...(options.length
          ? options.map(([id,label])=>new Option(label,id))
          : [new Option("No NetHub quizzes available","")]));
        if(options.some(([id])=>id===previousSelection)) quizSelect.value=previousSelection;
        error.textContent="";
      }catch(loadError){
        if(categorySelect.value!==requestedCategory) return;
        quizSelect.replaceChildren(new Option("Could not load NetHub quizzes",""));
        error.textContent=`Could not load NetHub quizzes: ${loadError.message}`;
      }finally{
        if(categorySelect.value===requestedCategory){
          quizSelect.disabled=false;
          updateLaunchAvailability();
        }
      }
      return;
    }
    const options=[...(quizCatalog[categorySelect.value]||[])];
    if(room?.excludedQuizzesEnabled){
      if(categorySelect.value==="CompGFX"){
        options.push(["lautest","Dr. Lau’s Practice"]);
      }else if(categorySelect.value==="DataSci"){
        options.push(["lautest","Dr. Lau’s Practice"]);
      }
    }
    quizSelect.replaceChildren(...options.map(([id,label])=>{
      const option=document.createElement("option");
      option.value=id;
      option.textContent=label;
      return option;
    }));
    if(options.some(([id])=>id===previousSelection)) quizSelect.value=previousSelection;
    quizSelect.disabled=false;
    updateLaunchAvailability();
  }
  function updateLaunchAvailability(allReady=null,selectedDisplayPlayer=null){
    if(!room) return;
    const validQuiz=quizModeSelect.value==="mixed" ||
      (categorySelect.value==="NetHub"
        ? /^[0-9a-f-]{36}$/i.test(quizSelect.value)
        : Boolean(quizSelect.value));
    const minimumPlayers=room.hostDisplay?3:2;
    const playersReady=allReady??(
      room.players.length>=minimumPlayers&&room.players.length<=room.capacity&&
      room.players.every((player)=>player.ready&&(player.connected||player.fakePlayer))
    );
    const displayPlayer=selectedDisplayPlayer??room.players.find(
      (player)=>player.id===room.hostDisplayPlayerId&&!player.host&&player.connected
    );
    launchButton.disabled=!validQuiz||!playersReady||Boolean(room.hostDisplay&&!displayPlayer);
  }
  function renderQuizMode(){
    const mixed=quizModeSelect.value==="mixed";
    courseQuizPanel.hidden=mixed;
    mixedStudyPanel.hidden=!mixed;
    mixedStudyError.textContent="";
    updateLaunchAvailability();
  }
  categorySelect.addEventListener("change",()=>{
    renderQuizOptions();
    updateLaunchAvailability();
  });
  quizSelect.addEventListener("change",()=>updateLaunchAvailability());
  quizModeSelect.addEventListener("change",renderQuizMode);
  window.QuizHubMixedStudy.renderSourceChoices(mixedStudyChoices);
  renderQuizOptions();
  renderQuizMode();

  leaveButton.addEventListener("click",async()=>{
    leaveButton.disabled=true;
    try{
      await client.send({type:"leave",code});
    }catch(sendError){
      error.textContent=sendError.message;
      leaveButton.disabled=false;
    }
  });
  launchButton.addEventListener("click",async()=>{
    if(!room || launchButton.disabled) return;
    try{
      if(quizModeSelect.value==="mixed"){
        const mixedSources=window.QuizHubMixedStudy.readSourceChoices(mixedStudyChoices);
        await client.send({
          type:"launch",
          code,
          category:"MixedStudy",
          quiz:"mixed",
          mixedSources,
          quizTheme:window.quizHubPreferences.quizTheme
        });
      }else{
        const isNetHub=categorySelect.value==="NetHub";
        await client.send({
          type:"launch",
          code,
          category:isNetHub?"NetHub":categorySelect.value,
          quiz:isNetHub?`nethub_${quizSelect.value.replaceAll("-","")}`:quizSelect.value,
          ...(isNetHub?{netHubQuizId:quizSelect.value}:{}),
          quizTheme:window.quizHubPreferences.quizTheme
        });
      }
    }catch(sendError){
      if(quizModeSelect.value==="mixed") mixedStudyError.textContent=sendError.message;
      else error.textContent=sendError.message;
    }
  });
  optionsButton.addEventListener("click",()=>{
    optionsDialog.hidden=false;
    optionsButton.setAttribute("aria-expanded","true");
    (showScoresInput.disabled?document.getElementById("partyOptionsClose"):showScoresInput).focus();
  });
  document.getElementById("partyOptionsClose").addEventListener("click",()=>{
    optionsDialog.hidden=true;
    optionsButton.setAttribute("aria-expanded","false");
    optionsButton.focus();
  });
  optionsDialog.addEventListener("click",(event)=>{
    if(event.target!==optionsDialog) return;
    optionsDialog.hidden=true;
    optionsButton.setAttribute("aria-expanded","false");
    optionsButton.focus();
  });
  optionsDialog.addEventListener("keydown",(event)=>{
    if(event.key!=="Escape") return;
    optionsDialog.hidden=true;
    optionsButton.setAttribute("aria-expanded","false");
    optionsButton.focus();
  });
  [showScoresInput,showLockedAnswersInput,earlyBonusInput].forEach((input)=>input.addEventListener("change",async()=>{
    if(!room || !isHost || room.stage!=="lobby") return;
    try{
      await client.send({
        type:"party-options",
        code,
        options:{
          showPlayerScores:showScoresInput.checked,
          showLockedAnswers:showLockedAnswersInput.checked,
          earlyPointBonus:earlyBonusInput.checked
        }
      });
    }catch(sendError){
      error.textContent=sendError.message;
      renderPartyOptions();
    }
  }));
  document.getElementById("partyCopyCode").addEventListener("click",async()=>{
    try{
      await navigator.clipboard.writeText(code);
      status.textContent=`Room code ${code} copied.`;
    }catch(copyError){
      error.textContent=`Could not copy room code: ${copyError.message}`;
    }
  });

  client.on("joined",(message)=>{
    playerId=message.playerId;
    room=message.room;
    renderPlayers();
    if(room.stage==="setup" || room.stage==="quiz"){
      enterQuiz(room.category,room.quiz,room.mixedSources,room.quizTheme,room.netHubQuizId);
    }
  });
  client.on("room-state",(message)=>{
    room=message.room;
    renderPlayers();
  });
  client.on("player-left",(message)=>{
    const player=room?.players.find((candidate)=>candidate.id===message.player?.id);
    if(!player) return;
    const leavingPlayer={...player,leaving:true};
    leavingPlayers=leavingPlayers.filter((candidate)=>candidate.id!==player.id);
    leavingPlayers.push(leavingPlayer);
    renderPlayers();
    const previousTimer=leavingPlayerTimers.get(player.id);
    if(previousTimer) clearTimeout(previousTimer);
    leavingPlayerTimers.set(player.id,window.setTimeout(()=>{
      leavingPlayerTimers.delete(player.id);
      leavingPlayers=leavingPlayers.filter((candidate)=>candidate.id!==player.id);
      renderPlayers();
    },700));
  });
  client.on("all-ready",()=>{status.textContent="Everyone is ready.";});
  client.on("launch",(message)=>enterQuiz(
    message.category,
    message.quiz,
    message.mixedSources,
    message.quizTheme,
    message.netHubQuizId,
  ));
  client.on("left",()=>location.replace("index.html"));
  client.on("host-changed",(message)=>{
    if(message.hostId===playerId){
      isHost=true;
      status.textContent="You are now the host.";
      hostControls.hidden=false;
    }else if(isHost){
      isHost=false;
      hostControls.hidden=true;
    }
    updateDevMenuContext();
  });
  client.on("error",(message)=>{
    error.textContent=message.message;
    if(pendingProfile){
      pendingProfile=null;
      profileStatus.textContent=message.message;
      profileStatus.classList.add("error");
      setProfileEditorEnabled(room?.stage==="lobby");
    }
    updateDevMenuContext(message.message);
  });
  client.on("close",()=>{
    if(room && room.stage==="lobby") status.textContent="Disconnected. Reload this page to reconnect.";
  });
  client.send({
    type:"join",code,playerId,
    ...(savedProfile?{player:savedProfile}:{})
  }).catch((connectionError)=>{
    error.textContent=connectionError.message;
    status.textContent="Could not connect to the party server.";
  });
})();
