let header = document.querySelectorAll('header');
let clonedHeader = header[1].cloneNode(true);
let body = document.querySelector('body');

header[1].remove();
body.insertAdjacentElement('afterbegin', clonedHeader);

let h1 = document.querySelector('h1');
let clonedH1 = h1.cloneNode(true);
let newHeader = document.querySelector('header');

h1.remove();
newHeader.insertAdjacentElement('afterbegin', clonedH1);

let [ chinStickFigure, babyMopFigure ] = document.querySelectorAll("figure");
let babyMopImage = chinStickFigure.querySelector("img");
let chinStickImage = babyMopFigure.querySelector("img");
chinStickFigure.insertBefore(chinStickImage, chinStickFigure.firstChild);
babyMopFigure.insertBefore(babyMopImage, babyMopFigure.firstChild);

let article = document.querySelector("article");
article.insertBefore(chinStickFigure, null);
article.insertBefore(babyMopFigure, null);