(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// Check to see if on home page

document.addEventListener('DOMContentLoaded', function () {
	var aboutTag = document.getElementById('aboutTag');
	if (aboutTag) {

		// Revert BG to normal
		var hoverOut = function hoverOut(x) {
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
			initYellow.style.filter = "drop-shadow(0 0 0 rgba(0,0,0,0))";

			// Remove hollow text on hover out
			aboutTag.classList.remove('hollowText');
			projectsTag.classList.remove('hollowText');
			blogTag.classList.remove('hollowText');
			contactTag.classList.remove('hollowText');
		};

		//if the element exists add the click event


		// CHANGE LANDING PAGE ON HOVER!

		// Get list items to hover 
		var projectsTag = document.getElementById('projectsTag');
		var blogTag = document.getElementById('blogTag');
		var contactTag = document.getElementById('contactTag');

		// Get SVGs
		var initYellow = document.getElementById('initYellow');
		var bgYellow = document.getElementById('bgYellow');
		var hoverYellow = document.getElementById('hoverYellow');
		var initRed = document.getElementById('initRed');
		var bgRed = document.getElementById('bgRed');
		var hoverRed = document.getElementById('hoverRed');
		var initGreen = document.getElementById('initGreen');
		var bgGreen = document.getElementById('bgGreen');
		var hoverGreen = document.getElementById('hoverGreen');
		var initBlue = document.getElementById('initBlue');
		var bgBlue = document.getElementById('bgBlue');
		var hoverBlue = document.getElementById('hoverBlue');

		// get red div for zIndex
		var redDiv = document.getElementById('red');

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

			initYellow.style.filter = "drop-shadow(5px 9px 6px rgba(67,66,66,.56))";
			hoverRed.classList.add("hidden");
			hoverGreen.classList.add("hidden");
			hoverBlue.classList.add("hidden");

			redDiv.style.zIndex = '-100';

			// Add hollow text class to other tags
			projectsTag.classList.add('hollowText');
			blogTag.classList.add('hollowText');
			contactTag.classList.add('hollowText');
		};

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
		};

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
		};

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
		};;
	};

	// Check if on page other than home page

	// Get Burger
	var burger = document.getElementById('burger');
	if (burger) {

		// run hover function and hoverout function
		var homeOver = function homeOver(x) {
			home.style.display = 'none';
			homeHover.style.display = 'block';
		};

		var homeOut = function homeOut(x) {
			homeHover.style.display = 'none';
			home.style.display = 'block';
		};

		// HIDDEN CLASS

		// Burger hide and show


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

		// Get Burger Menu UL, pageTitle element, second burger line

		var burgerMenu = document.getElementById('burgerMenu');
		var pageTitle = document.getElementById('pageTitle');
		var burgerLineTwo = document.getElementById('burgerLineTwo');
		var burgerLineOne = document.getElementById('burgerLineOne');
		var burgerLineThree = document.getElementById('burgerLineThree');

		burger.addEventListener('click', function (e) {
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

		if (w < 768) {
			burger.classList.remove("hidden");
			burgerMenu.classList.add("hidden");
		}

		// Home SVG

		// Get SVG's and LI

		var home = document.getElementById('home');
		var homeHover = document.getElementById('homeHover');
		var homeSVG = document.getElementById('homeSVG');

		// Attach Event Listener 
		homeSVG.addEventListener('mouseover', homeOver);
		homeSVG.addEventListener('mouseout', homeOut);
	};
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUVBLFNBQVMsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVU7QUFDdkQsS0FBSSxXQUFXLFNBQVMsY0FBVCxDQUF3QixVQUF4QixDQUFmO0FBQ0UsS0FBSyxRQUFMLEVBQWdCOztBQTZIbkI7QUE3SG1CLE1BOEhWLFFBOUhVLEdBOEhuQixTQUFTLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUI7QUFDcEIsY0FBVyxTQUFYLENBQXFCLE1BQXJCLENBQTRCLFFBQTVCO0FBQ0EsWUFBUyxTQUFULENBQW1CLEdBQW5CLENBQXVCLFFBQXZCO0FBQ0EsV0FBUSxTQUFSLENBQWtCLE1BQWxCLENBQXlCLFFBQXpCO0FBQ0EsU0FBTSxTQUFOLENBQWdCLEdBQWhCLENBQW9CLFFBQXBCO0FBQ0EsWUFBUyxTQUFULENBQW1CLEdBQW5CLENBQXVCLFFBQXZCO0FBQ0EsYUFBVSxTQUFWLENBQW9CLE1BQXBCLENBQTJCLFFBQTNCO0FBQ0EsV0FBUSxTQUFSLENBQWtCLEdBQWxCLENBQXNCLFFBQXRCO0FBQ0EsY0FBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLFFBQXpCO0FBQ0EsWUFBUyxTQUFULENBQW1CLE1BQW5CLENBQTBCLFFBQTFCO0FBQ0EsVUFBTyxTQUFQLENBQWlCLEdBQWpCLENBQXFCLFFBQXJCO0FBQ0EsYUFBVSxTQUFWLENBQW9CLEdBQXBCLENBQXdCLFFBQXhCOztBQUVBLFVBQU8sS0FBUCxDQUFhLE1BQWIsR0FBc0IsR0FBdEI7QUFDQSxjQUFXLEtBQVgsQ0FBaUIsTUFBakIsR0FBMEIsa0NBQTFCOztBQUVBO0FBQ0EsWUFBUyxTQUFULENBQW1CLE1BQW5CLENBQTBCLFlBQTFCO0FBQ0EsZUFBWSxTQUFaLENBQXNCLE1BQXRCLENBQTZCLFlBQTdCO0FBQ0EsV0FBUSxTQUFSLENBQWtC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NkM7QUFDNUMsY0FBVSxTQUFWLENBQW9CLE1BQXBCLENBQTJCLFNBQTNCOztBQUVBO0FBQ0EsV0FBTyxTQUFQLENBQWlCLE1BQWpCLENBQXdCLE1BQXhCO0FBQ0EsSUFMRCxNQUtPO0FBQ04sY0FBVSxTQUFWLENBQW9CLEdBQXBCLENBQXdCLFNBQXhCOztBQUVBO0FBQ0EsV0FBTyxTQUFQLENBQWlCLEdBQWpCLENBQXFCLE1BQXJCO0FBQ0E7QUFDRCxHQWhCRDs7QUFrQkE7O0FBRUEsTUFBSSxJQUFJLE9BQU8sVUFBZjs7QUFFQSxNQUFLLElBQUksR0FBVCxFQUFlO0FBQ2QsVUFBTyxTQUFQLENBQWlCLE1BQWpCLENBQXdCLFFBQXhCO0FBQ0EsY0FBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLFFBQXpCO0FBQ0E7O0FBRUQ7O0FBRUE7O0FBRUEsTUFBSSxPQUFPLFNBQVMsY0FBVCxDQUF3QixNQUF4QixDQUFYO0FBQ0EsTUFBSSxZQUFZLFNBQVMsY0FBVCxDQUF3QixXQUF4QixDQUFoQjtBQUNBLE1BQUksVUFBVSxTQUFTLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBZDs7QUFFQTtBQUNBLFVBQVEsZ0JBQVIsQ0FBeUIsV0FBekIsRUFBc0MsUUFBdEM7QUFDQSxVQUFRLGdCQUFSLENBQXlCLFVBQXpCLEVBQXFDLE9BQXJDO0FBYUM7QUFFQSxDQXBQRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBDaGVjayB0byBzZWUgaWYgb24gaG9tZSBwYWdlXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpe1xuXHRsZXQgYWJvdXRUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXRUYWcnKTtcbiAgIGlmICggYWJvdXRUYWcgKSB7IC8vaWYgdGhlIGVsZW1lbnQgZXhpc3RzIGFkZCB0aGUgY2xpY2sgZXZlbnRcbiAgIFx0XG4gICBcblxuLy8gQ0hBTkdFIExBTkRJTkcgUEFHRSBPTiBIT1ZFUiFcblxuLy8gR2V0IGxpc3QgaXRlbXMgdG8gaG92ZXIgXG5sZXQgcHJvamVjdHNUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHNUYWcnKTtcbmxldCBibG9nVGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jsb2dUYWcnKTtcbmxldCBjb250YWN0VGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RUYWcnKTtcblxuLy8gR2V0IFNWR3NcbmxldCBpbml0WWVsbG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luaXRZZWxsb3cnKTtcbmxldCBiZ1llbGxvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZ1llbGxvdycpO1xubGV0IGhvdmVyWWVsbG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvdmVyWWVsbG93Jyk7XG5sZXQgaW5pdFJlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbml0UmVkJyk7XG5sZXQgYmdSZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmdSZWQnKTtcbmxldCBob3ZlclJlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3ZlclJlZCcpO1xubGV0IGluaXRHcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbml0R3JlZW4nKTtcbmxldCBiZ0dyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JnR3JlZW4nKTtcbmxldCBob3ZlckdyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvdmVyR3JlZW4nKTtcbmxldCBpbml0Qmx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbml0Qmx1ZScpO1xubGV0IGJnQmx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZ0JsdWUnKTtcbmxldCBob3ZlckJsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG92ZXJCbHVlJyk7XG5cbi8vIGdldCByZWQgZGl2IGZvciB6SW5kZXhcbmxldCByZWREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVkJyk7XG5cbi8vIEdldCBoZWFkZXIgZWxlbWVudCB0byBjaGFuZ2UgQkcgb2Ygb24gaG92ZXJcbi8vIGxldCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XG5cbi8vIEFkZCBldmVudCBsaXN0ZW5lcnMgdG8gZWFjaCBhIHRhZ1xuYWJvdXRUYWcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBob3Zlck91dCk7XG5wcm9qZWN0c1RhZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGhvdmVyT3V0KTtcbmJsb2dUYWcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBob3Zlck91dCk7XG5jb250YWN0VGFnLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgaG92ZXJPdXQpO1xuXG4vLyBBYm91dCBUYWcgeWVsbG93IGV2ZW50IGxpc3RlbmVyIGZvciBob3ZlclxuYWJvdXRUYWcub25tb3VzZW92ZXIgPSBmdW5jdGlvbiAoKSB7XG5cdGluaXRZZWxsb3cuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblx0aW5pdFJlZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXHRpbml0R3JlZW4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblx0aW5pdEJsdWUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblxuXHRiZ1llbGxvdy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXHRiZ1JlZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuXHRiZ0dyZWVuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cdGJnQmx1ZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuXG5cdGluaXRZZWxsb3cuc3R5bGUuZmlsdGVyID0gXCJkcm9wLXNoYWRvdyg1cHggOXB4IDZweCByZ2JhKDY3LDY2LDY2LC41NikpXCJcblx0aG92ZXJSZWQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblx0aG92ZXJHcmVlbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXHRob3ZlckJsdWUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblxuXHRyZWREaXYuc3R5bGUuekluZGV4ID0gJy0xMDAnO1xuXG5cdC8vIEFkZCBob2xsb3cgdGV4dCBjbGFzcyB0byBvdGhlciB0YWdzXG5cdHByb2plY3RzVGFnLmNsYXNzTGlzdC5hZGQoJ2hvbGxvd1RleHQnKTtcblx0YmxvZ1RhZy5jbGFzc0xpc3QuYWRkKCdob2xsb3dUZXh0Jyk7XG5cdGNvbnRhY3RUYWcuY2xhc3NMaXN0LmFkZCgnaG9sbG93VGV4dCcpO1xufVxuXG4vLyBwcm9qZWN0cyB0YWcgcmVkIGV2ZW50IGxpc3RlbmVyIGZvciBob3ZlclxucHJvamVjdHNUYWcub25tb3VzZW92ZXIgPSBmdW5jdGlvbiAoKSB7XG5cdGluaXRZZWxsb3cuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblx0aW5pdFJlZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXHRpbml0R3JlZW4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblx0aW5pdEJsdWUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblxuXHRiZ1llbGxvdy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuXHRiZ1JlZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXHRiZ0dyZWVuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cdGJnQmx1ZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuXG5cdGhvdmVyUmVkLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cdGhvdmVyR3JlZW4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblx0aG92ZXJCbHVlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cblx0YWJvdXRUYWcuY2xhc3NMaXN0LmFkZCgnaG9sbG93VGV4dCcpO1xuXHRibG9nVGFnLmNsYXNzTGlzdC5hZGQoJ2hvbGxvd1RleHQnKTtcblx0Y29udGFjdFRhZy5jbGFzc0xpc3QuYWRkKCdob2xsb3dUZXh0Jyk7XG59XG5cbi8vIGJsb2cgdGFnIGJsdWUgZXZlbnQgbGlzdGVuZXIgZm9yIGhvdmVyXG5ibG9nVGFnLm9ubW91c2VvdmVyID0gZnVuY3Rpb24gKCkge1xuXHRpbml0WWVsbG93LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cdGluaXRSZWQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblx0aW5pdEdyZWVuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cdGluaXRCbHVlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cblx0YmdZZWxsb3cuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblx0YmdSZWQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblx0YmdHcmVlbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuXHRiZ0JsdWUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblxuXHRob3ZlclJlZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXHRob3ZlckdyZWVuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cdGhvdmVyQmx1ZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuXG5cdHByb2plY3RzVGFnLmNsYXNzTGlzdC5hZGQoJ2hvbGxvd1RleHQnKTtcblx0YWJvdXRUYWcuY2xhc3NMaXN0LmFkZCgnaG9sbG93VGV4dCcpO1xuXHRjb250YWN0VGFnLmNsYXNzTGlzdC5hZGQoJ2hvbGxvd1RleHQnKTtcbn1cblxuLy8gY29udGFjdCB0YWcgZ3JlZW4gZXZlbnQgbGlzdGVuZXIgZm9yIGhvdmVyXG5jb250YWN0VGFnLm9ubW91c2VvdmVyID0gZnVuY3Rpb24gKCkge1xuXHRpbml0WWVsbG93LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cdGluaXRSZWQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblx0aW5pdEdyZWVuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cdGluaXRCbHVlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cblx0YmdZZWxsb3cuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblx0YmdSZWQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblx0YmdHcmVlbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXHRiZ0JsdWUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblxuXHRob3ZlclJlZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXHRob3ZlckJsdWUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblx0aG92ZXJHcmVlbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuXG5cdHByb2plY3RzVGFnLmNsYXNzTGlzdC5hZGQoJ2hvbGxvd1RleHQnKTtcblx0YmxvZ1RhZy5jbGFzc0xpc3QuYWRkKCdob2xsb3dUZXh0Jyk7XG5cdGFib3V0VGFnLmNsYXNzTGlzdC5hZGQoJ2hvbGxvd1RleHQnKTtcbn1cblxuLy8gUmV2ZXJ0IEJHIHRvIG5vcm1hbFxuZnVuY3Rpb24gaG92ZXJPdXQoeCkge1xuXHRpbml0WWVsbG93LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cdGJnWWVsbG93LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cdGluaXRSZWQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblx0YmdSZWQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblx0aG92ZXJSZWQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblx0aW5pdEdyZWVuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cdGJnR3JlZW4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblx0aG92ZXJHcmVlbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXHRpbml0Qmx1ZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuXHRiZ0JsdWUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblx0aG92ZXJCbHVlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cblx0cmVkRGl2LnN0eWxlLnpJbmRleCA9ICcxJztcblx0aW5pdFllbGxvdy5zdHlsZS5maWx0ZXIgPSBcImRyb3Atc2hhZG93KDAgMCAwIHJnYmEoMCwwLDAsMCkpXCJcblxuXHQvLyBSZW1vdmUgaG9sbG93IHRleHQgb24gaG92ZXIgb3V0XG5cdGFib3V0VGFnLmNsYXNzTGlzdC5yZW1vdmUoJ2hvbGxvd1RleHQnKTtcblx0cHJvamVjdHNUYWcuY2xhc3NMaXN0LnJlbW92ZSgnaG9sbG93VGV4dCcpO1xuXHRibG9nVGFnLmNsYXNzTGlzdC5yZW1vdmUoJ2hvbGxvd1RleHQnKTtcblx0Y29udGFjdFRhZy5jbGFzc0xpc3QucmVtb3ZlKCdob2xsb3dUZXh0Jyk7XG59O1xuXG59O1xuXG4vLyBDaGVjayBpZiBvbiBwYWdlIG90aGVyIHRoYW4gaG9tZSBwYWdlXG5cbi8vIEdldCBCdXJnZXJcbmxldCBidXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2VyJyk7XG5pZiAoIGJ1cmdlciApIHtcblxuXG5cbi8vIEhJRERFTiBDTEFTU1xuXG4vLyBCdXJnZXIgaGlkZSBhbmQgc2hvd1xuXG5cbi8vIEV2ZW50IGxpc3RlbmVyIGZvciBzY3JlZW4gcmVzaXplXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGUpID0+IHtcbiAgLy8gSlMgbWVkaWEgcXVlcnkgdG8gcmVtb3ZlIGhpZGRlbiBjbGFzcyBhdCBtb2JpbGUgcmVzcG9uc2l2ZVxuICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA3NjlweClcIikubWF0Y2hlcykge1xuICBcdGJ1cmdlci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXG4gIFx0Ly8gUmVtb3ZlIGhpZGRlbiBjbGFzcyB0byBidXJnZXJNZW51IFVMXG4gIFx0YnVyZ2VyTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9IGVsc2Uge1xuICBcdGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuXG4gIFx0Ly8gQWRkIGhpZGRlbiBjbGFzcyB0byBidXJnZXJNZW51IFVMXG4gIFx0YnVyZ2VyTWVudS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9XG59KTtcblxuLy8gQnVyZ2VyIE1lbnUgaGlkZSBhbmQgc2hvd1xuXG4vLyBHZXQgQnVyZ2VyIE1lbnUgVUwsIHBhZ2VUaXRsZSBlbGVtZW50LCBzZWNvbmQgYnVyZ2VyIGxpbmVcblxubGV0IGJ1cmdlck1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2VyTWVudScpO1xubGV0IHBhZ2VUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlVGl0bGUnKTtcbmxldCBidXJnZXJMaW5lVHdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1cmdlckxpbmVUd28nKTtcbmxldCBidXJnZXJMaW5lT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1cmdlckxpbmVPbmUnKTtcbmxldCBidXJnZXJMaW5lVGhyZWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2VyTGluZVRocmVlJyk7XG5cbmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdC8vIEV2ZW50IGxpc3RlbmVyIHRvIHRvZ2dsZSBoaWRkZW4gY2xhc3MgZm9yIGJ1cmdlciBjbGlja1xuXHRidXJnZXJNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuXG5cdC8vIGlmIHN0YXRlbWVudCB0byBoaWRlIC5wYWdlVGl0bGUgb24gY2xpY2sgYW5kIGRpc3BsYXkgcHJvcGVyIG1lbnVcblx0aWYgKGJ1cmdlck1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuXHRcdHBhZ2VUaXRsZS5jbGFzc0xpc3QucmVtb3ZlKCd2SGlkZGVuJyk7XG5cblx0XHQvLyBUb2dnbGUgYW5pbWF0aW9uIGZvciBidXJnZXIgY2xpY2tcblx0XHRidXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuXHR9IGVsc2Uge1xuXHRcdHBhZ2VUaXRsZS5jbGFzc0xpc3QuYWRkKCd2SGlkZGVuJyk7XG5cblx0XHQvLyBUb2dnbGUgYW5pbWF0aW9uIGZvciBidXJnZXIgY2xpY2tcblx0XHRidXJnZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuXHR9XG59KTtcblxuLy8gU2V0IGhpZGRlbiBjbGFzc2VzIG9uIHBhZ2UgbG9hZCwgaWYgd2luZG93IGlzIHNtYWxsZXIgdGhhbiA3NjhweFxuXG52YXIgdyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG5pZiAoIHcgPCA3NjggKSB7XG5cdGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuXHRidXJnZXJNZW51LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG59XG5cbi8vIEhvbWUgU1ZHXG5cbi8vIEdldCBTVkcncyBhbmQgTElcblxubGV0IGhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xubGV0IGhvbWVIb3ZlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lSG92ZXInKTtcbmxldCBob21lU1ZHID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWVTVkcnKTtcblxuLy8gQXR0YWNoIEV2ZW50IExpc3RlbmVyIFxuaG9tZVNWRy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBob21lT3Zlcik7XG5ob21lU1ZHLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgaG9tZU91dCk7XG5cbi8vIHJ1biBob3ZlciBmdW5jdGlvbiBhbmQgaG92ZXJvdXQgZnVuY3Rpb25cbmZ1bmN0aW9uIGhvbWVPdmVyKHgpIHtcblx0aG9tZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRob21lSG92ZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmZ1bmN0aW9uIGhvbWVPdXQoeCkge1xuXHRob21lSG92ZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0aG9tZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxufTtcblxufSk7Il19
