(() => {
	const loaderScript = document.currentScript;
	if (!loaderScript) {
		throw new Error("Could not determine the preferences loader URL.");
	}

	const now = new Date();
	const version = [
		now.getFullYear(),
		String(now.getMonth() + 1).padStart(2, "0"),
		String(now.getDate()).padStart(2, "0"),
	].join("");
	const preferencesUrl = new URL("./preferences.js", loaderScript.src);
	preferencesUrl.searchParams.set("v", version);
	document.write(`<script src="${preferencesUrl.href}" defer><\/script>`);
})();
