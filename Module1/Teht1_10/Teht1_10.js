// Make a program that asks the user for the number of dice and the sum of the eye numbers of interest to the user.
// The purpose of your program is now to find out with what probability the number of dice given by the user produces the sum of the number of eyes given by the user.
// For example, if the user enters 3 as the number of dice and 17 as the sum of the eyes,
// the program calculates the probability that the sum of the three dice's eye numbers is 17. (5p)


'use strict';

const dice = parseInt(prompt('Give a number of dice'));
const sum = parseInt(prompt('Give an expected sum'));

let tries = 100000;
let success = 0;


while (tries > 0) {
    let number = dice
    let result = 0;
    tries--;
    while (number > 0) {
        number--;
        const roll = Math.floor(Math.random() * 6) + 1;
        result = result + roll;
    }
    if (result === sum) {
        success++;
    }
}

const probability = success / 100000;
const percentage = (probability * 100).toFixed(2);

document.querySelector('#result').innerHTML = `Probability to get sum ${sum} with ${dice} dices is ${percentage}%`;
