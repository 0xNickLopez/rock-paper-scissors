function computerPlay() {
  const MIN_NUM = 0;
  const MAX_NUM = 3;

  return Math.floor(Math.random() * (MAX_NUM - MIN_NUM));
}

function playerPlay() {
  let playerPrompt = prompt("Rock, Paper or Scissors?");
  let playerError = "Rock";
  let promptFormat =
    playerPrompt.charAt(0).toUpperCase() +
    playerPrompt.substring(1).toLowerCase();

  if (
    promptFormat === "Rock" ||
    promptFormat === "Paper" ||
    promptFormat === "Scissors"
  ) {
    return promptFormat;
  } else {
    alert("Yikes, you don't know how to play! Let's go with Rock.");
    return playerError;
  }
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

playerSelection = playerPlay();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `You tie! ${playerSelection} and ${computerSelection}`;
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == "Paper" && computerSelection === "Rock") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == "Rock" && computerSelection === "Scissors") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

console.log(playRound(playerSelection, computerSelection));
