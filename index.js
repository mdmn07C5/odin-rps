function getComputerChoice() {
    const hands = ["rock", "paper", "scissors"]
    return hands[Math.floor(Math.random() * hands.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection)
        return ["tie", playerSelection, computerSelection]

    if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock") 
        return ["player", playerSelection, computerSelection];
  
    return ["computer", playerSelection, computerSelection]
}

function checkResults(result) {
    const winner = result[0]
    
    const id = `#${winner}-score`
    let score = 0

    if (winner === 'player') {
        updateStatus(result);
        score = updateScore(document.querySelector(id));
    } else if (winner === 'computer') {
        updateStatus(result);
        score = updateScore(document.querySelector(id));
    } else {
        updateStatus(result);
    }

    if (score === 5) {
        alert(`${winner} wins the match!`);
    }
}

function updateScore(scoreContainer) {
    const currentScore = Number.parseInt(scoreContainer.textContent);
    scoreContainer.textContent = currentScore + 1;
    return currentScore + 1
}

function updateStatus(result) {
    const statusContainer = document.querySelector('#status');
    text = ``
    if (result[0] === 'tie') 
        text = `it's a tie!`
    else 
        text = `${result[0]} wins! player chose ${result[1]}, computer chose ${result[2]}`
    statusContainer.textContent = text
}

function registerEventsToButtons(){
    const container = Array.from(document.querySelectorAll('#container button'));

    container.forEach((button) => 
    button.addEventListener('click', () => {
        const playerChoice = button.textContent;
        const computerChoice = getComputerChoice();

        let result = playRound(playerChoice, computerChoice);

        checkResults(result);

    }));
}

registerEventsToButtons();