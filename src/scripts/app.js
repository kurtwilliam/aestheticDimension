// Check to see if on home page

document.addEventListener('DOMContentLoaded', function(){
	let aboutTag = document.getElementById('aboutTag');
   if ( aboutTag ) { //if the element exists add the click event
   	

// CHANGE LANDING PAGE ON HOVER!

// Get list items to hover 
let projectsTag = document.getElementById('projectsTag');
let blogTag = document.getElementById('blogTag');
let contactTag = document.getElementById('contactTag');

// Get SVGs
let initYellow = document.getElementById('initYellow');
let bgYellow = document.getElementById('bgYellow');
let hoverYellow = document.getElementById('hoverYellow');
let initRed = document.getElementById('initRed');
let bgRed = document.getElementById('bgRed');
let hoverRed = document.getElementById('hoverRed');
let initGreen = document.getElementById('initGreen');
let bgGreen = document.getElementById('bgGreen');
let hoverGreen = document.getElementById('hoverGreen');
let initBlue = document.getElementById('initBlue');
let bgBlue = document.getElementById('bgBlue');
let hoverBlue = document.getElementById('hoverBlue');

// get red div for zIndex
let redDiv = document.getElementById('red');

// Get header element to change BG of on hover
// let header = document.getElementById('header');

// Add event listeners to each a tag
aboutTag.addEventListener('mouseout', hoverOut);
projectsTag.addEventListener('mouseout', hoverOut);
blogTag.addEventListener('mouseout', hoverOut);
contactTag.addEventListener('mouseout', hoverOut);

// About Tag yellow event listener for hover
aboutTag.onmouseover = function () {
	initYellow.classList.remove("hidden");
	initRed.classList.add("hidden");
	initGreen.classList.add("hidden");
	initBlue.classList.add("hidden");

	bgYellow.classList.add("hidden");
	bgRed.classList.remove("hidden");
	bgGreen.classList.remove("hidden");
	bgBlue.classList.remove("hidden");

	initYellow.style.filter = "drop-shadow(5px 9px 6px rgba(67,66,66,.56))"
	hoverRed.classList.add("hidden");
	hoverGreen.classList.add("hidden");
	hoverBlue.classList.add("hidden");

	redDiv.style.zIndex = '-100';

	// Add hollow text class to other tags
	projectsTag.classList.add('hollowText');
	blogTag.classList.add('hollowText');
	contactTag.classList.add('hollowText');
}

// projects tag red event listener for hover
projectsTag.onmouseover = function () {
	initYellow.classList.add("hidden");
	initRed.classList.add("hidden");
	initGreen.classList.add("hidden");
	initBlue.classList.add("hidden");

	bgYellow.classList.remove("hidden");
	bgRed.classList.add("hidden");
	bgGreen.classList.remove("hidden");
	bgBlue.classList.remove("hidden");

	hoverRed.classList.remove("hidden");
	hoverGreen.classList.add("hidden");
	hoverBlue.classList.add("hidden");

	aboutTag.classList.add('hollowText');
	blogTag.classList.add('hollowText');
	contactTag.classList.add('hollowText');
}

// blog tag blue event listener for hover
blogTag.onmouseover = function () {
	initYellow.classList.add("hidden");
	initRed.classList.add("hidden");
	initGreen.classList.add("hidden");
	initBlue.classList.add("hidden");

	bgYellow.classList.remove("hidden");
	bgRed.classList.remove("hidden");
	bgGreen.classList.remove("hidden");
	bgBlue.classList.add("hidden");

	hoverRed.classList.add("hidden");
	hoverGreen.classList.add("hidden");
	hoverBlue.classList.remove("hidden");

	projectsTag.classList.add('hollowText');
	aboutTag.classList.add('hollowText');
	contactTag.classList.add('hollowText');
}

// contact tag green event listener for hover
contactTag.onmouseover = function () {
	initYellow.classList.add("hidden");
	initRed.classList.add("hidden");
	initGreen.classList.add("hidden");
	initBlue.classList.add("hidden");

	bgYellow.classList.remove("hidden");
	bgRed.classList.remove("hidden");
	bgGreen.classList.add("hidden");
	bgBlue.classList.remove("hidden");

	hoverRed.classList.add("hidden");
	hoverBlue.classList.add("hidden");
	hoverGreen.classList.remove("hidden");

	projectsTag.classList.add('hollowText');
	blogTag.classList.add('hollowText');
	aboutTag.classList.add('hollowText');
}

// Revert BG to normal
function hoverOut(x) {
	initYellow.classList.remove("hidden");
	bgYellow.classList.add("hidden");
	initRed.classList.remove("hidden");
	bgRed.classList.add("hidden");
	hoverRed.classList.add("hidden");
	initGreen.classList.remove("hidden");
	bgGreen.classList.add("hidden");
	hoverGreen.classList.add("hidden");
	initBlue.classList.remove("hidden");
	bgBlue.classList.add("hidden");
	hoverBlue.classList.add("hidden");

	redDiv.style.zIndex = '1';
	initYellow.style.filter = "drop-shadow(0 0 0 rgba(0,0,0,0))"

	// Remove hollow text on hover out
	aboutTag.classList.remove('hollowText');
	projectsTag.classList.remove('hollowText');
	blogTag.classList.remove('hollowText');
	contactTag.classList.remove('hollowText');
};

};

// Check if on page other than home page

// Get Burger, if it exists run this code
let burger = document.getElementById('burger');
if ( burger ) {

	// HIDDEN CLASS

	// Burger hide and show

	// Event listener for screen resize
	window.addEventListener('resize', (e) => {
	  // JS media query to remove hidden class at mobile responsive
	  if (window.matchMedia("(min-width: 769px)").matches) {
	  	burger.classList.add("hidden");

	  	// Remove hidden class to burgerMenu UL
	  	burgerMenu.classList.remove("hidden");
	  } else {
	  	burger.classList.remove("hidden");

	  	// Add hidden class to burgerMenu UL
	  	burgerMenu.classList.add("hidden");
	  }
	});

	// Burger Menu hide and show

	// Get Burger Menu UL, pageTitle element, second burger line

	let burgerMenu = document.getElementById('burgerMenu');
	let pageTitle = document.getElementById('pageTitle');
	let burgerLineTwo = document.getElementById('burgerLineTwo');
	let burgerLineOne = document.getElementById('burgerLineOne');
	let burgerLineThree = document.getElementById('burgerLineThree');

	burger.addEventListener('click', (e) => {
		// Event listener to toggle hidden class for burger click
		burgerMenu.classList.toggle('hidden');

		// if statement to hide .pageTitle on click and display proper menu
		if (burgerMenu.classList.contains('hidden')) {
			pageTitle.classList.remove('vHidden');

			// Toggle animation for burger click
			burger.classList.remove('open');
		} else {
			pageTitle.classList.add('vHidden');

			// Toggle animation for burger click
			burger.classList.add('open');
		}
	});

	// Set hidden classes on page load, if window is smaller than 768px

	var w = window.innerWidth;

	if ( w < 768 ) {
		burger.classList.remove("hidden");
		burgerMenu.classList.add("hidden");
	}

	// Home SVG

	// Get SVG's and LI

	let home = document.getElementById('home');
	let homeHover = document.getElementById('homeHover');
	let homeSVG = document.getElementById('homeSVG');

	// Attach Event Listener 
	homeSVG.addEventListener('mouseover', homeOver);
	homeSVG.addEventListener('mouseout', homeOut);

	// run hover function and hoverout function
	function homeOver(x) {
		home.style.display = 'none';
		homeHover.style.display = 'block';
	}

	function homeOut(x) {
		homeHover.style.display = 'none';
		home.style.display = 'block';
	}
};

// Get form, if it exists run code
let form = document.getElementById('form');
if ( form ) {
	let input = document.getElementsByClassName('meterWidth');

	input.oninput = function(){meterWidth};

	input.addEventListener("input", meterWidth);

	function meterWidth(x) {
		x.style.width = "100%";
	} 
};

});