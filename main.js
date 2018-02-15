//Self Variables
var buttonsClicked = 0;
var cursors = 0;
var mindControlSpells = 0;
var minionSpells = 0;
var notoriety = 0;
var pagesPerSecond = 0;

//Story Booleans
var story_message_001 = false;var story_message_002 = true;var story_message_003 = true;var story_message_004 = true;
var story_message_boss_01 = true;

// Boss Variables
var boss_01_active = false;
var boss_01_pages = 0;
var boss_01_target = 0;
var boss_01_targetSet = false;
var boss_page_modifier = 0;
var boss_page_mod_set = false;

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

function minionClick(number){
  buttonsClicked = buttonsClicked + number;
  document.getElementById("clickTotal").innerHTML = cleanRogueDecimals(buttonsClicked);
  document.getElementById("alertBox").innerHTML = "";
  gameState();
}

//Upgrades
  //Read a page
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

  //Cast a mind control spell
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

  //Summon some minions
function buyMinions(){
  document.getElementById("alertBox").innerHTML = "";
  var minionsCost = Math.floor(1000 * Math.pow(1.1,minionSpells));
  if(buttonsClicked >= minionsCost){
    minionSpells = minionSpells + 1;
    buttonsClicked = buttonsClicked - minionsCost;
    document.getElementById("minionSpells").innerHTML = cleanRogueDecimals(minionSpells);
    document.getElementById("clickTotal").innerHTML = cleanRogueDecimals(buttonsClicked);
  }
  else {
    document.getElementById("alertBox").innerHTML = "You don't have enough arcane knowledge to Summon any minions...";
  };
  var nextCost = Math.floor(1000 * Math.pow(1.1,minionSpells));
  document.getElementById("minionsCost").innerHTML = cleanRogueDecimals(nextCost);
  gameState();
};

//Enemy Damage Logic
function boss_01_read() {
  if (boss_page_mod_set == false) {
    boss_page_mod_set = true;
    boss_page_modifier = pagesPerSecond + 10;
  };
  boss_01_pages = boss_01_pages + boss_page_modifier;
  document.getElementById("boss_01_pagesRead").innerHTML = cleanRogueDecimals(boss_01_pages);
  console.log(boss_01_pages);
};

// Game progression switch
function gameState() {
  if (buttonsClicked > 0 && story_message_001 == false) {
    document.getElementById("dialogueBox").innerHTML = "The book appears to be a spellbook of some kind. You feel compelled to read further...";
    document.getElementById("autoReadSpellDiv").style.visibility = "visible";
    story_message_001 = true;
    story_message_002 = false;
  };
  if (cursors > 0 && story_message_002 == false) {
    document.getElementById("dialogueBox").innerHTML = "A power overwhelming pours out of you as you read the arcane lettering. The pages are turning themselves now yet somehow you still seem to know what they contain...";
    story_message_002 = true;
    story_message_003 = false;
  };
  if (buttonsClicked > 5 && story_message_003 == false) {
    document.getElementById("dialogueBox").innerHTML = "After pouring through the volume, you find that it is possible to control someone elses mind. Perhaps you could use this to help you gain even more knowledge. If only you knew how to cast such a spell. Must keep reading...";
    document.getElementById("mindControlSpellDiv").style.visibility = "visible";
    story_message_003 = true;
    story_message_004 = false;
    story_message_boss_01 = false;
  };
  if (buttonsClicked > 1000 && story_message_004 == false) {
    document.getElementById("dialogueBox").innerHTML = "MINION SPELL ACTIVE";
    document.getElementById("minionSpellDiv").style.visibility = "visible";
    story_message_004 = true;
  };
  if (mindControlSpells > 10 && story_message_boss_01 == false) {
    if (boss_01_targetSet == false) {
      boss_01_target = buttonsClicked * 100;
      boss_01_targetSet = true;
    };
    story_message_boss_01 = true;
    document.getElementById("dialogueBox").innerHTML = "A wizard from a nearby town has felt your magical energy and is poised to stop you!";
    document.getElementById("alertBox").innerHTML = "Read " + boss_01_target + " before the wizard!";
    document.getElementById("boss_1_box").style.visibility = "visible";
    boss_01_active = true;
  };
  pagesPerSecond = (cursors + (mindControlSpells *10) + (minionSpells *100));
  notoriety = 0;
  document.getElementById("notoriety").innerHTML = notoriety;
  document.getElementById("pagesPerSecond").innerHTML = (cursors + (mindControlSpells *10) + (minionSpells *100));
};

// Handles time based effects
window.setInterval(function() {
  document.getElementById("pagesPerSecond").innerHTML = pagesPerSecond + "/sec";
  autoClick(cursors);
  autoClick(mindControlSpells * 10);
  autoClick(minionSpells * 100);
  if (boss_01_active == true) {
    boss_01_read();
  };
  gameState();
}, 1000);
