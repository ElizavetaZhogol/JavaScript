// Write a program that asks the user for the number of participants.
// After this, the program asks for the names of all participants. Finally,
// the program prints the names of the participants on the web page in an ordered list (<ol>) in alphabetical order. (2p)

'use strict';

const number_participants = parseInt(prompt("How many participants?"));
const names = [];
let list = "";

for (let i = 0; i < number_participants; i++) {
    names[i] = prompt(`Give ${i + 1} participant's name:`);
}

const alphabetic_names = names.sort();

for (let i = 0; i < alphabetic_names.length; i++) {
    list += `<li> ${alphabetic_names[i]} </li>`;
}

document.querySelector('#result').innerHTML = list;