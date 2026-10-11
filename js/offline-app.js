"use strict";

(() => {
  if (!window.quizHubNativeApp) return;

  const desktop = window.QuizHubDesktop;
  const capacitor = window.Capacitor;
  const offline = desktop || capacitor?.registerPlugin?.("OfflineContent");
  const modal = document.getElementById("offlineAppModal");
  const openButton = document.getElementById("offlineAppButton");
  const downloadButton = document.getElementById("offlineAppDownload");
  const statusMessage = document.getElementById("offlineAppStatus");

  if (!modal || !openButton || !downloadButton || !statusMessage) return;

  const setModalOpen = (open) => {
    modal.classList.toggle("open", open);
    modal.setAttribute("aria-hidden", String(!open));
    openButton.setAttribute("aria-expanded", String(open));
    if (open) downloadButton.focus();
    else openButton.focus();
  };

  const closeModal = () => setModalOpen(false);

  openButton.addEventListener("click", () => setModalOpen(true));
  modal.querySelectorAll("[data-close-offline-app]").forEach((element) => {
    element.addEventListener("click", closeModal);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });

  if (!offline) {
    downloadButton.disabled = true;
    statusMessage.textContent =
      "Offline download is not available in this app version. Update QuizHub to enable it.";
    return;
  }

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

  const updateProgress = (progress) => {
    if (progress.phase === "download" && progress.total > 0) {
      const percent = Math.floor((progress.received / progress.total) * 100);
      statusMessage.textContent = `Downloading offline version: ${percent}%`;
    } else if (progress.phase === "download") {
      const megabytes = (progress.received / (1024 * 1024)).toFixed(0);
      statusMessage.textContent = `Downloading offline version: ${megabytes} MB`;
    } else if (progress.phase === "extract") {
      statusMessage.textContent = "Installing offline files...";
    }
  };

  if (desktop?.onDownloadProgress) {
    desktop.onDownloadProgress(updateProgress);
  } else {
    offline.addListener?.("downloadProgress", updateProgress);
  }

  const refreshOfflineStatus = async () => {
    try {
      const result = await offline.getOfflineStatus();
      if (result.installed) {
        downloadButton.textContent = "Update offline version";
        statusMessage.textContent = `Offline version ${result.version} is installed.`;
      }
    } catch (error) {
      statusMessage.textContent = `Unable to check offline files: ${error.message || error}`;
    }
  };

  downloadButton.addEventListener("click", async () => {
    downloadButton.disabled = true;
    statusMessage.textContent = "Preparing offline download...";
    try {
      const result = await offline.downloadOffline();
      statusMessage.textContent = "Offline version installed. Reloading QuizHub...";
      if (result?.url) location.href = result.url;
      else if (!result?.reloading) location.reload();
    } catch (error) {
      statusMessage.textContent = `Download failed: ${error.message || error}`;
    } finally {
      downloadButton.disabled = false;
    }
  });

  const checkForUpdates = async () => {
    const installed = await offline.getOfflineStatus();
    if (!installed.installed) return;
    const result = await offline.checkForUpdates();
    if (!result.latestVersion || !isNewer(result.latestVersion, installed.version)) {
      return;
    }

    const updateNow = window.confirm(
      `Your downloaded QuizHub version (${installed.version}) is out of date. ` +
        `Version ${result.latestVersion} is available. Update the offline files now?`,
    );
    setModalOpen(true);
    if (updateNow) {
      downloadButton.click();
    } else {
      statusMessage.textContent =
        `Update available: version ${result.latestVersion}. Tap Download offline version when ready.`;
    }
  };

  window.addEventListener(
    "DOMContentLoaded",
    () => {
      refreshOfflineStatus();
      window.setTimeout(() => {
        checkForUpdates().catch((error) => {
          console.warn("Unable to check for an offline QuizHub update:", error);
        });
      }, 1800);
    },
    { once: true },
  );
})();
