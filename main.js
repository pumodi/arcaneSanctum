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
//Upgrades
// Spell_01 Cast an autoread spell
function buy_spell_01(){
  document.getElementById("alertBox").innerHTML = "";
  var spell_01_cost = Math.floor(10 * Math.pow(1.1,spell_01_total));
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
  var nextCost = Math.floor(10 * Math.pow(1.1,spell_01_total));
  document.getElementById("spell_01_cost_span").innerHTML = cleanRogueDecimals(nextCost);
  stateMachine();
};
// Spell 02 Cast a mind control spell
function buy_spell_02(){
  document.getElementById("alertBox").innerHTML = "";
  var mindControlCost = Math.floor(100 * Math.pow(1.1,spell_02_total));
  if(pages_read >= spell_02_cost){
    spell_02_total = spell_02_total + 1;
    pages_read = pages_read - spell_02_cost;
    document.getElementById("spell_02_total_span").innerHTML = cleanRogueDecimals(spell_02_total);
  }
  else {
    document.getElementById("alertBox").innerHTML = "You don't have enough arcane knowledge to cast a Mind Control spell...";
  };
  var nextCost = Math.floor(100 * Math.pow(1.1,spell_02_total));
  document.getElementById("spell_02_cost_span").innerHTML = cleanRogueDecimals(nextCost);
  stateMachine();
};
// Spell 03 Summon some minions
function buy_spell_03(){
  document.getElementById("alertBox").innerHTML = "";
  var minionsCost = Math.floor(1000 * Math.pow(1.1,spell_03_total));
  if(pages_read >= spell_03_cost){
    spell_03_total = spell_03_total + 1;
    pages_read = pages_read - spell_03_cost;
    document.getElementById("spell_03_total_span").innerHTML = cleanRogueDecimals(spell_03_total);
  }
  else {
    document.getElementById("alertBox").innerHTML = "You don't have enough arcane knowledge to Summon any minions...";
  };
  var nextCost = Math.floor(1000 * Math.pow(1.1,spell_03_total));
  document.getElementById("spell_03_cost_span").innerHTML = cleanRogueDecimals(nextCost);
  stateMachine();
};

var alertBoxClear = 0;

// Handles time based effects
window.setInterval(function() {
  document.getElementById("pagesPerSecond").innerHTML = pagesPerSecond + "/sec";
  alertBoxClear++;
  if (alertBoxClear >= 5) {
    document.getElementById("alertBox").innerHTML = "";
    alertBoxClear = 0;
  };
  readPages((spell_01_total*1)+(spell_02_total*5)+(spell_03_total*10));
  stateMachine();
}, 1000);
