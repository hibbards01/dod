function hello(){
    document.getElementById('result').innerHTML = "Hello World!!!"
}

function personName() {
    like = document.forms[0].person.value;
    alert("You like " + like);
}

function keyup(){
    var x = document.getElementById("char");
    x.value = x.value.toUpperCase();
}

window.onload = function() {
    alert("Hello!!!");

    var rectangle = document.getElementById("rectangle");
    rectangle.addEventListener("touchstart", touchStartHandler, false);
    rectangle.addEventListener("touchend", touchEndHandler, false);
    ///////////////nasty path//////////////////////
    document.getElementById('nasty_path_1').onclick = doSomething();

    var nasty3 = document.getElementById('nasty_path_3');
    nasty3.addEventListener("onclick", doSomething(), false);

    var nasty4 = document.getElementById('nasty_path_4');
    nasty3.addEventListener("onclick", null, false);
}

var offsetX = 0;
var offsetY = 0;

function touchStartHandler(event) {
    var position = document.getElementById('rectangle').getBoundingClientRect();

    // Grab the offest
    offsetX = event.changedTouches[0].pageX - position.left;
    offsetY = event.changedTouches[0].pageY - (position.top - 50);
}

function touchEndHandler(event) {
        // Grab the div tag.
    var rectangle = document.getElementById('rectangle');
    var top = event.changedTouches[0].pageY - offsetY;
    var left = event.changedTouches[0].pageX - offsetX;
    rectangle.style.top = top + 'px';
    rectangle.style.left = left + 'px';
}