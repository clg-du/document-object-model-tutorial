
// Lecture 3 - getElementById, getElementsByClassName, getElementsByTagName 

// The methods getElementById, getElementsByClassName, and getElementsByTagName
//
// The getElementById method is used to select an element based on its id attribute.
//
// The getElementsByClassName method is used to select elements based on their class
// attribute. 
//
// The getElementsByTagName method is used to select elements based on their tag name.

// ---------------------------------------------------

// How to use the getElementById method:

// Here is a sample selection using the getElementById method
// in the console with regards to the HTML structure of index.html[]
// in the lecture_03 folder:

// Select the element with the id of 'introduction'
// Notice that the id is specified without the hash (#) symbol as in CSS!
//
// document.getElementById('introduction');

// NOTE: The getElementById method returns a single element, not a NodeList object.
//       This means that the element is returned directly, not as an element within
//       a NodeList object. This is different from the querySelector method, which
//       returns a NodeList object. The consequence of this is that the getElementById
//       method does not have the properties and methods that are available to the
//       NodeList object.

// --------------------------------------------------- 

// How to use the getElementsByClassName method:

// Here is a sample selection using the getElementsByClassName method
// in the console with regards to the HTML structure of index.html
// in the lecture_03 folder:

// Select all elements with the class of 'container'
// Notice that the class is specified without the dot (.) symbol as in CSS!
//
// document.getElementsByClassName('container');

// NOTE: The getElementsByClassName method returns a HTMLCollection object, which is
//       similar to an array. This means that the HTMLCollection object has properties
//       and methods that can be used to interact with the elements that are selected.
//       For example, the length property can be used to determine the number of
//       elements that are selected, and the forEach method can be used to iterate
//       over the elements.

// ---------------------------------------------------

// How to use the getElementsByTagName method:

// Here is a sample selection using the getElementsByTagName method
// in the console with regards to the HTML structure of index.html
// in the lecture_03 folder:

// Select all h2 elements on the page
//
// document.getElementsByTagName('h2');

// NOTE: The getElementsByTagName method returns a NodeList object, which is similar
//       to an array. This means that the NodeList object has properties and methods
//       that can be used to interact with the elements that are selected. For example,
//       the length property can be used to determine the number of elements that are
//       selected, and the forEach method can be used to iterate over the elements.

// ---------------------------------------------------

// The Difference Between an HTMLCollection and a NodeList

// A NodeList and an HTMLcollection is very much the same thing.
//
// Both are array-like collections (lists) of nodes (elements) extracted from a document. The nodes can be accessed by index numbers. The index starts at 0.
//
// Both have a length property that returns the number of elements in the list (collection).
//
// An HTMLCollection is a collection of document elements.
//
// A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).
//
// HTMLCollection items can be accessed by their name, id, or index number.
//
// NodeList items can only be accessed by their index number.
//
// An HTMLCollection is always a live collection. Example: If you add a <li> element to a list in the DOM, the list in the HTMLCollection will also change.
//
// A NodeList is most often a static collection. Example: If you add a <li> element to a list in the DOM, the list in NodeList will not change.
//
// The getElementsByClassName() and getElementsByTagName() methods return a live HTMLCollection.
//
// The querySelectorAll() method returns a static NodeList.

// ---------------------------------------------------