// Write a function that returns a random dice roll between 1 and 6.
// The function should not have any parameters. Write a main program that rolls the dice until the result is 6.
// The main program should print out the result of each roll in an unordered list (<ul>). (2p)

'use strict';

let list = "";

function dice_roll() {
    const roll = Math.floor(Math.random() * 6) + 1;
    return roll;
}

let result = dice_roll();

while (result != 6) {
    list += `<li> ${result} </li>`;
    result = dice_roll();
}

list += `<li> Rolled ${result}. Program stops. </li>`;

document.querySelector('#result').innerHTML = list;
