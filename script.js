//Ensure proper script link//
console.log("Javascript Running");
//DOM CONNECTIONS//
var cardAccess = $('.cards');
var instructions = $('#mode-select');
var dialogBox = $('#dialog');
var showLevel = $('#show-level');
var showPoints = $('#show-points');
var showTurnDisplay = $('#titleHead');

//Declare Variables// 
  //Declare Arrays//
var cardCollection = [];
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
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
  $(document).keydown(function (event) {
    var currentColor = $(randomCard).css('backgroundColor');
    if (currentColor === randomColor && event.key === randomLetter){
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
  var text = $(randomCard).children("p");
  text.text(randomLetter);
  $(randomCard).css('backgroundColor', randomColor);
  winPoint(correctColor, randomColor, randomLetter, randomCard);
}

function unappender(correctColor, randomColor, randomLetter, randomCard) {
  time = 0;
  var text = $(randomCard).children("p");
  text.text(' ');
  $(randomCard).css('backgroundColor', 'blue');
}

var switcher = function () {
  if (numPlayers === 2) {
    if (turn === true) {
      $(showTurnDisplay).css("background-color", "green");
      turn = false;
      levelUp();
    } else {
      $(showTurnDisplay).css("background-color", "#8b0000");
      turn = true;
      levelUp();
    }
  } else {
    alert("You can't use this button on one player mode.")
  }
}

  //Functions that reference other functions with arguments
  //to define the difficulty level
function levelsDefined() { 


  function practice (keysNum) {
    var i = 0;
    var repeat = setInterval (function () {
      $('#show-level').text('P');
      time = 3000;
      pickRandomColor("rgb(155, 89, 182");
      i++;
      if (i === keysNum) {
        clearInterval(repeat);
      };
    }, 3000);
  }
  
  function one (keysNum) {
    var i = 0;
    var repeat = setInterval (function () {
      $('#show-level').text('1');
      time = 2000;
      pickRandomColor("rgb(155, 89, 182");
      i++;
      if (i === keysNum) {
        clearInterval(repeat);

      };
    }, 2000);
  }

  function two (keysNum) {
    var i = 0;
    var repeat = setInterval (function () {
      $('#show-level').text('2');
      time = 1000;
      pickRandomColor("rgb(155, 89, 182");
      i++;
      if (i === keysNum) {
        clearInterval(repeat);
      };
    }, 1000);
  }
  function three (keysNum) {
    var i = 0;
    var repeat = setInterval (function () {
      $('#show-level').text('3');
      time = 850;
      pickRandomColor("rgb(155, 89, 182");
      i++;
      if (i === keysNum) {
        clearInterval(repeat);
      };
    }, 850);
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
  } else {
    numPlayers = 1;
  }
}

//LEVEL UP//
var levelUp = function() {
  switch (level) {
    case "start":
    //dialog box "practice level"
    if (numPlayers === 1) {
      level = "practice"
      levelsDefined();
      levelsDefined.practice(2)
    } else {
      if (turn === false) {
        level = "practice";
      } else {
    levelsDefined();
    levelsDefined.practice(2);
      }
    };
    break;

    case "practice":
    //dialog box "easy"
    if (numPlayers === 1) {
      level = "one"
      levelsDefined();
      levelsDefined.one(10);
    } else {
      if (turn === false) {
        level = "one";
      } else {
    levelsDefined();
    levelsDefined.one(10);
      }
    };
    break;

    case "one":
    level = "two";
    //dialog box "medium"
    if (numPlayers === 1) {
      level = "two"
      levelsDefined();
      levelsDefined.two(10);
    } else {
      if (turn === false) {
        level = "two";
      } else {
    levelsDefined();
    levelsDefined.two(10);
      }
    };
    break;

    case "two":
    //dialog box "hard"
   if (numPlayers === 1) {
      level = "three"
      levelsDefined();
      levelsDefined.three(8);
    } else {
      if (turn === false) {
        level = "three";
      } else {
    levelsDefined();
    levelsDefined.three(8);
      }
    };
    case "three":
    if (numPlayers === 1) {
      if (playerOneScore > 27) {
        alert ("You passed and got all the points!");
      } else {
        alert("You did not get all the points");
      }
    }
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
 
 $('#leveler').on('click', function () {
  levelUp();
 })

 $('#switch').on('click', function () {
  switcher();
 })




