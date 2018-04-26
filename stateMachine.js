// Public Variables
  // Display Vars
public var story_message_fill = "";
public var alert_box_fill = "";
public var boss_visibility = false;

  // Player Vars
public var pages_read = 0;
public var notoriety = 0;

  // Clickables Vars
public var spell_autoread = 0;
public var spell_minion = 0;
public var spell_mindControl = 0;
public var spell_04 = 0;
public var spell_05 = 0;
public var spell_06 = 0;
public var spell_07 = 0;
public var spell_08 = 0;
public var spell_09 = 0;
public var spell_10 = 0;
public var spell_11 = 0;
public var spell_12 = 0;

function stateMachine() {
    document.getElementById("dialogueBox").innerHTML = story_message_fill;
    document.getElementById("alertBox").innerHTML = alert_box_fill;
    switch (boss_visibility) {
      case 1:
      {
        document.getElementById("boss_box").style.visibility = true;
        boss_active = true;
      };
      default:
      {
        document.getElementById("boss_box").style.visibility = false;
        boss_active = false;
      };
    };
  };
  pagesPerSecond = (spell_autoread + (spell_mindControl *10) + (spell_minion *100));
// Notoriety Check
  switch (notoriety) {
    case notoriety > 0:

  };
  document.getElementById("pagesPerSecond").innerHTML = (spell_autoread + (spell_mindControl *10) + (spell_minion *100) + (spell_04 *1000) + (spell_05 *10000) + (spell_06 *100000));
};
