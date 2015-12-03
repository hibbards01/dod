/****************************************************
* Program:
*   storage.js
* Author:
*   Samuel Hibbard
* Summary:
*   This will access the labyrinths either from the
*       database or from local storage.
****************************************************/

function sendRequest(url, method, func) {
    // Create the request
    var request = new XMLHttpRequest();

    // Now see when it is finished
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            func(request.responseText);
        }
    }

    request.open(method, url, true);
    request.send();
}

/*************************************
* downloadNewLabyrinth
*   This will download a new labyrinth
*       for the user. It will save it
*       to there local storage.
*************************************/
function downloadNewLabyrinth() {
    // Grab the labyrinths
    sendRequest('https://php-shibbard01.rhcloud.com/database.php', 'POST', function(params) {
        console.log(params);
    });
}