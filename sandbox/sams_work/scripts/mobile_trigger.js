/****************************************************
* Program:
*   mobile_trigger.js
* Author:
*   Samuel Hibbard
* Summary:
*   This will show what events will happen with touch
*       events.
****************************************************/

var offsetX = 0;
var offsetY = 0

window.onload = function() {
    //
    // Good Paths
    //

    // Grab the button
    document.getElementById('button').onclick = doSomething;

    //
    // Nasty Paths
    //
    document.getElementById('nasty_path_1').onclick = doSomething();

    var nasty3 = document.getElementById('nasty_path_3');
    nasty3.addEventListener("onclick", doSomething(), false);

    var nasty4 = document.getElementById('nasty_path_4');
    nasty3.addEventListener("onclick", null, false);
}

//
// Good Paths
//
function init() {
    // Grab touch event
    var circle = document.getElementById('moveCircle');
    circle.addEventListener("touchstart", handleStart, false);
    circle.addEventListener("touchmove", handleMove, false);
}

function handleStart(event) {
    // Grab the position
    var position = document.getElementById('moveCircle').getBoundingClientRect();

    // Grab the offest
    offsetX = event.changedTouches[0].pageX - position.left;
    offsetY = event.changedTouches[0].pageY - (position.top - 50);
}

function handleMove(event) {
    // Grab the div tag.
    var circle = document.getElementById('moveCircle');
    var top = event.changedTouches[0].pageY - offsetY;
    var left = event.changedTouches[0].pageX - offsetX;
    circle.style.top = top + 'px';
    circle.style.left = left + 'px';
}

function doSomething(event) {
    var body = document.getElementById('body');
    var h1 = document.createElement('h1');
    h1.innerHTML = 'It worked!';
    body.appendChild(h1);
}

function moving(event) {
    for (key in event) {
        console.log(key);
    }
}

//
// Nasty Paths
//
