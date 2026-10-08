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

  if (target.origin !== window.location.origin || !["win.html", "perfect-win.html"].includes(target.pathname.split("/").pop())) {
    console.error("Rejected invalid Blanc Mode return URL:", target.href);
    document.querySelector(".message").textContent = "Unable to continue to the quiz results.";
    return;
  }

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
