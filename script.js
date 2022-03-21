function computerPlay() {
  const MIN_NUM = 0;
  const MAX_NUM = 3;

  let computerRes = Math.floor(Math.random() * (MAX_NUM - MIN_NUM));

  switch (computerRes) {
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

  return computerSelection;
}

function playerPlay() {
  let promptFormat = prompt("Rock, Paper or Scissors?");
  let playerError = "Rock";
  let playerSelection =
    promptFormat.charAt(0).toUpperCase() +
    promptFormat.substring(1).toLowerCase();

  if (
    playerSelection === "Rock" ||
    playerSelection === "Paper" ||
    playerSelection === "Scissors"
  ) {
    return playerSelection;
  } else {
    alert("Yikes, you don't know how to play! Let's go with Rock.");
    return playerError;
  }
}

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

function game() {
  let computerScore = 0;
  let playerScore = 0;
  let drawScore = 0;
  for (i = 1; i <= 5; i++) {
    computerSelection = computerPlay();
    playerSelection = playerPlay();
    let gameResult = playRound(playerSelection, computerSelection);
    console.log(gameResult);
    if (gameResult.includes("You win!")) {
      playerScore++;
    } else if (gameResult.includes("You tie!")) {
      drawScore++;
    } else {
      computerScore++;
    }
  }
  console.log(computerScore);
  console.log(playerScore);
  console.log(drawScore);

  if (computerScore > playerScore) {
    console.log("You lose best of 5");
  } else if (computerScore === playerScore) {
    console.log("You tie best of 5!");
  } else {
    console.log("You win best of 5!");
  }
}

game();
