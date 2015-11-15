/****************************************************
* Program:
*   assign02.js
* Author:
*   Samuel Hibbard
* Summary:
*   This will test out a lot of functionality of the
*       javascript language.
****************************************************/

/*************************************
* family
*************************************/
function family(dad, mom, children) {
    this.dad = dad;
    this.mom = mom;

    // Loop through the children
    this.children = new Array();
    var i = 0;
    for (; i < children.length; i++) {
        this.children[i] = children[i];
    }

    this.size = i;

    this.addChild = function(child) {
        this.children[this.size++] = child;
    };

    this.showFamily = function() {
        var names = this.dad + " " + this.mom + " ";
        for (var i = 0; i < this.size; i++) {
            names += this.children[i] + " ";
        }

        console.log(names);
    };

    return this; // If you don't return this, then no object is returned
}

window.onload = function() {
    // Create family!
    var hibbard = family("Sam", "Katie", ["Savannah", "James"]);

    //
    // Good paths
    //
    // Show the family
    hibbard.showFamily();
    hibbard.addChild("Nick");
    hibbard.showFamily();

    //
    // Nasty paths
    //
    console.log(family.dad);

    try {
        console.log(family.showFamily());
    } catch (error) {
        console.log(error);
    }

    //
    // Good paths
    //
    var car = {type: "mazda", year: "2005", color: "gray"};
    console.log(car.type);
    console.log(car.year);

    //
    // Nasty paths
    //
    try {
        // var anotherCar = {null: null, type: null, year:}; // Can't do this it will cause a compile error.
    } catch (error) {
        console.log(error);
    }

    var another = {type: null, null: null};
    console.log(car.asdf);
    console.log(another.type);
    console.log(another.null);

    //
    // Good paths
    //
    // var fun = function // Can't have function as a name
    var fun = function_name;
    fun();

    fun("Code", [], null);

    var fun2 = function_name();
}

/*************************************
* function
*************************************/
function function_name() {
    if (arguments.length == 0) {
        console.log("NOTHING!");
    }

    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    };
}