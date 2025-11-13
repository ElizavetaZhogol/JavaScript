// Open t1 folder in your IDE/editor. Add HTML by using innerHTML property (2p)
// Add the following HTML code to the element with id="target"
// <li>First item</li>
// <li>Second item</li>
// <li>Third item</li>
// Add class my-list to the element with id="target"

'use strict';

const element = document.getElementById('target');

element.innerHTML = `
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
`;

element.classList.add('my-list');