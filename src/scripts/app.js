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

// Home SVG

// Get SVG's and LI

let home = document.getElementById('home');
let homeHover = document.getElementById('homeHover');
let homeSVG = document.getElementById('homeSVG');

// Attach Event Listener 
homeSVG.addEventListener('mouseover', homeOver);
home.addEventListener('mouseover', homeOver);
homeSVG.addEventListener('mouseout', homeOut);

// run hover function and hoverout function
function homeOver(x) {
	// home.classList.add('vHiddenHome')
	homeHover.classList.remove('vHiddenHome')
}

function homeOut(x) {
	// home.classList.remove('vHiddenHome')
	homeHover.classList.add('vHiddenHome')
}


// Get form, if it exists run code
let form = document.getElementById('form');
if ( form ) {
	let meterInput = document.getElementsByClassName('meterInput');

	Array.from(meterInput).forEach(function(e) {
     e.addEventListener('input', meterWidth);
   });

	function meterWidth(x) {
		let input = this.value;
		let meter = this.nextElementSibling;
		meter.style.width = '100%';

		if (input.match(/\D/) == null) {
			meter.style.width = '0%';
		}

		let firstName = document.getElementById('firstName').value;
		let lastName = document.getElementById('lastName').value;
		let email = document.getElementById('email').value;
		let comments = document.getElementById('comments').value;
		let bCL = document.getElementById('buttonCoverL')
		let bCR = document.getElementById('buttonCoverR')

		if (firstName.match(/\D/) !== null && lastName.match(/\D/) !== null && email.match(/\D/) !== null && comments.match(/\D/) !== null ) {
			bCL.style.width = '0'
			bCL.style.left = '100.5px'
			bCR.style.width = '0'
		} else {
			bCL.style.width = '100.5px'
			bCL.style.left = '0px'
			bCR.style.width = '100.5px'
		}
	} 
};

});

// Burger menu toggler

// Set visibility of burger and menu on page load

// if ( w < 768 ) {
// 	burger.classList.remove("vHidden");
// 	burger.classList.add('mobileBurger');
// } else {
// 	burger.classList.add("vHidden");
// }

burger.addEventListener('click', (e) => {
	burger.classList.toggle('open')
});

// never even runs...
function windowResize() {
	if (window.matchMedia("(min-width: 769px)").matches) {	
		// console.log('hi')
		// burger.classList.remove("vHidden");
	// less than 769px wide
	} else {
		burger.classList.remove("vHidden");
		burger.addEventListener('click', (e) => {
			// if burger has class of open move menu up
			if (burger.classList.contains('open')) {
				leftColumn.style.top = '0'
				// burger.classList.remove('open')
			// else move it back
			} else {
				leftColumn.style.top = '-323px'
				// burger.classList.add('open')
			}
		});
	}
}

var w = window.innerWidth;

function resize() { 
	w = window.innerWidth;
	let leftColumn = document.getElementById('leftColumn');

	if ( w < 768 ) {
		console.log('smaller than 768')
		burger.classList.remove("vHidden");
		leftColumn.classList.remove('under300L')

		burger.addEventListener('click', (e) => {
			// if burger has class of open move menu up
			if (burger.classList.contains('open')) {
				leftColumn.style.top = '0'
				leftColumn.style.left = '0'
				// burger.classList.remove('open')
			// else move it back
			} else {
				leftColumn.style.top = '-323px'
				leftColumn.style.left = '0'
				// burger.classList.add('open')
			}
		});
		burger.classList.add('mobileBurger');
		leftColumn.style.top = '-323px'

	} else {
		console.log('bigger than 768')
		burger.classList.remove('mobileBurger');
		burger.classList.add("vHidden");
		leftColumn.style.top = '0'
		burger.addEventListener('click', (e) => {
			// if burger has class of open move menu over
			if (burger.classList.contains('open')) {
				leftColumn.style.left = '0'
				leftColumn.style.top = '0'

				// burger.classList.remove('open')
			// else move it back
			} else {
				leftColumn.style.left = '-290px'
				leftColumn.style.top = '0'

				// burger.classList.add('open')
			}
		});
	}
}

resize();

window.onresize = resize;

// Scroll function for sidebar shrinking under 300px

window.onscroll=testScroll;

function testScroll(){
	let burger = document.getElementById('burger');
	let leftColumn = document.getElementById('leftColumn');
	let rightColumn = document.getElementById('rightColumn');
	let burgerMenu = document.getElementById('burgerMenu');
	let responsiveTitle = document.getElementById('responsiveTitle');

	// If screen is wider than 768px run if statement below
	if (window.matchMedia("(min-width: 769px)").matches) {

		// burger on click move left column over to see menu options
		burger.addEventListener('click', (e) => {
			// if burger has class of open move menu over
			if (burger.classList.contains('open')) {
				leftColumn.style.left = '0'
				leftColumn.style.top = '0'

				// burger.classList.remove('open')
			// else move it back
			} else {
				leftColumn.style.left = '-290px'
				leftColumn.style.top = '0'

				// burger.classList.add('open')
			}
		});	
		// if the scroll is lower than 250px from top
		if(window.pageYOffset>250) {
			// if the scroll is lower than 250px from top move left sidebar over and make skinny, and make right sidebar wider, and add burger menu
			leftColumn.classList.add('under300L');
			rightColumn.classList.add('under300R');
			burger.classList.add('under300Burger');
			burger.classList.remove('vHidden');
			leftColumn.style.left = '-290px'

		} else {
			// if the scroll isn't lower than 250px from top move back to normal setup and make right sidebar normal 
			leftColumn.classList.remove('under300L');
			rightColumn.classList.remove('under300R');
			burger.classList.add('vHidden');
			burger.classList.remove('under300Burger');
			
			leftColumn.style.left = '0'
			// responsiveTitle.classList.add('hidden')
		}
	// else if screen is less than 769px
	} else {
		// leftColumn.style.left = '0px'

	}
}


