//Variables
var modifier_speedRead_cost = 1000;
var modifier_speedRead_total = 0;

//Upgrades List
function speedRead(){
  document.getElementById("alertBox").innerHTML = "";
  var modifier_speedRead_cost = Math.floor(500 * Math.pow(2.5,modifier_speedRead_total));
  if(pages_read >= modifier_speedRead_cost){
    modifier_speedRead_total = modifier_speedRead_total + 1;
    pages_read = pages_read - modifier_speedRead_cost;
    document.getElementById("modifier_speedRead_total_span").innerHTML = cleanRogueDecimals(modifier_speedRead_total);
    totalManualClickModifier = totalManualClickModifier + 1;
  }
  else {
    document.getElementById("alertBox").innerHTML = "You don't have enough arcane knowledge to cast this...";
  };
  var nextCost = Math.floor(500 * Math.pow(2.5,modifier_speedRead_total));
  document.getElementById("modifier_speedRead_cost_span").innerHTML = cleanRogueDecimals(nextCost);
};
