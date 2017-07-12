// FIXED SIDE BAR AFTER 100VH

// Retrieve height of screen, scroll position, and column element
let h = window.innerHeight;
let scrollPos = 0;
let leftColumn = document.getElementById('leftColumn');

window.addEventListener('scroll', (e) => {
  scrollPos = window.scrollY;
  if ( (scrollPos - h) < 0 ) {
  	leftColumn.style.position = 'absolute';
  } else {
  	leftColumn.style.position = 'fixed';
  }
});

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

// Get Burger Menu UL

let burgerMenu = document.getElementById('burgerMenu');

// Event listener to toggle hidden class for burger click
burger.addEventListener('click', (e) => {
	burgerMenu.classList.toggle('hidden');
});

// Set hidden classes on page load, if window is smaller than 768px

var w = window.innerWidth;

if ( w < 768 ) {
	burger.classList.remove("hidden");
	burgerMenu.classList.add("hidden");
}