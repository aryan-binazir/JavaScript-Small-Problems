
let link = document.querySelector('#toggle');
let div = document.querySelector('#notice');

link.onclick = function(e) {
  e.preventDefault();
  if (div.getAttribute('class') === 'hidden') {
    div.setAttribute('class', 'visible');
  } else {
    div.setAttribute('class', 'hidden');
  }
}

div.onclick = function(e) {
  e.preventDefault();
  setAttribute('class', 'hidden');
}