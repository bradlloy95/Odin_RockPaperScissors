function getComputerChoice() {
    let choices = ["rock",
    "paper",
    "scissors"]

    let index = Math.floor(Math.random() * 3);
    return choices[index]

}

function playRound(playersSelection, computerSelection) {
    if (computerSelection === playersSelection) {
        console.log("Draw!")
        return 0;
    } else if (computerSelection === "rock") {
        if (playersSelection === "paper") {
            console.log("You win! paper beats rock")
            return "win"
        } else {
            console.log("You lose! rock beats scissors")
            return "lose"
        }
    } else if (computerSelection === "paper") {
        if (playersSelection === "rock") {
            console.log("You Lose! paper beats rock")
            return "lose"

        } else {
            console.log("You win! scissors beats paper")
            return "win"

        }
    } else {
        if (playersSelection === "paper") {
            console.log("You Lose! scissors beat paper")
            return "lose"

        } else {
            console.log("You win! rock beats scissors")
            return "win"

        }
    }
}

function getPlayerchoice() {
    let choice = prompt("Pick your hand: ").toLowerCase();
    while (true) {    

        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice
        } else {
            choice = prompt("Invalid hand!! Pick another hand: ").toLowerCase();
        }
    }
}

function playGame(){
    let playerScore = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++) {
        console.log(`Player[${playerScore}]-[${computerScore}]Computer`)
        const computerSelection =  getComputerChoice()
        
        
        const playersSelection = getPlayerchoice()
        let result = playRound(playersSelection, computerSelection)

        if (result === "win") {
            playerScore ++;
        } else if (result === "lose") {
            computerScore ++;
        }
    }

    if (playerScore > computerScore) {
        console.log("You win!!!!")
    } else if (playerScore < computerScore) {
        console.log("You lose!!!!")
    } else {
        console.log("Draw!!!")
    }
    

   

}

playGame()
