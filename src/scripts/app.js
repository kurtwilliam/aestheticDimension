// FIXED SIDE BAR AFTER 100VH

// Retrieve height of screen, scroll position, and column element
// let h = window.innerHeight;
// let scrollPos = 0;
// let leftColumn = document.getElementById('leftColumn');

// window.addEventListener('scroll', (e) => {
//   scrollPos = window.scrollY;
//   if ( (scrollPos - h) < 0 ) {
//   	leftColumn.style.position = 'absolute';
//   } else {
//   	leftColumn.style.position = 'fixed';
//   }
// });

// HIDDEN CLASS

// Burger hide and show

// Get Burger
let burger = document.getElementById('burger');

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

		// Animate X button for burger
		// burgerLineTwo.classList.remove('hidden');
		// burgerLineOne.classList.remove('burgerXOne');
		// burgerLineThree.classList.remove('burgerXThree');
	} else {
		pageTitle.classList.add('vHidden');

		// Toggle animation for burger click
		burger.classList.add('open');

		// Animate X button for burger
		// burgerLineTwo.classList.add('hidden');
		// burgerLineOne.classList.add('burgerXOne');
		// burgerLineThree.classList.add('burgerXThree');
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