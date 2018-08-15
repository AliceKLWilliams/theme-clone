let nav = document.querySelector("nav");
let navItems = nav.querySelector(".nav__items");

window.addEventListener("scroll", () => {
	if((!nav.classList.contains("nav--light")) && window.scrollY > 0 && document.body.offsetWidth > 768){
		nav.classList.add("nav--light");
	} else if(window.scrollY == 0){
		nav.classList.remove("nav--light");
	}
});


let toggle = document.querySelector(".nav__toggle");
toggle.addEventListener("click", () => {
	if(nav.classList.contains("nav--open")){ 
		document.body.style.overflow = "auto"; //Disable Body Scrolling

		let transition = navItems.style.transition;
		navItems.style.transition = "";

		requestAnimationFrame(() =>{
			navItems.style.height = navItems.scrollHeight + "px";
			navItems.style.transition = transition;

			requestAnimationFrame(() => {
				navItems.style.height = null;
			});
		})
		
	} else{
		document.body.style.overflow = "hidden";
		navItems.style.height = navItems.scrollHeight + "px";
		
		navItems.addEventListener("transitionend", function() {
			navItems.removeEventListener("transitionend", arguments.callee);
			navItems.style.height = "auto";
		});
	}

	// Add Margin
	nav.classList.toggle("nav--open");
});

let carets = document.querySelectorAll(".nav__caret");
carets.forEach((caret) => {
	caret.addEventListener("click", () => {
		let listItem = caret.parentNode.parentNode;
		let dropdown = listItem.querySelector(".dropdown");

		if(dropdown.classList.contains("dropdown--open")){
			caret.querySelector("i").style.transform = "";
		} else{
			caret.querySelector("i").style.transform = "rotate(180deg)";
		}

		dropdown.classList.toggle("dropdown--open");
	});
});