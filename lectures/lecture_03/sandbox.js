
// Lecture 3 - getElementById, getElementsByClassName, getElementsByTagName

// The methods getElementById, getElementsByClassName, and getElementsByTagName
//
// The getElementById method is used to select an element based on its id
// attribute.
//
// The getElementsByClassName method is used to select elements based on their
// class attribute.
//
// The getElementsByTagName method is used to select elements based on their tag
// name.

// ---------------------------------------------------

// How to use the getElementById method:

// Here is a sample selection using the getElementById method in the console
// with regards to the HTML structure of index.html in the lecture_03 folder:

// Select the element with the id of 'introduction' Notice that the id is
// specified without the hash (#) symbol as in CSS! id is implied by the method
// name
//
// document.getElementById('introduction');

// ---------------------------------------------------

// How to use the getElementsByClassName method:

// Here is a sample selection using the getElementsByClassName method in the
// console with regards to the HTML structure of index.html in the lecture_03
// folder:

// Select all elements with the class of 'container' Notice that the class is
// specified without the dot (.) symbol as in CSS! class is implied by the
// method name
//
// document.getElementsByClassName('container');

// NOTE: The getElementsByClassName method returns a HTMLCollection object,
//       which is similar to an array.

// ---------------------------------------------------

// How to use the getElementsByTagName method:

// Here is a sample selection using the getElementsByTagName method in the
// console with regards to the HTML structure of index.html in the lecture_03
// folder:

// Select all h2 elements on the page
//
// document.getElementsByTagName('h2');

// NOTE: The getElementsByTagName method returns a HTMLCollection object, which
//       is similar to an array.

// ---------------------------------------------------

// The Difference Between an HTMLCollection and a NodeList

// A NodeList and an HTMLcollection is very much the same thing.
//
// Both are array-like collections (lists) of nodes (elements) extracted from a
// document. The nodes can be accessed by index numbers. The index starts at 0.
//
// Both have a length property that returns the number of elements in the list
// (collection).
//
// An HTMLCollection is a collection of document elements.
//
// A NodeList is a collection of document nodes (element nodes, attribute nodes,
// and text nodes).
//
// HTMLCollection items can be accessed by their name, id, or index number.
//
// NodeList items can only be accessed by their index number.
//
// An HTMLCollection is always a live collection. Example: If you add a <li>
// element to a list in the DOM, the list in the HTMLCollection will also
// change.
//
// A NodeList is most often a static collection. Example: If you add a <li>
// element to a list in the DOM, the list in NodeList will not change.
//
// The getElementsByClassName() and getElementsByTagName() methods return a live
// HTMLCollection.
//
// The querySelectorAll() method returns a static NodeList.

// ---------------------------------------------------