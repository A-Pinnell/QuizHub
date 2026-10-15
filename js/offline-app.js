"use strict";

(() => {
  if (!window.quizHubNativeApp) return;

  const desktop = window.QuizHubDesktop;
  const capacitor = window.Capacitor;
  const nativePluginAvailable =
    capacitor?.isPluginAvailable?.("OfflineContent") ??
    Boolean(capacitor?.Plugins?.OfflineContent);
  const offline =
    desktop ||
    (nativePluginAvailable && typeof capacitor?.registerPlugin === "function"
      ? capacitor.registerPlugin("OfflineContent")
      : capacitor?.Plugins?.OfflineContent);
  const modal = document.getElementById("offlineAppModal");
  const openButton = document.getElementById("offlineAppButton");
  const downloadButton = document.getElementById("offlineAppDownload");
  const uninstallButton = document.getElementById("offlineAppUninstall");
  const statusMessage = document.getElementById("offlineAppStatus");
  const onlineModeModal = document.getElementById("onlineModeModal");
  const onlineModeReload = document.getElementById("onlineModeReload");

  if (!modal || !openButton || !downloadButton || !uninstallButton || !statusMessage ||
      !onlineModeModal || !onlineModeReload) return;

  let onlineCheckPending = false;
  let onlineModePromptDismissed = false;
  let onlineModePromptShown = false;

  const closeOnlineModePrompt = () => {
    onlineModeModal.classList.remove("open");
    onlineModeModal.setAttribute("aria-hidden", "true");
    onlineModePromptDismissed = true;
    openButton.focus();
  };

  const checkForHostedSite = async () => {
    if (!window.quizHubOfflineApp || onlineCheckPending ||
        onlineModePromptDismissed || onlineModePromptShown || !navigator.onLine ||
        !document.body.classList.contains("menu-visible")) {
      return;
    }

    onlineCheckPending = true;
    try {
      const response = await fetch(
        `https://a-pinnell.github.io/QuizHub/?connectionCheck=${Date.now()}`,
        {
          method: "HEAD",
          mode: "no-cors",
          cache: "no-store",
          signal: AbortSignal.timeout(5000)
        }
      );
      if (response.type === "opaque" || response.ok) {
        onlineModePromptShown = true;
        onlineModeModal.classList.add("open");
        onlineModeModal.setAttribute("aria-hidden", "false");
        onlineModeReload.focus();
      }
    } catch {
      // The hosted site is unreachable while the app is offline.
    } finally {
      onlineCheckPending = false;
    }
  };

  if (window.quizHubOfflineApp) {
    onlineModeModal
      .querySelectorAll("[data-close-online-mode]")
      .forEach((element) => {
        element.addEventListener("click", closeOnlineModePrompt);
      });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && onlineModeModal.classList.contains("open")) {
        closeOnlineModePrompt();
      }
    });
    onlineModeReload.addEventListener("click", () => {
      const appPlatform =
        window.Capacitor?.getPlatform?.() === "android" ||
        sessionStorage.getItem("quizhubAndroidApp") === "true"
          ? "android"
          : "desktop";
      location.replace(
        `https://a-pinnell.github.io/QuizHub/?quizhubApp=${appPlatform}`
      );
    });
    window.addEventListener("online", () => {
      onlineModePromptDismissed = false;
      checkForHostedSite();
    });
    window.addEventListener("offline", () => {
      onlineModePromptDismissed = false;
      onlineModePromptShown = false;
    });
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) checkForHostedSite();
    });
    const menuObserver = new MutationObserver(() => {
      if (document.body.classList.contains("menu-visible")) {
        menuObserver.disconnect();
        checkForHostedSite();
      }
    });
    menuObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"]
    });
    window.setInterval(checkForHostedSite, 30000);
  }

  const setModalOpen = (open) => {
    modal.classList.toggle("open", open);
    modal.setAttribute("aria-hidden", String(!open));
    openButton.setAttribute("aria-expanded", String(open));
    if (open) downloadButton.focus();
    else openButton.focus();
  };

  const closeModal = () => setModalOpen(false);

  openButton.addEventListener("click", () => {
    setModalOpen(true);
    refreshOfflineStatus();
  });
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
      "Could not connect to this app's offline-download service. Close and reopen QuizHub; if this continues, reinstall the latest Android app package.";
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
        uninstallButton.hidden = false;
        statusMessage.textContent = `Offline version ${result.version} is installed.`;
      } else {
        downloadButton.textContent = "Download offline version";
        uninstallButton.hidden = true;
      }
    } catch (error) {
      statusMessage.textContent = `Unable to check offline files: ${error.message || error}`;
    }
  };

  downloadButton.addEventListener("click", async () => {
    downloadButton.disabled = true;
    uninstallButton.disabled = true;
    statusMessage.textContent = "Preparing offline download...";
    try {
      const result = await offline.downloadOffline();
      if (result?.url) location.href = result.url;
      else {
        statusMessage.textContent =
          "Offline version installed. It will be used the next time QuizHub launches without an internet connection.";
      }
    } catch (error) {
      statusMessage.textContent = `Download failed: ${error.message || error}`;
    } finally {
      downloadButton.disabled = false;
      uninstallButton.disabled = false;
      refreshOfflineStatus();
    }
  });

  uninstallButton.addEventListener("click", async () => {
    if (!window.confirm(
      "Uninstall the downloaded offline files? QuizHub will still work online, and you can download them again later.",
    )) {
      return;
    }

    downloadButton.disabled = true;
    uninstallButton.disabled = true;
    statusMessage.textContent = "Uninstalling offline files...";
    try {
      await offline.uninstallOffline();
      downloadButton.textContent = "Download offline version";
      uninstallButton.hidden = true;
      statusMessage.textContent =
        "Offline files uninstalled. You can download them again at any time.";
    } catch (error) {
      statusMessage.textContent = `Unable to uninstall offline files: ${error.message || error}`;
    } finally {
      downloadButton.disabled = false;
      uninstallButton.disabled = false;
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
