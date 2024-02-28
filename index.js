function getComputerChoice() {
    const hands = ["rock", "paper", "scissors"]
    return hands[Math.floor(Math.random() * hands.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection)
        return "It's a tie, WAOW!";

    if (playerSelection === "rock" && computerSelection === "scissors") 
        return "You win!";
    if (playerSelection === "scissors" && computerSelection === "paper") 
        return "You win!";
    if (playerSelection === "paper" && computerSelection === "rock") 
        return "You win!";

    return `You lose, ${computerSelection} beats ${playerSelection}`;
}

function playGame() {
    let rounds = 5
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < rounds; i++) {
        let playerChoice = prompt("Rock, Paper, or Scissors?: ");
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        console.log(result);
        if (result === "You win!") {
            playerScore += 1;
        } else {
            computerScore += 1;
        }
    }
    console.log(`You: ${playerScore}, Computer: ${computerScore}`)
}

const scoreChangedEvent = new CustomEvent('scoreChangedEvent');

function updateScore(scoreContainer) {
    const currentScore = Number.parseInt(scoreContainer.textContent);
    scoreContainer.textContent = currentScore + 1;
}

const container = Array.from(document.querySelectorAll('#container button'));
const playerScoreContainer = document.querySelector('#player-score');
const computerScoreContainer = document.querySelector('#computer-score');
const resultContainer = document.querySelector('#result');
const scoreContainer = document.querySelector('#score');

scoreContainer.addEventListener('scoreChangedEvent', () =>{
    console.log("the score was changed");
})


container.forEach((button) => 
    button.addEventListener('click', () => {
        const playerChoice = button.textContent;
        const computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);

        if (result === 'You win!') {
            updateScore(playerScoreContainer);
            scoreContainer.dispatchEvent(scoreChangedEvent);
        } else if (result !== "It's a tie, WAOW!") {
            updateScore(computerScoreContainer);
            scoreContainer.dispatchEvent(scoreChangedEvent);
        }

        resultContainer.textContent = `
            You chose ${playerChoice}, Computer chose ${computerChoice}.
            ${result}
        `;
    })
)
