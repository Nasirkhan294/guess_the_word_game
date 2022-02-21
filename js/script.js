// Global veriables:
const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");


const word = "magnolia";

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
guessButton.addEventListener("click", function(e) {
    e.preventDefault();
    const guess = letterInput.value;
    console.log(guess);
    letterInput.value = "";

})

// validate the input


// make a guess


// players guessed letter

    // clear the first list

// update the word

// check the remaining guesses
