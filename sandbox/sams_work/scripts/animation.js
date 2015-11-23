/****************************************************
* Program:
*   animation.js
* Author:
*   Samuel Hibbard
* Summary:
*   Sandbox code for animation
****************************************************/

var movedTri1 = false;
var movedTri2 = false;
var movedTri3 = false;

window.onload = function() {
    document.getElementById('topic1').onclick = function() {
        // Put everything else back
        move_back();

        document.getElementById('topic1').style.animation = "move-back 2s forwards";

        // Move it!
        this.style.animation = "move-forward 2s forwards";

        // Move heading
        document.getElementById('heading1').style.animation = "move-forward 2s forwards";
        movedTri1 = true;
    }
    document.getElementById('topic2').onclick = function() {
        // Put everything else back
        move_back();

        // Move it!
        this.style.animation = "move-forward 2s forwards";

        // Move heading
        document.getElementById('heading2').style.animation = "move-forward 2s forwards";
        movedTri2 = true;
    }
    document.getElementById('topic3').onclick = function() {
        // Put everything else back
        move_back();

        // Move it!
        this.style.animation = "move-forward 2s forwards";

        // Move heading
        document.getElementById('heading3').style.animation = "move-forward 2s forwards";
        movedTri3 = true;
    }
}

function move_back() {
    if (movedTri1) {
        console.log("HERE1");
        document.getElementById('topic1').style.animation = "move-back 2s forwards";
        document.getElementById('heading1').style.animation = "move-back 2s forwards";
    }

    if (movedTri2) {
        console.log("HERE2");
        document.getElementById('topic2').style.animation = "move-back 2s forwards";
        document.getElementById('heading2').style.animation = "move-back 2s forwards";
    }

    if (movedTri3) {
        console.log("HERE3");
        document.getElementById('topic3').style.animation = "move-back 2s forwards";
        document.getElementById('heading3').style.animation = "move-back 2s forwards";
    }
}