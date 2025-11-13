// Open t8 folder in your IDE/editor. Make a simple calculator. (4p)
// There are two input fields where user enters numbers.
// Based on the drop-down list, calculator performs addition, subtraction, multiplication or division of these two numbers.
// Use the value attribute of <option> elements to decide which operation the calculator needs to do. Example.
// Show the result in <p id="result"> when the button is clicked.

'use strict';

const button = document.getElementById('start');
const result = document.getElementById('result');

button.addEventListener('click', function () {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let calc = 0;

    if (operation === "add") {
        calc = num1 + num2;
    }
    else if (operation === "sub") {
        calc = num1 - num2;
    }
    else if (operation === "multi") {
        calc = num1 * num2;
    }
    else if (operation === "div") {
        calc = num1 / num2;
    }

    result.innerText = `Result: ${calc}`;
});