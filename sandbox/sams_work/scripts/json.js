/****************************************************
* Program:
*   json.js
* Author:
*   Samuel Hibbard
* Summary:
*   This will perform the json functions.
****************************************************/

// Global variables
var emptyArray = [];
var array = [0,1,2,3,4,5,6];
var assArray = {
    name: "Sam",
    id: "000000",
};
var string = "This is a string.";
var num = 19;
var date = new Date();
var bool = true;

window.onload = function() {
    document.getElementById('begin').onclick = function() {
        // Show current data.
        showCurrentData();

        // Now work with the stringify
        doStringify();

        // Now the parse
        doParse();
    }
}

/*************************************
* showCurrentData
*************************************/
function showCurrentData() {
    var div = document.getElementById('display');
    var pre = document.createElement('pre');

    pre.innerHTML = 'emptyArray = ' + emptyArray + "\n" +
    'array = ' + array + "\n" +
    'assArray = ' + assArray + "\n" +
    'string = ' + string + "\n" +
    'num = ' + num + "\n" +
    'date = ' + date + "\n" +
    'bool = ' + bool;

    div.appendChild(pre);
}

/*************************************
* doStringify
*************************************/
function doStringify() {
    var pre = document.createElement('pre');

    // Good paths
    emptyArray = JSON.stringify(emptyArray);
    array = JSON.stringify(array);
    assArray = JSON.stringify(assArray);
    string = JSON.stringify(string);
    num = JSON.stringify(num);
    date = JSON.stringify(date);
    bool = JSON.stringify(bool);

    pre.innerHTML = "Stringify\nGood Paths\nemptyArray = " + emptyArray + "\n" +
    'array = ' + array + "\n" +
    'assArray = ' + assArray + "\n" +
    'string = ' + string + "\n" +
    'num = ' + num + "\n" +
    'date = ' + date + "\n" +
    'bool = ' + bool +
    "\n\nNasty Paths\n" + JSON.stringify("") + "\n" +
    JSON.stringify() + "\n" +
    JSON.stringify({}) + "\n" +
    JSON.stringify(null);

    document.getElementById('body').appendChild(pre);
}

/*************************************
* doParse
*************************************/
function doParse() {
    var pre = document.createElement('pre');

    // Good paths
    var pEmptyArray = JSON.parse(emptyArray);
    var pArray = JSON.parse(array);
    var pAssArray = JSON.parse(assArray);
    var pString = JSON.parse(string);
    var pNum = JSON.parse(num);
    var pDate = JSON.parse(date);
    var pBool = JSON.parse(bool);

    pre.innerHTML = "Parse\nGood Paths\nemptyArray = " + pEmptyArray + "\n" +
    'array = ' + pArray + "\n" +
    'assArray = ' + pAssArray + "\n" +
    'string = ' + pString + "\n" +
    'num = ' + pNum + "\n" +
    'date = ' + pDate + "\n" +
    'bool = ' + pBool;

    // Nasty paths
    var error1;
    var error2;
    var error3;
    var error4;
    var error5;
    try {
        error1 = JSON.parse("[1,2,3");
    } catch(error) {
        error1 = error;
    }

    try {
        error2 = JSON.parse("");
    } catch(error) {
        error2 = error;
    }

    try {
        error3 = JSON.parse();
    } catch(error) {
        error3 = error;
    }

    try {
        error4 = JSON.parse([]);
    } catch(error) {
        error4 = error;
    }

    try {
        error5 = JSON.parse(null);
    } catch(error) {
        error5 = error;
    }

    pre.innerHTML += "\n\nNasty Paths\n" + "error1 = " + error1 + "\n" +
    "error2 = " + error2 + "\n" +
    "error3 = " + error3 + "\n" +
    "error4 = " + error4 + "\n" +
    "error5 = " + error5 + "\n";

    document.getElementById('body').appendChild(pre);
}