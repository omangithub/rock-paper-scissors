//check the console is linked correctly

console.log("Hello World")

//define the variables
//the n variable will be an integer, so I must use parseInt. It must be rounded down, so I use math.floor. And it must be a random number between 1-3, so I will use math.random, times by 3 and +1

n = 0


let computerChoice = undefined;

// converts the computers random number to a choice

  function getComputerChoice() {
    n = parseInt(Math.floor(Math.random()*3)+1);
      if (n===1) {
        computerChoice = "rock";
      }else if (n===2) {
        computerChoice = "scissors";
      }else{
        computerChoice = "paper";
      }
    }

//Now I need the users input. Make a function named getHumanChoice. Use prompt to get user's input

let humanChoice=undefined
let computerScore = 0;
let humanScore = 0;

/*const btn = document.querySelectorAll("button");
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
*/

function getHumanChoice() {
  /*rockBtn.addEventListener("click", () => {
    console.log("human rock");
    humanChoice = "rock";
  });
  paperBtn.addEventListener("click", () => {
    console.log("human paper");
    humanChoice = "paper";
  });
  scissorsBtn.addEventListener("click", () => {
    console.log("human scissors")
    humanChoice = "scissors";
  });*/
  humanChoice = prompt("Choose rock, paper, or scissors :");
  humanChoice = humanChoice.toLowerCase();
}

//Now I need to define scores and increment them for wins and losses



btn.forEach((button) => {
  button.addEventListener("click", playRound)});

function playRound() {
  getComputerChoice();
  getHumanChoice();
  if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("You have chosen rock. The computer chose paper. You lose!");
    computerScore ++;
    return ;
  }else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("You have chosen scissors. The computer chose rock. You lose!");
    computerScore ++;
    return ;
  }else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("You have chosen paper. The computer chose scissors. You lose!");
    computerScore ++;
    return ;
  }else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("You have chosen rock. The computer chose scissors. You win!");
    humanScore ++;
    return ;
  }else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("You have chosen scissors. The computer chose paper. You win!");
    humanScore ++;
    return;
  }else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You have chosen paper. The computer chose rock. You win!");
    humanScore ++;
    return;
  }else if (humanChoice == "rock" && computerChoice == "rock") {
    console.log("You have chosen rock. The computer chose rock. It's a draw!");
    return;
  }else if (humanChoice == "scissors" && computerChoice == "scissors") {
    console.log("You have chosen scissors. The computer chose scissors. It's a draw!");
    return;
  }else if (humanChoice == "paper" && computerChoice == "paper") {
    console.log("You have chosen paper. The computer chose paper. It's a draw!");
    return;
  }else{
    console.log("Do you even know what you are writing? Try again!")
    humanChoice=false
  }
}

//a function for 5 rounds of play

function playGame() {
  playRound();
  console.log(humanScore);
  console.log(computerScore);
  playRound();
  console.log(humanScore);
  console.log(computerScore);
  playRound();
  console.log(humanScore);
  console.log(computerScore);
  playRound();
  console.log(humanScore);
  console.log(computerScore);
  playRound();
  console.log(humanScore);
  console.log(computerScore);
  finalScore();
} 

function finalScore() {
  if (humanScore > computerScore) {
    console.log("You are the champion!!")
  } else if (computerScore> humanScore) {
    console.log("Nice try. The Computer reigns supreme!!")
  } else {
    console.log("It's a draw. All's fair that ends square!")
  }
}

//run the function to play the game

playGame();