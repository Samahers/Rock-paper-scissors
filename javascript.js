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




//2. create getHumanChoice function 
//prompt human to enter their choice 
//print what they wrote



function getHumanChoice(){
    // let playerChoice = prompt(`type your choice: rock, paper, scissors`);
    // return playerChoice;
}



    let playerChoice = "";
    const playerButtons = document.querySelectorAll('.playerButton');
    
    playerButtons.forEach( button => {
        button.addEventListener('click', (event) => {
            playerChoice = event.target.value;
            let computerChoice = getComputerChoice();
            playRound(playerChoice, computerChoice)
        });
    });


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

//const computerChoice = getComputerChoice();
//const humanChoice = getHumanChoice().toLocaleLowerCase();

    const parent = document.querySelector('.parent');
    const message = document.createElement("div");

function playRound(humanChoice, computerChoice){

    if((humanChoice=="rock" && computerChoice=="scissors") ||
      (humanChoice=="paper" && computerChoice=="rock") ||
      (humanChoice=="scissors" && computerChoice=="paper"))
        {
        humanScore++;
        message.textContent = `you won ! you played ${humanChoice} and the computer played ${computerChoice}
your score is ${humanScore}; the computer score is ${computerScore}`
        parent.appendChild(message);
        }

    else if(humanChoice == computerChoice)
        {message.textContent =`it's a tie!
your score is ${humanScore}; the computer score is ${computerScore}`
        parent.appendChild(message);
        }

    else
        {
        computerScore++;
        message.textContent = `you lost ! you played ${humanChoice} and the computer played ${computerChoice}
your score is ${humanScore}; the computer score is ${computerScore}`
        parent.appendChild(message);

        }

}

 //console.log(playRound(humanChoice, computerChoice));
 //console.log(humanScore);
 //console.log(computerScore);

//create a playGame function where the game ends when you played 5 rounds 


// function playGame(){
//     alert(`WELCOME IN A GAME OF ROCK, PAPER, SCISSORS
// you will play 5 rounds, the one who scores the most...
// wins a cookie !! 
// note: typos will grant the computer points, be careful `)


//         let humanChoice = getHumanChoice().toLocaleLowerCase();
//         let computerChoice = getComputerChoice();
//         //console.log(computerChoice);
//         alert(playRound(humanChoice,computerChoice));
//         round++;
//     }

//     if(humanScore > computerScore){
//         alert("you won! congratulations 🍪")
//     }
//     else if (humanScore==computerScore)
//     {
//         alert("it's a tie...rematch?")
//     }
//     else
//         alert("you lost... the computer got your cookie")


// playGame();



//------ adding UI


