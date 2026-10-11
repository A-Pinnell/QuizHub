"use strict";

const { app, BrowserWindow, dialog, ipcMain, shell } = require("electron");
const fs = require("node:fs/promises");
const fsSync = require("node:fs");
const path = require("node:path");
const { fileURLToPath } = require("node:url");
const { execFile } = require("node:child_process");
const { promisify } = require("node:util");
const { Readable } = require("node:stream");
const { pipeline } = require("node:stream/promises");

const siteUrl = new URL("https://a-pinnell.github.io/QuizHub/");
siteUrl.searchParams.set("quizhubApp", "desktop");
const offlineDirectory = path.join(app.getPath("userData"), "offline-content");
const offlineArchive = path.join(app.getPath("userData"), "offline-site.zip");
const runFile = promisify(execFile);
const releaseApiUrl = "https://api.github.com/repos/A-Pinnell/QuizHub/releases/latest";

async function getLatestRelease() {
  const response = await fetch(releaseApiUrl, {
    headers: { Accept: "application/vnd.github+json", "User-Agent": "QuizHub-Desktop" },
    signal: AbortSignal.timeout(20000)
  });
  if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
  return response.json();
}

async function getOfflineStatus() {
  try {
    const metadata = JSON.parse(
      await fs.readFile(path.join(offlineDirectory, "version.json"), "utf8")
    );
    await fs.access(path.join(offlineDirectory, "index.html"));
    return { installed: true, version: metadata.version };
  } catch (error) {
    if (error.code === "ENOENT") {
      return { installed: false, version: null };
    }
    throw error;
  }
}

function isTrustedSender(senderFrame) {
  try {
    const senderUrl = new URL(senderFrame.url);
    if (senderUrl.origin === siteUrl.origin) return true;
    if (senderUrl.protocol !== "file:") return false;
    const senderPath = path.resolve(fileURLToPath(senderUrl));
    return senderPath.startsWith(`${offlineDirectory}${path.sep}`);
  } catch {
    return false;
  }
}

async function downloadOffline(event) {
  const release = await getLatestRelease();
  const asset = release.assets?.find((item) => item.name === "offline-site.zip");
  if (!asset) throw new Error("The latest release does not include offline-site.zip.");

  const response = await fetch(asset.browser_download_url, {
    headers: { "User-Agent": "QuizHub-Desktop" },
    signal: AbortSignal.timeout(15 * 60 * 1000)
  });
  if (!response.ok || !response.body) throw new Error(`Download failed (${response.status}).`);

  const total = Number(response.headers.get("content-length")) || asset.size || 0;
  const source = Readable.fromWeb(response.body);
  let received = 0;
  source.on("data", (chunk) => {
    received += chunk.length;
    event.sender.send("offline:download-progress", { phase: "download", received, total });
  });

  const pendingDirectory = `${offlineDirectory}.pending`;
  const oldDirectory = `${offlineDirectory}.old`;
  let backedUpPrevious = false;
  let installedNewVersion = false;
  try {
    await fs.rm(pendingDirectory, { recursive: true, force: true });
    await fs.rm(offlineArchive, { force: true });
    await pipeline(source, fsSync.createWriteStream(offlineArchive));

    const { stdout } = await runFile("tar", ["-tf", offlineArchive], { maxBuffer: 10 * 1024 * 1024 });
    const entries = stdout.split(/\r?\n/).filter(Boolean);
    if (entries.some((entry) =>
      path.isAbsolute(entry) || entry.split(/[\\/]/).includes("..")
    )) {
      throw new Error("The offline package contains an unsafe file path.");
    }

    await fs.mkdir(pendingDirectory, { recursive: true });
    event.sender.send("offline:download-progress", { phase: "extract" });
    await runFile("tar", ["-xf", offlineArchive, "-C", pendingDirectory]);
    const metadata = JSON.parse(
      await fs.readFile(path.join(pendingDirectory, "version.json"), "utf8")
    );
    if (metadata.version !== release.tag_name) {
      throw new Error("The offline package version does not match the release.");
    }
    await fs.access(path.join(pendingDirectory, "index.html"));
    await fs.rm(oldDirectory, { recursive: true, force: true });
    try {
      await fs.rename(offlineDirectory, oldDirectory);
      backedUpPrevious = true;
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
    await fs.rename(pendingDirectory, offlineDirectory);
    installedNewVersion = true;
    await fs.rm(oldDirectory, { recursive: true, force: true });
    return { installed: true };
  } catch (error) {
    if (backedUpPrevious && !installedNewVersion) {
      try {
        await fs.rename(oldDirectory, offlineDirectory);
      } catch (restoreError) {
        error.restoreError = restoreError;
        console.error("Unable to restore the previous offline content:", restoreError);
      }
    }
    throw error;
  } finally {
    await fs.rm(pendingDirectory, { recursive: true, force: true });
    await fs.rm(offlineArchive, { force: true });
  }
}

function registerOfflineHandlers() {
  ipcMain.handle("offline:get-status", async ({ senderFrame }) => {
    if (!isTrustedSender(senderFrame)) throw new Error("Untrusted app frame.");
    return getOfflineStatus();
  });
  ipcMain.handle("offline:check-updates", async ({ senderFrame }) => {
    if (!isTrustedSender(senderFrame)) throw new Error("Untrusted app frame.");
    const release = await getLatestRelease();
    return { latestVersion: release.tag_name };
  });
  ipcMain.handle("offline:download", async (event) => {
    if (!isTrustedSender(event.senderFrame)) throw new Error("Untrusted app frame.");
    return downloadOffline(event);
  });
}

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
      sandbox: true,
      preload: path.join(__dirname, "electron-preload.cjs")
    }
  });

  const installedIndex = path.join(offlineDirectory, "index.html");
  window.webContents.setWindowOpenHandler(({ url }) => {
    openExternalUrl(url);
    return { action: "deny" };
  });

  window.webContents.on("will-navigate", (event, rawUrl) => {
    const url = new URL(rawUrl);
    let isOfflinePage = false;
    if (url.protocol === "file:") {
      try {
        isOfflinePage = path.resolve(fileURLToPath(url))
          .startsWith(`${offlineDirectory}${path.sep}`);
      } catch (error) {
        console.error("Unable to validate offline page path:", error);
      }
    }
    if (url.origin !== siteUrl.origin && !isOfflinePage) {
      event.preventDefault();
      openExternalUrl(rawUrl);
    }
  });

  (async () => {
    let hostedSiteAvailable = false;
    try {
      const response = await fetch(siteUrl, {
        method: "HEAD",
        cache: "no-store",
        signal: AbortSignal.timeout(5000)
      });
      hostedSiteAvailable = response.ok;
    } catch (error) {
      console.info("Hosted QuizHub is unavailable at startup:", error.message);
    }

    if (hostedSiteAvailable) {
      await window.loadURL(siteUrl.href);
      return;
    }

    try {
      await fs.access(installedIndex);
      await window.loadFile(installedIndex);
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
      dialog.showErrorBox(
        "Unable to load QuizHub",
        "QuizHub needs an internet connection for its first launch. Check your connection and try again."
      );
      app.quit();
    }
  })().catch((error) => {
    console.error("Unable to start QuizHub:", error);
    dialog.showErrorBox(
      "Unable to load QuizHub",
      "QuizHub could not open. Please check your connection and try again."
    );
    app.quit();
  });
}

app.whenReady().then(() => {
  registerOfflineHandlers();
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
