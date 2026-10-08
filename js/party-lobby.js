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
  const categorySelect=document.getElementById("partyCategory");
  const quizSelect=document.getElementById("partyQuiz");
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
  let room=null;
  const client=new window.QuizHubPartyClient();
  const savedProfile=(()=>{
    try{return JSON.parse(sessionStorage.getItem("quizHubPartyProfile")||"null");}
    catch(parseError){console.error("Could not restore your party profile:",parseError);return null;}
  })();

  function renderPlayers(){
    if(!room) return;
    playerList.replaceChildren(...room.players.map((player,index)=>{
      const card=document.createElement("article");
      card.className="party-player-card";
      card.style.setProperty("--player-color",player.color);
      const avatar=document.createElement("div");
      avatar.className="party-avatar";
      if(player.photo){
        const image=document.createElement("img");
        image.src=player.photo;
        image.alt="";
        avatar.appendChild(image);
      }else{
        avatar.textContent=player.name.charAt(0).toUpperCase();
      }
      const name=document.createElement("strong");
      name.textContent=player.name+(player.host?" (Host)":"");
      const ready=document.createElement("span");
      ready.className=`party-ready-status${player.ready?" ready":""}`;
      ready.textContent=player.connected?"Ready":"Disconnected";
      ready.classList.toggle("ready",player.connected);
      card.append(avatar,name,ready);
      return card;
    }));
    const ownPlayer=room.players.find((player)=>player.id===playerId);
    leaveButton.disabled=!ownPlayer;
    const allReady=room.players.length===room.capacity &&
      room.players.every((player)=>player.ready && player.connected);
    status.textContent=room.stage==="lobby"
      ? `${room.players.length} of ${room.capacity} players · players are ready when they join`
      : room.stage==="setup"?"Quiz selected. Waiting for the host to start…"
      : room.stage==="results"?"Game over. Return to the menu to start another room."
      :"Game in progress.";
    launchButton.disabled=!allReady;
  }

  function enterQuiz(category,quiz){
    if(!room) return;
    sessionStorage.setItem("quizHubPartyPlayers",JSON.stringify(room.players.map((player)=>({
      id:player.id,name:player.name,color:player.color,photo:player.photo,score:0
    }))));
    sessionStorage.setItem("quizHubPartyProfile",JSON.stringify(savedProfile||{}));
    const target=new URL("quiz.html",location.href);
    target.searchParams.set("category",category);
    target.searchParams.set("quiz",quiz);
    target.searchParams.set("partyMode","true");
    target.searchParams.set("partyRoom",code);
    target.searchParams.set("partyPlayer",playerId);
    if(isHost) target.searchParams.set("partyHost","true");
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
  categorySelect.addEventListener("change",renderQuizOptions);
  renderQuizOptions();

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
      await client.send({
        type:"launch",code,category:categorySelect.value,quiz:quizSelect.value
      });
    }catch(sendError){error.textContent=sendError.message;}
  });
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
      enterQuiz(room.category,room.quiz);
    }
  });
  client.on("room-state",(message)=>{
    room=message.room;
    renderPlayers();
  });
  client.on("all-ready",()=>{status.textContent="Everyone is ready.";});
  client.on("launch",(message)=>enterQuiz(message.category,message.quiz));
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
