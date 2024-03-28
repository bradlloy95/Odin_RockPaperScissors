function getComputerChoice() {
    let choices = ["rock",
    "paper",
    "scissors"]

    

    let index = Math.floor(Math.random() * 3);
    return choices[index]

}
function getPlayerchoice() {
    //let choice = prompt("Pick your hand: ").toLowerCase();
    while (true) {    

        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice
        } else {
            choice = prompt("Invalid hand!! Pick another hand: ").toLowerCase();
        }
    }
}




function playRound(playersSelection, computerSelection) {
    console.log(`computer = ${computerSelection}`)
    if (computerSelection === playersSelection) {
        console.log("Draw!")
        return 0;
    } else if (computerSelection === "rock") {
        if (playersSelection === "paper") {
            console.log("You win! paper beats rock")
            alert("You win! paper beats rock")
            return "win"
        } else {
            console.log("You lose! rock beats scissors")
            alert("You lose! rock beats scissors")
            return "lose"
        }
    } else if (computerSelection === "paper") {
        if (playersSelection === "rock") {
            console.log("You Lose! paper beats rock")
            alert("You Lose! paper beats rock")
            return "lose"

        } else {
            console.log("You win! scissors beats paper")
            alert("You win! scissors beats paper")
            return "win"

        }
    } else {
        if (playersSelection === "paper") {
            console.log("You Lose! scissors beat paper")
            alert("You Lose! scissors beat paper")
            return "lose"

        } else {
            console.log("You win! rock beats scissors")
            alert("You win! rock beats scissors")
            return "win"

        }
    }
}



// function playGame(){
//     let playerScore = 0;
//     let computerScore = 0;

//     console.log(`Player[${playerScore}]-[${computerScore}]Computer`)
//     const computerSelection =  getComputerChoice()
    
    
//     const playersSelection = getPlayerchoice()
//     let result = playRound(playersSelection, computerSelection)

//     if (result === "win") {
//         playerScore ++;
//     } else if (result === "lose") {
//         computerScore ++;
//     }


    // if (playerScore > computerScore) {
    //     console.log("You win!!!!")
    // } else if (playerScore < computerScore) {
    //     console.log("You lose!!!!")
    // } else {
    //     console.log("Draw!!!")
    // }
    
//}

//playGame()

function reset() {
    round = 0;
    computerScore = 0;
    playerScore = 0;
    roundN.textContent = round;
    PlScoreElement.textContent = playerScore;
    CMScoreElement.textContent = computerScore;
}

let playerScore = 0;
let computerScore = 0;
let round = 1;
const PlScoreElement = document.querySelector("#playerScore")
const CMScoreElement = document.querySelector("#computerScore")
const roundN = document.querySelector('#roundN')
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    

    let result = playRound(button.id, getComputerChoice());
    if (result === "win") {
        playerScore += 1;
        PlScoreElement.textContent = playerScore;

    } else if (result === "lose") {
        computerScore += 1;
        CMScoreElement.textContent = computerScore;
    }

    if (playerScore === 2) {
        alert("You win!!")
        reset()
    } else if (computerScore === 2) {
        alert("You Lose!!")
        reset()
    }
    round += 1;
    roundN.textContent = round; 
    
  });
});