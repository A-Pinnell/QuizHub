"use strict";

const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("QuizHubDesktop", {
  getOfflineStatus: () => ipcRenderer.invoke("offline:get-status"),
  checkForUpdates: () => ipcRenderer.invoke("offline:check-updates"),
  downloadOffline: () => ipcRenderer.invoke("offline:download"),
  onDownloadProgress(callback) {
    const listener = (_event, progress) => callback(progress);
    ipcRenderer.on("offline:download-progress", listener);
    return () => ipcRenderer.removeListener("offline:download-progress", listener);
  }
});
