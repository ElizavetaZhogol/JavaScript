// Write a program that prompts the user for numbers.
// When the user enters one of the numbers previously entered,
// the program will announce that the number has already been given and stops its operation
// and then prints all the given numbers to the console in ascending order. (2p)

'use strict';

const numbers = [];

let number = parseInt(prompt("Give a number. Program will stop if value has been previously entered."));

let includes = numbers.includes(number);

while (includes != true) {
    numbers.push(number);
    number = parseInt(prompt("Give a number. Program will stop if value has been previously entered."));
    includes = numbers.includes(number);
}

console.log(`${number} already exists!`);

const sorted_numbers = numbers.sort((a, b) => a - b);

for (let i = 0; i < sorted_numbers.length; i++) {
    console.log(`${sorted_numbers[i]}`);
}