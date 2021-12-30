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
 }