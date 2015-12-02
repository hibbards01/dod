window.onload = function() {
    //
    // Manipulate CSS with javascript
    //

    // Grab the onclick event
    document.getElementById('goodBox').onclick = function() {
        var box = this;

        // Good path
        console.log("goodBox good path");
        box.style.backgroundColor = "blue";
    }

    document.getElementById('badBox').onclick = function() {
        var box = this;

        // Nasty path
        console.log("badBox nasty path");
        box.style.backgroundColor = "#00";
        box.style.backgroundColor = null;
        box.style.backgroundColor = "#00000000000";
        box.style.backgroundColor = "-FFF";
        box.style.backgroundColor = "bob";
    }


    document.getElementById("goodCircle").onclick = function() {
        var circle = this;

        // Happy path
        console.log("goodCircle happy path");
        circle.style.height = "300px";
        circle.style.width  = "220px";
    }

    document.getElementById("badCircle").onclick = function() {
        var circle = this;

        // Nasty path
        console.log("badCircle nasty path");
        circle.style.width = null;
        circle.style.width = "100";
        circle.style.width = "bob";
        circle.style.width = "-100px";
    }
    //
    // Trigger animations and transitions using javascript
    //
    document.getElementById('goodBoxTransition').onclick = function() {
        var box = this;

        // Good path
        console.log("goodBoxTransition good path");
        box.style.transition = "all 2s linear";
        box.style.height = "200px";
        box.style.width = "300px";
    }

    document.getElementById('badBoxTransition').onclick = function() {
        var box = this;

        // Nasty path
        console.log("badBoxTransition nasty path");
        box.style.transition = "width 2s ease-in";
        box.style.height = null;
        box.style.width = "ppppppppppppppppp";
    }

    document.getElementById('goodSquareAnimation').onclick = function() {
        var square = this;

        // Good path
        console.log("goodSquareAnimation good path");
        square.style.animation = "move 1s linear infinite";
    }
}

function nastyPath()
{
    var x = document.getElementById("nasty");

    if ( x.value == 1)
    {
        document.getElementById('badSquareAnimation');
        console.log("badSquareAnimation");
        goodSquareAnimation.style.animation = "moffffffffve 1 linear 2";
    }else
    {
        document.getElementById('badSquareAnimation');
        console.log("badSquareAnimation");
        badSquareAnimation.animation = "move 1 linear 2";
    }
};