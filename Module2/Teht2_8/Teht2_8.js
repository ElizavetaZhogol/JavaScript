// Write a function called concat(), which receives an array of strings as a parameter.
// The function returns a string formed by concatenating the elements of the array. (2p)
// Example: In a four-item array, there are items Johnny, DeeDee, Joey and Marky.
// The function returns the string JohnnyDeeDeeJoeyMarky.
// Do not use array.join() function
// You can hardcode the array, no need for prompt().
// Print the result to HTML document.

'use strict';

let string = "";

function concat(names) {
    for (let i = 0; i < names.length; i++) {
        string += names[i];
    }
    return string;
}

const names = ['Aaa', 'Bbb', 'Ccc', 'Ddd'];

const result = concat(names);

document.querySelector('#result').innerHTML = result;