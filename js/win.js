window.addEventListener("load", function(){
  "use strict";

  let soundsMuted=localStorage.getItem("quizHubMuted")==="true";
  const winSound=new Audio("sfx/Win.wav");
  if(!soundsMuted) winSound.play().catch(()=>{});

  const soundToggle=document.getElementById("soundToggle");
  function updateSoundToggle(){
    soundToggle.textContent=soundsMuted?"🔇":"🔊";
    soundToggle.setAttribute("aria-label",soundsMuted?"Unmute sounds":"Mute sounds");
    soundToggle.setAttribute("aria-pressed",String(soundsMuted));
  }
  soundToggle.addEventListener("click",function(){
    soundsMuted=!soundsMuted;
    localStorage.setItem("quizHubMuted",String(soundsMuted));
    updateSoundToggle();
  });
  updateSoundToggle();

  document.addEventListener("keydown",function(event){
    if(event.key.toLowerCase()!=="m" || event.target.tagName==="INPUT") return;
    event.preventDefault();
    soundsMuted=!(soundsMuted && localStorage.getItem("quizHubMusicMuted")==="true");
    localStorage.setItem("quizHubMuted",String(soundsMuted));
    localStorage.setItem("quizHubMusicMuted",String(soundsMuted));
    updateSoundToggle();
  });

  const highlightSoundPath="sfx/highlight.wav";
  document.addEventListener("pointerover",function(event){
    const button=event.target.closest("button");
    if(!soundsMuted && button && !button.contains(event.relatedTarget)){
      const highlightSound=new Audio(highlightSoundPath);
      highlightSound.play().catch(()=>{});
    }
  });

  const params = new URLSearchParams(window.location.search);
  let data = null;

  // URLSearchParams already decodes the query parameter once.
  const raw = params.get("results");
  if(raw){
    try{ data = JSON.parse(raw); }
    catch(err){ console.error("Could not read quiz results:",err); }
  }

  // Compatibility fallback if the quiz later stores results in sessionStorage.
  if(!data){
    try{
      const saved = sessionStorage.getItem("lakeheadQuizResults");
      if(saved) data = JSON.parse(saved);
    }catch(err){}
  }

  const scoreEl = document.getElementById("score");
  const summaryEl = document.getElementById("summary");
  const reviewEl = document.getElementById("review");
  const errorEl = document.getElementById("error");
  const retryBtn = document.getElementById("retry");
  const menuBtn = document.getElementById("menu");
  const retakeIncorrectBtn = document.getElementById("retakeIncorrect");
  const filterButtons = [...document.querySelectorAll(".filter-btn")];
  const winClose = document.getElementById("winClose");

  winClose.addEventListener("click",function(){
    window.location.href = "index.html";
  });

  if(!data || !Array.isArray(data.history)){
    scoreEl.textContent = "—";
    summaryEl.textContent = "Results could not be loaded.";
    errorEl.classList.add("show");
    retryBtn.style.display = "none";
    retakeIncorrectBtn.style.display = "none";
    return;
  }

  const category =
    typeof data.category === "string" && data.category.trim()
      ? data.category
      : "Mixed STEM";

  const total = Number.isFinite(Number(data.total))
    ? Number(data.total)
    : data.history.length;

  const score = Number.isFinite(Number(data.score))
    ? Number(data.score)
    : 0;

  const correctCount = data.history.filter((item) => item && item.correct === true).length;
  const incorrectCount = data.history.filter((item) => item && item.correct !== true).length;

  scoreEl.textContent = score + " / " + total;

  // Passing = at least 50%.
  const passed = total > 0 && score / total >= 0.5;

  summaryEl.textContent = passed
    ? `You passed! ${correctCount} correct and ${incorrectCount} missed.`
    : `Keep practicing — ${incorrectCount} missed questions are ready to retry.`;

  function resolveQuizBank(course, quizType){
    const source = window.questionBank && window.questionBank[course]
      ? window.questionBank[course]
      : [];

    if (Array.isArray(source)) return source;
    if (!source || typeof source !== "object") return [];

    if (quizType === "textbookQuiz") {
      return Array.isArray(source.textbook)
        ? source.textbook
        : Array.isArray(source.textbookQuestions)
          ? source.textbookQuestions
          : [];
    }

    if (quizType === "reviewQuiz") {
      return Array.isArray(source.review)
        ? source.review
        : Array.isArray(source.reviewQuestions)
          ? source.reviewQuestions
          : [];
    }

    return Array.isArray(source.review)
      ? source.review
      : Array.isArray(source.textbook)
        ? source.textbook
        : [];
  }

  function findQuestionIndex(item){
    if (!item || typeof item !== "object") return null;

    if (Number.isInteger(Number(item.questionIndex)) && Number(item.questionIndex) >= 0) {
      return Number(item.questionIndex);
    }

    const bank = resolveQuizBank(category, data.quizType || null);

    const normalized = typeof item.question === "string"
      ? item.question.trim().toLowerCase().replace(/\s+/g, " ")
      : "";

    const foundIndex = bank.findIndex((entry) => {
      if (!entry || typeof entry.q !== "string") return false;
      return entry.q.trim().toLowerCase().replace(/\s+/g, " ") === normalized;
    });

    return foundIndex >= 0 ? foundIndex : null;
  }

  function getIncorrectQuestionIndexes(){
    const bank = resolveQuizBank(category, data.quizType || null);

    const indexes = [];
    data.history.forEach((item) => {
      if (!item || item.correct === true) return;
      const questionIndex = findQuestionIndex(item);
      if (questionIndex === null || !bank[questionIndex]) return;
      if (!indexes.includes(questionIndex)) {
        indexes.push(questionIndex);
      }
    });

    return indexes;
  }

  let activeFilter = "all";

  function renderReview(){
    reviewEl.innerHTML = "";
    const items = data.history.filter((item) => {
      if (activeFilter === "correct") return item && item.correct === true;
      if (activeFilter === "incorrect") return item && item.correct !== true;
      return true;
    });

    if (!items.length){
      const empty = document.createElement("div");
      empty.className = "answer";
      empty.textContent = activeFilter === "all"
        ? "No questions were recorded for this quiz."
        : "No questions match this filter.";
      reviewEl.appendChild(empty);
      return;
    }

    items.forEach(function(item,index){
      const originalIndex = data.history.indexOf(item);
      const article = document.createElement("article");
      const correct = item && item.correct === true;
      const skipped = item && item.skipped === true;

      article.className = "item " + (correct ? "correct" : "wrong");
      article.style.animationDelay = (index * 65) + "ms";

      const q = document.createElement("div");
      q.className = "q";
      q.textContent = (originalIndex + 1) + ". " + (item.question || "Question");

      const answer = document.createElement("div");
      answer.className = "answer";

      const yourLabel = document.createElement("strong");
      yourLabel.textContent = "Your answer:";
      answer.appendChild(yourLabel);
      answer.appendChild(document.createTextNode(
        " " + (skipped ? "Skipped" : (item.selected || "No answer"))
      ));

      answer.appendChild(document.createElement("br"));

      const correctLabel = document.createElement("strong");
      correctLabel.textContent = "Correct answer:";
      answer.appendChild(correctLabel);
      answer.appendChild(document.createTextNode(
        " " + (item.correctAnswer || "—")
      ));

      const status = document.createElement("div");
      status.className = "status";
      status.textContent =
        correct ? "CORRECT" : (skipped ? "SKIPPED" : "INCORRECT");

      article.appendChild(q);
      article.appendChild(answer);
      article.appendChild(status);
      reviewEl.appendChild(article);
    });
  }

  filterButtons.forEach(function(button){
    button.addEventListener("click",function(){
      activeFilter = button.dataset.filter || "all";
      filterButtons.forEach((btn) => btn.classList.toggle("active", btn === button));
      renderReview();
    });
  });

  const incorrectQuestionIndexes = getIncorrectQuestionIndexes();
  retakeIncorrectBtn.disabled = incorrectQuestionIndexes.length === 0;
  retakeIncorrectBtn.textContent = incorrectQuestionIndexes.length > 0
    ? `RETAKE ${incorrectQuestionIndexes.length} MISSED`
    : "NO MISSED QUESTIONS";

  retakeIncorrectBtn.addEventListener("click",function(){
    if (incorrectQuestionIndexes.length === 0) return;

    const target = new URL("quiz.html", window.location.href);
    target.searchParams.set("category", category);
    target.searchParams.set("miniQuiz", "true");
    target.searchParams.set("miniQuestions", incorrectQuestionIndexes.join(","));
    window.location.href = target.toString();
  });

  renderReview();

  retryBtn.addEventListener("click",function(){
    const target = new URL("quiz.html", window.location.href);
    target.searchParams.set("category", category);
    target.searchParams.set("quiz", data.quizType || "reviewQuiz");
    window.location.href = target.toString();
  });

  menuBtn.addEventListener("click",function(){
    window.location.href = "index.html";
  });

  /* -------------------------------------------------------
     CSS/JS FIREWORKS
     Passed: many fireworks
     Failed: exactly one firework
     ------------------------------------------------------- */
  const canvas = document.getElementById("fireworks");
  const ctx = canvas.getContext("2d");
  let W = 0, H = 0, dpr = 1;
  let fireworks = [];
  let particles = [];
  let launchTimer = null;
  let animationId = null;

  function resize(){
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = Math.floor(W * dpr);
    canvas.height = Math.floor(H * dpr);
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }

  window.addEventListener("resize",resize);
  resize();

  function random(min,max){
    return min + Math.random() * (max-min);
  }

  function launch(x, targetY){
    fireworks.push({
      x:x,
      y:H + 12,
      vx:random(-.7,.7),
      vy:random(-12.5,-15.5),
      targetY:targetY,
      hue:random(0,360),
      trail:[]
    });
  }

  function burst(x,y,hue){
    const count = Math.floor(random(65,105));

    for(let i=0;i<count;i++){
      const angle = (Math.PI * 2 * i / count) + random(-.035,.035);
      const speed = random(2.2,7.5);
      particles.push({
        x:x,y:y,
        vx:Math.cos(angle)*speed,
        vy:Math.sin(angle)*speed,
        gravity:.075,
        drag:.985,
        life:random(48,92),
        maxLife:0,
        hue:hue + random(-28,28),
        size:random(1.2,2.8)
      });
    }

    // Bright central flash.
    particles.push({
      x:x,y:y,vx:0,vy:0,gravity:0,drag:1,
      life:18,maxLife:18,hue:hue,size:9,flash:true
    });
  }

  function update(){
    ctx.clearRect(0,0,W,H);

    // Slightly transparent dark overlay creates glowing trails.
    ctx.fillStyle = "rgba(8,17,29,.16)";
    ctx.fillRect(0,0,W,H);

    for(let i=fireworks.length-1;i>=0;i--){
      const f = fireworks[i];

      f.trail.push({x:f.x,y:f.y});
      if(f.trail.length > 8) f.trail.shift();

      f.x += f.vx;
      f.y += f.vy;
      f.vy += .105;

      ctx.beginPath();
      for(let j=0;j<f.trail.length;j++){
        const p=f.trail[j];
        if(j===0) ctx.moveTo(p.x,p.y);
        else ctx.lineTo(p.x,p.y);
      }
      ctx.strokeStyle = "rgba(255,220,170,.65)";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(f.x,f.y,2.5,0,Math.PI*2);
      ctx.fillStyle="#fff5cf";
      ctx.fill();

      if(f.y <= f.targetY){
        burst(f.x,f.y,f.hue);
        fireworks.splice(i,1);
      }
    }

    for(let i=particles.length-1;i>=0;i--){
      const p=particles[i];

      p.x += p.vx;
      p.y += p.vy;
      p.vx *= p.drag;
      p.vy = p.vy * p.drag + p.gravity;
      p.life--;

      const alpha = Math.max(0,p.life / (p.maxLife || 70));

      if(p.flash){
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.size*(1-alpha+.3),0,Math.PI*2);
        ctx.fillStyle="rgba(255,244,195,"+alpha+")";
        ctx.fill();
      }else{
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
        ctx.fillStyle="hsla("+p.hue+",95%,70%,"+alpha+")";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(p.x,p.y);
        ctx.lineTo(p.x-p.vx*3,p.y-p.vy*3);
        ctx.strokeStyle="hsla("+p.hue+",95%,72%,"+(alpha*.45)+")";
        ctx.lineWidth=1.2;
        ctx.stroke();
      }

      if(p.life<=0) particles.splice(i,1);
    }

    animationId=requestAnimationFrame(update);
  }

  function startFireworks(){
    const reduced = window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if(reduced) return;

    update();

    // Continuous celebration regardless of score.
    // Several initial launches make the page feel alive immediately,
    // then a steady stream keeps the sky filled with fireworks.
    setTimeout(()=>launch(W*.18, H*.30),250);
    setTimeout(()=>launch(W*.50, H*.22),500);
    setTimeout(()=>launch(W*.82, H*.28),750);
    setTimeout(()=>launch(W*.35, H*.38),1000);
    setTimeout(()=>launch(W*.68, H*.34),1250);

    launchTimer = setInterval(function(){
      launch(
        random(W*.08,W*.92),
        random(H*.16,H*.45)
      );
    },420);
  }

  startFireworks();

  window.addEventListener("beforeunload",function(){
    if(launchTimer) clearInterval(launchTimer);
    if(animationId) cancelAnimationFrame(animationId);
  });
});