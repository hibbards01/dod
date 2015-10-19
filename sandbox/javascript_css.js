/*************************************
* javascript_css.js
*   Using javascript to manipulate css.
*************************************/

window.onload = function() {
    // Grab the onclick event
    document.getElementById("goodBox").onclick = function() {
        var box = this;

        // Happy path
        console.log("goodBox happy path");
        box.style.width = "300px";
    }

    document.getElementById("badBox").onclick = function() {
        var box = this;

        // Nasty path
        console.log("badBox nasty path");
        box.style.width = null;
        box.style.width = "100";
        box.style.width = "bob";
        box.style.width = "-100px";
    }

    document.getElementById('goodCircle').onclick = function() {
        var circle = this;

        // Good path
        console.log("goodCircle good path");
        circle.style.backgroundColor = "red";
    }

    document.getElementById('badCircle').onclick = function() {
        var circle = this;

        // Nasty path
        console.log("badCircle nasty path");
        circle.style.backgroundColor = "#00";
        circle.style.backgroundColor = null;
        circle.style.backgroundColor = "#00000000000";
        circle.style.backgroundColor = "-FFF";
        circle.style.backgroundColor = "bob";
    }
};