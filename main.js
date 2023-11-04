const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const select = document.querySelectorAll("button");
let userChoice;
let computerChoice;

select.forEach(select => select.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    createComputerChoice();
    result();
}))

function createComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3) + 1
    if(randomNumber === 1)
        computerChoice = "rock";
    else if(randomNumber === 2)
        computerChoice = "paper";
    else if(randomNumber === 3)
        computerChoice = "scissors";
    computerChoiceDisplay.innerHTML = computerChoice;
}

function result() {
    if(computerChoice === userChoice)
        resultDisplay.innerHTML = "Draw";
    else if(computerChoice === "rock" && userChoice === "scissors")
        resultDisplay.innerHTML = "Computer win";
    else if(computerChoice === "paper" && userChoice === "rock")
        resultDisplay.innerHTML = "Computer win";
    else if(computerChoice === "scissors" && userChoice === "paper")
        resultDisplay.innerHTML = "Computer win";
    else
        resultDisplay.innerHTML = "You win";
}