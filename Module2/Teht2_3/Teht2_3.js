// Write a program that asks for the names of six dogs.
// The program prints dog names to unordered list <ul> in reverse alphabetical order. (2p)

'use strict';

const dog_names = [];
let list = "";

for (let i = 0; i < 6; i++) {
    dog_names[i] = prompt(`Give ${i + 1} dog's name:`);
}

const alphabetic_names = dog_names.sort();

const reverse_names = alphabetic_names.reverse()

for (let i = 0; i < reverse_names.length; i++) {
    list += `<li> ${reverse_names[i]} </li>`;
}

document.querySelector('#result').innerHTML = list;