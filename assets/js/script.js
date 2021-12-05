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

 function compareResults (result) {
     if (computerChoice === choices[0]){
         if (playerChoice === choices[0]);
         alert("It's a tie, try again!")
     } else if (playerChoice === choices[1]){
         alert("You win, computer loses");
     } else if (playerChoice === choices[2]{
         alert("You lose, computer wins!")
     }