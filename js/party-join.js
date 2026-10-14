(function(){
  "use strict";
  const form=document.getElementById("partyJoinForm");
  const error=document.getElementById("partyJoinError");
  const photoInput=document.getElementById("partyPlayerPhoto");
  const preview=document.getElementById("partyPhotoPreview");
  const checkRoomButton=document.getElementById("partyCheckRoom");
  const profileFields=document.getElementById("partyProfileFields");
  const roomAvailability=document.getElementById("partyRoomAvailability");
  const joinButton=document.getElementById("partyJoinButton");
  let validRoomCode="";
  let isJoining=false;
  let photo="";
  const playerNameInput=document.getElementById("partyPlayerName");
  const playerColorInput=document.getElementById("partyPlayerColor");
  const playerColors=[
    "#3686e8","#e84c3d","#27ae60","#9b59b6","#f39c12",
    "#16a085","#e84393","#34495e","#7f8c8d","#d35400"
  ];

  function assignSuggestedProfile(profiles){
    const takenNames=new Set(profiles.map((profile)=>profile.name.toLocaleLowerCase()));
    let number=1;
    while(takenNames.has(`player ${number}`)) number++;
    playerNameInput.value=`Player ${number}`;
    const takenColors=new Set(profiles.map((profile)=>profile.color.toLowerCase()));
    const availableColors=playerColors.filter((color)=>!takenColors.has(color));
    const colorChoices=availableColors.length?availableColors:playerColors;
    playerColorInput.value=colorChoices[Math.floor(Math.random()*colorChoices.length)];
  }

  photoInput.addEventListener("change",()=>{
    const file=photoInput.files?.[0];
    if(!file) return;
    if(!file.type.startsWith("image/") || file.size>10*1024*1024){
      error.textContent="Choose an image smaller than 10 MB.";
      photoInput.value="";
      return;
    }
    const reader=new FileReader();
    reader.onload=()=>{
      const imageData=String(reader.result);
      if(file.type==="image/gif"){
        if(imageData.length>450_000){
          error.textContent="Choose a GIF smaller than about 330 KB to preserve its animation.";
          return;
        }
        photo=imageData;
        preview.replaceChildren(Object.assign(document.createElement("img"),{src:photo,alt:""}));
        error.textContent="";
        return;
      }
      const image=new Image();
      image.onload=()=>{
        const scale=Math.min(1,256/Math.max(image.naturalWidth,image.naturalHeight));
        const canvas=document.createElement("canvas");
        canvas.width=Math.max(1,Math.round(image.naturalWidth*scale));
        canvas.height=Math.max(1,Math.round(image.naturalHeight*scale));
        const context=canvas.getContext("2d");
        if(!context){
          error.textContent="Could not process that picture.";
          return;
        }
        context.drawImage(image,0,0,canvas.width,canvas.height);
        photo=canvas.toDataURL("image/jpeg",.8);
        preview.replaceChildren(Object.assign(document.createElement("img"),{src:photo,alt:""}));
        error.textContent="";
      };
      image.onerror=()=>{error.textContent="Could not load that picture.";};
      image.src=imageData;
    };
    reader.onerror=()=>{error.textContent="Could not read that picture.";};
    reader.readAsDataURL(file);
  });

  async function joinRoom(){
    error.textContent="";
    const submit=joinButton;
    submit.disabled=true;
    const client=new window.QuizHubPartyClient();
    const roomCode=form.elements.roomCode.value.trim().toUpperCase();
    const player={
      name:form.elements.playerName.value.trim(),
      color:document.getElementById("partyPlayerColor").value,
      photo
    };
    let done=false;
    const finish=(message)=>{
      if(done) return;
      done=true;
      if(message.type==="joined"){
        sessionStorage.setItem("quizHubPartyProfile",JSON.stringify(player));
        sessionStorage.setItem("quizHubPartyReconnect",JSON.stringify({
          code:roomCode,playerId:message.playerId
        }));
        window.location.href=`party-lobby.html?code=${encodeURIComponent(roomCode)}&playerId=${encodeURIComponent(message.playerId)}`;
      }else{
        error.textContent=message.message;
        if(/name is already in the room/i.test(message.message)){
          playerNameInput.focus();
          playerNameInput.select();
        }
        submit.disabled=false;
        client.close();
      }
    };
    client.on("joined",finish);
    client.on("error",finish);
    try{
      client.on("close",()=>{
        if(!done){
          error.textContent="Connection to the lobby was lost. Please try again.";
          submit.disabled=false;
        }
      });
      await client.send({type:"join",code:roomCode,player});
    }catch(connectionError){
      error.textContent=connectionError.message;
      submit.disabled=false;
      client.close();
    }
  }

  form.addEventListener("submit",(event)=>{
    event.preventDefault();
    if(isJoining) joinRoom();
  });

  checkRoomButton.addEventListener("click",async()=>{
    error.textContent="";
    const roomCode=form.elements.roomCode.value.trim().toUpperCase();
    if(!/^[A-Z]{4}$/.test(roomCode)){
      error.textContent="Enter a four-letter room code.";
      return;
    }
    checkRoomButton.disabled=true;
    const client=new window.QuizHubPartyClient();
    let complete=false;
    const finish=(message)=>{
      if(complete) return;
      complete=true;
      if(message.type==="room-found"){
        validRoomCode=roomCode;
        form.elements.roomCode.value=roomCode;
        form.elements.roomCode.readOnly=true;
        assignSuggestedProfile(message.room.profiles||[]);
        profileFields.hidden=false;
        roomAvailability.textContent=`${message.room.players} of ${message.room.capacity} spots are filled. Your suggested name is editable; choose a color and optional picture.`;
        checkRoomButton.hidden=true;
        document.getElementById("partyPlayerName").focus();
        client.close();
      }else{
        error.textContent=message.message;
        checkRoomButton.disabled=false;
        client.close();
      }
    };
    client.on("room-found",finish);
    client.on("error",finish);
    try{
      client.on("close",()=>{
        if(!complete){
          error.textContent="Connection to the lobby server was lost.";
          checkRoomButton.disabled=false;
        }
      });
      await client.send({type:"check-room",code:roomCode});
    }catch(connectionError){
      error.textContent=connectionError.message;
      checkRoomButton.disabled=false;
      client.close();
    }
  });
  form.addEventListener("submit",()=>{
    if(validRoomCode) isJoining=true;
  },{capture:true});
})();
