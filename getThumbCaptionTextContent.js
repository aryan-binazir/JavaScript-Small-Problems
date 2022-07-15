let images = document.querySelectorAll('.thumbcaption');
images = Array.prototype.slice.call(images);
let imageText = images.map(image => image.textContent.trim());