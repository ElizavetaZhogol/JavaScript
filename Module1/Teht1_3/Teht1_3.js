// Write a program that prompts for three integers. The program prints the sum, product and average of the numbers to the HTML document. (3p)

'use strict';

const number1 = parseInt(prompt("Give me first number:"));
const number2 = parseInt(prompt("Give me second number:"));
const number3 = parseInt(prompt("Give me third number:"));

const sum = number1 + number2 + number3;

const product = number1 * number2 * number3;

const average = sum / 3;

document.querySelector('#number1').innerHTML = `${number1}`;
document.querySelector('#number2').innerHTML = `${number2}`;
document.querySelector('#number3').innerHTML = `${number3}`;

document.querySelector('#result1').innerHTML = `Sum: ${sum}`;
document.querySelector('#result2').innerHTML = `Product: ${product}`;
document.querySelector('#result3').innerHTML = `Average: ${average}`;
