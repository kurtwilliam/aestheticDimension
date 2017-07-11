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