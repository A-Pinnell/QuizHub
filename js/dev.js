(function () {
	"use strict";

	const menuFrameId = "quizHubDeveloperMenuFrame";
	const pageName = (() => {
		const file = location.pathname.split("/").pop()?.toLowerCase();
		if (file === "index.html" || !file) return "index";
		if (file === "quiz.html") return "quiz";
		if (file === "party-lobby.html") return "party-lobby";
		return "other";
	})();
	const menuUrl = new URL("./dev-menu.html", location.href);
	const storedMode = localStorage.getItem("quizHubDeveloperDisplayMode");
	let selectedMode = ["mobile", "cover"].includes(storedMode)
		? storedMode
		: "desktop";
	let mobileGesturesEnabled =
		localStorage.getItem("quizHubDeveloperMobileGestures") === "true";
	const nativeMatchMedia = window.matchMedia.bind(window);
	const responsiveStylesId = "quizHubDeveloperResponsiveStyles";
	const viewportMediaFeatures =
		/\((?:min|max)-(?:width|height)\s*:|\((?:orientation|aspect-ratio|device-width|device-height)\s*:/i;
	let simulatedViewport = null;
	let simulatedViewportWindow = null;
	let menuFrame = null;
	let menuReady = false;
	let menuOpen = false;
	let devTypingBuffer = "";
	let menuContext = {
		page: pageName,
		displayMode: selectedMode,
		mobileGesturesEnabled,
	};

	function getDisplayViewport() {
		return simulatedViewport || {
			width: window.innerWidth,
			height: window.innerHeight,
		};
	}

	window.quizHubDisplayViewport = {
		get width() {
			return getDisplayViewport().width;
		},
		get height() {
			return getDisplayViewport().height;
		},
	};
	window.matchMedia = (query) => {
		if (simulatedViewport && viewportMediaFeatures.test(query)) {
			return simulatedViewportWindow.matchMedia(query);
		}
		return nativeMatchMedia(query);
	};

	function createResponsiveViewport() {
		const frame = document.createElement("iframe");
		frame.title = "Developer display-mode media query viewport";
		frame.tabIndex = -1;
		frame.setAttribute("aria-hidden", "true");
		frame.style.cssText =
			"position:fixed;left:-10000px;top:0;width:412px;height:924px;border:0;visibility:hidden;pointer-events:none";
		document.documentElement.append(frame);
		const frameDocument = frame.contentDocument;
		frameDocument.open();
		frameDocument.write(
			'<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1">',
		);
		frameDocument.close();
		simulatedViewportWindow = frame.contentWindow;
	}

	function splitSelectorList(selectorList) {
		const selectors = [];
		let start = 0;
		let depth = 0;
		let quote = "";
		for (let index = 0; index < selectorList.length; index += 1) {
			const character = selectorList[index];
			if (quote) {
				if (character === quote && selectorList[index - 1] !== "\\")
					quote = "";
			} else if (character === '"' || character === "'") {
				quote = character;
			} else if (character === "(" || character === "[") {
				depth += 1;
			} else if (character === ")" || character === "]") {
				depth -= 1;
			} else if (character === "," && depth === 0) {
				selectors.push(selectorList.slice(start, index).trim());
				start = index + 1;
			}
		}
		selectors.push(selectorList.slice(start).trim());
		return selectors;
	}

	function scopeResponsiveSelector(selector, rootClass) {
		const rootSelector = `html.${rootClass}`;
		if (selector.startsWith(":root")) {
			return selector.replace(/^:root/, rootSelector);
		}
		if (selector.startsWith("html")) {
			return selector.replace(/^html/, rootSelector);
		}
		return `${rootSelector} ${selector}`;
	}

	function rewriteViewportUnits(value) {
		const { width, height } = simulatedViewport;
		const minimum = Math.min(width, height);
		const maximum = Math.max(width, height);
		return value.replace(
			/(-?(?:\d+\.?\d*|\.\d+))(svw|lvw|dvw|vw|svh|lvh|dvh|vh|vmin|vmax)\b/gi,
			(_match, amount, unit) => {
				const normalizedUnit = unit.toLowerCase();
				const base = normalizedUnit.endsWith("vw")
					? width
					: normalizedUnit.endsWith("vh")
						? height
						: normalizedUnit === "vmin"
							? minimum
							: maximum;
				return `${(Number(amount) * base) / 100}px`;
			},
		);
	}

	function resolveStylesheetUrls(value, stylesheetUrl) {
		return value.replace(
			/url\(\s*(?:(["'])(.*?)\1|([^)]*))\s*\)/gi,
			(_match, quote, quotedUrl, unquotedUrl) => {
				const path = (quotedUrl ?? unquotedUrl ?? "").trim();
				if (/^(?:data:|blob:|https?:|file:|#|\/\/)/i.test(path)) {
					return `url("${path}")`;
				}
				return `url("${new URL(path, stylesheetUrl).href}")`;
			},
		);
	}

	function serializeResponsiveRules(rules, rootClass, stylesheetUrl) {
		let css = "";
		for (const rule of rules) {
			if (rule.type === 4) {
				if (simulatedViewportWindow.matchMedia(rule.conditionText).matches) {
					css += serializeResponsiveRules(
						rule.cssRules,
						rootClass,
						stylesheetUrl,
					);
				}
				continue;
			}
			if (rule.type === 1) {
				const selectors = splitSelectorList(rule.selectorText).map((selector) =>
					scopeResponsiveSelector(selector, rootClass),
				);
				const declarations = resolveStylesheetUrls(
					rewriteViewportUnits(rule.style.cssText),
					stylesheetUrl,
				);
				css += `${selectors.join(",")}{${declarations}}`;
				continue;
			}
			if (rule.cssRules) {
				const nested = serializeResponsiveRules(
					rule.cssRules,
					rootClass,
					stylesheetUrl,
				);
				if (!nested) continue;
				const openingBrace = rule.cssText.indexOf("{");
				if (openingBrace < 0) continue;
				css += `${rule.cssText.slice(0, openingBrace)}{${nested}}`;
				continue;
			}
			css += resolveStylesheetUrls(
				rewriteViewportUnits(rule.cssText),
				stylesheetUrl,
			);
		}
		return css;
	}

	function refreshResponsiveStyles() {
		const styleElement = document.getElementById(responsiveStylesId);
		if (!styleElement) return;
		if (!simulatedViewport) {
			styleElement.textContent = "";
			return;
		}

		const rootClass =
			selectedMode === "mobile"
				? "dev-display-mobile"
				: "dev-display-cover";
		let css = "";
		for (const stylesheet of document.styleSheets) {
			if (stylesheet.ownerNode === styleElement) continue;
			try {
				css += serializeResponsiveRules(
					stylesheet.cssRules,
					rootClass,
					stylesheet.href || document.baseURI,
				);
			} catch (error) {
				console.warn(
					"Could not apply simulated display-mode styles from a stylesheet:",
					stylesheet.href || "inline stylesheet",
					error,
				);
			}
		}
		styleElement.textContent = css;
	}

	function applyDisplayMode(mode) {
		selectedMode = ["mobile", "cover"].includes(mode) ? mode : "desktop";
		const root = document.documentElement;
		const dimensions =
			selectedMode === "mobile"
				? { width: 412, height: 924 }
				: selectedMode === "cover"
					? { width: 720, height: 748 }
					: null;
		simulatedViewport = dimensions;
		const viewportDimensions = dimensions || {
			width: window.innerWidth,
			height: window.innerHeight,
		};
		simulatedViewportWindow.document.documentElement.style.width =
			`${viewportDimensions.width}px`;
		simulatedViewportWindow.document.documentElement.style.height =
			`${viewportDimensions.height}px`;
		simulatedViewportWindow.frameElement.style.width =
			`${viewportDimensions.width}px`;
		simulatedViewportWindow.frameElement.style.height =
			`${viewportDimensions.height}px`;
		root.classList.toggle("dev-display-mobile", selectedMode === "mobile");
		root.classList.toggle("dev-display-cover", selectedMode === "cover");
		root.classList.toggle("cheat-display-mobile", selectedMode === "mobile");
		root.classList.toggle("cheat-display-cover", selectedMode === "cover");
		root.classList.toggle(
			"dev-mobile-gestures",
			selectedMode === "mobile" && mobileGesturesEnabled,
		);
		const scale = dimensions
			? Math.min(1, innerWidth / dimensions.width, innerHeight / dimensions.height)
			: 1;
		root.style.setProperty("--dev-display-scale", String(scale));
		root.style.setProperty(
			"--dev-display-width",
			`${dimensions?.width || innerWidth}px`,
		);
		root.style.setProperty(
			"--dev-display-height",
			`${viewportDimensions.height}px`,
		);
		refreshResponsiveStyles();
		return selectedMode;
	}

	function refreshDisplayModeAssets() {
		const refreshId = `${Date.now()}-${selectedMode}`;
		document
			.querySelectorAll('link[rel~="stylesheet"]')
			.forEach((stylesheet, index) => {
				stylesheet.addEventListener("load", refreshResponsiveStyles, {
					once: true,
				});
				const url = new URL(stylesheet.href);
				url.searchParams.set("displayRefresh", `${refreshId}-${index}`);
				stylesheet.href = url.toString();
			});
		window.dispatchEvent(
			new CustomEvent("quizhub:display-modechange", {
				detail: { mode: selectedMode },
			}),
		);
		requestAnimationFrame(() => window.dispatchEvent(new Event("resize")));
	}

	function sendContext() {
		if (!menuFrame || !menuReady || !menuOpen) return;
		const detail = {
			page: pageName,
			displayMode: selectedMode,
			scenes: window.QuizHubDevScenes.getSceneGroups(),
			...menuContext,
		};
		window.dispatchEvent(
			new CustomEvent("quizhub:dev-menu-context-request", { detail }),
		);
		menuContext = { ...detail };
		menuFrame.contentWindow.postMessage(
			{ type: "quizhub-dev-context", context: detail },
			location.origin === "null" ? "*" : location.origin,
		);
	}

	function createMenuFrame() {
		if (menuFrame) return;
		menuFrame = document.createElement("iframe");
		menuFrame.id = menuFrameId;
		menuFrame.title = "QuizHub Developer Menu";
		menuFrame.src = menuUrl.href;
		menuFrame.style.cssText =
			"position:fixed;inset:0;z-index:2147483647;width:100vw;width:100dvw;height:100vh;height:100dvh;border:0;background:transparent;display:none";
		menuFrame.addEventListener("load", () => {
			menuReady = true;
			sendContext();
		});
		document.documentElement.append(menuFrame);
	}

	function openMenu() {
		createMenuFrame();
		menuOpen = true;
		menuFrame.style.display = "block";
		sendContext();
		if (pageName === "index") window.quizHubPresence?.refreshCount();
		menuFrame.focus();
	}

	function closeMenu() {
		menuOpen = false;
		if (menuFrame) menuFrame.style.display = "none";
	}

	let cornerTapCount = 0;
	let lastCornerTapAt = 0;
	window.addEventListener(
		"click",
		(event) => {
			const isMobile =
				selectedMode === "mobile" ||
				nativeMatchMedia("(max-width: 760px)").matches ||
				nativeMatchMedia("(pointer: coarse)").matches;
			if (!isMobile || menuOpen) return;
			const bounds =
				selectedMode === "mobile"
					? document.body.getBoundingClientRect()
					: {
							left: 0,
							top: 0,
							width: window.innerWidth,
							height: window.innerHeight,
							right: window.innerWidth,
							bottom: window.innerHeight,
						};
			const cornerWidth = Math.min(80, bounds.width * 0.2);
			const cornerHeight = Math.min(100, bounds.height * 0.12);
			const inBottomRightCorner =
				event.clientX >= bounds.right - cornerWidth &&
				event.clientY >= bounds.bottom - cornerHeight &&
				event.clientX <= bounds.right &&
				event.clientY <= bounds.bottom;
			if (!inBottomRightCorner) {
				cornerTapCount = 0;
				return;
			}
			const now = Date.now();
			cornerTapCount =
				now - lastCornerTapAt <= 2500 ? cornerTapCount + 1 : 1;
			lastCornerTapAt = now;
			if (cornerTapCount < 5) return;
			cornerTapCount = 0;
			event.preventDefault();
			event.stopImmediatePropagation();
			openMenu();
		},
		true,
	);

	function setDisplayMode(mode) {
		applyDisplayMode(mode);
		localStorage.setItem("quizHubDeveloperDisplayMode", selectedMode);
		menuContext.displayMode = selectedMode;
		refreshDisplayModeAssets();
		sendContext();
	}

	window.quizHubDevMenu = {
		open: openMenu,
		close: closeMenu,
		setDisplayMode,
		updateContext(values) {
			Object.assign(menuContext, values);
			if (menuOpen) sendContext();
		},
	};
	createResponsiveViewport();
	const responsiveStyles = document.createElement("style");
	responsiveStyles.id = responsiveStylesId;
	document.head.append(responsiveStyles);
	applyDisplayMode(selectedMode);

	window.addEventListener("message", (event) => {
		if (!menuFrame || event.source !== menuFrame.contentWindow) return;
		if (event.origin !== location.origin && location.protocol !== "file:")
			return;
		if (event.data?.type === "quizhub-dev-ready") {
			menuReady = true;
			sendContext();
			return;
		}
		if (event.data?.type !== "quizhub-dev-action") return;
		const { action, ...values } = event.data;
		if (action === "close") {
			closeMenu();
			return;
		}
		if (action === "set-display-mode") {
			setDisplayMode(values.value);
			return;
		}
		if (action === "mobile-gestures") {
			mobileGesturesEnabled = Boolean(values.value);
			localStorage.setItem(
				"quizHubDeveloperMobileGestures",
				String(mobileGesturesEnabled),
			);
			rootToggleMobileGestures();
			menuContext.mobileGesturesEnabled = mobileGesturesEnabled;
			sendContext();
			return;
		}
		if (action === "scene-select") {
			try {
				window.QuizHubDevScenes.navigate(values.value);
			} catch (error) {
				menuContext.status = `Could not open the selected scene: ${error.message}`;
				sendContext();
				console.error("Could not open the selected Developer Menu scene:", error);
			}
			return;
		}
		window.dispatchEvent(
			new CustomEvent("quizhub:dev-menu-action", {
				detail: { action, ...values },
			}),
		);
	});

	function rootToggleMobileGestures() {
		document.documentElement.classList.toggle(
			"dev-mobile-gestures",
			selectedMode === "mobile" && mobileGesturesEnabled,
		);
	}

	window.addEventListener("quizhub:dev-menu-context-change", (event) => {
		window.quizHubDevMenu.updateContext(event.detail);
	});
	document.addEventListener("keydown", (event) => {
		const target =
			event.target instanceof Element ? event.target : document.body;
		if (event.key.length !== 1 || !/^[a-z]$/i.test(event.key)) {
			devTypingBuffer = "";
			return;
		}
		if (
			event.ctrlKey ||
			event.metaKey ||
			event.altKey ||
			target.closest('input,textarea,select,[contenteditable="true"]')
		) {
			devTypingBuffer = "";
			return;
		}
		const key = event.key.toLowerCase();
		const candidate = `${devTypingBuffer}${key}`;
		if (candidate === "dev") {
			event.preventDefault();
			event.stopImmediatePropagation();
			devTypingBuffer = "";
			if (menuOpen) closeMenu();
			else openMenu();
			return;
		}
		if ("dev".startsWith(candidate)) {
			devTypingBuffer = candidate;
			event.preventDefault();
			event.stopImmediatePropagation();
			return;
		}
		devTypingBuffer = key === "d" ? "d" : "";
		if (devTypingBuffer) {
			event.preventDefault();
			event.stopImmediatePropagation();
		}
	}, true);
	window.addEventListener("resize", () => {
		if (selectedMode !== "desktop") applyDisplayMode(selectedMode);
	});
})();
