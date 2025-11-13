// Open t2 folder in your IDE/editor. Add HTML by using createElement() and appendChild methods. (2p)
// Add the following HTML code to the element with id="target"
// <li>First item</li>
// <li>Second item</li>
// <li>Third item</li>
// Add class my-item to the second list item

'use strict';

const element = document.getElementById('target');

const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");

li1.innerText = "First item";
li2.innerText = "Second item";
li3.innerText = "Third item";

element.appendChild(li1);
element.appendChild(li2);
element.appendChild(li3);

li2.classList.add('my-item');