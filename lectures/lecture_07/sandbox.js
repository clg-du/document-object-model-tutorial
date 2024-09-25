
// Lecture 7 - Adding Bootstrap classes to elements

// We source the changes from the previous lecture in the HTML document by
// adding the script. Therefore, those changes are already implemented here.

// We now want to add some Bootstrap classes to the elements in the HTML
// document, so that the page looks better.

// ---------------------------------------------------

// Adding some base Bootstrap classes to the elements in the HTML document

// Select the h1 element on the page and add the Bootstrap class display-4 and
// center it on the page by adding the Bootstrap class text-center. We also add
// some margin to the top and bottom of the element by adding the Bootstrap
// class mb-4 and mt-4.
document.querySelector('h1').classList.add('display-4', 'text-center', 'mb-4', 'mt-4');

// Let's add a div tag that wraps the div tags withing the container div tag.
// This div tag will have the Bootstrap class row.
document.querySelector('.container').innerHTML = '<div class="row">' + document.querySelector('.container').innerHTML + '</div>';

// Select the remaining div tags on the page and add the Bootstrap class col-md-4
// to them. This will make the div tags stack horizontally on medium devices and
// larger.
document.querySelectorAll('.container div div').forEach(div => div.classList.add('col-4'));

// Well... that looks awful... Let's spread them out evenly across the page by
// adding the Bootstrap class justify-content-around to the row div tag.
document.querySelector('.row').classList.add('justify-content-around');

// Hmm... Let's adjust this so that we stack Part 1 and Part 2 on top of each
// other. I will move the content of the second div tag after the content within
// the first div tag.
document.querySelector('.container div div:nth-child(2)').innerHTML = 
document.querySelector('.container div div:nth-child(1)').innerHTML +
document.querySelector('.container div div:nth-child(2)').innerHTML;

// I'll remove the first div tag, as it is repetitive, and change the first div to col-4 and the second div to col-8
document.querySelector('.container div div:nth-child(1)').remove();
document.querySelector('.container div div:nth-child(1)').classList.remove('col-4');
document.querySelector('.container div div:nth-child(1)').classList.add('col-4');
document.querySelector('.container div div:nth-child(2)').classList.remove('col-4');
document.querySelector('.container div div:nth-child(2)').classList.add('col-8');

// And now let's center the content of the second div tag vertically by adding
// the Bootstrap class align-items-center to the row div tag.
document.querySelector('.row').classList.add('align-items-center');

// ---------------------------------------------------
