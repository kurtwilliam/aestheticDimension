(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// FIXED SIDE BAR AFTER 100VH

// Retrieve height of screen, scroll position, and column element
var h = window.innerHeight;
var scrollPos = 0;
var leftColumn = document.getElementById('leftColumn');

window.addEventListener('scroll', function (e) {
  scrollPos = window.scrollY;
  if (scrollPos - h < 0) {
    leftColumn.style.position = 'absolute';
  } else {
    leftColumn.style.position = 'fixed';
  }
});

// HIDDEN CLASS

// Burger hide and show

// Get Burger
var burger = document.getElementById('burger');

// Event listener for screen resize
window.addEventListener('resize', function (e) {
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

var burgerMenu = document.getElementById('burgerMenu');

// Event listener to toggle hidden class for burger click
burger.addEventListener('click', function (e) {
  burgerMenu.classList.toggle('hidden');
});

// Set hidden classes on page load, if window is smaller than 768px

var w = window.innerWidth;

if (w < 768) {
  burger.classList.remove("hidden");
  burgerMenu.classList.add("hidden");
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUVBO0FBQ0EsSUFBSSxJQUFJLE9BQU8sV0FBZjtBQUNBLElBQUksWUFBWSxDQUFoQjtBQUNBLElBQUksYUFBYSxTQUFTLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBakI7O0FBRUEsT0FBTyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxVQUFDLENBQUQsRUFBTztBQUN2QyxjQUFZLE9BQU8sT0FBbkI7QUFDQSxNQUFNLFlBQVksQ0FBYixHQUFrQixDQUF2QixFQUEyQjtBQUMxQixlQUFXLEtBQVgsQ0FBaUIsUUFBakIsR0FBNEIsVUFBNUI7QUFDQSxHQUZELE1BRU87QUFDTixlQUFXLEtBQVgsQ0FBaUIsUUFBakIsR0FBNEIsT0FBNUI7QUFDQTtBQUNGLENBUEQ7O0FBU0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLFNBQVMsU0FBUyxjQUFULENBQXdCLFFBQXhCLENBQWI7O0FBRUE7QUFDQSxPQUFPLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFVBQUMsQ0FBRCxFQUFPO0FBQ3ZDO0FBQ0EsTUFBSSxPQUFPLFVBQVAsQ0FBa0Isb0JBQWxCLEVBQXdDLE9BQTVDLEVBQXFEO0FBQ3BELFdBQU8sU0FBUCxDQUFpQixHQUFqQixDQUFxQixRQUFyQjs7QUFFQTtBQUNBLGVBQVcsU0FBWCxDQUFxQixNQUFyQixDQUE0QixRQUE1QjtBQUNBLEdBTEQsTUFLTztBQUNOLFdBQU8sU0FBUCxDQUFpQixNQUFqQixDQUF3QixRQUF4Qjs7QUFFQTtBQUNBLGVBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5QixRQUF6QjtBQUNBO0FBQ0YsQ0FiRDs7QUFlQTs7QUFFQTs7QUFFQSxJQUFJLGFBQWEsU0FBUyxjQUFULENBQXdCLFlBQXhCLENBQWpCOztBQUVBO0FBQ0EsT0FBTyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFDLENBQUQsRUFBTztBQUN2QyxhQUFXLFNBQVgsQ0FBcUIsTUFBckIsQ0FBNEIsUUFBNUI7QUFDQSxDQUZEOztBQUlBOztBQUVBLElBQUksSUFBSSxPQUFPLFVBQWY7O0FBRUEsSUFBSyxJQUFJLEdBQVQsRUFBZTtBQUNkLFNBQU8sU0FBUCxDQUFpQixNQUFqQixDQUF3QixRQUF4QjtBQUNBLGFBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5QixRQUF6QjtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIEZJWEVEIFNJREUgQkFSIEFGVEVSIDEwMFZIXG5cbi8vIFJldHJpZXZlIGhlaWdodCBvZiBzY3JlZW4sIHNjcm9sbCBwb3NpdGlvbiwgYW5kIGNvbHVtbiBlbGVtZW50XG5sZXQgaCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbmxldCBzY3JvbGxQb3MgPSAwO1xubGV0IGxlZnRDb2x1bW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdENvbHVtbicpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGUpID0+IHtcbiAgc2Nyb2xsUG9zID0gd2luZG93LnNjcm9sbFk7XG4gIGlmICggKHNjcm9sbFBvcyAtIGgpIDwgMCApIHtcbiAgXHRsZWZ0Q29sdW1uLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgfSBlbHNlIHtcbiAgXHRsZWZ0Q29sdW1uLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgfVxufSk7XG5cbi8vIEhJRERFTiBDTEFTU1xuXG4vLyBCdXJnZXIgaGlkZSBhbmQgc2hvd1xuXG4vLyBHZXQgQnVyZ2VyXG5sZXQgYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1cmdlcicpO1xuXG4vLyBFdmVudCBsaXN0ZW5lciBmb3Igc2NyZWVuIHJlc2l6ZVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIChlKSA9PiB7XG4gIC8vIEpTIG1lZGlhIHF1ZXJ5IHRvIHJlbW92ZSBoaWRkZW4gY2xhc3MgYXQgbW9iaWxlIHJlc3BvbnNpdmVcbiAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogNzY5cHgpXCIpLm1hdGNoZXMpIHtcbiAgXHRidXJnZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblxuICBcdC8vIFJlbW92ZSBoaWRkZW4gY2xhc3MgdG8gYnVyZ2VyTWVudSBVTFxuICBcdGJ1cmdlck1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfSBlbHNlIHtcbiAgXHRidXJnZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblxuICBcdC8vIEFkZCBoaWRkZW4gY2xhc3MgdG8gYnVyZ2VyTWVudSBVTFxuICBcdGJ1cmdlck1lbnUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfVxufSk7XG5cbi8vIEJ1cmdlciBNZW51IGhpZGUgYW5kIHNob3dcblxuLy8gR2V0IEJ1cmdlciBNZW51IFVMXG5cbmxldCBidXJnZXJNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1cmdlck1lbnUnKTtcblxuLy8gRXZlbnQgbGlzdGVuZXIgdG8gdG9nZ2xlIGhpZGRlbiBjbGFzcyBmb3IgYnVyZ2VyIGNsaWNrXG5idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRidXJnZXJNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufSk7XG5cbi8vIFNldCBoaWRkZW4gY2xhc3NlcyBvbiBwYWdlIGxvYWQsIGlmIHdpbmRvdyBpcyBzbWFsbGVyIHRoYW4gNzY4cHhcblxudmFyIHcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuaWYgKCB3IDwgNzY4ICkge1xuXHRidXJnZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblx0YnVyZ2VyTWVudS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufSJdfQ==
