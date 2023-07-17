const getComputerChoice = () => {
  const choice = Math.floor(Math.random() * 3) + 1;
  return choice;
};

const getPlayerChoice = (selection) => {
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
  const resultp = document.getElementById("results");

  if (playerSelection == computerSelection) {
    resultp.textContent = `Draw. ${playerChoice} and ${computerChoice} are equal.`;
    return 0;
  } else if (
    playerSelection - computerSelection == 1 ||
    playerSelection - computerSelection == -2
  ) {
    resultp.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
    return 1;
  } else {
    resultp.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
    return -1;
  }
};

const btns = document.querySelectorAll("button");
const winp = document.getElementById("winValue");
const lossp = document.getElementById("lossValue");
const winner = document.getElementById("winner");

let winTally = 0;
let lossTally = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let result = playRound(getPlayerChoice(btn.id), getComputerChoice());
    switch (result) {
      case 0:
        return;
      case 1:
        winTally += 1;
        winp.textContent = winTally;

        if (winTally == 5) {
          winner.textContent = "Player Wins!";
        }
        return;
      case -1:
        lossTally += 1;
        lossp.textContent = lossTally;

        if (lossTally == 5) {
          winner.textContent = "Computer Wins!";
        }
        return;
    }
  });
});

if (winTally == 5 || lossTally == 5) {
  console.log(winTally);
  winner.textContent = `${winTally == 5 ? "Player Wins!" : "Computer Wins!"}`;
}
