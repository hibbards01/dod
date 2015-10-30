/****************************************************
* Program:
*   script.js
* Author:
*   Samuel Hibbard
* Summary:
*   This will control what happens on the screen.
****************************************************/

window.onload = function() {
    // Grab the onclick for the new button
    document.getElementById('new').onclick = function() {
        createModal();

        // Grab the click events of the modal
        document.getElementById('close').onclick = function() {
            closeModal();
        }

        // Grab onchange events for for question
        document.getElementById('object').onchange = function() {
            // Grab the value
            if (this.value !== '') {
                // Add the form
                if (document.contains(document.getElementById('form'))) {
                        document.getElementById('modal-body').removeChild(document.getElementById('form'));
                }

                addForm(this.value);

                // Grab the buttons that were created!
                document.getElementById('cancel').onclick = function() {
                    closeModal();
                }

                document.getElementById('create').onclick = function() {
                    closeModal();
                }
            }
        }

        // document.getElementById('cancel').onclick = function() {
        //     closeModal();
        // }

        // Also for the second question
        document.getElementById('existing').onchange = function() {
            // Grab the value and check it
            if (this.value !== 'No') {
                // Add some values
                var name = document.getElementById('name');
                var diameter = document.getElementById('diameter');
                var mass = document.getElementById('mass');
                console.log("here");
                if (this.value === 'Earth') {
                    name.value = 'Earth';
                    diameter.value = '1.26x10^10';
                    mass.value = '5.98x10^26';
                } else {
                    name.value = 'Moon';
                    diameter.value = '1.20x10^5';
                    mass.value = '2.2x10^7';
                }
            }
        }
    }

    // See if user has clicked on list
    document.getElementById('list').onclick = function(event) {
        // Grab the list
        var list = event.target;

        // Only planets can open
        if (list.childNodes[0].className === 'arrow') {
            // Now show the items below it!
            // Or hid it
            if (list.nextElementSibling.style.display === 'block') {
                list.nextElementSibling.style.display = "none";
                list.childNodes[0].style.transform = "rotate(0deg)";
            } else {
                list.nextElementSibling.style.display = "block";
                list.childNodes[0].style.transform = "rotate(90deg)";
            }

            // Now display the planet in the edit box!
            edit(list, true);
        } else {
            edit(list, false);
        }
    }

    document.getElementById('run').onclick = function() {
        var run = this;

        // Change the color and span tag.
        if (run.className === "button btn-green btn-large") {
            run.className = "button btn-red btn-large";
            run.innerHTML = 'Pause <span class="glyphicon glyphicon-pause"></span>';
        } else {
            run.className = "button btn-green btn-large"
            run.innerHTML = 'Run <span class="glyphicon glyphicon-play"></span>';
        }
    }
}

/*************************************
* edit
*************************************/
function edit(tag, planet) {
    // Now grab the name and insert it into the edit tag
    document.getElementById('edit').innerHTML = tag.innerText;

    // Now show the form
    var tags = ''
    if (planet) {
        // Grab the values
        var diameter;
        var mass;
        if (tag.innerText === 'Earth') {
            diameter = "1.26x10^10";
            mass = "5.98x10^26";

            // Now show the brackets for earth
            document.getElementById('earthBrackets').style.visibility = "visible";
            document.getElementById('moonBrackets').style.visibility = "hidden";
        } else {
            diameter = "1.20x10^5";
            mass = "2.2x10^7";

            // Show the brackets for the moon
            document.getElementById('moonBrackets').style.visibility = "visible";
            document.getElementById('earthBrackets').style.visibility = "hidden";
        }

        tags += '<label>Diameter (m)</label>' +
        '<br />' +
        '<input class="margin-bottom" type="text" id="diameter" value="' + diameter + '" />' +
        '<br />' +
        '<label>Mass (kg)</label>' +
        '<br />' +
        '<input class="margin-bottom" type="text" id="mass" value="' + mass + '" />' +
        '<br />';

        // Hide the vectors
        document.getElementById('vector1').style.visibility = "hidden";
        document.getElementById('vector2').style.visibility = "hidden";
    } else {
        // Grab the values
        var magnitude;
        var angle;
        var planet;
        if (tag.innerText === "Vector 1") {
            magnitude = '1';
            angle = '0';
            planet = '<option>Earth</option>' +
            '<option>Moon</option>';

            // Show this vector
            document.getElementById('vector1').style.visibility = "visible";
            document.getElementById('vector2').style.visibility = "hidden";
        } else {
            magnitude = '10';
            angle = '90';
            planet = '<option>Moon</option>' +
            '<option>Earth</option>';

            // Show this vector
            document.getElementById('vector1').style.visibility = "hidden";
            document.getElementById('vector2').style.visibility = "visible";
        }

        tags += '<label>Magnitude (m/s)</label>' +
        '<br />' +
        '<input class="margin-bottom" type="text" id="magnitude" value="' + magnitude + '" />' +
        '<br />' +
        '<label>Angle (&#176;)</label>' +
        '<br />' +
        '<input class="margin-bottom" type="text" id="angle" value="' + angle + '" />' +
        '<br />' +
        '<label>Object</label>' +
        '<br />' +
        '<select id="planet">' + planet +
        '</select>' +
        '<br />';

        // Hide the brackets
        document.getElementById('moonBrackets').style.visibility = "hidden";
        document.getElementById('earthBrackets').style.visibility = "hidden";
    }

    tags += '<button class="button btn-red btn-big">Delete</button>';

    // Now add to the edit form
    document.getElementById('editForm').innerHTML = tags;
}

