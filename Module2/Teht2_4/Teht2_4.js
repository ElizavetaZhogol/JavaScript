// Write a program that asks the user for numbers until the user gives zero.
// The given numbers are printed in the console from the largest to the smallest. (2p)

'use strict';

const numbers = [];

let number = parseInt(prompt("Give a number. Give 0 to stop the program."));

while (number != 0) {
    numbers.push(number);
    number = parseInt(prompt("Give a number. Give 0 to stop the program."));
}

const sorted_numbers = numbers.sort((a, b) => b - a);

for (let i = 0; i < sorted_numbers.length; i++) {
    console.log(`${sorted_numbers[i]}`);
}