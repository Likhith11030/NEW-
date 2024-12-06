// Select elements
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Result = document.getElementById("player1Result");
const player2Result = document.getElementById("player2Result");
const gameResult = document.getElementById("gameResult");
const rollButton = document.getElementById("rollButton");

// Function to roll the dice
function rollDice() {
  // Generate random numbers for Player 1 and Player 2
  const player1Roll = Math.floor(Math.random() * 6) + 1;
  const player2Roll = Math.floor(Math.random() * 6) + 1;

  // Display the dice rolls
  player1Dice.textContent = `🎲`;
  player2Dice.textContent = `🎲`;
  player1Result.textContent = `Rolled: ${player1Roll}`;
  player2Result.textContent = `Rolled: ${player2Roll}`;

  // Determine the winner
  if (player1Roll > player2Roll) {
    gameResult.textContent = "Player 1 Wins! 🏆";
    gameResult.style.color = "green";
  } else if (player2Roll > player1Roll) {
    gameResult.textContent = "Player 2 Wins! 🏆";
    gameResult.style.color = "blue";
  } else {
    gameResult.textContent = "It's a Tie! 🤝";
    gameResult.style.color = "orange";
  }
}

// Add event listener to the button
rollButton.addEventListener("click", rollDice);
