/****************************************************
* Program:
*   dom.js
* Author:
*   Samuel Hibbard
* Summary:
*   This will test out DOM manipulation.
****************************************************/

window.onload = function() {
    // Grab the body!
    var body = document.getElementById('body');
    var header;

    //
    // Good Paths for appendChild
    //
    var header1 = document.createElement('h2');
    header1.innerHTML = 'Created header';
    body.appendChild(header1);

    body.appendChild(document.createElement('h2'));

    //
    // Nasty Paths for appendChild
    //
    try {
        body.appendChild('<h2>Created header 2</h2>');
    } catch(error) {
        console.log(error);
    }

    try {
        body.appendChild('h2');
    } catch(error) {
        console.log(error);
    }

    try {
        body.appendChild(null);
    } catch(error) {
        console.log(error);
    }

    try {
        body.appendChild("");
    } catch(error) {
        console.log(error);
    }

    //
    // Good paths for createElement
    //
    header2 = document.createElement('h2');
    header2.innerHTML = 'Created header 2';
    body.appendChild(header2);

    header3 = document.createElement("h3");
    header3.innerHTML = 'Created header 3';
    body.appendChild(header3);

    //
    // Nasty paths for createElement
    //
    try {
        header = document.createElement(null); // Nothing happens....
        body.appendChild(header);
    } catch(error) {
        console.log(error);
    }

    try {
        header = document.createElement("");
        body.appendChild(header);
    } catch(error) {
        console.log(error);
    }

    try {
        header = document.createElement();
        body.appendChild(header);
    } catch(error) {
        console.log(error);
    }

    try {
        header = document.createElement('BLAHALBAHBABLA');
        body.appendChild(header);
        console.log(header);
    } catch(error) {
        console.log(error);
    }

    //
    // Good paths for replaceChild
    //
    var header = document.createElement('h2');
    header.innerHTML = "REPLACED";
    body.replaceChild(header, header3);

    //
    // Nasty Paths for replaceChild
    //
    try {
        body.replaceChild(header2, null);
    } catch(error) {
        console.log(error);
    }

    try {
        body.replaceChild(null, header2);
    } catch(error) {
        console.log(error);
    }

    try {
        body.replaceChild(header2, "");
    } catch(error) {
        console.log(error);
    }

    try {
        body.replaceChild(header2);
    } catch(error) {
        console.log(error);
    }

    try {
        body.replaceChild();
    } catch(error) {
        console.log(error);
    }

    //
    // Good Paths for removeChild
    //
    body.removeChild(header1);
    body.removeChild(header2);

    //
    // Nasty Paths for removeChild
    //
    try {
        body.removeChild(null);
    } catch(error) {
        console.log(error);
    }

    try {
        body.removeChild("");
    } catch(error) {
        console.log(error);
    }

    try {
        body.removeChild("BALSJASKFDHASD");
    } catch(error) {
        console.log(error);
    }

    try {
        body.removeChild();
    } catch(error) {
        console.log(error);
    }

    try {
        body.removeChild(-1);
    } catch(error) {
        console.log(error);
    }
}