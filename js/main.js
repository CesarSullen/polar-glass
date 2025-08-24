// Nav Bar Toggle
let toggleBtn = document.getElementById("toggle-btn");
let headerTitle = document.querySelector(".nav-title");
let body = document.getElementById("body");
let links = document.querySelectorAll(".side-bar-link");
let sideBar = document.getElementById("side-bar");

toggleBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
	toggleBtn.classList.toggle("toggled");

	if (
		sideBar.style.transform === "translateX(-200%)" ||
		sideBar.style.transform === ""
	) {
		sideBar.style.transform = "translateX(0px)";
		body.style.overflowY = "hidden";
	} else {
		sideBar.style.transform = "translateX(-200%)";
		body.style.overflowY = "auto";
	}
}

links.forEach((link) =>
	link.addEventListener("click", () => {
		sideBar.style.transform = "translateX(-200%)";
		body.style.overflowY = "auto";
		toggleBtn.classList.toggle("toggled");
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
