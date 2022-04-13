const openMenuIcon = document.querySelector(".menu-icon svg.open");
const closeMenuIcon = document.querySelector(".menu-icon svg.close");
const menuNav = document.querySelector("#menu-nav");

openMenuIcon.addEventListener("click", openMenu);
closeMenuIcon.addEventListener("click", closeMenu);

function openMenu(e) {
	menuNav.classList.toggle("hidden");
	openMenuIcon.style.display = "none";
	closeMenuIcon.style.display = "block";
}
function closeMenu(e) {
	menuNav.classList.toggle("hidden");
	closeMenuIcon.style.display = "none";
	openMenuIcon.style.display = "block";
}
