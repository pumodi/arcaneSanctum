//Self Variables
var buttonsClicked = 0;
var cursors = 0;
var mindControlSpells = 0;
var notoriety = 0;
var pagesPerSecond = 0;

// Boss Variables
var boss_01_active = false;
var boss_01_pages = 0;

//Save game logic
var save = {
  buttonsClicked: buttonsClicked,
  cursors: cursors,
}

localStorage.setItem("save",JSON.stringify(save));

var savegame = JSON.parse(localStorage.getItem("save"));
if (typeof savegame.buttonsClicked !== "undefined") buttonsClicked = savegame.buttonsClicked;
if (typeof savegame.cursors !== "undefined") cursors = savegame.cursors;

//Prettify stuff
function cleanRogueDecimals(input){
  var output = Math.round(input * 1000000)/1000000;
    return output;
};

//Clickables
function autoClick(number){
  buttonsClicked = buttonsClicked + number;
  document.getElementById("clickTotal").innerHTML = cleanRogueDecimals(buttonsClicked);
  gameState();
}

function buttonClick(number){
  buttonsClicked = buttonsClicked + number;
  document.getElementById("clickTotal").innerHTML = cleanRogueDecimals(buttonsClicked);
  document.getElementById("alertBox").innerHTML = "";
  gameState();
};

//Upgrades
function buyCursor(){
  document.getElementById("alertBox").innerHTML = "";
  var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));
  if(buttonsClicked >= cursorCost){
    cursors = cursors + 1;
    buttonsClicked = buttonsClicked - cursorCost;
    document.getElementById("cursors").innerHTML = cleanRogueDecimals(cursors);
    document.getElementById("clickTotal").innerHTML = cleanRogueDecimals(buttonsClicked);
  }
  else {
    document.getElementById("alertBox").innerHTML = "You don't have enough arcane knowledge to cast an Auto-Read spell...";
  };
  var nextCost = Math.floor(10 * Math.pow(1.1,cursors));
  document.getElementById("cursorCost").innerHTML = cleanRogueDecimals(nextCost);
  gameState();
};

function buyMindControl(){
  document.getElementById("alertBox").innerHTML = "";
  var mindControlCost = Math.floor(100 * Math.pow(1.1,mindControlSpells));
  if(buttonsClicked >= mindControlCost){
    mindControlSpells = mindControlSpells + 1;
    buttonsClicked = buttonsClicked - mindControlCost;
    document.getElementById("mindControlSpells").innerHTML = cleanRogueDecimals(mindControlSpells);
    document.getElementById("clickTotal").innerHTML = cleanRogueDecimals(buttonsClicked);
  }
  else {
    document.getElementById("alertBox").innerHTML = "You don't have enough arcane knowledge to cast a Mind Control spell...";
  };
  var nextCost = Math.floor(100 * Math.pow(1.1,mindControlSpells));
  document.getElementById("mindControlCost").innerHTML = cleanRogueDecimals(nextCost);
  gameState();
};

//Enemy Damage Logic
function boss_01_read() {
    boss_01_pages = boss_01_pages + 850;
    document.getElementById("boss_01_pagesRead").innerHTML = boss_01_pages;
}

// Game progression switch
function gameState() {
  if (buttonsClicked > 0) {
    document.getElementById("dialogueBox").innerHTML = "The book appears to be a spellbook of some kind. You feel compelled to read further...";
    document.getElementById("autoReadSpellDiv").style.visibility = "visible";
  };
  if (cursors > 0) {
    document.getElementById("dialogueBox").innerHTML = "A power overwhelming poured out of you as you read the arcane lettering. The pages are turning themselves now yet somehow you still seem to know what they contain...";
  };
  if (cursors > 5) {
    document.getElementById("dialogueBox").innerHTML = "After pouring through the volume, you find that it is possible to control someone elses mind. Perhaps you could use this to help you gain even more knowledge. If only you knew how to cast such a spell. Must keep reading...";
    document.getElementById("mindControlSpellDiv").style.visibility = "visible";
  };
  if (mindControlSpells > 10) {
    document.getElementById("dialogueBox").innerHTML = "A wizard from a nearby town has felt your magical energy and is poised to stop you!";
    document.getElementById("alertBox").innerHTML = "Read " + (buttonsClicked * 100) + " before the wizard!";
    document.getElementById("boss_1_box").style.visbility = "visible";
    boss_01_active = true;
  };
  pagesPerSecond = (cursors + (mindControlSpells *10));
  notoriety = 0;
  document.getElementById("notoriety").innerHTML = notoriety;
  document.getElementById("pagePerSec").innerHTML = (cursors + (mindControlSpells *10));
};

// Handles time based effects
window.setInterval(function() {
  autoClick(cursors);
  autoClick(mindControlSpells * 10);
  if (boss_01_active == true) {
    boss_01_read();
  };
  gameState();
}, 1000);
