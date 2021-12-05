/**
 * Declare constants for DOM elements
 * and possible choices
 */

 const buttons = document.getElementsByClassName("control");
 const playerScore = document.getElementById("player-score");
 const computerScore = document.getElementById("computer-score");
 const playerImage = document.getElementById("player-image");
 const computerImage = document.getElementById("computer-image");
 const messages = document.getElementById("messages");
 const choices = ["Rock", "Paper", "Scissors"];
 
 /**
  * Add event listener to all the buttons
  */
 
 for (let button of buttons) {
     button.addEventListener("click", function(){
         let playerChoice = this. getAttribute("data-choice");
         runGame(playerChoice);
     })
 }
 
 /**
  * The main game function. The parameter will be the data-choice value of the 
  * selected button
  */
 
 function runGame(playerChoice){
     playerImage.src = `assets/images/${choices[playerChoice]}.jpg`;
     playerImage.alt = choices[playerChoice];
 
     let computerChoice = Math.floor(Math.random() *3);
 
     computerImage.src = `assets/images/${choices[computerChoice]}.jpg`;
 
     let result= checkWinner(choices[computerChoice], choices[playerChoice]);
 
     updateScores(result);
 }

 /**
  * compare results
  */
function compareResults(checkWinner) {
      if (computerChoice === playerChoice){
          alert("It's a tie!");
      } else if (playerChoice === choices[0] && computerChoice === choices[1]){
          alert("You win!Computer lost.");
      } else if (playerChoice === choices[1]) && computerChoice === choices[2]{
          alert("You lost! Computer wins.");
      } else if (playeChoice === choices[2] && computerChoice === choices[0]){
            alert("You lost! compute lost.");
      }
}