/*icon at the tab*/
var tabicon = document.createElement("link");
tabicon.setAttribute("rel", "icon");
tabicon.setAttribute("href", "script/medals/icon.jpg");							//does not function yet!! (wrong <img>)
tabicon.setAttribute("ityped", "image/x-icon");
document.body.appendChild(tabicon);

/*gives buttons text*/
document.getElementById("button1").innerHTML="no text yet";
document.getElementById("button2").innerHTML="Continue";
document.getElementById("button3").innerHTML="no text yet";

/*hides uneccesery buttons*/
document.getElementById('button1').style.visibility = 'hidden';
document.getElementById('button2').style.visibility = 'hidden';
document.getElementById('button3').style.visibility = 'hidden';

/*hides uneccesery text*/
document.getElementById('title').style.visibility = 'hidden';
document.getElementById('description').style.visibility = 'hidden';

/*hides uneccesery images*/
document.getElementById('inventoryItem').style.visibility = 'hidden';

/*adds tutorial general after 1000ms*/
setTimeout(function() {
	var general = document.createElement("IMG");
	general.setAttribute("src", "speech/army-general.png");
	general.setAttribute("alt", "general");
	general.setAttribute("id", "general");
	document.body.appendChild(general);
}, 1000);

/*adds speechbubble+text for tutorial after 1500ms*/
setTimeout(function() {
	var speechbubble1 = document.createElement("IMG");
	speechbubble1.setAttribute("src", "speech/tutorial/speech-bubble-1.png");
	speechbubble1.setAttribute("alt", "speechbubble failed to load");
	speechbubble1.setAttribute("id", "speechbubble1");
	document.body.appendChild(speechbubble1);
}, 1500);

setTimeout(function() {document.getElementById('button2').style.visibility = 'visible';}, 2000);


Continue1 = document.getElementById("button2");
Continue1.onclick = continue1

var x = 1;
var b = 0;
var firsthit = 0;
var tutorialmedal=0;
var inventorynumber = 0;
var allmedals= 0;

//collectable medal system
var inventoryItem = document.getElementById('inventoryItem');
var inventory = { "collectablemedal": false};

function collectablemedal() {
    document.getElementById("inventoryItem").style.display = "none";
    inventorynumber = 1;
}
//tutorial choice
function continue1(){
	x=x+1;
	speechbubble1.setAttribute("src", "speech/tutorial/speech-bubble-"+x+".png");

	if(x == "4"){
		var tutorial = prompt("would you like to play the tutorial system?","'yes' (reccomended) or 'no'");
		if(tutorial == "yes") {
			loadacademy();
		}
		else if(tutorial == "no") {
			gobattle();
		}
		else{
			alert("this answer was not tolerated");
			var tutorial = prompt("would you like to play the tutorial system?","'yes' (reccomended) or 'no'");
			if(tutorial =="yes") {
				loadacademy();
			}
			else if(tutorial == "no") {
				gobattle();
			}
			else{
				failedtutorial();
			}
		}
	}
}
function failedtutorial() {
	document.body.style.backgroundImage = "url('background-imgs/defeat/defeat-screen.png')";
	document.getElementById("general").style.visibility= 'hidden';
	document.getElementById("speechbubble1").style.visibility= 'hidden';
	document.getElementById("button2").style.visibility= 'hidden';
	document.getElementById("title").style.visibility= 'visible';
	document.getElementById("title").innerHTML= 'If you can\'t even answer correctly, how are you supposed to go into battle? You\'re dismissed!';
	document.getElementById("title").style.color= 'rgba(255,0,0,1)';

	setTimeout(function() {continue1.onclick= location.reload ();}, 20100);

	document.getElementById("description").id= 'defeatdescription';
	document.getElementById("defeatdescription").style.visibility= 'visible';

	setTimeout(function() {document.getElementById("defeatdescription").innerHTML= 'The game will automaticly restart in 10 seconds...';}, 0);
	setTimeout(function() {document.getElementById("defeatdescription").innerHTML= 'The game will automaticly restart in 9 seconds...';}, 1000);
	setTimeout(function() {document.getElementById("defeatdescription").innerHTML= 'The game will automaticly restart in 8 seconds...';}, 2000);
	setTimeout(function() {document.getElementById("defeatdescription").innerHTML= 'The game will automaticly restart in 7 seconds...';}, 3000);
	setTimeout(function() {document.getElementById("defeatdescription").innerHTML= 'The game will automaticly restart in 6 seconds...';}, 4000);
	setTimeout(function() {document.getElementById("defeatdescription").innerHTML= 'The game will automaticly restart in 5 seconds...';}, 5000);
	setTimeout(function() {document.getElementById("defeatdescription").innerHTML= 'The game will automaticly restart in 4 seconds...';}, 6000);
	setTimeout(function() {document.getElementById("defeatdescription").innerHTML= 'The game will automaticly restart in 3 seconds...';}, 7000);
	setTimeout(function() {document.getElementById("defeatdescription").innerHTML= 'The game will automaticly restart in 2 seconds...';}, 8000);
	setTimeout(function() {document.getElementById("defeatdescription").innerHTML= 'The game will automaticly restart in 1 seconds...';}, 9000);
	setTimeout(function() {document.getElementById("defeatdescription").innerHTML= 'The game will automaticly restart in 0 seconds...';}, 9999);
}

/* loads the tutorial */
function loadacademy() {
	tutorialmedal=tutorialmedal+1;
	b = b+1;

	document.body.style.backgroundImage = "url('background-imgs/academy/rheinmetall_panzerwagen-1.jpg')";

	speechbubble1.setAttribute("src", "speech/academy/speech-bubble-"+b+"-academy.png");

	Continue1.onclick = showacademytank1;
}

