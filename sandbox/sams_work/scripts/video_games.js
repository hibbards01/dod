/****************************************************
* Program:
*   video_games.js
* Author:
*   Samuel Hibbard
* Summary:
*   This will show the modal.
****************************************************/

window.onload = function() {
    // Grab all the tags
    var tags = document.getElementsByTagName('td');

    // Loop through the tags
    for (var i = 0; i < tags.length; i++) {
        tags[i].onclick = showDetails;
    };
}

/*************************************
* showDetails
*************************************/
function showDetails(event) {
	// Make sure to remove an existing modal
	var remove = document.getElementById('modal');

	if (remove !== null) {
		remove.parentNode.removeChild(remove);
	}

	var td = event.srcElement.parentNode;

	// Now see which id it is
	var id = td.id;

	// Grab the details of the page
	var headerTxt = '';
	var details = '';
	var price = '$60.00';
	var img = '';

	if (id == 1) {
		headerTxt = 'Super Smash Bros.';
		details = 'This is a fun game that you can play smash with 4 to 8 players';
		img = 'https://upload.wikimedia.org/wikipedia/en/a/a2/Super_Smash_Bros_for_Wii_U_Box_Art.png';
	} else if (id == 2) {
		headerTxt = 'The Wind Waker';
		details = 'This is a fun zelda game where you conquer an evil bad guy.';
		img = 'http://images.nintendolife.com/games/wiiu/legend_of_zelda_the_wind_waker_hd/cover_large.jpg';
	} else if (id == 3) {
		headerTxt = 'Mario Kart 8';
		details = 'Race with others on tracks that will defy gravity.';
		img = 'http://images.nintendolife.com/games/wiiu/mario_kart_8/cover_large';
	} else if (id == 4) {
		headerTxt = 'Super Mario Maker';
		details = 'You get to have the fun in creating your own levels.';
		img = 'https://upload.wikimedia.org/wikipedia/en/d/da/Super_Mario_Maker_Artwork.jpg';
	} else if (id == 5) {
		headerTxt = 'Lego Dimensions';
		details = 'Become any lego person imaginable and travel to all kinds of worlds.';
		img = 'http://assets1.ignimgs.com/2015/04/09/lego-dimensions-buttonjpg-782313.jpg';
		price = '$100.00';
	} else {
		headerTxt = 'Yoshi\'s Woolly World';
		details = 'Have fun being Yoshi in this creative world of yarn.';
		img = 'http://cdn02.nintendo-europe.com/media/images/05_packshots/games_13/wiiu_6/PS_WiiU_YoshisWoollyWorld_UKV.jpg';
	}

	// Now build a model based off of that
	var modal = document.createElement('div');
	modal.className = 'my-modal';
	modal.id = 'modal';

	// Create the tags for the body of the text
	var header = document.createElement('h2');
	header.innerHTML = headerTxt;

	var p = document.createElement('p');
	p.innerHTML = details;

	var h3 = document.createElement('h3');
	h3.innerHTML = price;

	var image = document.createElement('img');
	image.src = img;

	// Now append them all!
	modal.appendChild(header);
	modal.appendChild(document.createElement('hr'));
	modal.appendChild(document.createElement('br'));
	modal.appendChild(document.createElement('br'));
	modal.appendChild(image);
	modal.appendChild(document.createElement('br'));
	modal.appendChild(p);
	modal.appendChild(document.createElement('br'));
	modal.appendChild(h3);

	// Now finally append it to the body!
	document.getElementById('body').appendChild(modal);

	// Now ease it in!
	setTimeout(function() {
        modal.style.opacity = 1;
        modal.style.pointerEvents = 'auto';
    }, 100);
}