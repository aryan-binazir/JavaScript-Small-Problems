let h1 = document.querySelector('#primary_heading');
h1.classList.add('heading');

let ul = document.querySelector('#list');
ul.classList.add('bulleted');

let link = document.querySelector('#toggle');
let div = document.querySelector('#notice');

link.onclick = function(e) {
  e.preventDefault();
  if (div.getAttribute('class') === 'hidden') {
    div.setAttribute('class', 'visible');
  } else {
    div.setAttribute('class', 'hidden');
  }
};

div.onclick = function(e) {
  e.preventDefault();
  div.setAttribute('class', 'hidden');
};

let paragraph = document.querySelector('#multiplication');
console.log(paragraph);
paragraph.textContent = `${13 * 9}`;

let body = document.querySelector('body');
body.setAttribute('id', 'styled');
console.log(body);
