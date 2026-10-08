(() => {
  "use strict";

  const params = new URLSearchParams(window.location.search);
  const returnTo = params.get("returnTo");
  let target;
  try {
    target = new URL(returnTo, window.location.href);
  } catch (error) {
    console.error("Invalid Blanc Mode return URL:", error);
    document.querySelector(".message").textContent = "Unable to continue to the quiz results.";
    return;
  }

  if (target.origin !== window.location.origin || !["win.html", "perfect-win.html", "party-win.html"].includes(target.pathname.split("/").pop())) {
    console.error("Rejected invalid Blanc Mode return URL:", target.href);
    document.querySelector(".message").textContent = "Unable to continue to the quiz results.";
    return;
  }

  const messages = [
    "Java is still warm in the kitchen. The animals in their cages are counting the tables in the dining room. The pantry door is open. You were told when to get started.",
    "Someone left the lights on in the lecture hall. There is nobody inside, but every seat is facing you.",
    "The quiz is over. The room is not. Please wait until the footsteps stop before you turn around.",
    "Something else is getting started, the faint sounds of snake echo around you.",
    "The screen went dark for a moment. In that moment, somebody moved closer and whispered about animals in cages."
  ];
  const message = messages[Math.floor(Math.random() * messages.length)];
  const messageElement = document.querySelector(".message");
  messageElement.textContent = message;
  messageElement.dataset.message = message;

  if (localStorage.getItem("quizHubMuted") !== "true") {
    const AudioContextType = window.AudioContext || window.webkitAudioContext;
    if (AudioContextType) {
      const context = new AudioContextType();
      const buffer = context.createBuffer(1, Math.ceil(context.sampleRate * 4.5), context.sampleRate);
      const samples = buffer.getChannelData(0);
      for (let index = 0; index < samples.length; index++) samples[index] = (Math.random() * 2 - 1) * 0.12;

      const source = context.createBufferSource();
      const gain = context.createGain();
      source.buffer = buffer;
      gain.gain.value = 0.12;
      source.connect(gain);
      gain.connect(context.destination);
      source.addEventListener("ended", () => {
        context.close().catch(error => console.warn("Could not close Blanc Mode static audio:", error));
      }, { once: true });
      source.start();
      context.resume().catch(error => console.warn("Could not play Blanc Mode static:", error));
    }
  }

  window.setTimeout(() => {
    window.location.replace(target.href);
  }, 4500);
})();
