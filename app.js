let userScore = 0;
let computerScore = 0;
const userScore_span =document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_span = document.getElementById("rock");
const paper_span = document.getElementById("paper");
const scissors_span = document.getElementById("scissors");

function getComputerChoice() {
const choices = ["rock", "paper","scissors"];
const randomNumber = Math.floor(Math.random() *  3);
return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "rock") return "Rock";
    if (letter === "paper") return "Paper";
    return "Scissors";
}


function wins(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "Kamu Menang!" ;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "Kamu Kalah!"
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "Draw!" ;
}



function game(userChoice) {
    const computerChoices = getComputerChoice();
    switch (userChoice + computerChoices) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
        wins();
        break;
        
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
        lose()   
        break;

        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        draw();    
        break;
        
}
}


function main() {
    rock_span.addEventListener ('click', function() {
        game("rock");})
    paper_span.addEventListener ('click', function() {
        game("paper");})
    scissors_span.addEventListener ('click', function() {
        game("scissors");})
 }

 main();




























