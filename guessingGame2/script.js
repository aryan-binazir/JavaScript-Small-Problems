document.addEventListener('DOMContentLoaded', () => {
    
  let answer = Math.floor(Math.random() * 100) + 1;
  let form = document.querySelector('form');
  let input = document.querySelector('#guess');
  let messageToUser = document.querySelector('p');
  let newGame = document.querySelector('a');
  let button = document.querySelectorAll('input')[1];

  function startNewGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    messageToUser.textContent = 'Guess a number!';
    input.value = '';
    button.classList.remove('box-shadow');
    button.disabled = false;
  }

  function validInteger(num) {
    return Number.isInteger(num);
  }
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let guess = Number(input.value);
    let message;

    if (validInteger(guess)){
      if (guess > answer) {
        message = `Answer is lower than ${String(guess)}`;
      } else if (guess < answer) {
        message = `Answer is higher than ${String(guess)}`;
      } else {
        message = 'Your guess is correct!'
        button.classList.add('box-shadow');
        button.disabled = true;
      }
    } else {
      message = 'That is not a valid input!'
    }
    messageToUser.textContent = message;
  });

  newGame.addEventListener('click', (event) => {
    event.preventDefault();
    startNewGame();
  });
})