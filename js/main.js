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
