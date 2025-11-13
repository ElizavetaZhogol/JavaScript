// Open t9 folder in your IDE/editor. This is continuation to previous task.
// There is only one text field left, where the user writes the calculation (addition, subtraction, multiplication or division) (4p)
// You can use the includes and split methods.
// eval() function is prohibited
// No need to support decimal numbers, calculating integers is enough.
// Example inputs: 3+5, 2-78, 3/6, etc...

'use strict';

const button = document.getElementById('start');
const result = document.getElementById('result');

button.addEventListener('click', function () {

    const calculation = document.getElementById('calculation').value;
    const calcArray = calculation.split(/[+\-*/]/);
    const num1 = parseInt(calcArray[0]);
    const num2 = parseInt(calcArray[1]);
    let calc = 0;

    if (calculation.includes("+")) {
        calc = num1 + num2;
    }
    else if (calculation.includes("-")) {
        calc = num1 - num2;
    }
    else if (calculation.includes("*")) {
        calc = num1 * num2;
    }
    else if (calculation.includes("/")) {
        calc = num1 / num2;
    }

    result.innerText = `Result: ${calc}`;
});