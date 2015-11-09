/*************************************
* javascript_css.js
*   Using javascript to manipulate css.
*************************************/

window.onload = function() {
    //
    // Manipulate CSS with javascript
    //

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

    //
    // Trigger animations and transitions using javascript
    //
    document.getElementById('goodBoxTransition').onclick = function() {
        var box = this;

        // Good path
        console.log("goodBoxTransition good path");
        box.style.transition = "all 2s linear";
        box.style.height = "300px";
        box.style.width = "400px";
    }

    document.getElementById('badBoxTransition').onclick = function() {
        var box = this;

        // Nasty path
        console.log("badBoxTransition nasty path");
        box.style.transition = "width height 2s ease";
        box.style.height = "300px";
        box.style.width = "400px";
    }

    document.getElementById('goodCircleAnimation').onclick = function() {
        var circle = this;

        // Good path
        console.log("goodCircleAnimation good path");
        circle.style.animation = "move 1s linear 2";
        setTimeout(function() {circle.style.animation = "";}, 2000);
    }

    document.getElementById('badCircleAnimation').onclick = function() {
        var circle = this.style;

        // Nasty path
        console.log("badCircleAnimation");
        // circle.animation = "bob 2s linear 2";
        circle.animation = "move 1 linear 2";
        setTimeout(function() {circle.animation = "";}, 2000);
    }
};