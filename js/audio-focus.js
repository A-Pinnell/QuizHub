"use strict";

(() => {
  const plugin = window.Capacitor?.registerPlugin?.("AudioFocus");
  if (!plugin) return;

  const tracks = new Set();
  const nativePlay = HTMLMediaElement.prototype.play;
  let releaseTimer;

  const isMusic = (media) => {
    const source = media.currentSrc || media.src;
    return /(?:^|\/)music\//i.test(source);
  };

  const pauseQuizHubMusic = () => {
    tracks.forEach((track) => track.pause());
    plugin.abandonFocus().catch((error) => {
      console.warn("Unable to release Android audio focus:", error);
    });
  };

  plugin.addListener("audioFocusLost", pauseQuizHubMusic).catch((error) => {
    console.error("Unable to listen for Android audio focus changes:", error);
  });

  HTMLMediaElement.prototype.play = function playWithAudioFocus() {
    if (!isMusic(this)) return nativePlay.call(this);

    tracks.add(this);
    window.clearTimeout(releaseTimer);
    return plugin.requestFocus().then(({ granted }) => {
      if (!granted) {
        this.pause();
        return;
      }
      return nativePlay.call(this);
    });
  };

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) pauseQuizHubMusic();
  });
  document.addEventListener("ended", (event) => {
    if (!tracks.delete(event.target)) return;
    releaseTimer = window.setTimeout(() => {
      if ([...tracks].some((track) => !track.paused)) return;
      plugin.abandonFocus().catch((error) => {
        console.warn("Unable to release Android audio focus:", error);
      });
    }, 250);
  }, true);
  document.addEventListener("pause", (event) => {
    if (!tracks.has(event.target)) return;
    releaseTimer = window.setTimeout(() => {
      if ([...tracks].some((track) => !track.paused)) return;
      plugin.abandonFocus().catch((error) => {
        console.warn("Unable to release Android audio focus:", error);
      });
    }, 250);
  }, true);
})();
