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

    document.getElementById('js3').onchange = function(event) {
        document.getElementById('js4').className = 'hide';
    }
};