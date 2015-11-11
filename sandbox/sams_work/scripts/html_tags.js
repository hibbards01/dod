/****************************************************
* Program:
*   html_tags.js
* Author:
*   Samuel Hibbard
* Summary:
*   This will control html_tags.html
****************************************************/

window.onload = function() {
    //
    // Good Path
    //

    // Change the canvas
    var canvas = document.getElementById('canvas');
    var draw = canvas.getContext('2d');

    // Create a Radial Gradient
    var grid = draw.createRadialGradient(75,50,5,90,60,100);
    grid.addColorStop(0, 'blue');
    grid.addColorStop(1, 'red');

    // Now add the gradient.
    draw.fillStyle = grid;
    draw.shadowBlur = 50;
    draw.shadowColor = "white";
    draw.fillRect(10, 10, 200, 200);

    // Draw a stroke
    draw.beginPath();
    draw.arc(30,200,80,30,2*Math.PI);
    draw.stroke();

    // Draw text
    draw.font = "40px Arial";
    draw.strokeText("DRAWING", 200, 200);

    //
    // Nasty Path
    //

    // Change the canvas
    var canvas_2 = document.getElementById('second_canvas');
    var draw_2 = canvas_2.getContext('2d');

    // Create a Radial Gradient
    var grid_2 = draw_2.createRadialGradient(75,50,5,90,60,100);
    grid_2.addColorStop(0, 'blue');
    grid_2.addColorStop(1, 'red');

    // Now add the gradient.
    draw_2.fillRect(10, 10, 200, 200);
    draw_2.fillStyle = grid_2;
    draw_2.shadowBlur = 50;
    draw_2.shadowColor = "white";

    // Draw arc
    draw_2.beginPath();
    draw_2.stroke();
    draw_2.arc(30,200,80,30,2*Math.PI);

    draw_2.beginPath();
    draw_2.arc(0,null,80,30,2*Math.PI);
    draw_2.stroke();

    // Draw text
    draw_2.font = "40px";
    draw_2.strokeText("Draw", 200, 250);

    draw.beginPath();
    draw.arc(30,200,80,30,2*Math.PI);
    draw.stroke();
}