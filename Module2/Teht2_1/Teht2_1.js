// Write a program that prompts the user for five numbers and prints them in the reverse order they were entered (not reverse sorted).
// Print the result to the console.(2p)
// Save the numbers to an array, then use for-loop to iterate in reverse order.
// Do not use array.reverse() function.

'use strict';

const numbers = [];
let list = "";

numbers[0] = parseInt(prompt("Give 1 number:"));
numbers[1] = parseInt(prompt("Give 2 number:"));
numbers[2] = parseInt(prompt("Give 3 number:"));
numbers[3] = parseInt(prompt("Give 4 number:"));
numbers[4] = parseInt(prompt("Give 5 number:"));

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(`${numbers[i]}`);
}
