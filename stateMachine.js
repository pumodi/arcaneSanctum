//// Variables
// Player Vars
var pages_read = 0;
var pages_read_this_game =0;
var notoriety = 0;
var pagesPerSecond = 0;
var manualClicks = 0;
var totalManualClickModifier = 1;

  // Clickables Cost
var spell_01_cost = 0;
var spell_02_cost = 0;
var spell_03_cost = 0;
var spell_04_cost = 0;

  // Total Clickables Bought
var spell_01_total = 0;
var spell_02_total = 0;
var spell_03_total = 0;
var spell_04_total = 0;

//// Functions
//Story Machine
function plotMachine() {
  switch (true) {
    case (pages_read_this_game <= 0):
      document.getElementById("dialogueBox").innerHTML = 'You come across an open book that says "read me"';
      break;
    case (pages_read_this_game >= 1 && pages_read_this_game <100):
      document.getElementById("dialogueBox").innerHTML = "The book appears to be a spellbook of some kind. You feel compelled to read further...";
      document.getElementById("autoReadSpellDiv").style.visibility = "visible";
      break;
    case (pages_read_this_game >= 100 && pages_read_this_game <1000):
      document.getElementById("dialogueBox").innerHTML = "After pouring through the volume, you find that it is possible to control someone elses mind. Perhaps you could use this to help you gain even more knowledge. If only you knew how to cast such a spell. Must keep reading...";
      document.getElementById("mindControlSpellDiv").style.visibility = "visible";
      break;
    case (pages_read_this_game >= 1000 && pages_read_this_game <10000):
      document.getElementById("dialogueBox").innerHTML = "MINION SPELL ACTIVE";
      document.getElementById("minionSpellDiv").style.visibility = "visible";
      document.getElementById("modifier_speedReadDiv").style.visibility = "visible";
      break;
    case (pages_read_this_game >= 10000 && pages_read_this_game <50000):
      document.getElementById("dialogueBox").innerHTML = "SPELL 04 ACTIVE";
      document.getElementById("spell_04_Div").style.visibility = "visible";
      break;
    case (pages_read_this_game >= 50000 && pages_read_this_game <100000):
      document.getElementById("dialogueBox").innerHTML = "SPELL 05 ACTIVE";
      document.getElementById("spell_05_Div").style.visibility = "visible";
      break;
    case (pages_read_this_game >= 100000 && pages_read_this_game <500000):
      document.getElementById("dialogueBox").innerHTML = "SPELL 06 ACTIVE";
      document.getElementById("spell_06_Div").style.visibility = "visible";
      break;
    case (pages_read_this_game >= 500000 && pages_read_this_game <1000000):
      document.getElementById("dialogueBox").innerHTML = "SPELL 07 ACTIVE";
      document.getElementById("spell_07_Div").style.visibility = "visible";
      break;
    case (pages_read_this_game >= 1000000 && pages_read_this_game <5000000):
      document.getElementById("dialogueBox").innerHTML = "SPELL 08 ACTIVE";
      document.getElementById("spell_08_Div").style.visibility = "visible";
      break;
    case (pages_read_this_game >= 5000000 && pages_read_this_game <10000000):
      document.getElementById("dialogueBox").innerHTML = "SPELL 09 ACTIVE";
      document.getElementById("spell_09_Div").style.visibility = "visible";
      break;
    case (pages_read_this_game >= 10000000 && pages_read_this_game <50000000):
      document.getElementById("dialogueBox").innerHTML = "SPELL 10 ACTIVE";
      document.getElementById("spell_10_Div").style.visibility = "visible";
      break;
    default:
      document.getElementById("dialogueBox").innerHTML = 'You come across an open book that says "read me"';
      break;
    };
};
function stateMachine() {
// Display Variables
  pagesPerSecond = (spell_01_total+(spell_02_total *5)+(spell_03_total *40)+(spell_04_total *100)+(spell_05_total * 400)+(spell_06_total *1000)+(spell_06_total *4000)+(spell_07_total * 10000)+(spell_08_total *99000)+(spell_09_total * 1000000)+(spell_10_total *10000000));
  document.getElementById("notoriety").innerHTML = Math.floor(notoriety);
  document.getElementById("pagesPerSecond").innerHTML = pagesPerSecond;
  document.getElementById("pages_read_total").innerHTML = pages_read_this_game;
  document.getElementById("manual_clicks_total").innerHTML = manualClicks;
  document.getElementById("pagesPerManualClick").innerHTML = totalManualClickModifier;
// Call plot machine
plotMachine();
};
