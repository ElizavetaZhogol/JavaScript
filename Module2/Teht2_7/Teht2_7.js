// Modify the function above so that it gets the number of sides on the dice as a parameter.
// With the modified function you can for example roll a 21-sided role-playing dice.
// The difference to the last exercise is that
// the dice rolling in the main program continues until the program gets the maximum number on the dice,
// which is asked from the user at the beginning. (2p)

'use strict';

let list = "";

const max_number = parseInt(prompt("Give a number of sides on the dice."));

function dice_roll() {
    const roll = Math.floor(Math.random() * max_number) + 1;
    return roll;
}

let result = dice_roll();

while (result != max_number) {
    list += `<li> ${result} </li>`;
    result = dice_roll();
}

list += `<li> Rolled ${result}. Program stops. </li>`;

document.querySelector('#result').innerHTML = list;