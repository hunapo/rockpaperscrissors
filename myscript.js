let playerScore = 0;
let computerScore = 0;


function computerPlay() {
    let choice = Math.random();
    if (choice <= 0.33) {
        choice = "Rock";
    } else if (0.34 <= choice <= 0.66) {
        choice = "Paper";
    } else {
        choice = "Scrissors";
    }
    
}


    function userChoose() {
        let userChoose = prompt("Do you choose rock, paper or scrissors?");
        userChoose = userChoose.toLowerCase();
        if (userChoose == "rock" || userChoose == "paper" || userChoose == "scissors") {
            return userChoose
        } else {
            alert("Not valid choice"); }

        }
 let userChoose = playerSelection();

    
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
            return "Tie! Proceed to the next round!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "You lost this round";
      } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You lost this round";
      } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "You lost this round";
      } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You won this round";
      } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You won this round";
      } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You won this round"; }
    }
  
  
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));

  function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
     }
  }

