/****************************************************
* Program:
*   assign01.js
* Author:
*   Samuel Hibbard
* Summary:
*   Testing out javascript.
****************************************************/

window.onload = function() {
    // Testing loops

    //
    // GOOD PATH
    //
    console.log("GOOD PATHS FOR LOOPS TEST 1");
    var array = [0,2,3,4,3,3,6,7,7];

    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

    console.log("TEST 2");
    for (index in array) {
        console.log(index + " " + array[index]);
    }

    console.log("TEST 3");
    for (var it in array) {
        console.log(it);
    }

    console.log("TEST 4");
    var index = 0;
    while (index < array.length) {
        console.log(array[index++]);
    }

    console.log("TEST 5");
    index = 0;
    do {
        console.log(array[index++]);
    } while (index < array.length);

    //
    // NASTY PATH
    //
    console.log("NASTY PATHS FOR LOOPS TEST 1");
    var count = 0;

    // Can't put null as the index
    // for (null in array) {
    //     console.log("INTERESTING");
    // }

    // Testing conditionals

    //
    // GOOD PATH
    //
    var num = 0;

    console.log("GOOD PATHS FOR CONDITIONALS TEST 1");
    if (num === 0) {
        console.log("TRUE");
    }

    console.log("TEST 2");
    if (num == 0) {
        console.log("TRUE");
    }

    console.log("TEST 3");
    if (num == "0") {
        console.log("TRUE");
    }

    console.log("TEST 4");
    if (num === "0") {
        console.log("TRUE");
    } else {
        console.log("FALSE");
    }

    console.log("TEST 5");
    if (num == '0') {
        console.log("TRUE");
    }

    //
    // NASTY PATHS
    //
    console.log("NASTY PATHS FOR CONDTIONALS TEST 1");

    if (num = 1) {
        console.log("TRUE num = " + num);
    }

    // Testing arrays

    //
    // GOOD PATH
    //
    console.log("GOOD PATHS FOR ARRAYS TEST 1");

    console.log("TEST 1");
    array = [];
    console.log(array);
    array = [1,2,3,4,5,6];
    console.log(array);

    console.log("TEST 2");
    array = [1,2,3,4,'Test',9,'Num'];
    console.log(array);
    array[0] = null;
    console.log(array);
    array[1] = function() {
        console.log("HERE!");
    }
    console.log(array);

    console.log("TEST 3");
    array = {};
    console.log(array);
    array = {
        id: 1,
        name: "Sam"
    };
    console.log(array);

    console.log("TEST 4");
    array = {
        null: 1,
        2: null
    };
    console.log(array);
    console.log(array[null]);

    console.log("TEST 5");
    delete array[null];
    console.log(array);
    delete array;
    console.log(array);
    console.log(array.length);

    // NASTY PATH
    console.log("NASTY PATHS FOR ARRAYS TEST 1");
    console.log(array[-1]);
    console.log(array[8]);

    console.log("TEST 2");
    // This will keep the length the same
    // But fills the values with undefined
    array[10] = 1;
    array[11] = 'NASTY';
    console.log(array);
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

    console.log("TEST 3");
    array = {
        null: 1,
        2: null
    };
    console.log(array['non']);

    for (var index in array) {
        console.log(index);
        index = 'different';
    }
    console.log(array);
}