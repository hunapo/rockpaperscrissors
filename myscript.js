function game(){
  const games = 5; // total games 
  let playerPoints = 0; // player points to start
  let computerPoints = 0; // computer points to start

  for(let i = 0; i < games; i++) {
    // get player answer and store in a variable
    let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    // generate computer answer
    function computerPlay() { return (["paper","scissors","rock"])[Math.random() * 3 | 0]; }
    let computerSelection = computerPlay();

    let round = playRound(playerSelection, computerSelection);
    if(round === "wins"){
      playerPoints++;
      console.log("You Win");
    } else if(round === "loses"){
      computerPoints++;
      console.log("You Lose");
    } else if(round === "ties") {
      console.log("tied");
    } 
  }

  if(playerPoints > computerPoints){
    console.log('');
    console.log("Congratulations!  You beat the computer " + playerPoints + " to " + computerPoints);
  } else {
    console.log("Sorry!  You lost to the computer " + computerPoints + " to " + playerPoints);
  }
} // end game();

// play a round and get winner/loser and result and increment winner's points
function playRound(playerSelection, computerSelection) {  
  if (playerSelection == 'rock') {
    if (computerSelection == 'scissors') {
      return 'wins';
    } else if (computerSelection == 'paper') {
      return 'loses';
    } else {
      return 'ties';
    } 
  }
  if (playerSelection == 'paper') {
    if (computerSelection == 'rock') {
      return 'wins';
    } else if (computerSelection == 'scissors') {
      return 'loses';
    } else {
      return 'ties';
    } 
  }
  if (playerSelection == 'scissors') {
    if (computerSelection == 'rock') {
      return 'loses';
    } else if (computerSelection == 'paper') {
      return 'wins';
    } else {
      return 'ties';
    } 
  }
}
