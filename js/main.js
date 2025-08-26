// Nav Bar Toggle
let toggleBtn = document.getElementById("toggle-btn");
let body = document.getElementById("body");
let links = document.querySelectorAll(".side-bar-link");
let nav = document.querySelector(".nav");

toggleBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
	toggleBtn.classList.toggle("toggled");

	if (nav.style.maxHeight === "90dvh") {
		nav.style.maxHeight = "";
		nav.style.padding = "";
		body.style.overflowY = "auto";
	} else {
		nav.style.maxHeight = "90dvh";
		nav.style.padding = "2rem";
		body.style.overflowY = "hidden";
	}
}

links.forEach((link) =>
	link.addEventListener("click", () => {
		nav.style.maxHeight = "";
		body.style.overflowY = "auto";
		toggleBtn.classList.remove("toggled");
	})
);

// Interception Observer
const animatedElements = document.querySelectorAll(
	".show-up, .show-down, .show-left, .show-right, .bounce-in, .rotate-left, .rotate-right"
);

const observer = new IntersectionObserver(
	(entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("animated");
				observer.unobserve(entry.target);
			}
		});
	},
	{ root: null, rootMargin: "0px", threshold: 0.2 }
);

animatedElements.forEach((el) => observer.observe(el));
