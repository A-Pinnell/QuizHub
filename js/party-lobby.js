(function(){
  "use strict";
  const params=new URLSearchParams(location.search);
  const code=(params.get("code")||"").toUpperCase();
  let playerId=params.get("playerId")||"";
  let isHost=params.get("host")==="1";
  const codeLabel=document.getElementById("partyRoomCode");
  const status=document.getElementById("partyRoomStatus");
  const playerList=document.getElementById("partyPlayerList");
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
    CompArch:[["quiz1","First Slides Practice"]],
    CloudComp:[["quiz1","First Slides Practice"],["quiz2","Week 4 Slides Practice"]],
    SocIndi:[["reviewQuiz","Exam 1 Quiz"],["textbookQuiz","Textbook Quiz"]],
    DataSci:[["test1","Test 1 Practice"]],
    SoftEngi:[["test1","Lectures 1–6 Practice"]]
  };
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
  const client=new window.QuizHubPartyClient();
  const savedProfile=(()=>{
    try{return JSON.parse(sessionStorage.getItem("quizHubPartyProfile")||"null");}
    catch(parseError){console.error("Could not restore your party profile:",parseError);return null;}
  })();

  function displayProfile(player){
    if(!room?.hostDisplay || player.id!==room.hostDisplayPlayerId) return player;
    return room.players.find((candidate)=>candidate.host)||player;
  }

  function renderPlayers(){
    if(!room) return;
    renderPartyOptions();
    playerList.replaceChildren(...room.players.map((player)=>{
      const profile=displayProfile(player);
      const card=document.createElement("article");
      card.className="party-player-card";
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
      ready.className=`party-ready-status${player.ready?" ready":""}`;
      ready.textContent=player.connected?"Ready":"Disconnected";
      ready.classList.toggle("ready",player.connected);
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
    leaveButton.disabled=!ownPlayer;
    hostDisplayInput.checked=room.hostDisplay===true;
    hostDisplayInput.disabled=!isHost || room.stage!=="lobby";
    hostDisplayOption.hidden=!room.hostDisplay;
    hostDisplayPlayerSelect.replaceChildren(
      Object.assign(document.createElement("option"),{
        value:"",
        textContent:"Choose a player account"
      }),
      ...room.players.filter((player)=>!player.host).map((player)=>{
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
      room.players.every((player)=>player.ready && player.connected);
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
    launchButton.disabled=!allReady || Boolean(
      room.hostDisplay && !selectedDisplayPlayer
    );
  }

  function renderPartyOptions(){
    if(!room) return;
    const options=room.partyOptions||{
      showPlayerScores:true,showLockedAnswers:true,earlyPointBonus:true
    };
    showScoresInput.checked=options.showPlayerScores;
    showLockedAnswersInput.checked=options.showLockedAnswers!==false;
    earlyBonusInput.checked=options.earlyPointBonus;
    const canEdit=isHost && room.stage==="lobby";
    showScoresInput.disabled=!canEdit;
    showLockedAnswersInput.disabled=!canEdit;
    earlyBonusInput.disabled=!canEdit;
    optionsHint.textContent=canEdit
      ?"The host controls these settings for everyone."
      :"Only the host can change these settings.";
  }

  function enterQuiz(category,quiz,mixedSources=null){
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
    const target=new URL("quiz.html",location.href);
    target.searchParams.set("category",category);
    target.searchParams.set("quiz",quiz);
    if(mixedSources) target.searchParams.set("mixedSources",JSON.stringify(mixedSources));
    target.searchParams.set("partyMode","true");
    target.searchParams.set("partyRoom",code);
    target.searchParams.set("partyPlayer",playerId);
    if(isHost) target.searchParams.set("partyHost","true");
    if(room.hostDisplay){
      target.searchParams.set("hostDisplay","true");
      target.searchParams.set("hostDisplayPlayer",room.hostDisplayPlayerId);
    }
    location.href=target.toString();
  }

  function renderQuizOptions(){
    const options=quizCatalog[categorySelect.value]||[];
    quizSelect.replaceChildren(...options.map(([id,label])=>{
      const option=document.createElement("option");
      option.value=id;
      option.textContent=label;
      return option;
    }));
  }
  function renderQuizMode(){
    const mixed=quizModeSelect.value==="mixed";
    courseQuizPanel.hidden=mixed;
    mixedStudyPanel.hidden=!mixed;
    mixedStudyError.textContent="";
  }
  categorySelect.addEventListener("change",renderQuizOptions);
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
        await client.send({type:"launch",code,category:"MixedStudy",quiz:"mixed",mixedSources});
      }else{
        await client.send({
          type:"launch",code,category:categorySelect.value,quiz:quizSelect.value
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
      enterQuiz(room.category,room.quiz,room.mixedSources);
    }
  });
  client.on("room-state",(message)=>{
    room=message.room;
    renderPlayers();
  });
  client.on("all-ready",()=>{status.textContent="Everyone is ready.";});
  client.on("launch",(message)=>enterQuiz(message.category,message.quiz,message.mixedSources));
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
  });
  client.on("error",(message)=>{error.textContent=message.message;});
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
