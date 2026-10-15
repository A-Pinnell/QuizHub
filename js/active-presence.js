(function () {
	"use strict";

	const endpoint = new URL(
		"/presence",
		window.QUIZHUB_PARTY_SERVER_URL || window.location.origin,
	);
	const sessionStorageKey = "quizHubPresenceSession";
	const activeUsers = document.getElementById("devActiveUsers");
	const heartbeatIntervalMs = 30_000;
	let sessionId;
	let heartbeatTimer = null;
	let presenceRegistered = false;

	function updateActiveCount(value) {
		if (activeUsers) {
			activeUsers.textContent = value;
			activeUsers.setAttribute(
				"aria-label",
				value === "Unavailable"
					? "Active-session count unavailable"
					: `${value} active sessions`,
			);
		}
		window.quizHubDevMenu?.updateContext({ activeSessions: value });
	}

	try {
		sessionId = window.sessionStorage.getItem(sessionStorageKey);
		if (!sessionId) {
			sessionId = window.crypto.randomUUID();
			window.sessionStorage.setItem(sessionStorageKey, sessionId);
		}
	} catch (error) {
		console.warn("Could not persist the active-session marker:", error);
		sessionId = window.crypto.randomUUID();
	}

	async function sendRequest(method, keepalive = false) {
		const response = await fetch(endpoint, {
			method,
			cache: "no-store",
			headers: { "Content-Type": "application/json" },
			body: method === "POST" ? JSON.stringify({ sessionId }) : undefined,
			keepalive,
		});
		if (!response.ok) {
			throw new Error(`Active-session service returned ${response.status}.`);
		}
		return response.json();
	}

	function showUnavailable(error) {
		if (!window.quizHubOfflineTestMode) updateActiveCount("Unavailable");
		console.error("Could not refresh the active-session count:", error);
	}

	async function refreshCount() {
		if (window.quizHubOfflineTestMode) {
			updateActiveCount("Offline");
			return;
		}
		try {
			const count = await sendRequest("POST");
			presenceRegistered = true;
			if (window.quizHubOfflineTestMode) {
				stopHeartbeat();
				return;
			}
			updateActiveCount(String(count.activeSessions));
		} catch (error) {
			showUnavailable(error);
		}
	}

	function stopHeartbeat() {
		if (heartbeatTimer !== null) {
			window.clearInterval(heartbeatTimer);
			heartbeatTimer = null;
		}
		if (!presenceRegistered) return;
		presenceRegistered = false;
		fetch(endpoint, {
			method: "DELETE",
			cache: "no-store",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ sessionId }),
			keepalive: true,
		}).catch(showUnavailable);
		updateActiveCount("Offline");
	}

	function startHeartbeat() {
		if (window.quizHubOfflineTestMode) {
			stopHeartbeat();
			return;
		}
		if (heartbeatTimer !== null) return;
		void refreshCount();
		heartbeatTimer = window.setInterval(refreshCount, heartbeatIntervalMs);
	}

	window.quizHubPresence = { refreshCount };
	window.addEventListener("quizhub:offline-test-modechange", (event) => {
		if (event.detail.enabled) stopHeartbeat();
		else startHeartbeat();
	});
	startHeartbeat();
})();
