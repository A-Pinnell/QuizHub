(function () {
	"use strict";

	const databaseName = "quizHubNetHub";
	let databasePromise;

	function openDatabase() {
		if (!("indexedDB" in window)) {
			return Promise.reject(new Error("This browser does not support saved quiz music."));
		}
		if (databasePromise) return databasePromise;

		databasePromise = new Promise((resolve, reject) => {
			const request = window.indexedDB.open(databaseName, 1);
			request.onupgradeneeded = () => {
				const database = request.result;
				if (!database.objectStoreNames.contains("music")) {
					database.createObjectStore("music", { keyPath: "key" });
				}
			};
			request.onsuccess = () => resolve(request.result);
			request.onerror = () => reject(request.error || new Error("Could not open saved quiz music."));
			request.onblocked = () => reject(new Error("Saved quiz music is blocked by another open tab."));
		});
		databasePromise.catch(() => {
			databasePromise = null;
		});
		return databasePromise;
	}

	async function saveMusic(key, upload) {
		const database = await openDatabase();
		return new Promise((resolve, reject) => {
			const transaction = database.transaction("music", "readwrite");
			transaction.objectStore("music").put({
				key,
				name: upload.name,
				type: upload.type,
				data: upload.data,
			});
			transaction.oncomplete = () => resolve();
			transaction.onerror = () => reject(transaction.error || new Error("Could not save quiz music."));
			transaction.onabort = () => reject(transaction.error || new Error("Saving quiz music was interrupted."));
		});
	}

	async function readMusic(key) {
		const database = await openDatabase();
		return new Promise((resolve, reject) => {
			const transaction = database.transaction("music", "readonly");
			const request = transaction.objectStore("music").get(key);
			request.onsuccess = () => {
				if (!request.result) {
					reject(new Error("The saved quiz music could not be found on this device."));
					return;
				}
				resolve(request.result);
			};
			request.onerror = () => reject(request.error || new Error("Could not load saved quiz music."));
		});
	}

	async function getMusic(key) {
		const { name, type, data } = await readMusic(key);
		return { name, type, data };
	}

	async function getMusicUrl(key) {
		const { type, data, blob } = await readMusic(key);
		const audioBlob = blob || await (await fetch(data)).blob();
		return URL.createObjectURL(audioBlob.type ? audioBlob : new Blob([audioBlob], { type }));
	}

	async function deleteMusic(key) {
		const database = await openDatabase();
		return new Promise((resolve, reject) => {
			const transaction = database.transaction("music", "readwrite");
			transaction.objectStore("music").delete(key);
			transaction.oncomplete = () => resolve();
			transaction.onerror = () => reject(transaction.error || new Error("Could not remove saved quiz music."));
			transaction.onabort = () => reject(transaction.error || new Error("Removing saved quiz music was interrupted."));
		});
	}

	window.QuizHubNetHubStorage = { deleteMusic, getMusic, getMusicUrl, saveMusic };
})();
