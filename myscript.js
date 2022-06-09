function computerPlay() {
    var choice = Math.random();
    if (choice <= 0.34) {
        choice = "Rock";
    } else if (choice <= 0.67) {
        choice = "Paper";
    } else {
        choice = "Scrissors";
    }
    
}

function playRound(playerSelection, computerSelection) {
    // your code here!
  }
  
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));

