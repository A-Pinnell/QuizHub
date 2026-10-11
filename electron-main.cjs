"use strict";

const { app, BrowserWindow, dialog, shell } = require("electron");

const siteUrl = new URL("https://a-pinnell.github.io/QuizHub/");

function openExternalUrl(rawUrl) {
  const url = new URL(rawUrl);
  if (url.protocol === "http:" || url.protocol === "https:") {
    shell.openExternal(url.href).catch((error) => {
      console.error("Unable to open external link:", error);
    });
  }
}

function createWindow() {
  const window = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  window.webContents.setWindowOpenHandler(({ url }) => {
    openExternalUrl(url);
    return { action: "deny" };
  });

  window.webContents.on("will-navigate", (event, rawUrl) => {
    const url = new URL(rawUrl);
    if (url.origin !== siteUrl.origin) {
      event.preventDefault();
      openExternalUrl(rawUrl);
    }
  });

  window.loadURL(siteUrl.href).catch((error) => {
    console.error("Unable to load the hosted QuizHub site:", error);
    dialog.showErrorBox(
      "Unable to load QuizHub",
      "QuizHub needs an internet connection to load. Check your connection and try again."
    );
    app.quit();
  });
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
}).catch((error) => {
  console.error("Unable to start QuizHub:", error);
  app.quit();
});

app.on("window-all-closed", () => {
  app.quit();
});
