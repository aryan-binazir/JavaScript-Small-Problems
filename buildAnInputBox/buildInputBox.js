document.addEventListener('DOMContentLoaded', () => {
  let textField = document.querySelector('.text-field');
  let body = document.querySelector('body');
  let content = document.querySelector('.content');
  let cursorInterval;
  let focusedTextField;

  textField.addEventListener('click', event => {
    event.stopPropagation()
    textField.classList.add('focused');
    focusedTextField = textField;
    cursorInterval = cursorInterval || setInterval(() => textField.classList.toggle('cursor'), 500);
  });

  document.addEventListener('keydown', event => {
    if (focusedTextField) {
      let keyStroke = event.key;
      if (event.key !== 'Backspace') {
      content.textContent += event.key;
      } else {
        let currentTextLength = content.textContent.length;
        content.textContent = content.textContent.slice(0, currentTextLength - 1);
      }
    }
  });
  
  body.addEventListener('click', event => {
    event.stopPropagation()
    clearInterval(cursorInterval);
    if (focusedTextField) {
      focusedTextField.classList.remove('focused');
      focusedTextField.classList.remove('cursor');
      focusedTextField = null;
    }
  });
});
