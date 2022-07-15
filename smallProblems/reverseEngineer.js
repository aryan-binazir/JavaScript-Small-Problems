document.querySelector('html').addEventListener('click', (event) => {
  const container = document.querySelector('#container');

  if (!container.includes(event.target)) {
    container.style = 'display: none';
  }
});
