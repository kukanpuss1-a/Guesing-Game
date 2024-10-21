let randomNum = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const hints = document.getElementById("hints");
const attemptsText = document.getElementById("attempts");

submit.addEventListener("click", checkGuess);

function checkGuess() {
    let userValue = Number(guess.value);
    attempts++;

    if (userValue === randomNum) {
        hints.textContent = "Congratulations! You guessed the number.";
        submit.disabled = true;  // Disable submit after correct guess
    } else if (userValue < randomNum) {
        hints.textContent = "Too low! Try again.";
    } else if (userValue > randomNum) {
        hints.textContent = "Too high! Try again.";
    }

    attemptsText.textContent = `Attempts: ${attempts}`;

    if (attempts >= 10) {
        hints.textContent = "Game over! You've reached the maximum number of attempts.";
        submit.disabled = true;  // Disable submit after 10 attempts
    }
}