/* loads the first showcase tank of the tutorial */
function showacademytank1() {

	document.getElementById('title').style.visibility = 'visible';
	document.getElementById('description').style.visibility = 'visible';

	document.getElementById('speechbubble1').style.visibility = 'hidden';
	document.body.style.backgroundImage = "url('background-imgs/gradients/gradient-blue-grey.png')";
	document.getElementById('general').style.visibility = 'hidden';

	var Rpz = document.createElement("IMG");
	Rpz.setAttribute("src", "script/academy-tanks/rheinmetall-panzerwagen.png");
	Rpz.setAttribute("alt", "Rpz");
	Rpz.setAttribute("id", "Rpz");
	document.body.appendChild(Rpz);

	document.getElementById("title").innerHTML="light tanks";
	document.getElementById("description").innerHTML="This is the rheinmetall panzerwagen, a common German light tank. The name says it all, it's very fast, and not well armored";

	Continue2 = document.getElementById("button2");
	Continue2.onclick = showacademytank2;
}

/* loads the second showcase tank of the tutorial */
function showacademytank2() {


	Rpz.parentNode.removeChild(Rpz);

	var E50m = document.createElement("IMG");
	E50m.setAttribute("src", "script/academy-tanks/E50M.png");
	E50m.setAttribute("alt", "E50m");
	E50m.setAttribute("id", "E50m");
	document.body.appendChild(E50m);

	document.getElementById("title").innerHTML="Medium tanks";
	document.getElementById("description").innerHTML="This is the E-50 Standardpanzer, a common German Medium tank. This tank is pretty well armored, and has a lot more firepower than all of the other tanks";

	Continue3 = document.getElementById("button2");
	Continue3.onclick = showacademytank3;
}

/* loads the third showcase tank of the tutorial */
function showacademytank3() {
	E50m.parentNode.removeChild(E50m);

	var Maus = document.createElement("IMG");
	Maus.setAttribute("src", "script/academy-tanks/Maus.png");
	Maus.setAttribute("alt", "Maus");
	Maus.setAttribute("id", "Maus");
	document.body.appendChild(Maus);

	document.getElementById("title").innerHTML="Heavy tanks";
	document.getElementById("description").innerHTML="This is the panzer 7 (the Maus), a very rare, but extremely powerful tank. It's armor is incredibly thick, so you will have to choose carefully where you will shoot him, more on this later.";

	Continue4 = document.getElementById("button2");
	Continue4.onclick = showacademytank4;
}

/* loads the fourth showcase tank of the tutorial */
function showacademytank4() {
	Maus.parentNode.removeChild(Maus);

	var Jadgpanzer = document.createElement("IMG");
	Jadgpanzer.setAttribute("src", "script/academy-tanks/Jadgpanzer-E100.png");
	Jadgpanzer.setAttribute("alt", "Jadgpanzer");
	Jadgpanzer.setAttribute("id", "Jadgpanzer");
	document.body.appendChild(Jadgpanzer);

	document.getElementById("title").innerHTML="Tank destroyers";
	document.getElementById("description").innerHTML="This is the Jadgpanzer E100, it has, just like the maus incredibly thick armor, but only on the front. Take advange of the fact that the tank can't turn his turret, and always try to flank him. One more thing: he has the most powerful gun on any tank in the world.";

	Continue5 = document.getElementById("button2");
	Continue5.onclick = showcaseallacademytanks;
}

/* loads the all of the showcase tanks */
function showcaseallacademytanks() {
	Jadgpanzer.parentNode.removeChild(Jadgpanzer);

	document.getElementById("description").style.visibility = 'hidden';
	document.getElementById("title").style.visibility = 'hidden';


	document.body.style.backgroundImage = "url('background-imgs/academy/academy-overview.png')";

	Continue6 = document.getElementById("button2");
	Continue6.onclick = readyforbattle;
}
/* gives you the option to go into battle, or replay the tutorial */
function readyforbattle() {
	document.body.style.backgroundImage = "url('background-imgs/academy/kranvagn-ready.png')";
	document.getElementById('button2').style.visibility = 'hidden';
	speechbubble1.setAttribute("src", "speech/academy/speech-bubble-2-academy.png");

	document.getElementById("description").innerHTML="description";

	document.getElementById("button1").innerHTML="Replay";
	document.getElementById("button2").innerHTML="Battle!";

	setTimeout(function() {document.getElementById('general').style.visibility = 'visible';}, 1000);
	setTimeout(function() {document.getElementById('speechbubble1').style.visibility = 'visible';}, 1500);
	setTimeout(function() {document.getElementById('button1').style.visibility = 'visible';}, 2000);
	setTimeout(function() {document.getElementById('button2').style.visibility = 'visible';}, 2000);

	Continue6 = document.getElementById("button1");
	Continue7 = document.getElementById("button2");
	Continue6.onclick = replayacademy;
	Continue7.onclick = gobattle;
}

/* let's you replay the tutorial */
function replayacademy() {
	showacademytank1();
	document.getElementById('button1').style.visibility = 'hidden';
	document.getElementById("button2").innerHTML="Continue!";
}

/* sends you straight to the front */
function gobattle() {
	document.getElementById('button2').innerHTML= 'Continue';
	document.body.style.backgroundImage = "url('background-imgs/academy/kranvagn.jpg')";
	general.parentNode.removeChild(general);
	document.getElementById('speechbubble1').style.visibility = 'hidden';
	document.getElementById('button1').style.visibility = 'hidden';
	document.getElementById('button2').style.visibility = 'hidden';

	//loading gif
	setTimeout(function() {
		var loadicon = document.createElement("IMG");
		loadicon.setAttribute("src", "script/loading.gif");
		loadicon.setAttribute("alt", "loading icon");
		loadicon.setAttribute("id", "loadicon");
		document.body.appendChild(loadicon);
	}, 3250);

	setTimeout(function() {document.body.style.backgroundImage = "url('script/white.png')";}, 3000);

	//loading countdown
	setTimeout(function() {
		var loadcountdown = document.createElement("IMG");
		loadcountdown.setAttribute("src", "script/loading-bar.gif");
		loadcountdown.setAttribute("alt", "countdown icon");
		loadcountdown.setAttribute("id", "loadcountdown");
		document.body.appendChild(loadcountdown);
	}, 5500);
	setTimeout(function() {document.getElementById('loadcountdown').style.visibility = 'hidden';}, 12000);
	setTimeout(function() {loadlevel1();}, 12000);
}

