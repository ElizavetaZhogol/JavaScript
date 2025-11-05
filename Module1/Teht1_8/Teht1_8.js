// Write a program that prompts the user for the start and end year.
// The program prints all leap years from the interval given by the user.
// Printing is done in an unordered list to the HTML document. (3p)

'use strict';

const startyear = parseInt(prompt('Give a start year'));
const endyear = parseInt(prompt('Give an end year'));

let list = "";

for (let i = startyear; i <= endyear; i++) {
    if (i % 100 === 0) {
        if (i % 400 === 0) {
            list += `<li> ${i} </li>`;
        }
    }
    else if (i % 100 !== 0) {
        if (i % 4 === 0) {
            list += `<li> ${i} </li>`;
        }
    }
}

document.querySelector('#result').innerHTML = list;