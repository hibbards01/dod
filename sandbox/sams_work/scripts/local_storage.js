/****************************************************
* Program:
*   local_storage.js
* Author:
*   Samuel Hibbard
* Summary:
*   This will save an grab from local storage.
****************************************************/

var id = 1;

window.onload = function() {
    // Grab a click events
    document.getElementById('btnLoad').onclick = save;

    document.getElementById('display').onclick = display;
}

/*************************************
* save
*************************************/
function save() {
    // Grab from the input tag
    var data = document.getElementById('load');

    // Now save it!

    //
    // Good path
    //
    localStorage.setItem(id, data.value);
    localStorage.item = data.value;

    var array = JSON.stringify([1, 2, 3, 4]);
    localStorage.setItem(3, array);

    //
    // Nasty Path
    //
    localStorage.setItem(null, data.value); // This is okay
    localStorage.setItem("", data.value);
    localStorage.setItem("", 2); // Replaces other value
    localStorage.setItem(5, null);

    localStorage.item2 = null;
    localStorage.item3 = "";
    localStorage.null = "";

    // Increment the id
    id += 1;

    // Remove the data from the input
    data.value = '';
}

/*************************************
* display
*************************************/
function display() {
    // Grab the div tag!
    var div = document.getElementById('displayData');

    // Loop through the local storage
    for (var i = 1; i <= id; i++) {
        // Create a new p tag
        var p = document.createElement('p');

        // Now add text to it!
        //
        // Good path
        //
        p.innerHTML = localStorage.getItem(i);

        try {
            console.log(localStorage.getItem());
        } catch (error) {
            console.log(error);
        }

        // Now append it
        div.appendChild(p);
    }

    var p = document.createElement('p');
    p.innerHTML = JSON.parse(localStorage.getItem(3));
    div.appendChild(p);

    //
    // Nasty path
    //
    console.log(localStorage.getItem(null)); // If there is no key with this then it returns null
    console.log(localStorage.getItem(""));   // Same as up above
    console.log(localStorage.item);
    console.log(localStorage.item2);
    console.log(localStorage.item3);
    console.log(localStorage.null);
}