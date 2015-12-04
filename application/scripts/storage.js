/****************************************************
* Program:
*   storage.js
* Author:
*   Samuel Hibbard
* Summary:
*   This will access the labyrinths either from the
*       database or from local storage.
****************************************************/

function sendRequest(url, method, data, func) {
    // Create the request
    var request = new XMLHttpRequest();

    // Now see when it is finished
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            // json = JSON.parse(request.responseText);
            func(request.responseText);
        }
    }

    // Now finally do the request
    request.open(method, url, true);

    // See if we are making a post
    if (method == 'POST') {
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send(data);
    } else {
        request.send();
    }
}

/*************************************
* downloadNewLabyrinth
*   This will download a new labyrinth
*       for the user. It will save it
*       to there local storage.
*************************************/
function downloadNewLabyrinth() {
    // Set the data
    var data = 'labyrinths=true'

    // Grab the labyrinths
    sendRequest('https://php-shibbard01.rhcloud.com/database.php', 'POST', data, function(params) {
        // Now parse the json
        data = JSON.parse(params);
        labs = data.labyrinths;

        // Now see if we have this in local storage
        savedLabs = localStorage['labyrinths'];

        // See if this is the first time
        if (savedLabs == undefined) {
            // Save all the labs
            localStorage['labyrinths'] = JSON.stringify(labs);

            // Now download the boards
            downloadBoards(labs);
        } else {
            // Loop through the local storage
            var isNew = false;
            var newLabs = [];
            savedLabs = JSON.parse(savedLabs);

            for (var i = 0; i < savedLabs.length; i++) {
                // Now check the ids with the server data
                // Initailly think there is a new one
                isNew = true;

                for (var j = 0; j < labs.length; j++) {
                    if (savedLabs[i].boardID == labs[j].boardID) {
                        isNew = false;
                    }
                }

                // If still true then add the id to the list
                if (isNew) {
                    newLabs.push(savedLabs[i]);
                }
            }

            // Now see if we need to make a request
            // And save to local storage
            if (newLabs.length > 0) {
                saveToLocalStorage(newLabs, savedLabs);
                downloadBoards(newLabs);
            }
        }
    });

    //
    // Private functions
    //
    /*************************************
    * saveToLocalStorage
    *   Now save to local storge.
    *************************************/
    function saveToLocalStorage(labs, savedLabs) {
        // Loop through the new labs and save them
        for (var i = 0; i < labs.length; i++) {
            savedLabs.push(labs[i]);
        }

        localStorage['labyrinths'] = JSON.stringify(savedLabs);
    }

    /*************************************
    * downloadBoards
    *   This will download the new boards.
    *************************************/
    function downloadBoards(labs) {
        // Now make a request to the server for the boards
        for (var i = 0; i < labs.length; i++) {
            var lab = 'labyrinth=' + labs[i].boardID;

            sendRequest('https://php-shibbard01.rhcloud.com/database.php', 'POST', lab, function(params) {
                // Now save it to local storage
                // See if this is the first time
                var savedBoards = localStorage['labBoards'];

                var boards = [];
                if (savedBoards != undefined) {
                    // Grab the array
                    boards = JSON.parse(savedBoards);
                }

                // Push it onto the array
                boards.push(JSON.parse(params));

                // Now save it!
                localStorage['labBoards'] = JSON.stringify(boards);
            });
        }
    }
}

