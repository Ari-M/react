//Ensure proper script link//
console.log("Javascript Running");
//DOM CONNECTIONS//
var cardAccess = $('.cards');
var instructions = $('#mode-select');
var dialogBox = $('#dialog');

//Declare Variables// 
  //Declare Arrays//
var cardCollection = [];
// var letters = ["A", "B", "C", "D", "E", "F","G", "H", "I", "J", 
// "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W" 
// "X", "Y", "Z"];
var colors = ["#73C6B6", "#DC7633", "#7D3C98", "##CD6155", 
"#F4D03F"];

  //Collectors to arrays//
$(cardAccess).each(function(i) {
  cardCollection.push(cardAccess[i]);
})
  //Local JS variables//
var level = "start"

//Functions//
  //Timer//
  var countdown = function(setTime) {

  };

  //Inherent to function levels functions//

  //Player Mode to dictate how to run level functions//
var playerMode = function(playerNum) {
  if (playerNum === 2) {
    levelUp(2);
  } else {
    levelUp(1);
  }
}
  /*Level functions to implement more difficult
    variables and level up*/
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

    default:
    //You Win!
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

  //Conditonal event handlers (keys)//


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

