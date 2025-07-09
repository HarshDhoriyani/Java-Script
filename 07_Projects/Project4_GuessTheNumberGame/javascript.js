let randomNum = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector('#submt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('div');
p.classList.add('button');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value.trim());
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number between 1 and 100.');
    } else if (guess < 1 || guess > 100) {
        alert('Number must be between 1 and 100.');
    } else {
        prevGuess.push(guess);
        if (numGuess === 10) {
            displayGuess(guess);
            displayMessage(`Game Over! The number was ${randomNum}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage('🎉 Congratulations! You got it right!');
        endGame();
    } 
    else if (guess < randomNum && (randomNum - guess) >= 20) {
        displayMessage('Your guess is too low!');
        lowOrHi.textContent = 'Last guess was too low!';
    } 
    else if (guess < randomNum && (randomNum - guess) < 20) {
        displayMessage('Your guess is low!');
        lowOrHi.textContent = 'Last guess was low!';
    } 
    else if (guess > randomNum && (guess - randomNum) >= 20) {
        displayMessage('Your guess is too high!');
        lowOrHi.textContent = 'Last guess was too high!';
    }
    else if (guess > randomNum && (guess - randomNum) < 20) {
        displayMessage('Your guess is high!');
        lowOrHi.textContent = 'Last guess was high!';
    }
    numGuess++;
    userInput.value = '';
    userInput.focus();
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    remaining.innerHTML = `${10 - prevGuess.length}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.innerHTML = `<button id="newGame">Start New Game</button>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function () {
        randomNum = Math.floor(Math.random() * 100) + 1;
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = '10';
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        lowOrHi.textContent = '';
        playGame = true;
    });
}
