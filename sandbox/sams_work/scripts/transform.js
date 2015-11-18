/****************************************************
* Program:
*   transform.js
* Author:
*   Samuel Hibbard
* Summary:
*   This will move the arrow
****************************************************/

window.onload = function() {
    // Grab arrow
    document.getElementById('arrow').onclick = moveArrow;
}

function moveArrow() {
    // Move the arrow
    // Grab random number
    var num = Math.floor((Math.random() * 10) + 1) * 385;

    // Now spin the arrow
    this.style.transform = "rotate(" + num + "deg)";
}