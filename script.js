let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Function returns a random integer between 0 and 9
const generateTarget = () => {
  return Math.floor(Math.random() * 10)
};

// Function determines which player (human or computer) wins based on which guess is closest to the target. 
const compareGuesses = (human, computer, target) => {
  humanDif = Math.abs(target - human)
  computerDif = Math.abs(target - computer)
  if (humanDif <= computerDif) {
    // human player wins
    // If tied, human player wins
    return true
  } else if (humanDif > computerDif){
    // Computer player wins
    return false
  }
};

// Function increases the winner’s score after each round
const updateScore = winner => {
  if (winner === 'human') {
  humanScore++
} else if (winner === 'computer'){
  computerScore++
}
};

//  Function updates the round number after each round
const advanceRound = () => currentRoundNumber++ ; 

