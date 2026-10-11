"use strict";

(() => {
  if (!window.quizHubNativeApp) return;

  const desktop = window.QuizHubDesktop;
  const capacitor = window.Capacitor;
  const offline = desktop || capacitor?.registerPlugin?.("OfflineContent");
  if (!offline) return;

  const releaseTag = (value) => String(value || "").replace(/^v/i, "");
  const isNewer = (latest, current) => {
    const left = releaseTag(latest).split(".").map(Number);
    const right = releaseTag(current).split(".").map(Number);
    if (![...left, ...right].every(Number.isFinite)) return latest !== current;
    for (let i = 0; i < Math.max(left.length, right.length); i += 1) {
      const difference = (left[i] || 0) - (right[i] || 0);
      if (difference) return difference > 0;
    }
    return false;
  };

  const addOfflineSettings = () => {
    const panel = document.querySelector("#settingsModal .settings-panel");
    if (!panel || document.getElementById("offlineDownloadButton")) return;

    const section = document.createElement("section");
    section.className = "offline-app-setting";
    section.innerHTML = `
      <h3>OFFLINE PLAY</h3>
      <p>Download the full game, including music and media (about 300 MB to download and 330 MB installed, plus temporary install space), for offline play. Live party games still need an internet connection.</p>
      <button id="offlineDownloadButton" type="button">Download offline version</button>
      <p id="offlineDownloadStatus" role="status" aria-live="polite"></p>
    `;
    panel.append(section);

    const button = section.querySelector("#offlineDownloadButton");
    const status = section.querySelector("#offlineDownloadStatus");
    button.addEventListener("click", async () => {
      button.disabled = true;
      status.textContent = "Preparing offline download...";
      try {
        const result = await offline.downloadOffline();
        status.textContent = "Offline version installed. Reloading QuizHub...";
        if (result?.url) location.href = result.url;
        else if (!result?.reloading) location.reload();
      } catch (error) {
        status.textContent = `Download failed: ${error.message || error}`;
        button.disabled = false;
      }
    });

    const updateProgress = (progress) => {
      if (progress.phase === "download" && progress.total > 0) {
        const percent = Math.floor((progress.received / progress.total) * 100);
        status.textContent = `Downloading offline version: ${percent}%`;
      } else if (progress.phase === "download") {
        const megabytes = (progress.received / (1024 * 1024)).toFixed(0);
        status.textContent = `Downloading offline version: ${megabytes} MB`;
      } else if (progress.phase === "extract") {
        status.textContent = "Installing offline files...";
      }
    };
    if (desktop?.onDownloadProgress) desktop.onDownloadProgress(updateProgress);
    else offline.addListener?.("downloadProgress", updateProgress);

    offline.getOfflineStatus().then((result) => {
      if (result.installed) {
        button.textContent = "Update offline version";
        status.textContent = `Offline version ${result.version} is installed.`;
      }
    }).catch((error) => {
      status.textContent = `Unable to check offline files: ${error.message || error}`;
    });
  };

  const checkForUpdates = async () => {
    const status = await offline.getOfflineStatus();
    if (!status.installed) return;
    const result = await offline.checkForUpdates();
    if (!result.latestVersion || !isNewer(result.latestVersion, status.version)) return;

    const update = window.confirm(
      `Your downloaded QuizHub version (${status.version}) is out of date. ` +
      `Version ${result.latestVersion} is available. Update the offline files now?`,
    );
    if (update) {
      document.getElementById("optionsToggle")?.click();
      const button = document.getElementById("offlineDownloadButton");
      button?.click();
    } else {
      const message = document.getElementById("offlineDownloadStatus");
      if (message) {
        message.textContent =
          `Update available: version ${result.latestVersion}. You can update from Options.`;
      }
    }
  };

  window.addEventListener("DOMContentLoaded", () => {
    addOfflineSettings();
    window.setTimeout(() => {
      checkForUpdates().catch((error) => {
        console.warn("Unable to check for an offline QuizHub update:", error);
      });
    }, 1800);
  }, { once: true });
})();
