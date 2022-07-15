/* eslint-disable max-lines-per-function */
document.addEventListener('DOMContentLoaded', () => {
  let currentHighlighted;
  let main = document.querySelector('main');
  let aElements = document.querySelector('ul');

  aElements.addEventListener('click', (event) => {
    let hrefArr = String(event.target.closest('a').href).split('#');
    let targetId = hrefArr[hrefArr.length - 1];
    let article = document.querySelector(`#${targetId}`);
    highlightElement(article);
    article.scrollIntoView({ behavior: 'smooth' });
  });

  main.addEventListener('click', (event) => {
    let clicked = event.target.closest('article');
    if (clicked !== null) {
      highlightElement(clicked);
    } else {
      highlightElement(main);
    }
  });

  function highlightElement(element) {
    if (currentHighlighted) {
      currentHighlighted.classList.remove('highlight');
    }
    currentHighlighted = element;
    element.classList.add('highlight');
  }
});