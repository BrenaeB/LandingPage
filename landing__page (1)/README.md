# Landing Page Project

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

## Project Description

The landing page involves dynamically creating the navigation bar elements using JavaScript. The `document.createElement` and `element.appendChild` methods are heavily used to create list item and anchor elements. 

The `populateNav` function creates the a and li elements, adds class names to the anchors, and appends the li elements to the ul tag.


Event listeners on the window used are the `scroll` and the `load` events. On the load event, the `populateNav` function is passed as a callback, while on the `scroll` event, the `addClassOnScroll` function is passed. In addition, the `click` event is also listened for on the anchor tags in the navbar. The `scrollToAnchor` function is passed to the click event and performs the smooth scroll when the anchor tag is clicked.


## Usage Instructions
Open the file folder containing the project files. Right click on the `index.html` file and copy the file's path. Open your browser, paste the copied path and press enter. Try scrolling the page, as well as clicking the 'Section n' elements on the navigation bar to see the smooth scrolling. 

## Dependencies

No external dependencies are used in this project