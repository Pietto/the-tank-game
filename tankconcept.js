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

var hp=3;
var pen=Math.random();

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

	setTimeout(function() {continue1.onclick= location.reload ();}, 10100);

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
	document.getElementById("map-description").innerHTML="in this already 10 year long war, Germany has already been pushed back. Today we will start infiltrating Germeny via Denmark, at the green arrow.";

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
function e50mlowerplateshot(){
	document.getElementById('button2').style.visibility='hidden';
	document.getElementById('title').innerHTML='No! that\s a very thick part armor of this tank!';
	setTimeout(function() {document.getElementById('title').innerHTML='Now he has a chance to shoot back!';}, 3000);
	setTimeout(function() {document.body.style.backgroundImage = "url('background-imgs/levels/level-3/e50m-fired.png')";}, 6000);
	setTimeout(function() {document.getElementById('title').innerHTML='He fired, but didn\'t blow us up!';}, 9000);
	setTimeout(function() {document.getElementById('title').innerHTML='Let\'s hit him again!';}, 12000);
	setTimeout(function() {document.body.style.backgroundImage = "url('background-imgs/levels/level-3/e50m-second-chance.png')";}, 9000);

	lowerplateE50m.parentNode.removeChild(lowerplateE50m);
	sideplatee50m.parentNode.removeChild(sideplatee50m);
	upperplatee50m.parentNode.removeChild(upperplatee50m);

	var hp = hp-1;

	//loading the armor model
	setTimeout(function() {
		var turretplateE50m = document.createElement("IMG");
		turretplateE50m.setAttribute("src", "script/tanks/axis-vehicles/E50(M)/second-chance/front-turret-plate-e50m.png");
		turretplateE50m.setAttribute("alt", "turret plate");
		turretplateE50m.setAttribute("id", "turretplateE50m");
		document.body.appendChild(turretplateE50m);

		var sideplateE50m = document.createElement("IMG");
		sideplateE50m.setAttribute("src", "script/tanks/axis-vehicles/E50(M)/second-chance/side-plate-e50m.png");
		sideplateE50m.setAttribute("alt", "side plate");
		sideplateE50m.setAttribute("id", "sideplateE50m");
		document.body.appendChild(sideplateE50m);

		var upperplateE50m = document.createElement("IMG");
		upperplateE50m.setAttribute("src", "script/tanks/axis-vehicles/E50(M)/second-chance/upper-plate-e50m.png");
		upperplateE50m.setAttribute("alt", "upper plate");
		upperplateE50m.setAttribute("id", "upperplateE50m");
	document.body.appendChild(upperplateE50m);
	}, 9000);

	//making the armor model function
	E50mturretplate = document.getElementById("turretplateE50m");
	E50mturretplate.onclick=E50mturretplateshot;

	E50msideplate = document.getElementById("sideplateE50m");
	E50msideplate.onclick=E50msideplateshot;

	E50mupperplate = document.getElementById("upperplateE50m");
	E50mupperplate.onclick=E50mupperplateshot;

}
function e50mupperplateshot(){
	document.getElementById('button2').style.visibility='hidden';
	document.getElementById('title').innerHTML='No! that\s a very thick part armor of this tank!';
	setTimeout(function() {document.getElementById('title').innerHTML='Now he has a chance to shoot back!';}, 3000);
	setTimeout(function() {document.body.style.backgroundImage = "url('background-imgs/levels/level-3/e50m-fired.png')";}, 6000);
	setTimeout(function() {document.getElementById('title').innerHTML='He fired, but didn\'t blow us up!';}, 9000);
	setTimeout(function() {document.getElementById('title').innerHTML='Let\'s hit him again!';}, 12000);
	setTimeout(function() {document.body.style.backgroundImage = "url('background-imgs/levels/level-3/e50m-second-chance.png')";}, 9000);

	lowerplateE50m.parentNode.removeChild(lowerplateE50m);
	sideplatee50m.parentNode.removeChild(sideplatee50m);
	upperplatee50m.parentNode.removeChild(upperplatee50m);

	var hp = hp-1;

	//loading the armor model
	setTimeout(function() {
		var turretplateE50m = document.createElement("IMG");
		turretplateE50m.setAttribute("src", "script/tanks/axis-vehicles/E50(M)/second-chance/front-turret-plate-e50m.png");
		turretplateE50m.setAttribute("alt", "turret plate");
		turretplateE50m.setAttribute("id", "turretplateE50m");
		document.body.appendChild(turretplateE50m);

		var sideplateE50m = document.createElement("IMG");
		sideplateE50m.setAttribute("src", "script/tanks/axis-vehicles/E50(M)/second-chance/side-plate-e50m.png");
		sideplateE50m.setAttribute("alt", "side plate");
		sideplateE50m.setAttribute("id", "sideplateE50m");
		document.body.appendChild(sideplateE50m);

		var upperplateE50m = document.createElement("IMG");
		upperplateE50m.setAttribute("src", "script/tanks/axis-vehicles/E50(M)/second-chance/upper-plate-e50m.png");
		upperplateE50m.setAttribute("alt", "upper plate");
		upperplateE50m.setAttribute("id", "upperplateE50m");
	document.body.appendChild(upperplateE50m);
	}, 9000);

	//making the armor model function
	E50mturretplate1 = document.getElementById("turretplateE50m");
	E50mturretplate1.onclick=E50mturretplateshot;

	E50msideplate1 = document.getElementById("sideplateE50m");
	E50msideplate1.onclick=E50msideplateshot;

	E50mupperplate1 = document.getElementById("upperplateE50m");
	E50mupperplate1.onclick=E50mupperplateshot;
}
function e50msideplateshot(){
	alert('That one would pen');
}



function E50mturretplateshot(){
	if (Math.random() > 0.5){
		alert('bigger');
	}else{
		alert('smaller');
	}
}
function E50msideplateshot(){
	alert("side");
}
function E50mupperplateshot(){
	alert("upper");
}