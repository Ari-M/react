//Ensure proper script link//
console.log("Javascript Running");
//DOM CONNECTIONS//
var cardAccess = $('.cards');
//var cardId = $(cardAccess).attr('id');
var instructions = $('#mode-select');
var dialogBox = $('#dialog');

//Declare Variables// 
  //Declare Arrays//
var cardCollection = [];
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var colors = ["#73C6B6", "#DC7633", "#7D3C98", "#CD6155", 
"#F4D03F"];

  //Collectors to arrays//
$(cardAccess).each(function(i) {
  cardCollection.push(cardAccess[i]);
})
  //Local JS variables//
var level = "start";
var setTime;
//Functions//
  //Timer//
  var countdown = function(correctColor, randomLetter) {
    setTimeout(setConditionalHandlers(correctColor, randomLetter), setTime);
    unappender(correctColor, randomLetter)
  };

  //Inherent to function levels functions//
var setConditionalHandlers = function (correctColor, randomLetter) {
  addEventListener("keydown", function check (e) {
    if (e.target === randomLetter) {
      points(1);
    } else {
    };
  });

}
  
var points = function (pointsAdded) {

} 

var pickRandomColor = function (correctColor) {
  var indexNum = Math.floor(Math.random() * colors.length);
  var randomNum = colors[indexNum];
  var randomColor = randomNum.valueOf();
  pickRandomLetter(correctColor, randomColor);
}

var pickRandomLetter = function (correctColor, randomColor) {
  var indexNum = Math.floor(Math.random() * letters.length);
  var randomNum = letters[indexNum];
  var randomLetter = randomNum.valueOf();
  pickRandomCard(correctColor, randomColor, randomLetter);
}

var pickRandomCard = function (correctColor, randomColor, randomLetter) {
  var indexNum = Math.floor(Math.random() * cardCollection.length)
  var randomNum = cardCollection[indexNum];
  var randomCard = randomNum;
  appender(correctColor, randomColor, randomLetter, randomCard);
}

var appender = function (correctColor, randomColor, randomLetter, randomCard) {
  console.log(correctColor, randomColor, randomLetter, randomCard)
  var text = $(randomCard).children("p");
  text.text(randomLetter);
  $(randomCard).css('backgroundColor', randomColor);
  countdown(correctColor, randomLetter, randomCard);
}

var unappender = function() {

}

  //Player Mode to dictate how to run level functions//
var playerMode = function(playerNum) {
  if (playerNum === 2) {
    levelUp(2);
  } else {
    levelUp(1);
  }
}
  //Functions that reference other functions with arguments
  //to define the difficulty level
function levelsDefined(playerMode) {
  function practice(keysNum) {
    console.log("More progress! " + playerMode)
    console.log(keysNum);
    pickRandomColor ("#CD6155");
    setTime = 2000
  }
  function one () {
    console.log('this is not a good thing to display')

  }
  function two () {

  }
  function three () {

  }
  //Define functions within this function as properties
  //Function-ception//
  levelsDefined.practice = practice;
  levelsDefined.one = one;
  levelsDefined.two = two;
  levelsDefined.three = three;
}

//LEVEL UP//
var levelUp = function(playerMode) {
  switch (level) {
    case "start":
    level = "practice";
    //dialog bog "practice level"
    levelsDefined(playerMode);
    levelsDefined.practice(2);
    break;

    case "practice":
    level = "one";
    //dialog box "easy"
    levelsDefined(playerMode);
    levelsDefined.one(6);
    break;

    case "one":
    level = "two";
    //dialog box "medium"
    levelsDefined(playerMode);
    levelsDefined.two(6);
    break;

    case "two":
    level = "three";
    //dialog box "hard"
    levelsDefined(playerMode);
    levelsDefined.three(4);

    case "three":
    //You Win!
  }
};

//Event Handlers
$("#mode-select").click(function () {
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

//Dialog box related//
 $( function introduction() {
    $( "#dialog" ).dialog({
      autoOpen: false,
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

 //seperate dialog
  $( function instructions() {
    $( "#dialog" ).dialog({
      autoOpen: false,
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


