function getComputerChoice() {
    let choices = ["Rock",
    "Paper",
    "Scissors"]

    let index = Math.floor(Math.random() * 3);
    return choices[index]

}

console.log(getComputerChoice())
