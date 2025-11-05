// Write a program that rolls user defined number of dice and displays the sum of the results of the dice rolls.(2p)

// First, program asks the user for the number of dice rolls.
// Then the program throws a die as many times as the user defined.
// Print the sum of the results in the console or in the HTML document.

'use strict';

const dice = prompt('Give the number of dice');
let number = dice;
let sum = 0;

while (number > 0) {
    number--;
    const roll = Math.floor(Math.random() * 6) + 1;
    sum = sum + roll;
}
document.querySelector('#result').innerHTML = `The sum of ${dice} rolled dices is ${sum}`;
