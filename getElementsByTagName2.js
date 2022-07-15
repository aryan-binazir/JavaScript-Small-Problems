let pElements = document.getElementsByTagName('p');
pElements = Array.prototype.slice.call(pElements);
pElements.forEach((paragraph) =>
  paragraph.classList.add("article-text")
);