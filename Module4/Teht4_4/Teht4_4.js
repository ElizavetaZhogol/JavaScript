// Develop the app even further. Optional chaining is not the best way to handle missing image.
// Use ternary operator or if/else to add a default image if TV-show is missing image property. (2p)
// Use https://placehold.co/210x295?text=Not%20Found as the default image.

'use strict';

const form = document.getElementById('form');
const resultsElem = document.getElementById('results');

form.addEventListener('submit', async function (evt) {

    evt.preventDefault();

    const query = document.querySelector('input[name=q]').value;

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const jsonData = await response.json();

        console.log(response);

        resultsElem.innerHTML = '';

        for (const tvShow of jsonData) {

            const article = document.createElement('article');

            const header = document.createElement('h2');
            header.innerHTML = tvShow.show.name;

            const link = document.createElement('a');
            link.innerHTML = tvShow.show.url;
            link.href = tvShow.show.url;
            link.target = "_blank";

            const image = document.createElement("img");
            image.src = tvShow.show.image ?
                tvShow.show.image.medium : 'https://placehold.co/210x295?text=Not%20Found';
            image.alt = tvShow.show.name;

            const div = document.createElement('div');
            div.innerHTML = tvShow.show.summary;


            article.append(header, link, image, div);

            resultsElem.append(article);

        }

    } catch (error) {
        console.log(error.message);
    }
});