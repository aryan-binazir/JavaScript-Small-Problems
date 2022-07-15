document.addEventListener('DOMContentLoaded', function() {
  let form = document.querySelector('form');
  let input = document.querySelector('#guess');
  let paragraph = document.querySelector('p');
  let link = document.querySelector('a');
  let guessButton = document.querySelector('[type="submit"]')
  let answer;
  let guesses;

  function newGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    guesses = 0;
    guessButton.disabled = false;
    form.reset();
    paragraph.textContent = 'Guess a number from 1 to 100';
  }
  
  form.addEventListener('submit', event => {
    event.preventDefault();

    let guess = Number(input.value);
    let message;

    if (!isValidInteger(guess)) {
      paragraph.textContent = "That is not a valid input!";
    } else {
      guesses += 1;
      
      if (guess === answer) {
        message = `You guessed it! It took you ${guesses} guesses.`;
        guessButton.disabled = true;
      } else if (guess > answer) {
        message = `My number is lower than ${guess}`;
      } else {
        message = `My number is higher than ${guess}`;
      }
      
      paragraph.textContent = message;
    }
  });

  link.addEventListener('click', event => {
    event.preventDefault();
    newGame();
  });
  
  newGame();
});

function isValidInteger(num) {
  return Number.isInteger(num);
}