/****************************************************
* Program:
*   mobile_trigger.js
* Author:
*   Samuel Hibbard
* Summary:
*   This will show what events will happen with touch
*       events.
****************************************************/

function init() {
    // Grab moving

    // Grab click event
    document.getElementById('moveCircle').ontouchstart = function(event) {
        console.log("HERE!");
    }
}

function moving(event) {
    for (key in event) {
        console.log(key);
    }
}