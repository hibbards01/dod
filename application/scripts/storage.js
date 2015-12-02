/****************************************************
* Program:
*   storage.js
* Author:
*   Samuel Hibbard
* Summary:
*   This will access the labyrinths either from the
*       database or from local storage.
****************************************************/

// Grab the database!
var data = new Firebase('https://blistering-torch-3029.firebaseIO.com/');

/*************************************
* downloadNewLabyrinth
*   This will download a new labyrinth
*       for the user. It will save it
*       to there local storage.
*************************************/
function downloadNewLabyrinth() {
    // Grab the labyrinths
    var labs = data.child('labyrinths');
    console.log(labs);
    // Loop through the array
    // labs.forEach(function(snapshot) {
    //     var lab = snapshot.val();
    //     console.log(lab.name);
    // });
}