function getComputerChoice() {
    let choices = ["rock",
    "paper",
    "scissors"]

    let index = Math.floor(Math.random() * 3);
    return choices[index]

}

const computerSelection = getComputerChoice();
const playersSelection = "rock";
console.log(computerSelection)

if (computerSelection === playersSelection) {
    console.log("Draw!")
} else if (computerSelection === "rock") {
    if (playersSelection === "paper") {
        console.log("You win! paper beats rock")
    } else {
        console.log("You lose! rock beats scissors")
    }
} else if (computerSelection === "paper") {
    if (playersSelection === "rock") {
        console.log("You Lose! paper beats rock")
    } else {
        console.log("You win! scissors beats paper")
    }
} else {
    if (playersSelection === "paper") {
        console.log("You Lose! scissors beat paper")
    } else {
        console.log("You win! rock beats scissors")
    }
}
