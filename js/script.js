// Global veriables:
const guessedLettersElement = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");


const word = "magnolia";
const guessedLetters = [];

const placeholder = function(word) {
    let placeholderLetters = [];

    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
}

// Fire off the game
placeholder(word);

// Display the symbols as placeholder for the chosen word's letters


// Event Listener
guessButton.addEventListener("click", (e) => {
    e.preventDefault();
    // Empty message paragraph
    message.innerText = "";
    // Let's grab what was entered in the input
    const guess = letterInput.value;
    // Let's make sure that it is a single letter
    const goodGuess = validateInput(guess)

    if (goodGuess) {
        // We've got a letter! Let's guess!
        makeGuess(guess)
    }
    letterInput.value = "";
})

// validate the input
const validateInput = (input) => {
    const acceptedLetter = /[a-zA-Z]/;
    
    if (input.length === 0) {
        // Is the input empty
        message.innerText = "Please enter a letter";
    } else if (input.length > 1) {
        // Did you entered more than one letter
        message.innerText = "Please enter a single letter";
    } else if (!input.match(acceptedLetter)) {
        // Did you type a number, a special character or some other non letter thing?
        message.innerText = "Please enter a letter from A to Z.";
    } else {
        // We finally got a single letter, omg yay
        return input
    }
}


// make a guess
const makeGuess = (guess) => {
    guess = guess.toUpperCase();

    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessed that letter, silly. Try again.";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
}

// players guessed letter

    // clear the first list

// update the word

// check the remaining guesses
