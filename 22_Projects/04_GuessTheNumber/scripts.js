let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = false;

submit.addEventListener('click', (e) => {
    e.preventDefault();
    validateGuess();
});

function validateGuess() {
    if (isNaN(userInput.value)) {
        alert('Please enter a valid number');
    } else if (userInput.value < 1 || userInput.value > 100) {
        alert('Please enter a number between 1 and 100');
    } else {
        playGame = true;
        const guess = parseInt(userInput.value);
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over! Number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        };
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Congratulations! You guessed the number!`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Too low! Try again!`);
    } else {
        displayMessage(`Too High! Try again!`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.disabled = true;
    submit.disabled = true;
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', () => {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        lowOrHi.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.disabled = false;
        submit.disabled = false;
        p.parentNode.removeChild(p);
    });
}
