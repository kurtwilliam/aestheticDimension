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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUVBO0FBQ0EsSUFBSSxJQUFJLE9BQU8sV0FBZjtBQUNBLElBQUksWUFBWSxDQUFoQjtBQUNBLElBQUksYUFBYSxTQUFTLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBakI7O0FBRUEsT0FBTyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxVQUFDLENBQUQsRUFBTztBQUN2QyxjQUFZLE9BQU8sT0FBbkI7QUFDQSxNQUFNLFlBQVksQ0FBYixHQUFrQixDQUF2QixFQUEyQjtBQUMxQixlQUFXLEtBQVgsQ0FBaUIsUUFBakIsR0FBNEIsVUFBNUI7QUFDQSxHQUZELE1BRU87QUFDTixlQUFXLEtBQVgsQ0FBaUIsUUFBakIsR0FBNEIsT0FBNUI7QUFDQTtBQUNGLENBUEQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gRklYRUQgU0lERSBCQVIgQUZURVIgMTAwVkhcblxuLy8gUmV0cmlldmUgaGVpZ2h0IG9mIHNjcmVlbiwgc2Nyb2xsIHBvc2l0aW9uLCBhbmQgY29sdW1uIGVsZW1lbnRcbmxldCBoID0gd2luZG93LmlubmVySGVpZ2h0O1xubGV0IHNjcm9sbFBvcyA9IDA7XG5sZXQgbGVmdENvbHVtbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0Q29sdW1uJyk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZSkgPT4ge1xuICBzY3JvbGxQb3MgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgaWYgKCAoc2Nyb2xsUG9zIC0gaCkgPCAwICkge1xuICBcdGxlZnRDb2x1bW4uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICB9IGVsc2Uge1xuICBcdGxlZnRDb2x1bW4uc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICB9XG59KTsiXX0=
