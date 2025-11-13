// Open t10 folder in your IDE/editor.
// Read the first name and last name values from the form and print them in the <p id="target"> (2p)
// remember to stop the default action of the form
// you can use attribute selectors in querySelector() to select the <input> elements
// example output: Your name is Luke Skywalker

'use strict';

const lomake = document.querySelector('#source');
const target = document.getElementById('target');

lomake.addEventListener('submit', function (evt) {

    evt.preventDefault();

    const fname = document.querySelector('input[name=firstname]').value;
    const lname = document.querySelector('input[name=lastname]').value;

    document.querySelector('#target').innerHTML = `Your name is ${fname} ${lname}`;
})