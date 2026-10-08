(function(){
  "use strict";

  const podium=document.getElementById("partyPodium");
  const title=document.getElementById("partyResultsTitle");
  const summary=document.getElementById("partyResultsSummary");
  const error=document.getElementById("partyResultsError");
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
    document.getElementById("partyPlayAgain").hidden=true;
    return;
  }
  if(results.onlineParty===true){
    document.getElementById("partyPlayAgain").hidden=true;
  }

  const standings=results.partyPlayers
    .map((player,index)=>({
      id:player.id,
      name:typeof player.name==="string" && player.name.trim()?player.name.trim():`Player ${index+1}`,
      color:typeof player.color==="string" && /^#[0-9a-f]{6}$/i.test(player.color)?player.color:"#526b9a",
      photo:typeof player.photo==="string" && player.photo.startsWith("data:image/")?player.photo:"",
      score:Number.isFinite(Number(player.score))?Math.max(0,Number(player.score)):0
    }))
    .sort((first,second)=>second.score-first.score);
  const winners=standings.filter((player)=>player.score===standings[0].score);
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
    if(player.photo){
      const image=document.createElement("img");
      image.src=player.photo;
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
    card.append(placeLabel,avatar,name,points);
    podium.appendChild(card);
  });

  document.getElementById("partyPlayAgain").addEventListener("click",()=>{
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
  document.getElementById("partyReturnMenu").addEventListener("click",()=>{
    window.location.href="index.html?fromWin=1";
  });
})();