/* loads level 1*/
function loadlevel1() {
	loadcountdown.parentNode.removeChild(loadcountdown);
	loadicon.parentNode.removeChild(loadicon);
	loadeuropemap();

	//loads the map in
	function loadeuropemap() {
		var europemap = document.createElement("IMG");
		europemap.setAttribute("src", "script/map-europe-1950-1.png");
		europemap.setAttribute("alt", "map of europe");
		europemap.setAttribute("id", "europemap");
		document.body.appendChild(europemap);
	}

	document.body.style.backgroundImage = "url('background-imgs/levels/level-1/unaware-rheinmetall-panzerwagen.png')";
	document.getElementById("title").id = 'map-title'
	document.getElementById("description").id = 'map-description'

	document.getElementById("map-title").style.visibility = 'visible';
	document.getElementById("map-title").innerHTML="Map of europe, 1950.";

	document.getElementById("map-description").style.visibility = 'visible';
	document.getElementById("map-description").innerHTML="in this already 10 year long war, Germany has already been pushed back. Today we will start infiltrating Germany via Denmark, at the green arrow.";

	document.getElementById("button2").style.visibility = 'visible';
	closemap = document.getElementById("button2");
	closemap.onclick = Closemap;

}

function Closemap(){
	europemap.parentNode.removeChild(europemap);
	document.getElementById("map-title").id= 'title';
	document.getElementById("title").style.visibility= 'hidden';

	document.getElementById("map-description").id ='description'
	document.getElementById("description").innerHTML= "do you see that commander? I think that that rheinmetall is not paying attention, let's snipe him!";

	sniperheinmetall = document.getElementById("button2");
	sniperheinmetall.onclick = lookatlight;
}

function lookatlight() {
	document.body.style.backgroundImage = "url('background-imgs/levels/level-1/rheinmetall-panzerwagen-sniped-winter.png')";
	document.getElementById("description").style.visibility= 'hidden';
	document.getElementById("title").innerHTML= 'Thats him commander, let\'s apply the sniperscope.';
	document.getElementById("title").style.visibility= 'visible';

	sniperheinmetall.onclick = snipethelight;
}

