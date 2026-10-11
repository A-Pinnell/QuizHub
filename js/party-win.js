(function(){
  "use strict";

  const params=new URLSearchParams(window.location.search);
  if(window.quizHubPreferences.blancMode && params.get("blancIntro")!=="1"){
    const returnTarget=new URL(window.location.href);
    returnTarget.searchParams.set("blancIntro","1");
    const introTarget=new URL("blanc-message.html",window.location.href);
    introTarget.searchParams.set("returnTo",returnTarget.toString());
    window.location.replace(introTarget.toString());
    return;
  }

  const podium=document.getElementById("partyPodium");
  const title=document.getElementById("partyResultsTitle");
  const summary=document.getElementById("partyResultsSummary");
  const error=document.getElementById("partyResultsError");
  const status=document.getElementById("partyResultsStatus");
  const playAgainButton=document.getElementById("partyPlayAgain");
  const chooseQuizButton=document.getElementById("partyChooseNewQuiz");
  const results=(()=>{
    try{
      return JSON.parse(sessionStorage.getItem("lakeheadQuizResults") || "null");
    }catch(parseError){
      console.error("Could not read party results:",parseError);
      return null;
    }
  })();

  if(!results || results.partyMode!==true || !Array.isArray(results.partyPlayers) || results.partyPlayers.length<2){
    title.textContent="Party results unavailable";
    summary.textContent="";
    error.hidden=false;
    error.textContent="Could not load the player scores. Return to the menu and start another party quiz.";
    playAgainButton.hidden=true;
    chooseQuizButton.hidden=true;
    return;
  }

  const standings=results.partyPlayers
    .map((player,index)=>({
      id:player.id,
      name:typeof player.name==="string" && player.name.trim()?player.name.trim():`Player ${index+1}`,
      color:typeof player.color==="string" && /^#[0-9a-f]{6}$/i.test(player.color)?player.color:"#526b9a",
      photo:typeof player.photo==="string" && player.photo.startsWith("data:image/")?player.photo:"",
      score:Number.isFinite(Number(player.score))?Math.max(0,Number(player.score)):0,
      longestCombo:Number.isFinite(Number(player.longestCombo))?Math.max(0,Number(player.longestCombo)):0
    }))
    .sort((first,second)=>second.score-first.score);
  const winners=standings.filter((player)=>player.score===standings[0].score);
  const currentPlayer=standings.find((player)=>player.id===results.partyCurrentPlayerId);
  if(currentPlayer){
    const currentPlayerWon=winners.some((player)=>player.id===currentPlayer.id);
    const resultMusic=new Audio(currentPlayerWon?"music/PartyWin.mp3":"music/PartyLose.mp3");
    resultMusic.play().catch((playError)=>{
      if(playError.name!=="NotAllowedError"){
        console.error("Could not play party result music:",playError);
      }
    });
    ["pointerdown","keydown","touchstart"].forEach((eventName)=>{
      document.addEventListener(eventName,()=>{
        resultMusic.play().catch((retryError)=>{
          console.error("Could not play party result music:",retryError);
        });
      },{once:true});
    });
  }
  title.textContent=winners.length===1?`${winners[0].name} wins!`:"It's a tie!";
  const quizName=typeof results.quizType==="string" && results.quizType.trim()
    ? results.quizType.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/Quiz$/,"")
    : "Quiz";
  summary.textContent=`${results.category || "Quiz"} · ${quizName} · ${standings[0].score} point${standings[0].score===1?"":"s"}${winners.length>1?` each for ${winners.length} tied leaders`:""}`;
  let place=0;
  let previousScore=null;
  standings.forEach((player,index)=>{
    if(player.score!==previousScore) place=index+1;
    previousScore=player.score;
    const card=document.createElement("article");
    card.className="party-standing";
    card.dataset.place=String(place);
    card.style.setProperty("--player-color",player.color);
    const placeLabel=document.createElement("div");
    placeLabel.className="party-place";
    placeLabel.textContent=place===1?"1st place":place===2?"2nd place":place===3?"3rd place":`${place}th place`;
    const avatar=document.createElement("div");
    avatar.className="party-player-photo";
    if(window.quizHubPreferences.blancMode || player.photo){
      const image=document.createElement("img");
      image.src=window.quizHubPreferences.blancMode?"secret/blanc.png":player.photo;
      image.alt="";
      avatar.appendChild(image);
    }else{
      avatar.textContent=player.name.charAt(0).toUpperCase();
    }
    const name=document.createElement("div");
    name.className="party-player-name";
    name.textContent=player.name;
    const points=document.createElement("div");
    points.className="party-player-score";
    points.textContent=`${player.score} point${player.score===1?"":"s"}`;
    const comboLabel=document.createElement("div");
    comboLabel.className="party-player-combo";
    comboLabel.textContent=`Best combo: ${player.longestCombo}`;
    card.append(placeLabel,avatar,name,points,comboLabel);
    podium.appendChild(card);
  });

  function savePartyPlayers(){
    try{
      sessionStorage.setItem("quizHubPartyPlayers",JSON.stringify(results.partyPlayers.map(({id,name,color,photo})=>({id,name,color,photo}))));
      return true;
    }catch(storageError){
      error.hidden=false;
      error.textContent=`Could not prepare the party players: ${storageError.message}`;
      return false;
    }
  }

  function openQuiz(category,quiz,playerId,isHost){
    if(!savePartyPlayers()) return;
    const target=new URL("quiz.html",window.location.href);
    target.searchParams.set("category",category);
    target.searchParams.set("quiz",quiz);
    target.searchParams.set("partyMode","true");
    target.searchParams.set("partyRoom",results.partyRoomCode);
    target.searchParams.set("partyPlayer",playerId);
    if(isHost) target.searchParams.set("partyHost","true");
    window.location.href=target.toString();
  }

  function openLobby(playerId,isHost){
    if(!savePartyPlayers()) return;
    const target=new URL("party-lobby.html",window.location.href);
    target.searchParams.set("code",results.partyRoomCode);
    target.searchParams.set("playerId",playerId);
    if(isHost) target.searchParams.set("host","1");
    window.location.href=target.toString();
  }

  let partyClient=null;
  if(results.onlineParty===true && /^[A-Z]{4}$/.test(results.partyRoomCode||"") &&
      typeof results.partyCurrentPlayerId==="string"){
    playAgainButton.disabled=true;
    chooseQuizButton.disabled=true;
    status.textContent="Reconnecting to the party…";
    const client=new window.QuizHubPartyClient();
    partyClient=client;
    let room=null;
    function syncControls(){
      const current=room?.players.find((player)=>player.id===results.partyCurrentPlayerId);
      const canHost=Boolean(current?.host);
      playAgainButton.disabled=!canHost;
      chooseQuizButton.disabled=!canHost;
      status.textContent=canHost
        ?"Replay this quiz or choose another one for the same party."
        :"Only the host can start another party quiz.";
    }
    client.on("joined",(message)=>{
      room=message.room;
      syncControls();
      if(room.stage==="lobby"){
        openLobby(results.partyCurrentPlayerId,room.players.some((player)=>player.id===results.partyCurrentPlayerId && player.host));
      }else if((room.stage==="setup" || room.stage==="quiz") && room.category && room.quiz){
        openQuiz(room.category,room.quiz,results.partyCurrentPlayerId,
          room.players.some((player)=>player.id===results.partyCurrentPlayerId && player.host));
      }
    });
    client.on("replay",(message)=>{
      const current=room?.players.find((player)=>player.id===results.partyCurrentPlayerId);
      openQuiz(message.category,message.quiz,results.partyCurrentPlayerId,Boolean(current?.host));
    });
    client.on("choose-new-quiz",()=>{
      const current=room?.players.find((player)=>player.id===results.partyCurrentPlayerId);
      openLobby(results.partyCurrentPlayerId,Boolean(current?.host));
    });
    client.on("room-state",(message)=>{
      room=message.room;
      syncControls();
    });
    client.on("error",(message)=>{
      status.textContent=message.message;
      syncControls();
    });
    client.on("left",()=>{window.location.href="index.html?fromWin=1";});
    client.send({
      type:"join",
      code:results.partyRoomCode,
      playerId:results.partyCurrentPlayerId
    }).catch((connectionError)=>{
      status.textContent=`Could not reconnect to the party: ${connectionError.message}`;
      playAgainButton.disabled=true;
      chooseQuizButton.disabled=true;
    });
    playAgainButton.addEventListener("click",async()=>{
      playAgainButton.disabled=true;
      try{
        await client.send({type:"replay",code:results.partyRoomCode});
      }catch(sendError){
        status.textContent=`Could not replay the quiz: ${sendError.message}`;
        syncControls();
      }
    });
    chooseQuizButton.addEventListener("click",async()=>{
      chooseQuizButton.disabled=true;
      try{
        await client.send({type:"choose-new-quiz",code:results.partyRoomCode});
      }catch(sendError){
        status.textContent=`Could not return to the lobby: ${sendError.message}`;
        syncControls();
      }
    });
  }else{
    chooseQuizButton.hidden=true;
    playAgainButton.addEventListener("click",()=>{
      if(results.onlineParty===true){
        window.location.href="index.html?fromWin=1";
        return;
      }
      try{
        sessionStorage.setItem("quizHubPartyPlayers",JSON.stringify(results.partyPlayers.map(({id,name,color,photo})=>({id,name,color,photo}))));
      const target=new URL("quiz.html",window.location.href);
      target.searchParams.set("category",results.category);
      target.searchParams.set("quiz",results.quizType);
      target.searchParams.set("partyMode","true");
      if(Number.isFinite(Number(results.timeLimitMinutes)) && Number(results.timeLimitMinutes)>0){
        target.searchParams.set("timeLimit",String(results.timeLimitMinutes));
      }
      if(Number.isFinite(Number(results.perQuestionTimeMinutes)) && Number(results.perQuestionTimeMinutes)>0){
        target.searchParams.set("questionTimeLimit",String(results.perQuestionTimeMinutes));
      }
      if(Array.isArray(results.reviewSections)){
        target.searchParams.set("reviewSections",results.reviewSections.join(","));
      }
      window.location.href=target.toString();
      }catch(storageError){
        error.hidden=false;
        error.textContent=`Could not restart party mode: ${storageError.message}`;
      }
    });
  }
  document.getElementById("partyReturnMenu").addEventListener("click",()=>{
    if(results.onlineParty===true && partyClient){
      partyClient.send({type:"leave",code:results.partyRoomCode}).catch((leaveError)=>{
        error.hidden=false;
        error.textContent=`Could not leave the party: ${leaveError.message}`;
      });
      return;
    }
    window.location.href="index.html?fromWin=1";
  });
})();
