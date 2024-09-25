
// Lecture 2 - querySelector and querySelectorAll

// The querySelector method is used to select the first element that matches a
// specified CSS selector. The querySelectorAll method is used to select all
// elements that match a specified CSS selector. Both methods return a NodeList
// object, which is similar to an array.

// Just to mention briefly, being an array provides the NodeList object with
// properties and methods that can be used to interact with the elements that
// are selected. For example, the length property can be used to determine the
// number of elements that are selected, and the forEach method can be used to
// iterate over the elements.

// The querySelector and querySelectorAll methods are part of the Document
// interface, which is implemented by the document object. This means that these
// methods can be called on the document object.

// The querySelector and querySelectorAll methods are very useful for selecting
// elements on a web page, as they allow you to target specific elements based on
// their CSS selectors.

// ---------------------------------------------------

// How to use the querySelector method:

// Here are some sample selections using the querySelector method
// in the console with regards to the HTML structure of index.html
// in the lecture_02 folder:

// Select the first h1 element on the page
//
// document.querySelector('h1');

// Select the first p element on the page
//
// document.querySelector('p');

// Select the first element with the class of 'container' on the page
//
// document.querySelector('.container');

// Select the first element with the id of 'main' on the page
//
// document.querySelector('#introduction');

// ---------------------------------------------------

// How to use the querySelectorAll method:

// Here are some sample selections using the querySelectorAll method
// in the console with regards to the HTML structure of index.html
// in the lecture_02 folder:

// Select all h2 elements on the page
//
// document.querySelectorAll('h2');

// Select all p elements on the page
//
// document.querySelectorAll('p');

// Select all list items
//
// document.querySelectorAll('li');

// ---------------------------------------------------