function snipethelight() {

	document.getElementById("title").innerHTML= 'Where would you like to shoot him commander?';
	document.getElementById("title").style.color = "rgba(255, 255, 255, 1)";

	document.getElementById("button2").style.visibility ='hidden';

	//loads the sniperscope
	var sniperscope = document.createElement("IMG");
	sniperscope.setAttribute("src", "script/sniper-scope.png");
	sniperscope.setAttribute("alt", "sniper scope");
	sniperscope.setAttribute("id", "sniperscope");
	document.body.appendChild(sniperscope);
	
	//loads the armor model
	var cheeckplaterhz = document.createElement("IMG");
	cheeckplaterhz.setAttribute("src", "script/tanks/axis-vehicles/rheinmetall-panzerwagen/armor-model/cheeck-plate.png");
	cheeckplaterhz.setAttribute("alt", "sniper scope");
	cheeckplaterhz.setAttribute("id", "cheeckplaterhz");
	document.body.appendChild(cheeckplaterhz);

	var sideplaterhz = document.createElement("IMG");
	sideplaterhz.setAttribute("src", "script/tanks/axis-vehicles/rheinmetall-panzerwagen/armor-model/side-plate.png");
	sideplaterhz.setAttribute("alt", "sniper scope");
	sideplaterhz.setAttribute("id", "sideplaterhz");
	document.body.appendChild(sideplaterhz);

	var deckplaterhz = document.createElement("IMG");
	deckplaterhz.setAttribute("src", "script/tanks/axis-vehicles/rheinmetall-panzerwagen/armor-model/deck-plate.png");
	deckplaterhz.setAttribute("alt", "sniper scope");
	deckplaterhz.setAttribute("id", "deckplaterhz");
	document.body.appendChild(deckplaterhz);

	//making the armor model function
	shootrheinmetall = document.getElementById("cheeckplaterhz");
	shootrheinmetall.onclick = shootrhzcheeck;

	shootrheinmetall = document.getElementById("sideplaterhz");
	shootrheinmetall.onclick = shootrhzside;

	shootrheinmetall = document.getElementById("deckplaterhz");
	shootrheinmetall.onclick = shootrhzdeck;
}
function shootrhzcheeck() {

	//adds the bullethol
	var cheeckbulletholethz = document.createElement("IMG");
	cheeckbulletholethz.setAttribute("src", "script/particles/bullet-hole.png");
	cheeckbulletholethz.setAttribute("alt", "bullet hole");
	cheeckbulletholethz.setAttribute("id", "cheeckbulletholethz");
	document.body.appendChild(cheeckbulletholethz);

	setTimeout(function() {
		var cheeckflamesrhz = document.createElement("IMG");
		cheeckflamesrhz.setAttribute("src", "script/particles/escaping-flames.png");
		cheeckflamesrhz.setAttribute("alt", "bullet hole");
		cheeckflamesrhz.setAttribute("id", "cheeckflamesrhz");
		document.body.appendChild(cheeckflamesrhz);
	}, 500);

	setTimeout(function() {cheeckflamesrhz.parentNode.removeChild(cheeckflamesrhz);}, 2000);
	setTimeout(function() {cheeckbulletholethz.parentNode.removeChild(cheeckbulletholethz);}, 2000);

	rhzdestroyed();

	document.getElementById('button2').style.visibility='hidden';
}
function shootrhzside() {

	//adds the bullethol
	var sidebulletholethz = document.createElement("IMG");
	sidebulletholethz.setAttribute("src", "script/particles/bullet-hole.png");
	sidebulletholethz.setAttribute("alt", "bullet hole");
	sidebulletholethz.setAttribute("id", "sidebulletholethz");
	document.body.appendChild(sidebulletholethz);

	setTimeout(function() {
		var sideflamesrhz = document.createElement("IMG");
		sideflamesrhz.setAttribute("src", "script/particles/escaping-flames.png");
		sideflamesrhz.setAttribute("alt", "bullet hole");
		sideflamesrhz.setAttribute("id", "sideflamesrhz");
		document.body.appendChild(sideflamesrhz);
	}, 500);

	setTimeout(function() {sideflamesrhz.parentNode.removeChild(sideflamesrhz);}, 2000);
	setTimeout(function() {sidebulletholethz.parentNode.removeChild(sidebulletholethz);}, 2000);

	rhzdestroyed();

	document.getElementById('button2').style.visibility='hidden';
}
function shootrhzdeck() {

	//adds the bullethol
	var deckbulletholerhz = document.createElement("IMG");
	deckbulletholerhz.setAttribute("src", "script/particles/bullet-hole.png");
	deckbulletholerhz.setAttribute("alt", "bullet hole");
	deckbulletholerhz.setAttribute("id", "deckbulletholerhz");
	document.body.appendChild(deckbulletholerhz);

	setTimeout(function() {
		var deckflamesrhz = document.createElement("IMG");
		deckflamesrhz.setAttribute("src", "script/particles/escaping-flames.png");
		deckflamesrhz.setAttribute("alt", "bullet hole");
		deckflamesrhz.setAttribute("id", "deckflamesrhz");
		document.body.appendChild(deckflamesrhz);
	}, 500);

	setTimeout(function() {deckflamesrhz.parentNode.removeChild(deckflamesrhz);}, 2000);
	setTimeout(function() {deckbulletholerhz.parentNode.removeChild(deckbulletholerhz);}, 2000);

	rhzdestroyed();

	document.getElementById('button2').style.visibility='hidden';
}
function rhzdestroyed() {
	setTimeout(function() {
		document.getElementById('inventoryItem').style.visibility='visible';
		document.getElementById('inventoryItem').src='script/medals/collectable-medal-notext.png';			//itisrighthere

		inventoryItem.onclick = collectablemedal;
		}, 2000);


	cheeckplaterhz.parentNode.removeChild(cheeckplaterhz);
	sideplaterhz.parentNode.removeChild(sideplaterhz);
	deckplaterhz.parentNode.removeChild(deckplaterhz);

	document.getElementById("title").style.visibility= 'hidden';

	setTimeout(function() {document.body.style.backgroundImage = "url('background-imgs/levels/level-1/unaware-rheinmetall-panzerwagen-destroyed.png')";}, 2000);
	sniperscope.parentNode.removeChild(sniperscope);
	setTimeout(function() {document.getElementById("title").style.visibility= 'visible';}, 3000);
	document.getElementById("title").innerHTML= "woah, that's an explosion! nice marksmanship!"

	setTimeout(function() {document.getElementById("button2").style.visibility ='visible';}, 3000);
	e50m = document.getElementById("button2");
	e50m.onclick = e50flank;
}
function e50flank(){
	document.getElementById('inventoryItem').style.visibility='hidden';													//removes the option to grab the special item(inventory item)
	document.body.style.backgroundImage = "url('background-imgs/levels/level-3/e50m-first-chance.png')";
	document.getElementById("title").innerHTML='Wow watch out! We\'re being flanked by a German tank!';
	document.getElementById("description").innerHTML='He must have heared our shot.';
	document.getElementById("description").style.visibility='visible';
	e50m.onclick = e50mshoot1;
}
function e50mshoot1(){
	document.getElementById("title").innerHTML='Where would you wanna shoot him Commander?';
	document.getElementById("button2").style.visibility='hidden';
	document.getElementById("description").style.visibility='hidden';

	//loads the armormodel
	var lowerplateE50m = document.createElement("IMG");
	lowerplateE50m.setAttribute("src", "script/tanks/axis-vehicles/E50(M)/first-chance/lower-plate-e50m.png");
	lowerplateE50m.setAttribute("alt", "lower plate");
	lowerplateE50m.setAttribute("id", "lowerplateE50m");
	document.body.appendChild(lowerplateE50m);

	var sideplatee50m = document.createElement("IMG");
	sideplatee50m.setAttribute("src", "script/tanks/axis-vehicles/E50(M)/first-chance/side-plate-e50m.png");
	sideplatee50m.setAttribute("alt", "side plate");
	sideplatee50m.setAttribute("id", "sideplatee50m");
	document.body.appendChild(sideplatee50m);

	var upperplatee50m = document.createElement("IMG");
	upperplatee50m.setAttribute("src", "script/tanks/axis-vehicles/E50(M)/first-chance/upper-plate-e50m.png");
	upperplatee50m.setAttribute("alt", "upper plate");
	upperplatee50m.setAttribute("id", "upperplatee50m");
	document.body.appendChild(upperplatee50m);

	//making the armor model function
	e50mlowerplate = document.getElementById("lowerplateE50m");
	e50mlowerplate.onclick=e50mlowerplateshot;

	e50msideplate = document.getElementById("sideplatee50m");
	e50msideplate.onclick=e50msideplateshot;

	e50mupperplate = document.getElementById("upperplatee50m");
	e50mupperplate.onclick=e50mupperplateshot;
}
function e50msideplateshot(){
	lowerplateE50m.parentNode.removeChild(lowerplateE50m);
	sideplatee50m.parentNode.removeChild(sideplatee50m);
	upperplatee50m.parentNode.removeChild(upperplatee50m);

	document.body.style.backgroundImage = "url('background-imgs/levels/level-3/e50m-second-chance-destroyed.png')";
	document.getElementById('title').innerHTML='Yes that\'s the spot! We destroyed him!';

	document.getElementById('button2').style.visibility='visible';
	e50mpenned = document.getElementById("button2");
	e50mpenned.onclick=e50mdestroyed;
	firsthit = firsthit+1;
}
function e50mupperplateshot(){
	e50mlowerplateshot();
}
function e50mlowerplateshot(){
	document.getElementById('button2').style.visibility='hidden';
	document.getElementById('title').innerHTML='No! that\s a very thick part armor of this tank!';
	setTimeout(function() {document.getElementById('title').innerHTML='Now he has a chance to shoot back!';}, 3000);
	setTimeout(function() {document.body.style.backgroundImage = "url('background-imgs/levels/level-3/e50m-fired.png')";}, 6000);
	setTimeout(function() {document.getElementById('title').innerHTML='He hit us, but didn\'t blow us up!';}, 9000);
	setTimeout(function() {document.getElementById('title').innerHTML='Let\'s hit him again!';}, 12000);
	setTimeout(function() {document.body.style.backgroundImage = "url('background-imgs/levels/level-3/e50m-second-chance.png')";}, 9000);

	lowerplateE50m.parentNode.removeChild(lowerplateE50m);
	sideplatee50m.parentNode.removeChild(sideplatee50m);
	upperplatee50m.parentNode.removeChild(upperplatee50m);

	//loading armor model
	setTimeout(function() {
		var turretplatee50m2 = document.createElement("IMG");
		turretplatee50m2.setAttribute("src", "script/tanks/axis-vehicles/E50(M)/second-chance/front-turret-plate-e50m.png");
		turretplatee50m2.setAttribute("alt", "upper plate");
		turretplatee50m2.setAttribute("id", "turretplatee50m2");
		document.body.appendChild(turretplatee50m2);

		var sideplatee50m2 = document.createElement("IMG");
		sideplatee50m2.setAttribute("src", "script/tanks/axis-vehicles/E50(M)/second-chance/side-plate-e50m.png");
		sideplatee50m2.setAttribute("alt", "upper plate");
		sideplatee50m2.setAttribute("id", "sideplatee50m2");
		document.body.appendChild(sideplatee50m2);

		var upperplatee50m2 = document.createElement("IMG");
		upperplatee50m2.setAttribute("src", "script/tanks/axis-vehicles/E50(M)/second-chance/upper-plate-e50m.png");
		upperplatee50m2.setAttribute("alt", "upper plate");
		upperplatee50m2.setAttribute("id", "upperplatee50m2");
		document.body.appendChild(upperplatee50m2);

			//making the armor model function
			e50mturretplate = document.getElementById("turretplatee50m2");
			e50mturretplate.onclick=e50mturretplateshot;

			e50msideplate = document.getElementById("sideplatee50m2");
			e50msideplate.onclick=E50msideplateshot;

			e50mupperplate = document.getElementById("upperplatee50m2");
			e50mupperplate.onclick=E50mupperplateshot;
	}, 9000);
}
function e50mturretplateshot(){

	//penetration mechanic by rng
	var x = Math.floor((Math.random() * 2) + 1);
	if(x == 1){
		E50msideplateshot();
	}
	else if(x == 2){
		E50mupperplateshot();
	}
}
function E50msideplateshot(){
	turretplatee50m2.parentNode.removeChild(turretplatee50m2);
	sideplatee50m2.parentNode.removeChild(sideplatee50m2);
	upperplatee50m2.parentNode.removeChild(upperplatee50m2);

	document.body.style.backgroundImage = "url('background-imgs/levels/level-3/e50m-second-chance-destroyed.png')";
	document.getElementById('title').innerHTML='Yes that\'s the spot! We destroyed him!';

	document.getElementById('button2').style.visibility='visible';
	e50mpenned = document.getElementById("button2");
	e50mpenned.onclick=e50mdestroyed;
}
function E50mupperplateshot(){	

	document.body.style.backgroundImage = "url('background-imgs/defeat/defeat-tank-1.png')";
	document.getElementById('title').innerHTML='No! we failed to penetrate him again! He has destroyed us!';
	document.getElementById('button2').style.visibility='visible';

	turretplatee50m2.parentNode.removeChild(turretplatee50m2);
	sideplatee50m2.parentNode.removeChild(sideplatee50m2);
	upperplatee50m2.parentNode.removeChild(upperplatee50m2);

	defeat = document.getElementById("button2");
	defeat.onclick=failedgame;
	defeat.innerHTML='accept';
}
function e50mdestroyed(){
	document.body.style.backgroundImage = "url('background-imgs/levels/level-4/jpze100-not-looking.png')";
	document.getElementById('title').innerHTML='Don\'t cheer too early Sir! We aren\'t done yet';
	e50mpenned.onclick=shootjpz1;
}
function shootjpz1(){
	document.getElementById('title').innerHTML='Where do i have to shoot?';

	//loads armor model
	var lowerplatejpz1 = document.createElement("IMG");
	lowerplatejpz1.setAttribute("src", "script/tanks/axis-vehicles/JPZ-E100/first-chance/lower-plate-jpz.png");
	lowerplatejpz1.setAttribute("alt", "lower plate Jadgpanzer-E100");
	lowerplatejpz1.setAttribute("id", "lowerplatejpz1");
	document.body.appendChild(lowerplatejpz1);

	var turretplatejpz1 = document.createElement("IMG");
	turretplatejpz1.setAttribute("src", "script/tanks/axis-vehicles/JPZ-E100/first-chance/turret-plate-jpz.png");
	turretplatejpz1.setAttribute("alt", "turret plate Jadgpanzer-E100");
	turretplatejpz1.setAttribute("id", "turretplatejpz1");
	document.body.appendChild(turretplatejpz1);

	var upperplatejpz1 = document.createElement("IMG");
	upperplatejpz1.setAttribute("src", "script/tanks/axis-vehicles/JPZ-E100/first-chance/upper-plate-jpz.png");
	upperplatejpz1.setAttribute("alt", "upper plate Jadgpanzer-E100");
	upperplatejpz1.setAttribute("id", "upperplatejpz1");
	document.body.appendChild(upperplatejpz1);

	//making the armor model function
			lowerplatejpz1 = document.getElementById("lowerplatejpz1");
			lowerplatejpz1.onclick=lowerplatejpz;

			turretplatejpz1 = document.getElementById("turretplatejpz1");
			turretplatejpz1.onclick=turretplatejpz;

			upperplatejpz1 = document.getElementById("upperplatejpz1");
			upperplatejpz1.onclick=upperplatejpz;

	document.getElementById('button2').style.visibility='hidden';
}
function lowerplatejpz(){
	penetrationjpz1();
}
function turretplatejpz(){

	//penetration mechanic by rng
	var x = Math.floor((Math.random() * 2) + 1);
	if(x == 1){
		penetrationjpz1();
	}
	else if(x == 2){
		nonpenetrationjpz1();
	}
}
function upperplatejpz(){
	nonpenetrationjpz1();
}
function penetrationjpz1(){
	firsthit = firsthit+1
	lowerplatejpz1.parentNode.removeChild(lowerplatejpz1);
	turretplatejpz1.parentNode.removeChild(turretplatejpz1);
	upperplatejpz1.parentNode.removeChild(upperplatejpz1);

	document.body.style.backgroundImage = "url('background-imgs/levels/level-4/jpze100-destroyed1.png')";
	document.getElementById('title').innerHTML='Yes, gotcha!';
	document.getElementById('button2').style.visibility='visible';

	document.getElementById('button2').style.visibility='visible';
	gogomaus = document.getElementById("button2");
	gogomaus.onclick=gomaus;
}
function nonpenetrationjpz1(){
	lowerplatejpz1.parentNode.removeChild(lowerplatejpz1);
	turretplatejpz1.parentNode.removeChild(turretplatejpz1);
	upperplatejpz1.parentNode.removeChild(upperplatejpz1);

	document.getElementById('title').innerHTML='No sir! that\'s the wrong spot! Now he can fire back!';
	document.body.style.backgroundImage = "url('background-imgs/levels/level-4/jpze100-looking.png')";

	setTimeout(function() {
		document.body.style.backgroundImage = "url('background-imgs/levels/level-4/jpze100-fired.png')";
		document.getElementById('title').innerHTML='Nooooo';
	}, 3000);

	setTimeout(function() {
		document.body.style.backgroundImage = "url('background-imgs/levels/level-4/jpze100-looking.png')";
		document.getElementById('title').innerHTML='Wow he missed! we\'re so lucky!';
	}, 5000);
	setTimeout(function() {
		document.getElementById('title').innerHTML='Let\'s get him this time!';

		//loads armor model
		var lowerplatejpz2 = document.createElement("IMG");
		lowerplatejpz2.setAttribute("src", "script/tanks/axis-vehicles/JPZ-E100/second-chance/lower-plate-jpz.png");
		lowerplatejpz2.setAttribute("alt", "lower plate Jadgpanzer-E100");
		lowerplatejpz2.setAttribute("id", "lowerplatejpz2");
		document.body.appendChild(lowerplatejpz2);

		var turretplatejpz2 = document.createElement("IMG");
		turretplatejpz2.setAttribute("src", "script/tanks/axis-vehicles/JPZ-E100/second-chance/turret-plate-jpz.png");
		turretplatejpz2.setAttribute("alt", "turret plate Jadgpanzer-E100");
		turretplatejpz2.setAttribute("id", "turretplatejpz2");
		document.body.appendChild(turretplatejpz2);

		var upperplatejpz2 = document.createElement("IMG");
		upperplatejpz2.setAttribute("src", "script/tanks/axis-vehicles/JPZ-E100/second-chance/upper-plate-jpz.png");
		upperplatejpz2.setAttribute("alt", "upper plate Jadgpanzer-E100");
		upperplatejpz2.setAttribute("id", "upperplatejpz2");
		document.body.appendChild(upperplatejpz2);

		//making the armor model function
				lowerplatejpz2 = document.getElementById("lowerplatejpz2");
				lowerplatejpz2.onclick=lowerplatejpzagain;

				turretplatejpz2 = document.getElementById("turretplatejpz2");
				turretplatejpz2.onclick=turretplatejpzagain;

				upperplatejpz2 = document.getElementById("upperplatejpz2");
				upperplatejpz2.onclick=upperplatejpzagain;
	}, 7000);
}
function lowerplatejpzagain(){
	penetrationjpz2();
}
function turretplatejpzagain(){
	var x = Math.floor((Math.random() * 2) + 1);
	if(x == 1){
		penetrationjpz2();
	}
	else if(x == 2){
		nonpenetrationjpz2();
	}
}
function upperplatejpzagain(){
	nonpenetrationjpz2();
}
function penetrationjpz2(){
	lowerplatejpz2.parentNode.removeChild(lowerplatejpz2);
	turretplatejpz2.parentNode.removeChild(turretplatejpz2);
	upperplatejpz2.parentNode.removeChild(upperplatejpz2);

	document.body.style.backgroundImage = "url('background-imgs/levels/level-4/jpze100-destroyed2.png')";
	document.getElementById('title').innerHTML='Yes, gotcha!';
		
	document.getElementById('button2').style.visibility='visible';
	gogomaus = document.getElementById("button2");
	gogomaus.onclick=gomaus;
}
function nonpenetrationjpz2(){
	setTimeout(function() {
		document.body.style.backgroundImage = "url('background-imgs/levels/level-4/jpze100-fired.png')";
	}, 1000);
		lowerplatejpz2.parentNode.removeChild(lowerplatejpz2);
		turretplatejpz2.parentNode.removeChild(turretplatejpz2);
		upperplatejpz2.parentNode.removeChild(upperplatejpz2);

	setTimeout(function() {
		document.body.style.backgroundImage = "url('background-imgs/defeat/defeat-tank-1.png')";
		document.getElementById('title').innerHTML='No! we failed to penetrate him again! He has destroyed us!';
		document.getElementById('button2').style.visibility='visible';

		defeat = document.getElementById("button2");
		defeat.onclick=failedgame;
		defeat.innerHTML='accept';
	}, 3000);
}

