// Write a program that prints the text "Should I calculate the square root?" in a confirmation window.
// If the user selects OK, the program asks for the number and calculates and prints its square root to the HTML document.
// If the user selects Cancel, the program prints the text "The square root is not calculated." to the HTML document (3p)

'use strict';

const answer = confirm('Should I calculate the square root?');

if (answer === true) {
    const number = prompt('Give a number');
    if (number >= 0) {
        const sqroot = Math.sqrt(number)
        document.querySelector('#result').innerHTML = `${number} square root is ${sqroot}`;
    }
    else {
        document.querySelector('#result').innerHTML = 'The square root of a negative number is not defined.';
    }
}
else {
    document.querySelector('#result').innerHTML = 'The square root is not calculated.';
}
