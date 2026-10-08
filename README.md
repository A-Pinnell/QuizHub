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

### Run locally

For local development, run `npm install` and `npm start`, then open `http://localhost:8080`. Local browser hosts automatically use their own origin instead of Render.

The free Render service may sleep when idle and take a short time to wake. Room membership and scores are held in memory, so active rooms end if the service restarts or sleeps long enough to restart. For local development, run `npm install` and `npm start`, then open `http://localhost:8080`; local browser hosts automatically use their own origin instead of Render.
