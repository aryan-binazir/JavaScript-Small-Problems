document.addEventListener('DOMContentLoaded', () => {
  let textField = document.querySelector('.text-field');
  let cursor;
  let focusedTextField;
  let content = document.querySelector('.content');
  
  textField.addEventListener('click', (event) => {
    event.stopPropagation();
    textField.classList.add('focused');
    focusedTextField = textField;
    cursor = cursor || setInterval(() => {
      textField.classList.toggle('cursor');
    }, 500)
  });

  document.addEventListener('click', () => {
    textField.classList.remove('focused');
    focusedTextField = null;
    clearInterval(cursor);
    textField.classList.remove('cursor');
  });

  document.addEventListener('keydown', (event) => {
    if (focusedTextField) {
      if (event.key === 'Backspace') {
        content.textContent = content.textContent.slice(0, content.textContent.length - 1);
      } else {
      content.textContent += event.key;
    }
  }
  });
});
