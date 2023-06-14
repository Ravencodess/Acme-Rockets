// const menuController = (() =>{
//     const hamburgerBtn = document.getElementById('hamburger-btn');
//     const mobileMenu = document.getElementById('mobile-menu');

//     const toggleMenu =  ()=>{
//         hamburgerBtn.classList.toggle("toggle-btn")
//         mobileMenu.classList.toggle("hidden")
//     }

//     hamburgerBtn.addEventListener('click',toggleMenu)
//     mobileMenu.addEventListener('click',toggleMenu)
// })()

const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");

const toggle = () => {
	const isOpened = hamburgerBtn.getAttribute("aria-expanded") === "true";
	isOpened ? closeMenu() : openMenu();
};

const openMenu = () => {
	hamburgerBtn.setAttribute("aria-expanded", true);
	mobileMenu.setAttribute("aria-expanded", true);
	hamburgerBtn.classList.add("toggle-btn");
	mobileMenu.classList.remove("hidden");
};

const closeMenu = () => {
	hamburgerBtn.setAttribute("aria-expanded", false);
	mobileMenu.setAttribute("aria-expanded", false);
	mobileMenu.classList.add("hidden");
	hamburgerBtn.classList.remove("toggle-btn");
};

hamburgerBtn.addEventListener("click", toggle);
mobileMenu.addEventListener("click", toggle);
