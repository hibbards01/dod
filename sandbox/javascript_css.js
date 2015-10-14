/*************************************
* javascript_css.js
*   Using javascript to manipulate css.
*************************************/

window.onload = function() {
    // On click event.
    document.getElementById('js1').onclick = function(event) {
        // Check the class name
        if (this.className.indexOf("box-animate") != -1) {
            this.className = "box";
        } else {
            this.className = this.className + " box-animate";
        };
    };

    // Now for a onmouseover event
    document.getElementById('js2').onmouseover = function(event) {
        this.className = "move1 moving";
    };

    // onmouseout
    document.getElementById('js2').onmouseout = function(event) {
        this.className = 'move1';
    };

    // onkeydown
    document.getElementById('js3').onkeydown = function(event) {
        // Add some text to the input
        document.getElementById('js4').className = 'show';
    };

    // onchange
    document.getElementById('js3').onchange = function(event) {
        document.getElementById('js4').className = 'hide';
    };

    // Onclick change the color
    document.getElementById('js4').onclick = function(event) {
        console.log('here');
        this.style = 'background-color: black; color: white';
    };

    setInterval(changePics, 3000);
};

var index = 1;
var img = null;

function settup (argument) {
    img = document.getElementById('img');
}

function changeColor(input) {
    // Check the colors
    if (input.style.color !== 'white') {
        input.style.backgroundColor = 'black';
        input.style.color = 'white';
    } else {
        input.style.backgroundColor = 'white';
        input.style.color = 'black';
    };
}

function changePics() {
    // Grab the object
    console.log("Incrementing");

    // See if it is divisible by something
    if (index % 2 == 0) {
        img.src = "http://incitrio.com/wp-content/uploads/2015/01/Apple_gray_logo.png";
    } else if (index % 3 == 0) {
        img.src = "http://www.andrewkeir.com/wp-content/uploads/windows-8-logo-excerpt.jpg";
    } else if (index % 5 == 0) {
        img.src = "https://design.ubuntu.com/wp-content/uploads/logo-ubuntu_st_no%C2%AE-black_orange-hex.png";
    };

    index++;
}