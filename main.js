var alertBoxClear = 0;

//Save game logic
/* var save = {
  pages_read: pages_read,
}

localStorage.setItem("save",JSON.stringify(save));

var savegame = JSON.parse(localStorage.getItem("save"));
if (typeof savegame.pages_read !== "undefined") pages_read = savegame.pages_read;
*/

//Prettify stuff
function cleanRogueDecimals(input){
  var output = Math.round(input * 1000000)/1000000;
    return output;
};

//Clickables
// Read a page. Note, need to add a way to count manual clicks per second and reset the value in the state machine during an interval refresh.
function readPages(number){
  pages_read = pages_read + number;
  pages_read_this_game = pages_read_this_game + number;
  document.getElementById("pages_read").innerHTML = cleanRogueDecimals(pages_read);
  stateMachine();
}
//Spells
function read_manual(){
  readPages(1+modifier_speedRead_total);
  manualClicks = manualClicks+1;
  console.log("Mod =" + modifier_speedRead);
}
// Spell_01 Cast an autoread spell
function buy_spell_01(){
  document.getElementById("alertBox").innerHTML = "";
  var spell_01_cost = Math.floor(15 * Math.pow(1.15,spell_01_total));
  if(pages_read >= spell_01_cost){
    spell_01_total = spell_01_total + 1;
    pages_read = pages_read - spell_01_cost;
    document.getElementById("spell_01_total_span").innerHTML = cleanRogueDecimals(spell_01_total);
    if (spell_01_total>0 && spell_01_total<2) {
      document.getElementById("alertBox").innerHTML = "A power overwhelming pours out of you as you read the arcane lettering. The pages are turning themselves now yet somehow you still seem to know what they contain...";
      alertBoxClear = 0;
    };
  }
  else {
    document.getElementById("alertBox").innerHTML = "You don't have enough arcane knowledge to cast an Auto-Read spell...";
  };
  var nextCost = Math.floor(10 * Math.pow(1.15,spell_01_total));
  document.getElementById("spell_01_cost_span").innerHTML = cleanRogueDecimals(nextCost);
  stateMachine();
};
// Spell 02 Cast a mind control spell
function buy_spell_02(){
  document.getElementById("alertBox").innerHTML = "";
  var spell_02_cost = Math.floor(100 * Math.pow(1.2,spell_02_total));
  if(pages_read >= spell_02_cost){
    spell_02_total = spell_02_total + 1;
    pages_read = pages_read - spell_02_cost;
    document.getElementById("spell_02_total_span").innerHTML = cleanRogueDecimals(spell_02_total);
    notoriety = notoriety + 0.1;
  }
  else {
    document.getElementById("alertBox").innerHTML = "You don't have enough arcane knowledge to cast a Mind Control spell...";
  };
  var nextCost = Math.floor(100 * Math.pow(1.2,spell_02_total));
  document.getElementById("spell_02_cost_span").innerHTML = cleanRogueDecimals(nextCost);
  stateMachine();
};
// Spell 03 Summon some minions
function buy_spell_03(){
  document.getElementById("alertBox").innerHTML = "";
  var spell_03_cost = Math.floor(1000 * Math.pow(1.3,spell_03_total));
  if(pages_read >= spell_03_cost){
    spell_03_total = spell_03_total + 1;
    pages_read = pages_read - spell_03_cost;
    document.getElementById("spell_03_total_span").innerHTML = cleanRogueDecimals(spell_03_total);
    notoriety = notoriety + 0.3
  }
  else {
    document.getElementById("alertBox").innerHTML = "You don't have enough arcane knowledge to Summon any minions...";
  };
  var nextCost = Math.floor(1000 * Math.pow(1.3,spell_03_total));
  document.getElementById("spell_03_cost_span").innerHTML = cleanRogueDecimals(nextCost);
  stateMachine();
};
// Spell 04 Cast a speed read spell
function buy_spell_04(){
  document.getElementById("alertBox").innerHTML = "";
  var spell_04_cost = Math.floor(5000 * Math.pow(1.4,spell_04_total));
  if(pages_read >= spell_04_cost){
    spell_04_total = spell_04_total + 1;
    pages_read = pages_read - spell_04_cost;
    document.getElementById("spell_04_total_span").innerHTML = cleanRogueDecimals(spell_04_total);
    notoriety = notoriety + 0.8
  }
  else {
    document.getElementById("alertBox").innerHTML = "You don't have enough arcane knowledge to cast this spell...";
  };
  var nextCost = Math.floor(1000 * Math.pow(1.4,spell_04_total));
  document.getElementById("spell_04_cost_span").innerHTML = cleanRogueDecimals(nextCost);
  stateMachine();
};
// Spell 05
function buy_spell_05(){
  document.getElementById("alertBox").innerHTML = "";
  var spell_05_cost = Math.floor(10000 * Math.pow(1.15,spell_05_total));
  if(pages_read >= spell_05_cost){
    spell_05_total = spell_05_total + 1;
    pages_read = pages_read - spell_05_cost;
    document.getElementById("spell_05_total_span").innerHTML = cleanRogueDecimals(spell_05_total);
    notoriety = notoriety + 1.4
  }
  else {
    document.getElementById("alertBox").innerHTML = "You don't have enough arcane knowledge to cast this spell...";
  };
  var nextCost = Math.floor(1000 * Math.pow(1.15,spell_05_total));
  document.getElementById("spell_05_cost_span").innerHTML = cleanRogueDecimals(nextCost);
  stateMachine();
};
// Spell 06
function buy_spell_06(){
  document.getElementById("alertBox").innerHTML = "";
  var spell_06_cost = Math.floor(25000 * Math.pow(1.15,spell_06_total));
  if(pages_read >= spell_06_cost){
    spell_06_total = spell_06_total + 1;
    pages_read = pages_read - spell_06_cost;
    document.getElementById("spell_06_total_span").innerHTML = cleanRogueDecimals(spell_06_total);
    notoriety = notoriety + 2.7
  }
  else {
    document.getElementById("alertBox").innerHTML = "You don't have enough arcane knowledge to cast this spell...";
  };
  var nextCost = Math.floor(1000 * Math.pow(1.15,spell_06_total));
  document.getElementById("spell_06_cost_span").innerHTML = cleanRogueDecimals(nextCost);
  stateMachine();
};
// Spell 07
function buy_spell_07(){
  document.getElementById("alertBox").innerHTML = "";
  var spell_07_cost = Math.floor(70000 * Math.pow(1.15,spell_07_total));
  if(pages_read >= spell_07_cost){
    spell_07_total = spell_07_total + 1;
    pages_read = pages_read - spell_07_cost;
    document.getElementById("spell_07_total_span").innerHTML = cleanRogueDecimals(spell_07_total);
    notoriety = notoriety + 2.8
  }
  else {
    document.getElementById("alertBox").innerHTML = "You don't have enough arcane knowledge to cast this spell...";
  };
  var nextCost = Math.floor(1000 * Math.pow(1.15,spell_07_total));
  document.getElementById("spell_07_cost_span").innerHTML = cleanRogueDecimals(nextCost);
  stateMachine();
};
// Spell 08
function buy_spell_08(){
  document.getElementById("alertBox").innerHTML = "";
  var spell_08_cost = Math.floor(125000 * Math.pow(1.15,spell_08_total));
  if(pages_read >= spell_08_cost){
    spell_08_total = spell_08_total + 1;
    pages_read = pages_read - spell_08_cost;
    document.getElementById("spell_08_total_span").innerHTML = cleanRogueDecimals(spell_08_total);
    notoriety = notoriety + 3.1
  }
  else {
    document.getElementById("alertBox").innerHTML = "You don't have enough arcane knowledge to cast this spell...";
  };
  var nextCost = Math.floor(1000 * Math.pow(1.15,spell_08_total));
  document.getElementById("spell_08_cost_span").innerHTML = cleanRogueDecimals(nextCost);
  stateMachine();
};
// Spell 09
function buy_spell_09(){
  document.getElementById("alertBox").innerHTML = "";
  var spell_09_cost = Math.floor(430000 * Math.pow(1.15,spell_09_total));
  if(pages_read >= spell_09_cost){
    spell_09_total = spell_09_total + 1;
    pages_read = pages_read - spell_09_cost;
    document.getElementById("spell_09_total_span").innerHTML = cleanRogueDecimals(spell_09_total);
    notoriety = notoriety + 4
  }
  else {
    document.getElementById("alertBox").innerHTML = "You don't have enough arcane knowledge to cast this spell...";
  };
  var nextCost = Math.floor(1000 * Math.pow(1.15,spell_09_total));
  document.getElementById("spell_09_cost_span").innerHTML = cleanRogueDecimals(nextCost);
  stateMachine();
};
// SPell 10
function buy_spell_10(){
  document.getElementById("alertBox").innerHTML = "";
  var spell_10_cost = Math.floor(820000 * Math.pow(1.15,spell_10_total));
  if(pages_read >= spell_10_cost){
    spell_10_total = spell_10_total + 1;
    pages_read = pages_read - spell_10_cost;
    document.getElementById("spell_10_total_span").innerHTML = cleanRogueDecimals(spell_10_total);
    notoriety = notoriety + 5
  }
  else {
    document.getElementById("alertBox").innerHTML = "You don't have enough arcane knowledge to cast this spell...";
  };
  var nextCost = Math.floor(1000 * Math.pow(1.15,spell_10_total));
  document.getElementById("spell_10_cost_span").innerHTML = cleanRogueDecimals(nextCost);
  stateMachine();
};
// Handles time based effects
window.setInterval(function() {
  document.getElementById("pagesPerSecond").innerHTML = pagesPerSecond + "/sec";
  alertBoxClear++;
  if (alertBoxClear >= 5) {
    document.getElementById("alertBox").innerHTML = "";
    alertBoxClear = 0;
  };
  readPages((spell_01_total+(spell_02_total *5)+(spell_03_total *40)+(spell_04_total *100)+(spell_05_total * 400)+(spell_06_total *1000)+(spell_06_total *4000)+(spell_07_total * 10000)+(spell_08_total *99000)+(spell_09_total * 1000000)+(spell_10_total *10000000)));
  stateMachine();
}, 1000);
