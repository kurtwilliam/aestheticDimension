 // Ch

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


burger.addEventListener('click', (e) => {
	console.log('hi')
	burger.classList.toggle('open')
});

// never even runs...
function windowResize() {
	if (window.matchMedia("(min-width: 769px)").matches) {	
	
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
	let socialMedia = document.getElementById('socialMedia');


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

		if(window.pageYOffset>250 && socialMedia) {
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

// Projects hover

// Check if on projects page 

// var elems = document.getElementsByClassName("show-more");

// Array.from(elems).forEach(v => v.addEventListener('click', function() {
//   this.parentElement.getElementsByClassName('content')[0].classList.toggle('hidden');
// }));

let project = document.getElementsByClassName('project');
if ( project ) {
	// project.addEventListener('mouseover', projectOver)
	// project.addEventListener('mouseout', projectOut)

	Array.from(project).forEach(v => v.addEventListener('mouseover', projectOver));
	Array.from(project).forEach(v => v.addEventListener('mouseout', projectOut));

	// for ( let i=0; i<project.length;i++){
	//   project[i].addEventListener('mouseover',projectOver);
	//   project[i].addEventListener('mouseout',projectOut);
	// }

	function projectOver(){
		// let corner1 = document.querySelector('.redCorner1');
		// let corner2 = document.querySelector('.redCorner2');
		// let corner3 = document.querySelector('.redCorner3');
		// let corner4 = document.querySelector('.redCorner4');
		// let projectImg = document.querySelector('.projectImg');

		let corner1 = this.childElement.getElementsByClassName('redCorner1')
		let corner2 = this.childElement.getElementsByClassName('redCorner2')
		let corner3 = this.childElement.getElementsByClassName('redCorner3')
		let corner4 = this.childElement.getElementsByClassName('redCorner4')
		let projectImg = this.childElement.getElementsByClassName('projectImg')

		corner1.classList.add('redCorner1Hover')
		corner2.classList.add('redCorner2Hover')
		corner3.classList.add('redCorner3Hover')
		corner4.classList.add('redCorner4Hover')
		projectImg.classList.add('imgHover')
	}
		
	function projectOut(){
		let corner1 = this.childElement.getElementsByClassName('redCorner1')
		let corner2 = this.childElement.getElementsByClassName('redCorner2')
		let corner3 = this.childElement.getElementsByClassName('redCorner3')
		let corner4 = this.childElement.getElementsByClassName('redCorner4')
		let projectImg = this.childElement.getElementsByClassName('projectImg')

		corner1.classList.remove('redCorner1Hover')
		corner2.classList.remove('redCorner2Hover')
		corner3.classList.remove('redCorner3Hover')
		corner4.classList.remove('redCorner4Hover')
		projectImg.classList.remove('imgHover')

	}
}

