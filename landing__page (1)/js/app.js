/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navElements = {
	"section1": "Section 1",
	"section2": "Section 2",
	"section3": "Section 3",
	"section4": "Section 4",
	"section5": "Section 5"
}
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function isElementInViewport(elem) {
	// Function to check if an element is near the top of the viewport
	const rect = elem.getBoundingClientRect();
	return rect.top >= 0 && rect.top <= window.innerHeight;
}

function createLink(key) {
	
	// Creates an a element, adds the class name, the href, and the text. 
	// Returns the a element
	
	const a = document.createElement("a");
	a.className = "menu__link";
	a.href = "#" + key;
	a.appendChild(document.createTextNode(navElements[key]));
	return a;
}

function populateNav() {
	
	// Creates and appends li elements to the ul element

	const ul = document.getElementById("navbar__list");
	for (let prop in navElements) {
		const li = document.createElement("li");
		const a = createLink(prop)
		li.appendChild(a)
		ul.appendChild(li);
	}
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Add class 'active' to section when near top of viewport
function addClassOnScroll() {
	const elementsToTrack = document.querySelectorAll("section");

	elementsToTrack.forEach((element) => {
		if (isElementInViewport(element)) {
			element.className = "active";
		} else {
			element.className = "";
		}
	});
}

// Scroll to anchor ID using scrollTO event
// Function to scroll to an anchor ID
function scrollToAnchor(anchorID) {
	const targetElement = document.getElementById(anchorID);

	if (targetElement) {
		targetElement.scrollIntoView({ behavior: 'smooth' });
	}
}
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
window.addEventListener("load", populateNav);
// Scroll to section on link click
const navLinks = document.querySelectorAll('.menu__link');

navLinks.forEach((link) => {
	link.addEventListener('click', (event) => {
		event.preventDefault(); // Prevent the default link behavior (e.g., navigating to a different page)

		const anchorID = link.getAttribute('href').substring(1); // Get the anchor ID without the '#'
		scrollToAnchor(anchorID);
	});
});
// Set sections as active

window.addEventListener("scroll", addClassOnScroll);
