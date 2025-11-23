// Develop the app further.
// Add JavaScript that gets the value entered to the form and sends a request with
// fetch to https://api.tvmaze.com/search/shows?q=${value_from_input}. Print the search result to the console. (3p)

'use strict';

const form = document.getElementById('form');

form.addEventListener('submit', async function (evt) {

    evt.preventDefault();

    const query = document.querySelector('input[name=q]').value;

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const jsonData = await response.json();
        console.log(jsonData);
    } catch (error) {
        console.log(error.message);
    }
});