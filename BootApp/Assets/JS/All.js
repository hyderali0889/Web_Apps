let closeSidebar = document.querySelector('.closeSidebar');
let sidebar = document.querySelector('.sidebar');
let openSideBar = document.querySelector('.openSideBar');
let sidebarContent = document.querySelector('.sidebarContent');
let elementDrop = document.querySelector(".elementDrop");
let OpenDiv = document.querySelector(".OpenDiv");
let hide = document.querySelector(".hide1");
// let alerts = document.querySelector(".alerts");
// let button = document.querySelector(".button");
// let navbar = document.querySelector(".navbar");
// let toasts = document.querySelector(".toasts");
// let modals = document.querySelector(".modals");
// let buttons2 = document.querySelector(".buttons");
// let alerts2 = document.querySelector(".alerts2");
// let modals2 = document.querySelector(".modals2");
// let navbar2 = document.querySelector(".navbar2");
// let toasts2 = document.querySelector(".toasts2");
let clicks = 0;

closeSidebar.addEventListener('click', () => {
	sidebarContent.classList.add('hide');
	sidebarContent.classList.remove('show');
});
openSideBar.addEventListener('click', () => {
	sidebarContent.classList.add('show');
	sidebarContent.classList.remove('hide');
});

elementDrop.addEventListener("click",(e)=>{
	clicks++;
	if(clicks % 2 !== 0) {
		OpenDiv.classList.add("elementDiv");
		OpenDiv.classList.remove("elementDivClosed")
		hide.classList.remove("d-none");
	}else{
		OpenDiv.classList.add("elementDivClosed")
		OpenDiv.classList.remove("elementDiv")
		hide.classList.add("d-none");
	}
	
});

// alerts2.addEventListener("click",()=>{
// 	buttons2.classList.add("d-none");
// 	alerts2.classList.remove("d-none");
// 	modals2.classList.add("d-none");
// 	navbar2.classList.add("d-none");
// 	toasts2.classList.add("d-none");

// });

// button.addEventListener("click",()=>{
// 	buttons2.classList.remove("d-none");
// 	alerts2.classList.add("d-none");
// 	modals2.classList.add("d-none");
// 	navbar2.classList.add("d-none");
// 	toasts2.classList.add("d-none");
// })

// navbar.addEventListener("click",()=>{
// 	buttons2.classList.add("d-none");
// 	alerts2.classList.add("d-none");
// 	modals2.classList.add("d-none");
// 	navbar2.classList.remove("d-none");
// 	toasts2.classList.add("d-none");
// })
// toasts.addEventListener("click",()=>{
// 	buttons2.classList.add("d-none");
// 	alerts2.classList.add("d-none");
// 	modals2.classList.add("d-none");
// 	navbar2.classList.add("d-none");
// 	toasts2.classList.remove("d-none");
// })
// modals.addEventListener("click",()=>{
// 	buttons2.classList.add("d-none");
// 	alerts2.classList.add("d-none");
// 	modals2.classList.remove("d-none");
// 	navbar2.classList.add("d-none");
// 	toasts2.classList.add("d-none");
// })