/*************************************
* closeModal
*************************************/
function closeModal() {
    var modal = document.getElementById('modal').style;
    modal.opacity = 0;
    modal.pointerEvents = 'none';

    // Now remove it
    setTimeout(function() {
        document.getElementById('main').removeChild(document.getElementById('modal'));
    }, 400);
}

/*************************************
* addForm
*************************************/
function addForm(value) {
    // Show the second question!
    if (value === 'Planet') {
        document.getElementById('choose-existing').style.display = 'inline';
    } else {
        document.getElementById('choose-existing').style.display = 'none';
    }

    // Now create the form!
    var form = document.createElement('div');
    form.className = 'my-form';
    form.id = 'form';

    // Now add to it
    var tags = '<hr />' +
    '<label>Name</label>' +
    '<br />' +
    '<input type="text" id="name" />' +
    '<br />';

    if (value === 'Planet') {
        tags += '<label>Diameter (m)</label>' +
        '<br />' +
        '<input type="text" id="diameter" />' +
        '<br />' +
        '<label>Mass (kg)</label>' +
        '<br />' +
        '<input type="text" id="mass" />' +
        '<br />';
    } else {
        tags += '<label>Magnitude (m/s)</label>' +
        '<br />' +
        '<input type="text" id="magnitude" />' +
        '<br />' +
        '<label>Angle (&#176;)</label>' +
        '<br />' +
        '<input type="text" id="angle" />' +
        '<br />' +
        '<label>Object</label>' +
        '<br />' +
        '<select id="planet">' +
            '<option>Earth</option>' +
            '<option>Moon</option>' +
        '</select>' +
        '<br />';
    }

    // Add the buttons
    tags += '<br /><button id="cancel" class="left button btn-red">Cancel</button>' +
    '<button id="create" class="button btn-green right">Create</button>' +
    '<br />' +
    '<br />';

    // Add to the form
    form.innerHTML = tags;

    // Now append to the modal
    document.getElementById('modal-body').appendChild(form);
}

/*************************************
* createModal
*************************************/
function createModal() {
    // Make a model to appear
    var model = document.createElement('div');
    model.className = "my-modal";
    model.id = 'modal';

    model.innerHTML = '<div id="modal-body">' +
        '<h2 class="left">New Object/Vector</h2>' +
        '<h2 id="close" class="right my-close">X</h2>' +
        '<br />' +
        '<br />' +
        '<hr />' +
        '<label>Which Object?</label>' +
        '<select id="object">' +
            '<option></option>' +
            '<option>Planet</option>' +
            '<option>Vector</option>' +
        '</select>' +
        '<br />' +
        '<div id="choose-existing" class="none">' +
            '<label>Chosse existing?</label>' +
            '<select id="existing">' +
                '<option>No</option>' +
                '<option>Earth</option>' +
                '<option>Moon</option>' +
            '</select>' +
        '</div>' +
    '</div>';

    // Now add it after the simulation
    document.getElementById('sim').parentNode.appendChild(model);

    // Now show it
    setTimeout(function() {
        model.style.opacity = 1;
        model.style.pointerEvents = 'auto';
    }, 100);
}