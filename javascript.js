// requirements 
//  function called getComputerChoice
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

//the old gethumanChoice is no longer needed
//game automatically starts after the player clicks a button

//3. keep scores of the human and computer
// create variables humanScore and computerScore and initialize it with the value 0

let humanScore = 0;
let computerScore = 0;
const displayScore = document.querySelector('.displayScore');
displayScore.textContent= `Your score: ${humanScore}  ;  computer score: ${computerScore}`;


//display messages with every round

const parent = document.querySelector('.parent');
const message = document.createElement("div");

function playRound(humanChoice, computerChoice){

    if((humanChoice=="rock" && computerChoice=="scissors") ||
      (humanChoice=="paper" && computerChoice=="rock") ||
      (humanChoice=="scissors" && computerChoice=="paper"))
        {
        humanScore++;
        message.textContent = `you won ! you played ${humanChoice} and the computer played ${computerChoice}`
        parent.appendChild(message);
        }

    else if(humanChoice == computerChoice)
        {message.textContent =`it's a tie!`
        parent.appendChild(message);
        }

    else 
        {
        computerScore++;
        message.textContent = `you lost ! you played ${humanChoice} and the computer played ${computerChoice}`
        parent.appendChild(message);

        }


        if(humanScore == 5 || computerScore == 5 )
        {
            if(humanScore > computerScore){
                message.textContent = "you won! congratulations 🍪";
            }
            else if (humanScore==computerScore)
            {
                message.textContent = "it's a tie...rematch?";
            }
            else
            message.textContent = "you lost... the computer got your cookie";

        humanScore= 0;
        computerScore= 0;
        }

}

//playGame function no longer needed

    let playerChoice = "";
    const playerButtons = document.querySelectorAll('.playerButton');
    
    playerButtons.forEach( button => {
        button.addEventListener('click', (event) => {
            playerChoice = event.target.value;
            let computerChoice = getComputerChoice();
            playRound(playerChoice, computerChoice)
            displayScore.textContent= `Your score: ${humanScore}  ;  computer score: ${computerScore}`;
        });
    });

