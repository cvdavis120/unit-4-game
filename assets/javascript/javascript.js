$("document").ready(function() {
  var cpuScore = 0;
  var playerScore = 0;
  var kingScore = 0;
  var knightScore = 0;
  var orcScore = 0;
  var uniScore = 0;
  var thePoints = [];
  var playerWins = 0;
  var playerLoses = 0;

  //START THE GAME ON PAGE LOAD
  gameStart();
  function gameStart() {
    $(".totalscore1").text("0");
    getTop();
    randScore();
  }
  function gameReset() {
    cpuScore = 0;
    playerScore = 0;
    kingScore = 0;
    knightScore = 0;
    orcScore = 0;
    uniScore = 0;
    thePoints = [];
    gameStart();
  }
  //BUTTON STUFF
  $("#king").on("click", function() {
    playerChoice(kingScore);
    console.log(this);
  });
  $("#knight").on("click", function() {
    playerChoice(knightScore);
    console.log(this);
  });
  $("#uni").on("click", function() {
    playerChoice(uniScore);
    console.log(this);
  });
  $("#orc").on("click", function() {
    playerChoice(orcScore);
    console.log(this);
  });

  //GENERATE CPU SCORE
  function getTop() {
    cpuScore = Math.floor(Math.random() * 101) + 19;
    console.log(cpuScore);
    $(".cpuscore").text(cpuScore);
  }
  function randScore() {
    thePoints = [];
    for (i = 0; i < 4; i++) {
      var score = Math.floor(Math.random() * 12) + 1;
      thePoints.push(score);
    }
    // SET THE SCORES
    kingScore = thePoints[0];
    knightScore = thePoints[1];
    orcScore = thePoints[2];
    uniScore = thePoints[3];
  }

  function playerChoice(i) {
    playerScore += i;
    $(".totalscore1").text(playerScore);
    winCheck();
  }
  function winCheck() {
    if (playerScore === cpuScore) {
      alert("WINNER WINNER CHICKEN DINNER");
      gameReset();
      playerWins++;
      $(".wins1").text(playerWins);
    } else if (playerScore > cpuScore) {
      alert("LOSER!");
      gameReset();
      playerLoses++;
      $(".loses1").text(playerLoses);
    } else {
      return false;
    }
  }
});
