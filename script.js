function computerPlay() {
  const min = 0;
  const max = 3;

  return Math.floor(Math.random() * (max - min) + min);
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

console.log(computerSelection);
