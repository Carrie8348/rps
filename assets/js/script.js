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
 let computerscore = 0;
 let playerscore = 0;
 /**
  * Add event listener to all the buttons
  */
 
 for (let button of buttons) {
     button.addEventListener("click", function () {
         let playerChoice = this.getAttribute("data-choice");
         runGame(playerChoice);
     })
 }
 
 /**
  * The main game function. The parameter will be the data-choice value of the 
  * selected button
  */
 
 function runGame(playerChoice) {
     playerImage.src = `./assets/images/${choices[playerChoice]}.png`;
     playerImage.alt = choices[playerChoice];
 
     let computerChoice = Math.floor(Math.random() * 3);
 
     computerImage.src = `./assets/images/${choices[computerChoice]}.png`;
 
     let result = checkWinner(choices[computerChoice], choices[playerChoice]);
 }
 
 /**
  * check Winner function
  */
 function checkWinner(computer, player) {
     console.log(computer)
     console.log(player)
     if (
         (computer == 'Rock' && player == 'Paper') ||
         (computer == 'Scissors' && player == 'Rock') ||
         (computer == 'Paper' && player == 'Scissors')
     ) {
         document.querySelector('#result').innerHTML = "result:player win";
         playerscore = playerscore + 1;
     } else if (
         (computer == 'Rock' && player == 'Scissors') ||
         (computer == 'Paper' && player == 'Rock') ||
         (computer == 'Scissors' && player == 'Paper')
     ) {
         document.querySelector('#result').innerHTML = "result:computer win";
         computerscore = computerscore + 1;
     } else {
         document.querySelector('#result').innerHTML = "result:A draw";
     }
     document.querySelector('#computer-score').innerHTML = computerscore;
     document.querySelector('#player-score').innerHTML = playerscore;
 }