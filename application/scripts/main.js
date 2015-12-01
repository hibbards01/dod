/****************************************************
* Program:
*   main.js
* Author:
*   Samuel Hibbard
* Summary:
*   This will do the main functions for this app.
****************************************************/

window.onload = function() {
    document.getElementById('location').onclick = function() {
        // Now grab the coordinates
        grabLocation(showPosition);
    }
}

function showPosition(position) {
    // Now display it
    var p = document.createElement('p');
    p.innerHTML = 'Latitude: ' + position.coords.latitude +
    ' Longitude: ' + position.coords.longitude;

    document.getElementById('body').appendChild(p);
}