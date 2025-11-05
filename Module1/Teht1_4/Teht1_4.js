// In the Harry Potter children's books, the sorting hat assigns a new student at Hogwarts School of Witchcraft and Wizardry to one of the four classes,
// which are Gryffindor, Slytherin, Hufflepuff, and Ravenclaw.
// Write an electronic sorting hat that asks for a student's name and draws a room for that student.
// If you enter Anna as the name, for example, the program prints to the HTML document "Anna, you are Ravenclaw." (3p)

'use strict';

const name = prompt('Give your name');
const number = Math.floor(Math.random() * 4) + 1;

if (number === 1) {
    document.querySelector('#result').innerHTML = `${name}, you are Gryffindor`;
}
else if (number === 2) {
    document.querySelector('#result').innerHTML = `${name}, you are Slytherin`;
}
else if (number === 3) {
    document.querySelector('#result').innerHTML = `${name}, you are Hufflepuff`;
}
else if (number === 4) {
    document.querySelector('#result').innerHTML = `${name}, you are Ravenclaw`;
}