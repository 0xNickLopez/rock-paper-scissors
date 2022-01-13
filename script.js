function computerPlay() {
  const min = 0;
  const max = 3;

  return Math.floor(Math.random() * (max - min));
}

function playerSelection() {
  const playerPrompt = prompt("Rock, Paper or Scissors?");
  const promptFormat =
    playerPrompt.charAt(0).toUpperCase() +
    playerPrompt.substring(1).toLowerCase();

  if (
    promptFormat === "Rock" ||
    promptFormat === "Paper" ||
    promptFormat === "Scissors"
  ) {
    return promptFormat;
  } else {
    alert("Yikes! Choose again.");
  }
   //if function is called again the second pass is classified as undefined
  playerSelection();
}

switch (computerPlay()) {
  case 0:
    computerSelection = "Rock";
    break;
  case 1:
    computerSelection = "Paper";
    break;
  case 2:
    computerSelection = "Scissors";
    break;
}

console.log("Computer selection: " + computerSelection);
console.log("Player selection: " + playerSelection());
