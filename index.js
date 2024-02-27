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

playGame()