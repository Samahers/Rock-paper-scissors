


console.log("hello world!!!")

// requirements 
// 1. function called getComputerChoice
//it returns the computer choice using Math.random
// 0 is rock;  1 is paper; 2 is scissors;


function getComputerChoice(){
    let computer_choice_string;
    let computer_choice = Math.floor(Math.random() * 3);
    console.log(computer_choice);
    switch (computer_choice){
        case 0 :
            computer_choice_string = "rock";
            break;
        case 1 :
            computer_choice_string = "paper";
            break;
        case 2 :
            computer_choice_string = "scissors"
            break;
    }
    return computer_choice_string;
}

//console.log(getComputerChoice());

//2. create getHumanChoice function 
//prompt human to enter their choice 
//print what they wrote

function getHumanChoice(){
    let playerChoice = prompt(`WELCOME IN A GAME OF ROCK, PAPERS, SCISSORS
type your move`);
    return playerChoice;
}

//console.log(getHumanChoice());


//3. keep scores of the human and computer
// create variables humanScore and computerScore and initialize it with the value 0

let humanScore = 0;
let computerScore = 0;