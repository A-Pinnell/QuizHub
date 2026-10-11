# QuizHub

## GitHub Pages and online party games

GitHub Pages hosts the static QuizHub site. Online party games additionally connect to the Render WebSocket service defined in [`render.yaml`](./render.yaml); GitHub Pages cannot run the Node server itself.

### Set up Render and deploy the party server

1. Push the repository, including `render.yaml`, to GitHub. Render deploys from GitHub, so the relevant changes must be pushed before setup.
2. Create an account at [render.com](https://render.com/) and sign in with GitHub. Authorize Render to access the `A-Pinnell/QuizHub` repository when prompted.
3. In the Render Dashboard, select **New +** → **Blueprint**.
4. Connect the `A-Pinnell/QuizHub` repository and select the branch you publish from. If Render asks for the Blueprint file, use `render.yaml` at the repository root.
5. Review the service named `quizhub-party-server`, then select **Apply** to create it. The Blueprint configures the Node start command and `/healthz` health check.
6. Wait for the first deploy to finish and the service to show **Live**. Open its `onrender.com` URL followed by `/healthz`; it should return `{"status":"ok"}`.
7. The browser client defaults to `https://quizhub-party-server.onrender.com`. If Render shows a different service URL, update the URL in `js/party-config.js` to that service's HTTPS address and push the change to GitHub.
8. Enable the static site in GitHub: open the repository's **Settings** → **Pages**, choose **Deploy from a branch**, select the published branch and `/ (root)`, and save. Use the Pages URL shown there to open QuizHub. All players visit the Pages site; it connects to the shared Render service at `/party`.

Render will automatically redeploy the Blueprint service when changes are pushed to its connected branch. The free Render service may sleep when idle and take a short time to wake. Room membership and scores are held in memory, so active rooms end if the service restarts or sleeps long enough to restart.

### Build standalone apps

The Windows and Linux desktop apps and the Android app load the hosted GitHub Pages site when an internet connection is available. Tap the download icon in the bottom-left corner and select **Download offline version** to save the complete game (about 275 MB to download and 330 MB installed, plus temporary install space) for offline play. Once downloaded, the standalone apps use the saved version only when they launch without an internet connection; when online, they continue loading the hosted site. Downloading or updating offline files does not switch the current session away from the hosted version. The app checks GitHub Releases at startup and offers to update saved files when a newer offline package is available. An internet connection is needed to download or update the package. Live party games still require an internet connection.

The Android app injects its native plugin bridge into the hosted QuizHub pages so download and audio-focus features remain available after the app redirects to GitHub Pages. Changes to this native bridge require rebuilding and reinstalling the Android APK; publishing website files alone cannot add native plugin support to an already-installed APK.

### Mixed Study

Choose **Mixed Study** above the course cards to select question banks from multiple courses, including individual Tech Soc Indi People Can review sets. Use the **None**, **Midterm Reviews**, and **All** presets to quickly change the selection; Midterm Reviews includes the test/midterm practice banks and the Tech Soc Indi People Can exam review sections. Questions identify their course at the start, and the mode uses its own large-answer, game-show-style layout. The Party lobby offers the same bank selection; the host's selection is shared with every player.

1. Install dependencies with `npm install`.
2. Build a Windows installer with `npm run package:win` or a Linux AppImage with `npm run package:linux`.
3. Find desktop builds in the `desktop-dist` directory.
4. Build an Android APK with `npm run android:sync`, then run `.\gradlew.bat assembleDebug` from the `android` directory. The APK is written under `android\app\build\outputs\apk\debug`.

For Windows desktop development, run `npm run desktop`. Pushing a version tag such as `v2.4.0` builds the apps and a versioned offline-site ZIP, then publishes them as GitHub Release assets. Android builds are debug-signed for direct installation; installing a later release may require removing an earlier build first.

### Run locally

For local development, run `npm install` and `npm start`, then open `http://localhost:8080`. Local browser hosts automatically use their own origin instead of Render.

The free Render service may sleep when idle and take a short time to wake. Room membership and scores are held in memory, so active rooms end if the service restarts or sleeps long enough to restart. For local development, run `npm install` and `npm start`, then open `http://localhost:8080`; local browser hosts automatically use their own origin instead of Render.
