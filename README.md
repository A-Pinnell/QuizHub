# <img src="assets/Logo.png?raw=true" alt="Particular Parks Logo" width="60%"/>

## GitHub Pages and online party games

GitHub Pages hosts the static QuizHub site. Online party games additionally connect to the Render WebSocket service defined in [`render.yaml`](./render.yaml); GitHub Pages cannot run the Node server itself.

### Set up Render and deploy the party server

1. Push the repository, including `render.yaml`, to GitHub. Render deploys from GitHub, so the relevant changes must be pushed before setup.
2. Create an account at [render.com](https://render.com/) and sign in with GitHub. Authorize Render to access the `A-Pinnell/QuizHub` repository when prompted.
3. In the Render Dashboard, select **New +** → **Blueprint**.
4. Connect the `A-Pinnell/QuizHub` repository and select the branch you publish from. If Render asks for the Blueprint file, use `render.yaml` at the repository root.
5. Review the service named `quizhub-party-server` and select **Apply**. It does not need a database connection; its `/healthz` liveness check does not query NetHub data.
6. Wait for the deploy to finish and the service to show **Live**. Open its `onrender.com` URL followed by `/healthz`; it should return `{"status":"ok"}`.
7. The browser client defaults to `https://quizhub-party-server.onrender.com`. If Render shows a different service URL, update the URL in `js/party-config.js` to that service's HTTPS address and push the change to GitHub.
8. Enable the static site in GitHub: open the repository's **Settings** → **Pages**, choose **Deploy from a branch**, select the published branch and `/ (root)`, and save. Use the Pages URL shown there to open QuizHub. All players visit the Pages site; it connects to the shared Render service at `/party`.

Render will automatically redeploy the Blueprint service when changes are pushed to its connected branch. The free Render service may sleep when idle and take a short time to wake. Room membership and scores are held in memory, so active rooms end if the service restarts or sleeps long enough to restart.

### Build standalone apps

The Windows and Linux desktop apps and the Android app load the hosted GitHub Pages site when an internet connection is available. Tap the download icon in the bottom-left corner and select **Download offline version** to save the complete game (about 321 MB to download and 380 MB installed, plus temporary install space) for offline play. The package includes the complete `assets` folder. Once downloaded, the standalone apps use the saved version only when they launch without an internet connection; when online, they continue loading the hosted site. Downloading or updating offline files does not switch the current session away from the hosted version. The app checks GitHub Releases at startup and offers to update saved files when a newer offline package is available. An internet connection is needed to download or update the package. Live party games still require an internet connection.

The Android app injects its native plugin bridge into the hosted QuizHub pages so download and audio-focus features remain available after the app redirects to GitHub Pages. Changes to this native bridge require rebuilding and reinstalling the Android APK; publishing website files alone cannot add native plugin support to an already-installed APK.

### Mixed Study

Choose **Mixed Study** above the course cards to select question banks from multiple courses, including individual Tech Soc Indi People Can review sets. Use the **None**, **Midterm Reviews**, and **All** presets to quickly change the selection; Midterm Reviews includes the test/midterm practice banks and the Tech Soc Indi People Can exam review sections. Questions identify their course at the start, and the mode uses its own large-answer, game-show-style layout. The Party lobby offers the same bank selection; the host's selection is shared with every player.

### NetHub quizzes

Choose **+ CREATE** to get an AI prompt tailored to a QuizHub course, theme, and optional short-answer mode. Paste the resulting question array into the creator; it accepts question-bank object literals and validates them without executing pasted JavaScript. Choose music from the **QuizHub Tracks** or **NetHub Tracks** collection. The NetHub Tracks are served from `music/NetHubBonus`. The local NetHub service also supports uploading an MP3/WAV up to 10 MB; hosted D1-only NetHub does not store custom audio, so choose a listed track there. NetHub quizzes can be downloaded as JSON or added to this device's **Saved NetHub Quizzes** shelf. The **My Uploads** button opens the username and 4-digit password account used to edit or delete uploads.

Party hosts can select **NetHub uploads** in the course list and choose any public quiz. Every player loads the selected quiz from the party server, so players do not need to have saved the quiz on their own device.

Choose **Export** from the main menu to browse the QuizHub and NetHub collections. Each quiz can be downloaded as an exam-style PDF with all questions followed by a separate answer-key section, or as JSON question data. NetHub exports include hosted quizzes and quizzes saved on the current device. Procedural Binary and Hexadecimal practice do not have a fixed question bank to export.

Hosted NetHub uses a Cloudflare Worker and D1 for quiz/account data. This D1-only configuration does not require R2; custom uploaded music is unavailable in hosted NetHub, but the included QuizHub and NetHub tracks remain available. Cloudflare's Workers Free and D1 Free plan quotas apply. The Render service remains responsible for party-game WebSockets and active presence; it no longer connects to Supabase. Local development continues to use the Render server's file-based `data/nethub.json`.

#### Deploy the NetHub Worker

1. Install the project dependencies, sign in to Cloudflare with `npx wrangler login`, and create a D1 database named `quizhub-nethub`:

   ```powershell
   npx wrangler --config cloudflare/wrangler.jsonc d1 create quizhub-nethub --binding DB --update-config
   ```

   This setup uses no R2 bucket or R2 subscription. Do not add a paid Workers plan for this setup.
2. Check that `cloudflare/wrangler.jsonc` contains the new D1 database ID. Apply the schema with `npm run nethub:migrate:remote`, then deploy with `npm run nethub:deploy`.
3. Set the Worker secret `PIN_PEPPER` with `npx wrangler --config cloudflare/wrangler.jsonc secret put PIN_PEPPER`. Use a randomly generated secret of at least 32 bytes; do not commit it. NetHub PINs are derived in the browser before submission, and this Worker secret prevents a database-only leak from being used to verify PIN guesses.
4. Copy the deployed `workers.dev` URL from Wrangler. Set `window.QUIZHUB_NETHUB_API_URL` in [`js/party-config.js`](./js/party-config.js) to that HTTPS URL and publish the updated static site. Do not set it to the Render party-server URL. The local development default still uses the local Node service.

#### Migrate existing Supabase NetHub data

1. Keep the old Supabase project running until the migration is verified. Export its `public.nethub_state` data to a private JSON file outside this repository. In PowerShell, enter the database URI without putting it in command history, export the file, and clear the environment variable:

   ```powershell
   $secureUri = Read-Host "Supabase database URI" -AsSecureString
   $env:DATABASE_URL = [System.Net.NetworkCredential]::new("", $secureUri).Password
   try {
     node scripts/export-nethub.js "$env:TEMP\quizhub-nethub-export.json"
   } finally {
     Remove-Item Env:DATABASE_URL
   }
   ```

   The export contains quiz data and legacy password hashes; keep it private and do not commit it.
2. Set a temporary Cloudflare Worker secret named `IMPORT_TOKEN` using `npx wrangler --config cloudflare/wrangler.jsonc secret put IMPORT_TOKEN`. Use a long random value, and provide the same value to the import script through the `QUIZHUB_NETHUB_IMPORT_TOKEN` environment variable.
3. Run `node scripts/import-nethub-to-d1.js <Worker-HTTPS-URL> <private-export-file> <private-reset-codes-file>`. Set `QUIZHUB_NETHUB_IMPORT_TOKEN` in the current PowerShell process to the same token before running it, then remove that environment variable. The importer transfers accounts and quizzes, keeping usernames and quiz ownership. It generates new 4-digit PINs because the old hashes cannot be verified on Workers Free. Uploaded music is not imported; included QuizHub tracks are retained. Share each PIN privately with its account owner; keep the reset-codes file private.
4. After confirming public quizzes, personal uploads, edits, included music, and party quiz links work from the published site, disable the importer with `npx wrangler --config cloudflare/wrangler.jsonc secret delete IMPORT_TOKEN`. Keep a private backup, then cancel the old Supabase project separately if you no longer need it.

PINs are derived with PBKDF2 in the browser and verified using a keyed HMAC in the Worker. A 4-digit PIN is intentionally low-entropy and is rate-limited; do not reuse a PIN or store sensitive information in a quiz. Accounts have no password recovery. Keep `PIN_PEPPER` private and back up important quizzes regularly.

For D1, Cloudflare lists no data-transfer/egress charges. Free-tier quotas still apply: D1 Free includes daily read/write limits and account storage limits; Workers Free includes a daily request quota and a 10 ms CPU limit. Review [D1 pricing](https://developers.cloudflare.com/d1/platform/pricing/) and [Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/) before relying on the free tier. Exceeding free limits can stop requests until limits reset.

To run the Worker locally, apply its schema with `npx wrangler --config cloudflare/wrangler.jsonc d1 migrations apply quizhub-nethub --local`, then run `npm run nethub:dev`. Local Worker authentication also needs a temporary `PIN_PEPPER` value supplied to Wrangler or in the ignored `cloudflare/.dev.vars` file.

### Host Display

In the party lobby, open **Options** and enable **Host Display** to show the question and answer choices on the host screen. Select a player account already in the lobby; that player answers from their own device and gets the **Skip**, **Next**, and **End Quiz** controls as large icons along the left edge. The existing host is labeled **(Display)** and the selected player's existing slot **(Player)** in the lobby only. The selected player's lobby card and quiz roster use the host's name, color, and photo; the display account is excluded from the score roster. No extra room account is added. Host Display needs at least three room accounts. The display keeps the selected quiz theme and plays quiz music; answering devices play sound effects only and do not show a music toggle.

1. Install dependencies with `npm install`.
2. Build a Windows installer with `npm run package:win` or a Linux AppImage with `npm run package:linux`.
3. Find desktop builds in the `desktop-dist` directory.
4. Build an Android APK with `npm run android:sync`, then run `.\gradlew.bat assembleDebug` from the `android` directory. The APK is written under `android\app\build\outputs\apk\debug`.

For Windows desktop development, run `npm run desktop`. Pushing a version tag such as `v2.4.0` builds the apps and a versioned offline-site ZIP, then publishes them as GitHub Release assets. Android builds are debug-signed for direct installation; installing a later release may require removing an earlier build first.

### Run locally

For local development, run `npm install` and `npm start`, then open `http://localhost:8080`. Local browser hosts automatically use their own origin instead of Render.

The free Render service may sleep when idle and take a short time to wake. Room membership and scores are held in memory, so active rooms end if the service restarts or sleeps long enough to restart. For local development, run `npm install` and `npm start`, then open `http://localhost:8080`; local browser hosts automatically use their own origin instead of Render.
