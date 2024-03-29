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
    let result = document.createElement('h3');
    console.log(`computer = ${computerSelection}`)
    if (computerSelection === playersSelection) {
        console.log("Draw!")
        result.textContent = "Draw!"
        result.style.color = 'yellow'
        resultsContainer.replaceChildren(result)
        return 0;
    } else if (computerSelection === "rock") {
        if (playersSelection === "paper") {
            console.log("You win! paper beats rock")
            result.textContent = "You win! paper beats rock"
            result.style.color = 'green'
            resultsContainer.replaceChildren(result)
            return "win"
        } else {
            console.log("You lose! rock beats scissors")
            result.textContent = "You lose! rock beats scissors"
            result.style.color = 'red'
            resultsContainer.replaceChildren(result)
            return "lose"
        }
    } else if (computerSelection === "paper") {
        if (playersSelection === "rock") {
            console.log("You Lose! paper beats rock")
            result.textContent = "You Lose! paper beats rock"
            result.style.color = 'red'
            resultsContainer.replaceChildren(result)
            return "lose"

        } else {
            console.log("You win! scissors beats paper")
            result.textContent = "You win! scissors beats paper"
            result.style.color = 'green'
            resultsContainer.replaceChildren(result)
            return "win"

        }
    } else {
        if (playersSelection === "paper") {
            console.log("You Lose! scissors beat paper")
            result.textContent = "You Lose! scissors beat paper"
            result.style.color = 'red'
            resultsContainer.replaceChildren(result)
            return "lose"

        } else {
            console.log("You win! rock beats scissors")
            result.textContent = "You win! rock beats scissors"
            result.style.color = 'green'
            resultsContainer.replaceChildren(result)
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
    resultsContainer.replaceChildren();
    buttonContainer.style.display = "";
}

let playerScore = 0;
let computerScore = 0;
let round = 1;
const PlScoreElement = document.querySelector("#playerScore");
const CMScoreElement = document.querySelector("#computerScore");
const roundN = document.querySelector('#roundN');
const resultsContainer = document.querySelector('#results');
const playAgain = document.createElement('button');
const buttonContainer = document.querySelector('.buttonsContainer');
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");
let gameOver = document.createElement('h1');

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

   
    playAgain.innerHTML = "Play again"
    playAgain.setAttribute("id", "playAgain")


    if (playerScore === 3) {
        gameOver.textContent = "You Win the game!";
        gameOver.style.cssText = "font-weight: bold; color: green;"
        buttonContainer.style.display = "none"
        resultsContainer.appendChild(gameOver);
        resultsContainer.appendChild(playAgain);

        playAgain.addEventListener("click", () => {
            reset();
        });
        
        //reset()
    } else if (computerScore === 3) {
        gameOver.textContent = "You Lost the game!";
        gameOver.style.cssText = "font-weight: bold; color: red;"
        buttonContainer.style.display = "none"
        resultsContainer.appendChild(gameOver);
        resultsContainer.appendChild(playAgain);

        playAgain.addEventListener("click", () => {
            reset();
        });
               //reset()
    }
    round += 1;
    roundN.textContent = round; 

    
  });
});