function gomaus(){
	document.getElementById('title').innerHTML='Oh no! I think it is the final boss!';
	document.getElementById('description').innerHTML='Where do we shoot this one?';
	document.body.style.backgroundImage = "url('background-imgs/levels/level-5/maus-angled.png')";
	document.getElementById('button2').style.visibility='hidden';
	document.getElementById('description').style.visibility='visible';

	//loads armor model
		var sideplatemaus1 = document.createElement("IMG");
		sideplatemaus1.setAttribute("src", "script/tanks/axis-vehicles/Maus/angled/side-plate.png");
		sideplatemaus1.setAttribute("alt", "side plate Maus");
		sideplatemaus1.setAttribute("id", "sideplatemaus1");
		document.body.appendChild(sideplatemaus1);

		var turretplatemaus1 = document.createElement("IMG");
		turretplatemaus1.setAttribute("src", "script/tanks/axis-vehicles/Maus/angled/side-turret-plate.png");
		turretplatemaus1.setAttribute("alt", "turret plate Maus");
		turretplatemaus1.setAttribute("id", "turretplatemaus1");
		document.body.appendChild(turretplatemaus1);

		var upperplatemaus1 = document.createElement("IMG");
		upperplatemaus1.setAttribute("src", "script/tanks/axis-vehicles/Maus/angled/upper-plate.png");
		upperplatemaus1.setAttribute("alt", "upper plate Maus");
		upperplatemaus1.setAttribute("id", "upperplatemaus1");
		document.body.appendChild(upperplatemaus1);

		//making the armor model function
				sideplatemaus1 = document.getElementById("sideplatemaus1");
				sideplatemaus1.onclick=sideplatemaus1shot;

				turretplatemaus1 = document.getElementById("turretplatemaus1");
				turretplatemaus1.onclick=turretplatemaus1shot;

				upperplatemaus1 = document.getElementById("upperplatemaus1");
				upperplatemaus1.onclick=upperplatemaus1shot;
}
function sideplatemaus1shot(){
	nonpenetrationmaus1();
}
function turretplatemaus1shot(){
	nonpenetrationmaus1();
}
function upperplatemaus1shot(){
	nonpenetrationmaus1();
}
function nonpenetrationmaus1(){
	document.body.style.backgroundImage = "url('background-imgs/levels/level-5/maus-aiming-1.png')";
	document.getElementById('description').style.visibility='hidden';
	document.getElementById('title').innerHTML='Quick he is looking sir! Shoot his cheeks!';

	sideplatemaus1.parentNode.removeChild(sideplatemaus1);
	turretplatemaus1.parentNode.removeChild(turretplatemaus1);
	upperplatemaus1.parentNode.removeChild(upperplatemaus1);

	//loads armor model
		var cheeksplatemaus2 = document.createElement("IMG");
		cheeksplatemaus2.setAttribute("src", "script/tanks/axis-vehicles/Maus/first-chance/cheeks-plate.png");
		cheeksplatemaus2.setAttribute("alt", "cheeks Maus");
		cheeksplatemaus2.setAttribute("id", "cheeksplatemaus2");
		document.body.appendChild(cheeksplatemaus2);

		var sideplatemaus2 = document.createElement("IMG");
		sideplatemaus2.setAttribute("src", "script/tanks/axis-vehicles/Maus/first-chance/side-plate.png");
		sideplatemaus2.setAttribute("alt", "side plate Maus");
		sideplatemaus2.setAttribute("id", "sideplatemaus2");
		document.body.appendChild(sideplatemaus2);

		var upperplatemaus2 = document.createElement("IMG");
		upperplatemaus2.setAttribute("src", "script/tanks/axis-vehicles/Maus/first-chance/upper-plate.png");
		upperplatemaus2.setAttribute("alt", "upper plate Maus");
		upperplatemaus2.setAttribute("id", "upperplatemaus2");
		document.body.appendChild(upperplatemaus2);

		//making the armor model function
				cheeksplatemaus2 = document.getElementById("cheeksplatemaus2");
				cheeksplatemaus2.onclick=cheeksplatemaus2shot;

				sideplatemaus2 = document.getElementById("sideplatemaus2");
				sideplatemaus2.onclick=sideplatemaus2shot;

				upperplatemaus2 = document.getElementById("upperplatemaus2");
				upperplatemaus2.onclick=upperplatemaus2shot;
}
function cheeksplatemaus2shot(){
	penetrationmaus2();
}
function sideplatemaus2shot(){
	nonpenetrationmaus2();
}
function upperplatemaus2shot(){
	nonpenetrationmaus2();
}
function penetrationmaus2(){
	firsthit = firsthit+1
	document.body.style.backgroundImage = "url('background-imgs/levels/level-5/maus-destroyed-1.png')";
	document.getElementById('title').innerHTML='Yes, that\'s the spot!';
	document.getElementById('button2').style.visibility='visible';

	button2clicked = document.getElementById("button2");
	button2clicked.onclick=button2clickerd;

	cheeksplatemaus2.parentNode.removeChild(cheeksplatemaus2);
	sideplatemaus2.parentNode.removeChild(sideplatemaus2);
	upperplatemaus2.parentNode.removeChild(upperplatemaus2);
}
function nonpenetrationmaus2(){

	cheeksplatemaus2.parentNode.removeChild(cheeksplatemaus2);
	sideplatemaus2.parentNode.removeChild(sideplatemaus2);
	upperplatemaus2.parentNode.removeChild(upperplatemaus2);

	document.body.style.backgroundImage = "url('background-imgs/levels/level-5/maus-aiming-2.png')";
	document.getElementById('title').innerHTML='I think that this is our last chance to fire sir!';

	//loads armor model
		var cheeksplatemaus3 = document.createElement("IMG");
		cheeksplatemaus3.setAttribute("src", "script/tanks/axis-vehicles/Maus/second-chance/cheeks-plate.png");
		cheeksplatemaus3.setAttribute("alt", "cheeks Maus");
		cheeksplatemaus3.setAttribute("id", "cheeksplatemaus3");
		document.body.appendChild(cheeksplatemaus3);

		var sideplatemaus3 = document.createElement("IMG");
		sideplatemaus3.setAttribute("src", "script/tanks/axis-vehicles/Maus/second-chance/side-plate.png");
		sideplatemaus3.setAttribute("alt", "side plate Maus");
		sideplatemaus3.setAttribute("id", "sideplatemaus3");
		document.body.appendChild(sideplatemaus3);

		var upperplatemaus3 = document.createElement("IMG");
		upperplatemaus3.setAttribute("src", "script/tanks/axis-vehicles/Maus/second-chance/upper-plate.png");
		upperplatemaus3.setAttribute("alt", "upper plate Maus");
		upperplatemaus3.setAttribute("id", "upperplatemaus3");
		document.body.appendChild(upperplatemaus3);

		//making the armor model function
				cheeksplatemaus3 = document.getElementById("cheeksplatemaus3");
				cheeksplatemaus3.onclick=cheeksplatemaus3shot;

				sideplatemaus3 = document.getElementById("sideplatemaus3");
				sideplatemaus3.onclick=sideplatemaus3shot;

				upperplatemaus3 = document.getElementById("upperplatemaus3");
				upperplatemaus3.onclick=upperplatemaus3shot;
}
function cheeksplatemaus3shot(){
	penetrationmaus3();	
}
function sideplatemaus3shot(){
	nonpenetrationmaus3();	
}
function upperplatemaus3shot(){
	nonpenetrationmaus3();	
}
function penetrationmaus3(){
	cheeksplatemaus3.parentNode.removeChild(cheeksplatemaus3);
	sideplatemaus3.parentNode.removeChild(sideplatemaus3);
	upperplatemaus3.parentNode.removeChild(upperplatemaus3);

	document.body.style.backgroundImage = "url('background-imgs/levels/level-5/maus-destroyed-2.png')";
	document.getElementById('title').innerHTML='Yes, that\'s the spot!';
	document.getElementById('button2').style.visibility='visible';

	button2clicked = document.getElementById("button2");
	button2clicked.onclick=button2clickerd;
}
function nonpenetrationmaus3(){
	cheeksplatemaus3.parentNode.removeChild(cheeksplatemaus3);
	sideplatemaus3.parentNode.removeChild(sideplatemaus3);
	upperplatemaus3.parentNode.removeChild(upperplatemaus3);

	document.body.style.backgroundImage = "url('background-imgs/defeat/defeat-tank-1.png')";
	document.getElementById('title').innerHTML='No! we failed to penetrate him again! He has destroyed us!';
	document.getElementById('button2').style.visibility='visible';

	defeat = document.getElementById("button2");
	defeat.onclick=failedgame;
	defeat.innerHTML='accept';
}
function button2clickerd(){
	document.body.style.backgroundImage = "url('background-imgs/won/winscreen.png')";
	document.getElementById('button2').style.visibility='hidden';
	document.getElementById('title').style.visibility='hidden';

	//creating medals
	var survivingsmedal = document.createElement("IMG");
	survivingsmedal.setAttribute("src", "script/medals/survived-medal.png");
	survivingsmedal.setAttribute("alt", "medal for surviving the battle");
	survivingsmedal.setAttribute("id", "survivingsmedal");
	document.body.appendChild(survivingsmedal);
	allmedals = allmedals+1;


	if(firsthit == 3){
		var geniusmedal = document.createElement("IMG");
		geniusmedal.setAttribute("src", "script/medals/genius-medal.png");
		geniusmedal.setAttribute("alt", "medal for killing all AFV's in the first shot");
		geniusmedal.setAttribute("id", "geniusmedal");
		document.body.appendChild(geniusmedal);
		allmedals = allmedals+1;
	}else{
		console.log('You did not kill all AFV\'s in the first shot');
	}

	if(tutorialmedal == 1){
		var tutorialmedalawarded = document.createElement("IMG");
		tutorialmedalawarded.setAttribute("src", "script/medals/tutorial-played-medal.png");
		tutorialmedalawarded.setAttribute("alt", "medal for killing all AFV's in the first shot");
		tutorialmedalawarded.setAttribute("id", "tutorialmedalawarded");
		document.body.appendChild(tutorialmedalawarded);
		allmedals = allmedals+1;
	}else{
		console.log('You did not play the tutorial');
	}

	if(inventorynumber ==  1){
		var collectablemedalawarded = document.createElement("IMG");
		collectablemedalawarded.setAttribute("src", "script/medals/collectable-medal.png");
		collectablemedalawarded.setAttribute("alt", "medal that you could have collected");
		collectablemedalawarded.setAttribute("id", "collectablemedalawarded");
		document.body.appendChild(collectablemedalawarded);
		allmedals = allmedals+1;
	}
	else if(inventorynumber == 0){
		console.log('You did collect the special medal');
	}
	if(allmedals == 4){
		var allmedalsmedal = document.createElement("IMG");
		allmedalsmedal.setAttribute("src", "script/medals/all-medals-medal.png");
		allmedalsmedal.setAttribute("alt", "medal for collecting all medals");
		allmedalsmedal.setAttribute("id", "allmedalsmedal");
		document.body.appendChild(allmedalsmedal);
	}else{
		console.log('you did not collect all medals');
	}
}
function failedgame() {
	document.body.style.backgroundImage = "url('background-imgs/defeat/defeat-screen.png')";
	document.getElementById("button2").style.visibility= 'hidden';
	document.getElementById("title").style.visibility= 'visible';
	document.getElementById("title").innerHTML= 'You and your crew died in combat';
	document.getElementById("title").style.color= 'rgba(255,0,0,1)';

	setTimeout(function() {continue1.onclick= location.reload ();}, 10100);

	document.getElementById("description").id= 'defeatdescription';
	document.getElementById("defeatdescription").style.visibility= 'visible';	

	setTimeout(function() {document.getElementById("defeatdescription").innerHTML= 'The game will automaticly restart in 10 seconds';}, 0);
	setTimeout(function() {document.getElementById("defeatdescription").innerHTML= 'The game will automaticly restart in 9 seconds.';}, 1000);
	setTimeout(function() {document.getElementById("defeatdescription").innerHTML= 'The game will automaticly restart in 8 seconds..';}, 2000);
	setTimeout(function() {document.getElementById("defeatdescription").innerHTML= 'The game will automaticly restart in 7 seconds...';}, 3000);
	setTimeout(function() {document.getElementById("defeatdescription").innerHTML= 'The game will automaticly restart in 6 seconds..';}, 4000);
	setTimeout(function() {document.getElementById("defeatdescription").innerHTML= 'The game will automaticly restart in 5 seconds.';}, 5000);
	setTimeout(function() {document.getElementById("defeatdescription").innerHTML= 'The game will automaticly restart in 4 seconds';}, 6000);
	setTimeout(function() {document.getElementById("defeatdescription").innerHTML= 'The game will automaticly restart in 3 seconds.';}, 7000);
	setTimeout(function() {document.getElementById("defeatdescription").innerHTML= 'The game will automaticly restart in 2 seconds..';}, 8000);
	setTimeout(function() {document.getElementById("defeatdescription").innerHTML= 'The game will automaticly restart in 1 seconds...';}, 9000);
	setTimeout(function() {document.getElementById("defeatdescription").innerHTML= 'The game will automaticly restart in 0 seconds..';}, 9999);
}