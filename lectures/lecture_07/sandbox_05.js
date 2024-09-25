
// Lecture 5 - Modyfing multiple elements

// The querySelectorAll method is used to select all elements that match a
// specified CSS selector. It returns a NodeList object, which is similar to an
// array. The NodeList object has properties and methods that can be used to
// interact with the elements that are selected. For example, the length
// property can be used to determine the number of elements that are selected,
// and the forEach method can be used to iterate over the elements.

// Here are some examples of how we can modify multiple elements using the
// querySelectorAll method:

// ---------------------------------------------------

// Modifying the text content of multiple elements

// Here is an example of how we can modify the text content of multiple elements
// using the textContent property:

// Select all h2 elements on the page
const headings = document.querySelectorAll('h2');

// We want to append the text Part 1, Part 2, Part 3 to each of the three h2
// elements on the page, putting it before the existing text. We can use the
// forEach method to iterate over the elements and modify the text content of
// each element.
headings.forEach((heading, index) => {
  heading.textContent = `Part ${index + 1}: ${heading.textContent}`;
});

// We want to fix the last h2 element on the page by changing the text content,
// so that it reads Part 3: DOM Methods. We can use the textContent property
// to modify the text content of the element directly.
headings[2].textContent = 'Part 3: DOM Methods';

// Finally we add a p tag following this last h2 element with the text
// "This list provides a description of the most commonly used DOM methods."
const p = document.createElement('p');

// Set the text content of the p element
p.textContent = 'This list provides a description of the most commonly used DOM methods.';

// Insert the p element after the last h2 element on the page
headings[2].after(p);

// after method is used to insert the p element after the last h2 element on
// the page. The after method is used to insert an element after the element
// that is selected. In this case, we are inserting the p element after the
// last h2 element on the page.

// ---------------------------------------------------

// Modyfing text content of list items

// Here is an example of how we can modify the text content of list items using
// the textContent property:

// Select all li elements on the page
const listItems = document.querySelectorAll('li');

// We want to append the text "Element method: " if the list item begins with the
// text "element" and "Document method: " if the list item begins with the text
// "document". We can use the forEach method to iterate over the elements and
// modify the text content of each element.

// In addition, lets make the text that we add bold by wrapping it in a strong tag
// We can use the innerHTML property to set the HTML content of the element.
listItems.forEach((item) => {
  if (item.textContent.startsWith('element')) {
    item.innerHTML = `<strong>Element method: </strong>${item.textContent}`;
  } else if (item.textContent.startsWith('document')) {
    item.innerHTML = `<strong>Document method: </strong>${item.textContent}`;
  }
});

// ---------------------------------------------------