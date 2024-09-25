
// Lecture 4 - Working with the DOM

// The Document Object Model (DOM) is a programming interface for web documents.
// It represents the structure of a document as a tree of objects, which can be
// manipulated using a programming language such as JavaScript.

// Here are some examples of how we can work with the DOM using JavaScript:

// ---------------------------------------------------

// Storing a reference to an element in a variable

// Here is an example of how we can store a reference to an element in a variable
// using the getElementById method:

// Select the element with the id of 'introduction'
const introduction = document.getElementById('introduction');

// Why we chose to store as a constant:
//
// We chose to store the reference to the element in a constant because we do not
// intend to reassign the variable to another element. This is because the
// getElementById method will always return the same element, as the id attribute
// is unique to that element.

// ---------------------------------------------------

// Modifying the text content of an element

// Here is an example of how we can modify the text content of an element using
// the textContent property:

// Select the element with the id of 'introduction', which is a div tag, and
// modify the text content of the h2 tag within the div tag
introduction.querySelector('h2').textContent = 'Hello, World!';

// Note how the text content of the h2 tag within the div tag with the id of
// 'introduction' has been modified to 'Hello, World!'. This is because we used
// the textContent property to set the text content of the h2 tag to 'Hello,
// World!'.

// ---------------------------------------------------

// Modifying the style of an element

// Here is an example of how we can modify the style of an element using the
// style property:

// Select the element with the id of 'introduction', which is a div tag, and
// modify the background color of the h2 tag within the div tag.

// Note that the style property is used to access the CSS properties of an
// element. In this case, we are modifying the background color property of the
// h2 tag within the div tag with the id of 'introduction'. We set the background
// color to 'lightblue'.
introduction.querySelector('h2').style.backgroundColor = 'lightblue';

// ---------------------------------------------------

// Adding a class to an element

// Here is an example of how we can add a class to an element using the
// classList property:

// Select the element with the id of 'introduction', which is a div tag, and add
// the 'display-1' class to the h2 tag within the div tag.

// Note that the classList property is used to access the classes of an element.
// In this case, we are adding the 'display-1' class to the h2 tag within the div
// tag with the id of 'introduction'.
introduction.querySelector('h2').classList.add('display-1');

// ---------------------------------------------------

// Changing the tag of an element

// Here is an example of how we can change the tag of an element:

// We need to create a new tag to replace the existing tag. In this case, we are
// creating a new h1 tag and adding the content from the existing h2 tag to the
// new h1 tag.

// Create a new h1 tag below the h2 tag with id of 'third-header'.
// Make sure that this new h1 tag has the same id as the existing h2 tag.
const newHeader = document.createElement('h1')

// Set the text content of the new h1 tag to the text content of the h2 tag with
// the id of 'third-header'
newHeader.textContent = document.getElementById('third-header').textContent;

// Replace the h2 tag with the id of 'third-header' with the new h1 tag
document.getElementById('third-header').replaceWith(newHeader);

// Introduce the same id to the new h1 tag
newHeader.id = 'third-header';

// This is not a very common operation, but it highlights how we can manipulate
// the DOM using JavaScript.

// ---------------------------------------------------

