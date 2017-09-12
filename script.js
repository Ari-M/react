//Ensure proper script link//
console.log("Javascript Running");
//DOM CONNECTIONS//
var cardAccess = $('.cards');
var instructions = $('#mode-select');
var dialogBox = $('#dialog');

//Declare Variables// 
var cardCollection = [];
$(cardAccess).each(function(i) {
  cardCollection.push(cardAccess[i]);
})
var level = "start"

//Dialog box related//
 $( function displayInstructions() {
    $( "#dialog" ).dialog({
      autoOpen: true,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#opener" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });
  } );

//Functions//
  //Timer//

  //Player Mode to dictate how to run level functions//
var playerMode = function(playerNum) {
  if (playerNum === 2) {
    levelUp(2);
  } else {
    levelUp(1);
  }
}
  //Level functions to implement more difficult//
  //variables and level up//
function levelsDefined(playerMode) {
  function practice() {
    console.log("More progress!" + playerMode)
  }
  function one () {

  }
  function two () {

  }
  function three () {

  }
  //Define functions within this function as properties
  levelsDefined.practice = practice;
  levelsDefined.one = one;
  levelsDefined.two = two;
  levelsDefined.three = three;
}

var levelUp = function(playerMode) {
  switch (level) {
    case "start":
    level = "practice";
    levelsDefined(playerMode);
    levelsDefined.practice();
    break;

    case "practice":
    level = "one";
    levelsDefined(playerMode);
    levelsDefined.one();
    break;

    case "one":
    level = "two";
    levelsDefined(playerMode);
    levelsDefined.two();
    break;

    case "two":
    level = "three";
    levelsDefined(playerMode);
    levelsDefined.three();
  }
};

//Event Handlers
$("#mode-select").click(function displayInstructions() {
  var grabChoice = $('input[name=question1]:checked', '#numPlayers').val();
  if (grabChoice === "1") {
    playerMode(1)
    } else if (grabChoice === "2") {
    playerMode(2);
    } else {
      alert("You must choose a mode.");
    }
  });
  //Insert a reset button below

  //Event handlers for keystrokes
