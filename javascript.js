


console.log("hello world!!!")

// requirements 
// 1. function called getComputerChoice
//it returns the computer choice using Math.random
// 0 is rock;  1 is paper; 2 is scissors;


function getComputerChoice(){
    let computer_choice_string;
    let computer_choice_int = Math.floor(Math.random() * 3);

    switch (computer_choice_int){
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

//4. create playRound function with 2 parameters: human choice and computer choice
// the human choice is case insensitive 
// the return of this function is a string declaring if the player won or lost 
// and what each of them chose 
// player wins if they played 
// rock against scissors ; paper against rock ; scissors against paper

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice().toLocaleLowerCase();


function playRound(humanChoice, computerChoice){
    let message;

    if((humanChoice=="rock" && computerChoice=="scissors") ||
      (humanChoice=="paper" && computerChoice=="rock") ||
      (humanChoice=="scissors" && computerChoice=="paper"))
        {return message = ` you won ! you played ${humanChoice} and the computer played ${computerChoice}`
        humanScore++;}

    else if(humanChoice == computerChoice)
        {return message ="it's a tie!"}

    else
        {return message = ` you lost ! you played ${humanChoice} and the computer played ${computerChoice}`
        computerScore++;
        }

}

console.log(playRound(humanChoice, computerChoice));
console.log(humanScore);
console.log(computerScore);