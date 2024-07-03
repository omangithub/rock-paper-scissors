//check the console is linked correctly

console.log("Hello World")

//define the variables
//the n variable will be an integer, so I must use parseInt. It must be rounded down, so I use math.floor. And it must be a random number between 1-3, so I will use math.random, times by 3 and +1

n = parseInt(Math.floor(Math.random()*3)+1);

let computerChoice = undefined;

// converts the computers random number to a choice

  function getComputerChoice() {
      if (n===1) {
        computerChoice = "rock";
      }else if (n===2) {
        computerChoice = "scissors";
      }else{
        computerChoice = "paper";
      }
    }

getComputerChoice()

  console.log(computerChoice)

//Now I need the users input. Make a function named getHumanChoice. Use prompt to get user's input


function getHumanChoice(rock) {
    var humanChoice = prompt("Choose rock, paper, or scissors :");

        if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You have chosen rock. The computer chose paper. You lose!");
        return;
    }else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You have chosen scissors. The computer chose rock. You lose!");
        return;
    }else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You have chosen paper. The computer chose scissors. You lose!");
        return;
    }else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You have chosen rock. The computer chose scissors. You win!");
        return;
    }else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You have chosen scissors. The computer chose paper. You win!");
        return;
    }else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You have chosen paper. The computer chose rock. You win!");
        return;
    }else{
        humanChoice=false
    }
}

getHumanChoice()

console.log(humanChoice)
