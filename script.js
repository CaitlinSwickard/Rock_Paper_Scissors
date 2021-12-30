// variables for game
let wins = 0;
let ties = 0;
let losses = 0;

// array of options for computer to select for game
const options = ["R", "P", "S"];

function playGame() {
  // ask user for their move
  let userChoice = window.prompt("Enter R, P, or S: ");

  // if user canceled game, end the function
  if (!userChoice) {
    return;
  }

  // edge case for if user does not put in capital letters to make computer comparison easier
  userChoice = userChoice.toUpperCase();

  // creates random selection for computer to select
  let index = Math.floor(Math.random() * options.length);
  let computerChoice = options[index];

  window.alert("The computer chose " + computerChoice);

  //  if selection is the same it is a tie
  if (userChoice === computerChoice) {
    ties++;
    window.alert("Its a tie!!")
    // checks win conditions for the player
  } else if (
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice === "P" && computerChoice === "R") ||
    (userChoice === "S" && computerChoice === "P")
  ) {
    wins++;
    window.alert("You win!!")
    // if other conditions fail player losses
  } else {
    losses++;
    window.alert("You lose!!")
  }

  // prints stats 
  window.alert(
    "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
  );

  // ask user to play again
  let playAgain = window.confirm("Play again??")

  if (playAgain) {
    playGame();
  }
};

// init game
playGame();