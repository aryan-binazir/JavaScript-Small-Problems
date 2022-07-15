/* eslint-disable max-lines-per-function */
document.addEventListener('DOMContentLoaded', () => {
  const message = document.querySelector("#message");
  const letters = document.querySelector("#spaces");
  const guesses = document.querySelector("#guesses");
  const apples = document.querySelector("#apples");
  const replay = document.querySelector("#replay");

  let randomWord = function() {
    this.wordDatabase = ['apple', 'banana', 'orange', 'pear'];

    return function () {
      let wordDatabaseLength = this.wordDatabase.length;
      if (wordDatabaseLength === 0) return undefined;
      let index = Math.floor(Math.random() * wordDatabaseLength);
      let word = this.wordDatabase.splice(index, 1)[0];
      return word;
    }
  }();

  function Game() {
    this.incorrect = 0;
    this.MAX_GUESSES = 6;
    this.lettersGuessed = [];
    this.correctSpaces = 0;
    this.word = randomWord();
    this.guessClasses = ['guess_1', 'guess_2', 'guess_3', 'guess_4',
                         'guess_5', 'guess_6', ];
    if (!this.word) {
      this.displayMessage("Sorry, I've run out of words!");
      return this;
    }
    this.word = this.word.split("");
    this.init();
  }

  Game.prototype = {
    createBlanks() {
      let spaces = (new Array(this.word.length + 1)).join("<span></span>");
      let spans = letters.querySelectorAll("span");
      spans.forEach(span => {
        span.parentNode.removeChild(span);
      });
      letters.insertAdjacentHTML('beforeend', spaces);
      this.spaces = document.querySelectorAll("#spaces span");
    },

    displayMessage(text) {
      message.innerText = text;
    },

    isLetter(char) {
      return ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
              'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u' , 'v',
              'w', 'x', 'y', 'z'].includes(char);
    },

    handleKeyup(event) {
      let char = event.key.toLowerCase();
      if (this.isLetter(char)) {
        if (!this.lettersGuessed.includes(char)) {
          this.lettersGuessed.push(char);
          let currentGuess = document.createElement('span');
          currentGuess.innerText = `${char}`;
          guesses.appendChild(currentGuess);
        }
        
        if (this.word.includes(char)) {
          this.placeMatches(char);
        } else {
          apples.classList.add(this.guessClasses.shift());
          this.incorrect += 1;
        }
      }
      this.winner();
      this.loser();
    },

    winner() {
      if (this.word.length === this.correctSpaces) {
        this.displayMessage('You guessed correctly, you win!');
        endGame();
      }
    },

    loser() {
      if (this.incorrect === this.MAX_GUESSES) {
        this.displayMessage('You have run out of Apples, you lose, goodbye!');
        endGame();
      }
    },

    endGame() {
      this.unbindEvents();
      replay.addEventListener('click', this.resetGame.bind(this));
    },

    resetGame(event) {
      event.preventDefault();
      this.bindEvents();
      this.init();
    },

    placeMatches(char) {
      let wordOnScreen = document.querySelectorAll('#spaces span');

      for(let index = 0; index < this.word.length; index += 1) {
        if (this.word[index] === char) {
          wordOnScreen[index].innerText = `${char}`;
          this.correctSpaces += 1;
        }
      }
    },

    bindEvents() {
      document.addEventListener('keyup', this.handleKeyup.bind(this));
    },

    unbindEvents() {
      document.removeEventListener('keyup', this.handleKeyup.bind(this));
    },

    init() {
      this.createBlanks();
      this.bindEvents();
    },
  };

  const game = new Game();
});


