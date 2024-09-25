
// Lecture 6 - Traversing the DOM

// Traversing the DOM is the process of navigating through the structure of a
// document. This can be done using the properties and methods of the DOM API.
// Here are some examples of how we can traverse the DOM using JavaScript:

// ---------------------------------------------------

// Selecting the parent element of an element

// Here is an example of how we can select the parent element of an element using
// the parentNode property:

// Select the h2 element with the id of 'first-header'
const firstHeader = document.getElementById('first-header');

// Select the parent element of the h2 element
const section = firstHeader.parentNode;

// Select the parent element of the section element
const main = section.parentNode;

// ---------------------------------------------------

// Selecting the child elements of an element

// Here is an example of how we can select the child elements of an element using
// the children property:

// Select the div with id 'dom-list' element and store it in a variable
const domList = document.getElementById('dom-list');

// Select the child elements of the div element
const listItems = domList.children;

// Select the first child element of the div element
// This is the h2 element.
const firstChild = domList.firstElementChild;

// Select the last child element of the div element
// This is the ul element, including all of its children.
const lastChild = domList.lastElementChild;

// Select the nth child element of the ul list
const secondListItem = lastChild.children[1];
const thirdListItem = lastChild.children[2];

// ---------------------------------------------------

// Selecting the sibling elements of an element

// Here is an example of how we can select the sibling elements of an element using
// the nextSibling and previousSibling properties:

// Select the h2 element with the id of 'first-header'
const header = document.getElementById('first-header');

// Select the next sibling element of the h2 element
// This is the whitespace between the h2 and p elements.
const whitespace = header.nextSibling;

// Select the next sibling element of the whitespace element
// This is the p element.
const paragraph = whitespace.nextSibling;

// Select the previous sibling element of the p element
// This is the h2 element.
const previousHeader = paragraph.previousSibling;

// ---------------------------------------------------

