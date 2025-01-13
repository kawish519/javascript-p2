function playGame(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let resultMessage = `Jij koos: ${playerChoice}, Computer koos: ${computerChoice}. `;

    if (playerChoice === computerChoice) {
        resultMessage += "Het is een gelijkspel!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        resultMessage += "Jij wint!";
    } else {
        resultMessage += "Computer wint!";
    }

    document.getElementById("result").innerText = resultMessage;
}
