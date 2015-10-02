/*************************************
* javascript_css.js
*   Using javascript to manipulate css.
*************************************/

window.onload = function() {
    document.getElementById('move').onclick = function(event) {
        this.className = 'move move-animation';
    };
};