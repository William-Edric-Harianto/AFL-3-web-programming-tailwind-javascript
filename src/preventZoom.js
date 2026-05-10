function preventZoom(scrollCheck = true, keyboardCheck = true) {
	if (keyboardCheck) {
		document.addEventListener("keydown", function (e) {
			if (
				e.ctrlKey &&
				(e.key === "+" ||
					e.key === "-" ||
					e.key === "=" ||
					e.key === "_" ||
					e.wheelDelta > 0 ||
					e.wheelDelta < 0)
			) {
				e.preventDefault();
				return false;
			}
		});
	}

	if (scrollCheck) {
		document.addEventListener(
			"wheel",
			function (e) {
				if (e.ctrlKey) {
					e.preventDefault();
					return false;
				}
			},
			{ passive: false }
		);

		
		document.addEventListener(
			"touchstart",
			function (e) {
				if (e.touches.length > 1) {
					e.preventDefault();
				}
			},
			{ passive: false }
		);

		let lastTouchEnd = 0;
		document.addEventListener(
			"touchend",
			function (e) {
				const now = Date.now();
				if (now - lastTouchEnd <= 300) {
					e.preventDefault();
				}
				lastTouchEnd = now;
			},
			{ passive: false }
		);
	}
}

preventZoom();
