//Ensure proper script link//
console.log("Javascript Running");
//DOM CONNECTIONS//
var cardAccess = $('.cards');
var instructions = $('#mode-select');
var dialogBox = $('#dialog');
var showLevel = $('#show-level');
var showPoints = $('#show-points');

//Declare Variables// 
  //Declare Arrays//
var cardCollection = [];
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var colors = ["#73C6B6", "#DC7633", "#7D3C98", "#CD6155", 
// "#F4D03F"];
var colors = ["rgb(155, 89, 182)", "rgb(203, 67, 53)", "rgb(23, 165, 137)", "rgb(241, 196, 15)", "rgb(205, 97, 85)"]

  //Collector to array//
$(cardAccess).each(function(i) {
  cardCollection.push(cardAccess[i]);
})
  //Global JS variables//
var numPlayers;
var turn = true
var level = "start";
var time;
var currentColor;
var playerOneScore = 0;
var playerTwoScore = 0;
//Functions//
  //Timer//
var winPoint = function (correctColor, randomColor, randomLetter, randomCard) {
  setConditionalHanders(correctColor, randomColor, randomLetter, randomCard)
  setTimeout(function() {
    unappender(correctColor, randomColor, randomLetter, randomCard);
  }, time); 

}

  //Inherent to function levels functions//
  //work on this more...//
var setConditionalHanders = function (correctColor, randomColor, randomLetter, randomCard) {
  console.log("set conditional handlers running");
  console.log(randomColor);
  $(document).keydown(function (event) {
    var currentColor = $(randomCard).css('backgroundColor');
    if (currentColor === randomColor && event.key === randomLetter){
        console.log("This works" + event.key);
        points(1);
    } else {
        points(0)
    }
  })
}

var points = function (pointsAdded) {
  if (numPlayers === 1) {
  playerOneScore = playerOneScore + pointsAdded;
  $('#show-points').text(playerOneScore);
  } else {
    if (turn === true) {
      playerOneScore = playerOneScore + pointsAdded;
      $('#show-points').text(playerOneScore);
    } else {
      playerTwoScore = playerTwoScore + pointsAdded;
      $('#show-points').text(playerTwoScore);
    }
  }
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
  winPoint(correctColor, randomColor, randomLetter, randomCard);
}

function unappender(correctColor, randomColor, randomLetter, randomCard) {
  console.log("this should be two seconds");
  time = 0;
  var text = $(randomCard).children("p");
  text.text(' ');
  $(randomCard).css('backgroundColor', 'blue');
}

  //Functions that reference other functions with arguments
  //to define the difficulty level
function levelsDefined(playerMode) {

  function practice(keysNum) {
    var i = 0;
    var repeat = setInterval (function () {
      $('#show-level').text('P');
      console.log("More progress! " + playerMode)
      time = 3000;
      pickRandomColor("rgb(155, 89, 182");
      i++;
      if (i === keysNum) {
        clearInterval(repeat);
      };
    }, 3000);
  }
  function one () {
    console.log("level one passed")
    $('#show-level').text('1');

  }
  function two () {
    $('#show-level').text('2');
  }
  function three () {
    $('#show-level').text('3');
  }
  //Define functions within this function as properties
  //Function-ception//
  levelsDefined.practice = practice;
  levelsDefined.one = one;
  levelsDefined.two = two;
  levelsDefined.three = three;
}

  //Player Mode to dictate how to run level functions//
var playerMode = function(playerNum) {
  if (playerNum === 2) {
    numPlayers = 2
    turn = true;
    levelUp(2);
  } else {
    numPlayers = 1;
    levelUp(1);
  }
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
}

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
  // $( function instructions() {
  //   $( "#dialog" ).dialog({
  //     autoOpen: false,
  //     show: {
  //       effect: "blind",
  //       duration: 1000
  //     },
  //     hide: {
  //       effect: "explode",
  //       duration: 1000
  //     }
  //   });
 
  //   $( "#opener" ).on( "click", function() {
  //     $( "#dialog" ).dialog( "open" );
  //   });
  // } );


