// Develop the app further (4p).
// Now add a form where you can enter a search term like in assignments 1-3
// Send the search term to https://api.chucknorris.io/jokes/search?query=${value_from_input} using fetch()
// Print each joke in this format:
// <article>
//     <p>Joke here<p>
// </article>

'use strict';

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', async function (evt) {

    evt.preventDefault();

    const query = document.querySelector('input[name=q]').value;

    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
        const jsonData = await response.json();

        result.innerHTML = '';

        for (const joke of jsonData.result) {
            const article = document.createElement('article');
            const text = document.createElement('p');
            text.innerHTML = joke.value;
            article.append(text);
            result.append(article);
        }
    } catch (error) {
        console.log(error.message);
    }
});

