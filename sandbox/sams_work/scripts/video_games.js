/****************************************************
* Program:
*   video_games.js
* Author:
*   Samuel Hibbard
* Summary:
*   This will show the modal.
****************************************************/

window.onload = function() {
    // Grab all the tags
    var tags = document.getElementsByTagName('td');

    // Loop through the tags
    for (var i = 0; i < tags.length; i++) {
        tags[i].onclick = showDetails;
    };
}

/*************************************
* showDetails
*************************************/
function showDetails(event) {
    console.log(event);
}