var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessChoices = [];

document.onkeyup = function(event) {

    var uGuess = event.key;

    var ComGuess = options[Math.floor(Math.random() * options.length)];

   if (options.indexOf(uGuess) > -1) {

       if (uGuess === ComGuess) {
           wins++;
           numGuesses = 9;
           guessChoices = [];
           alert(["Correct choice: " + uGuess]);
       }

       if (uGuess != ComGuess) {
           numGuesses --;
           guessChoices.push(uGuess);
       }

       if (numGuesses === 0) {

       numGuesses = 9;
       losses ++;
       guessChoices = [];
       alert("YOU LOST")

       
   }

   var html = 
   "<h1> Psychic Game </h1>" +
   "<br>" +
   "<p>Guess what letter I am thinking of?</p>" +
   "<br>" +
   "<p>Wins: " + wins + "</p>" +
   "<p>Losses: " + losses + "</p>" +
   "<p>Guesses Left: " + numGuesses + "</p>" +
   "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

   document.querySelector("#game").innerHTML = html;

   
   }
};

   
    
