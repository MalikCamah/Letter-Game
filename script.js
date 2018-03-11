var wins = 0;
var losses = 0;
var guessCount = 10;

var guesses = document.querySelector(".guesses");
var lastResult = document.querySelector(".lastResult");
// var lastResult =

var randomLetter =["a", "b", "c", "d", "e","f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerChoices = randomLetter[Math.floor(Math.random() * randomLetter.length)];


// First Function That should compare my choice with the computers choice

document.onkeyup = function() {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  if (guessCount === 1) {
    guesses.textContent = "Previous Guesses: ";
    console.log(userGuess);
    console.log(computerChoices);
  }

  guesses.textContent += userGuess + " ";
  guesses.style.backgroundColor ="yellow";
  guesses.style.padding ="10px";
  guesses.style.boxShadow ="3px 3px 6px #000000";
  guesses.style.fontSizen ="20px";

  // Second Conditional To Try And Compare User vs Computer
  // This will be

  if(userGuess === computerChoices) {
    lastResult.textContent ="Congratulations! You won! You are the TRUE PSYCHIC";
    lastResult.style.backgroundColor ="green";
    lastResult.style.color="white";
    lastResult.style.padding="10px";
    lastResult.style.boxShadow="3px 3px 6px #000000";
    wins++;
    setGameOver();


  }else if (guessCount === 1) {
    lastResult.textContent = "Awwww, You Lost! Too bad! Be sure to try again!";
    lastResult.style.backgroundColor ="red";
    lastResult.style.color="white";
    lastResult.style.padding="10px";
    lastResult.style.boxShadow="3px 3px 6px #000000";
    losses++;
    setGameOver();

  }else {
    lastResult.textContent ="!!!Wrong!!!";
    lastResult.style.backgroundColor="orange";
    lastResult.style.color="white";
    lastResult.style.padding="10px";
    lastResult.style.boxShadow="3px 3px 6px #000000";
  }


  function setGameOver () {
    computerChoices = randomLetter[Math.floor(Math.random() * randomLetter.length)];
    guessCount = 10;
    guesses.textContent = "Previous Guesses: "
  }

  guessCount --;


  var html =
  "<p> Wins: " + wins + "</p>" +
  "<p> Losses: " + losses + "</p>" +
  "<p> Guesses Left: " + guessCount + "</p>"

  document.getElementById("logs").innerHTML = html

}
