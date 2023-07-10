const getComputerChoice = () => {
  const choice = Math.floor(Math.random() * 3) + 1;
  return choice;
};

const getPlayerChoice = () => {
  let selection = prompt("Type Rock, Paper or Scissors to play.");
  selection = selection.toLowerCase();
  switch (selection) {
    case "rock":
      return 1;
    case "paper":
      return 2;
    case "scissors":
      return 3;
  }
};

const choiceMap = (choice) => {
  switch (choice) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
};

const playRound = (playerSelection, computerSelection) => {
  const playerChoice = choiceMap(playerSelection);
  const computerChoice = choiceMap(computerSelection);

  if (playerSelection == computerSelection) {
    console.log(
      "Draw. " + playerChoice + " and " + computerChoice + " are equal."
    );
    return 0;
  } else if (
    playerSelection - computerSelection == 1 ||
    playerSelection - computerSelection == -2
  ) {
    console.log("You win!. " + playerChoice + " beats " + computerChoice);
    return 1;
  } else {
    console.log("You lose!. " + computerChoice + " beats " + playerChoice);
    return -1;
  }
};

const game = () => {
  for (let i = 1; i <= 5; i++) {
    playRound(getPlayerChoice(), getComputerChoice());
  }
};

game();
