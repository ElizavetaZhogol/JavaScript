// Open t7 folder in your IDE/editor. Make a hover effect with JavaScript. (2p)
// when user mouses over <p id="trigger"> change the picture of <img id="target"> form picA.jpg to picB.jpg
// when user mouses off, change the picture back to original

'use strict';

const trigger = document.getElementById('trigger');
const picture = document.getElementById('target');

trigger.addEventListener('mouseover', function () {
    picture.src = "img/picB.jpg";
});

trigger.addEventListener('mouseout', function () {
    picture.src = "img/picA.jpg";
});