
window.onload = function() {
    // Grab the body!
    var body = document.getElementById('body');
    var header;

    //
    // Good Paths for appendChild
    //
    var italic1 = document.createElement('i');
    italic1.innerHTML = 'italic word 1';
    body.appendChild(italic1);

    body.appendChild(document.createElement('i'));

    //
    // Nasty Paths for appendChild
    //
    try {
        body.appendChild('<i>italic words</i>');
    } catch(error) {
        console.log(error);
    }

    try {
        body.appendChild('i');
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
    italic2 = document.createElement("i");
    italic2.innerHTML = 'italic 2';
    body.appendChild(italic2);

    italic3 = document.createElement("i");
    italic3.innerHTML = 'italic 3';
    body.appendChild(italic3);

    //
    // Nasty paths for createElement
    //
    try {
        italic = document.createElement(null); // Nothing happens....
        body.appendChild(italic);
    } catch(error) {
        console.log(error);
    }

    try {
        italic = document.createElement("");
        body.appendChild(italic);
    } catch(error) {
        console.log(error);
    }

    try {
        italic = document.createElement();
        body.appendChild(italic);
    } catch(error) {
        console.log(error);
    }

    try {
        italic = document.createElement('BLAHALBAHBABLA');
        body.appendChild(italic);
        console.log(italic);
    } catch(error) {
        console.log(error);
    }

    //
    // Good paths for replaceChild
    //
    var italic = document.createElement('i');
    italic.innerHTML = "<i>REPLACED</i>";
    body.replaceChild(italic, italic3);

    // //
    // // Nasty Paths for replaceChild
    // //
    try {
        body.replaceChild(italic2, null);
    } catch(error) {
        console.log(error);
    }

    try {
        body.replaceChild(null, italic2);
    } catch(error) {
        console.log(error);
    }

    try {
        body.replaceChild(italic2, "");
    } catch(error) {
        console.log(error);
    }

    try {
        body.replaceChild(italic2);
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
    body.removeChild(italic1);
    body.removeChild(italic2);

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