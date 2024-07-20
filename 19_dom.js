document.getElementById('title');
/* Output: <h1 class="heading" id="title">Learning DOM on "Chai aur Code"</h1> */

document.getElementById('title').id;
// Output: "title"

document.getElementById('title').className;
// Output: "heading"

document.getElementById('title').class;
// Output: undefined

document.getElementById('title').getAttribute;
// Output: ƒ getAttribute() { [native code] }

document.getElementById('title').getAttribute();
// Output: TypeError: Failed to execute 'getAttribute' on 'Element': 1 argument required, but only 0 present.

document.getElementById('title').getAttribute('class');
// Output: "heading"

document.getElementById('title').getAttribute('id');
// Output: "title"

document.getElementById('title').setAttribute('class', 'heading-1');
// Output: undefined
// But now, if we look at the element, the class has been changed to "heading-1".
// It always overwrites the existing value.

// If we want to add another class to the existing class, we can do it like this:
document.getElementById('title').setAttribute('class', 'heading heading-1');
// Output: undefined

const title = document.getElementById('title'); 

title.style.backgroundColor = 'green';
title.style.padding = '15px';

// We can also add multiple styles at once using the following syntax:
title.style.cssText = 'background-color: green; padding: 15px;';

title.textContent;
// Output: "Learning DOM on "Chai aur Code""

title.innerHTML;
// Output: "Learning DOM on "Chai aur Code""

title.innerText;
// Output: "Learning DOM on "Chai aur Code""

// Now the question is, what is the difference between textContent, innerHTML, and innerText?
// textContent: It returns the text content of all elements, including <script> and <style> elements.
// innerHTML: It returns the HTML content (inner HTML) of an element.
// innerText: It returns the text content of an element, and all its descendants.

// Let's see an example:
// <h1 class="heading" id="title">Learning DOM on "Chai aur Code" <span>Text From Span Tag</span></h1>

title.textContent;
// Output: "Learning DOM on "Chai aur Code" Text From Span Tag"

title.innerText;
// Output: "Learning DOM on "Chai aur Code" Text From Span Tag"

// Now, let's add the display property to the span tag:
// <h1 class="heading" id="title">Learning DOM on "Chai aur Code" <span style="display: none;">Text From Span Tag</span></h1>

title.textContent;
// Output: "Learning DOM on "Chai aur Code" Text From Span Tag"

title.innerText;
// Output: "Learning DOM on "Chai aur Code""

// As we can see, textContent returns all the text content, whereas innerText returns only the text content that is visible on the screen.

// Query Selector - Returns the first element that matches a specified CSS selector(s) in the document.
document.querySelector('h2');
// Output: <h2>First - Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>

document.querySelector('.heading');
// Output: <h1 class="heading" id="title">Learning DOM on "Chai aur Code"</h1>

document.querySelector('#title');
// Output: <h1 class="heading" id="title">Learning DOM on "Chai aur Code"</h1>

document.querySelector('input[type="password"]');
// Output: <input type="password" name id>

document.querySelector('p:first-child');
// Output: null (It will return null because there is no first child of the p tag)

const myul = document.querySelector("ul");
const turnGreen = myul.querySelector("li");
turnGreen.style.color = "green";
turnGreen.style.padding = "15px";

// We can manipulate the text using innerText:
turnGreen.innerText = "I am green now!";

// Select all li elements
document.querySelectorAll('li');
// Output: NodeList(3) [li, li, li]

const tempLiList = document.querySelectorAll('li');

tempLiList.style.color = "green";
// Output: TypeError: Cannot set property 'color' of undefined

// This will chage the color of the first li element to green
tempLiList[0].style.color = "green";

// Using forEach loop to change the color of all the li elements to green
tempLiList.forEach(li => {
    li.style.color = "green";
});

tempClassList = document.getElementsByClassName('heading');

// This returns an HTMLCollection

tempClassList.forEach(element => {
    console.log(element);
});

// Output: TypeError: tempClassList.forEach is not a function

// We need to convert HTMLCollection to an array to use forEach loop

Array.from(tempClassList).forEach(element => {
    // console.log(element);
    element.style.color = "orange";
});
