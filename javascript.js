


console.log("hello world!!!")

// requirements 
// 1. function called getComputerChoice
//it returns the computer choice using Math.random
// 0 is rock;  1 is paper; 2 is scissors;


function getComputerChoice(){
    let computer_value_String;
    let computer_value = Math.floor(Math.random() * 3);
    console.log(computer_value);
    switch (computer_value){
        case 0 :
            computer_value_String = "rock";
            break;
        case 1 :
            computer_value_String = "paper";
            break;
        case 2 :
            computer_value_String = "scissors"
            break;
    }
    return computer_value_String;
}

//console.log(getComputerChoice());