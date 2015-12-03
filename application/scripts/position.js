/****************************************************
* Program:
*   position.js
* Author:
*   Samuel Hibbard
* Summary:
*   This will grab the location of the user.
****************************************************/

/*************************************
* grabLocation
*   This will grab the location of
*       the user. It will then return
*       the latitude and longitude to
*       whomever is calling it.
*************************************/
function grabLocation(func) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(func);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}