//Ensure proper script link
console.log("Javascript Running");
//Declare Variables 
var twoPlayer;

//Functions
 $( function() {
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

 var mode = function () {
  console.log("If you're reading this it's too late")
 }
//Event Handlers
$("#mode-select").click(function() {
  var grabChoice = $('input[name=question1]:checked', '#numPlayers').val();
  if (grabChoice === "1") {
    twoPlayer = false;
    } else {
      twoPlayer = true;
    }
  });
