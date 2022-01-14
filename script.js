function computerPlay() {
  const min = 0;
  const max = 3;

  return Math.floor(Math.random() * (max - min));
}

function playerSelection() {
  let playerPrompt = prompt("Rock, Paper or Scissors?");
  let playerError = "Rock"
  let promptFormat = playerPrompt.charAt(0).toUpperCase() +
    playerPrompt.substring(1).toLowerCase();

  if (promptFormat === "Rock" || promptFormat === "Paper" || promptFormat === "Scissors") {
    return promptFormat;
  } else {
    alert("Yikes, you don't know how to play! Let's go with Rock.");
    return playerError;
  };
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
