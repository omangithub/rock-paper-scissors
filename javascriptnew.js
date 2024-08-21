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
let roundCounter = 0;

const rockButn = document.querySelector("#rockBtn");
const paperButn = document.querySelector("#paperBtn");
const scissorsButn = document.querySelector("#scissorsBtn");
const resultsP = document.querySelector("#myP");
const humanScoreText = document.querySelector("#huSc");
const CompScoreText = document.querySelector("#CompSc");

rockButn.addEventListener("click", () => {
    humanChoice = "rock";
    playRound();
});

paperButn.addEventListener("click", () => {
    humanChoice = "paper";
    playRound();
});

scissorsButn.addEventListener("click", () => {
    humanChoice = "scissors";
    playRound();
});

function roundCounterFunc() {
    humanScoreText.innerText = humanScore;
    CompScoreText.innerText = computerScore;
  roundCounter ++;
  if (roundCounter === 5) {
    finalScore();
  }
}

//Now I need to define scores and increment them for wins and losses

function playRound() {
  getComputerChoice();
    if (humanChoice == "rock" && computerChoice == "paper") {
    resultsP.innerHTML = "You have chosen rock. The computer chose paper. You lose!";
    computerScore ++;
    roundCounterFunc();
    return ;
    }else if (humanChoice == "scissors" && computerChoice == "rock") {
    resultsP.innerHTML = "You have chosen scissors. The computer chose rock. You lose!";
    computerScore ++;
    roundCounterFunc();
    return ;
    }else if (humanChoice == "paper" && computerChoice == "scissors") {
    resultsP.innerHTML = "You have chosen paper. The computer chose scissors. You lose!";
    computerScore ++;
    roundCounterFunc();
    return ;
    }else if (humanChoice == "rock" && computerChoice == "scissors") {
    resultsP.innerHTML = "You have chosen rock. The computer chose scissors. You win!";
    humanScore ++;
    roundCounterFunc();
    return ;
    }else if (humanChoice == "scissors" && computerChoice == "paper") {
    resultsP.innerHTML = "You have chosen scissors. The computer chose paper. You win!";
    humanScore ++;
    roundCounterFunc();
    return;
    }else if (humanChoice == "paper" && computerChoice == "rock") {
    resultsP.innerHTML = "You have chosen paper. The computer chose rock. You win!";
    humanScore ++;
    roundCounterFunc();
    return;
    }else if (humanChoice == "rock" && computerChoice == "rock") {
    resultsP.innerHTML = "You have chosen rock. The computer chose rock. It's a draw!";
    roundCounterFunc();
    return;
    }else if (humanChoice == "scissors" && computerChoice == "scissors") {
    resultsP.innerHTML = "You have chosen scissors. The computer chose scissors. It's a draw!";
    roundCounterFunc();
    return;
    }else {
    resultsP.innerHTML = "You have chosen paper. The computer chose paper. It's a draw!";
    roundCounterFunc();
    return;
  }
}

function finalScore() {
  if (humanScore > computerScore) {
    resultsP.innerHTML = "You are the champion!!"
  } else if (computerScore> humanScore) {
    resultsP.innerHTML = "Nice try. The Computer reigns supreme!!"
  } else {
    resultsP.innerHTML = "It's a draw. All's fair that ends square!"
  }
}