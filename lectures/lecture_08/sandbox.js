
// Lecture 8 - Event Listeners

// Event listeners are used to listen for events that occur on a particular
// element. When an event occurs, the event listener will execute a function
// that is specified by the developer. This allows us to respond to user
// interactions with the page, such as clicking a button, submitting a form,
// or hovering over an element.

// The addEventListener method is used to attach an event listener to an element.
// The method takes two arguments: the type of event to listen for, and the
// function to execute when the event occurs.

// Here is an example of how we can use the addEventListener method to listen for
// a click event on a button element:

// Create a button element
let button = document.createElement("button");

// Set the text content of the button
button.textContent = "Click Me";

// Append the button to the body of the document
document.body.appendChild(button);

// Add an event listener to the button element
button.addEventListener("click", function() {
  alert("Button clicked!");
});

// ----------------------------------------------------------
