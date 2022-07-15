class PhotoGallery {
  constructor() {
    this.thumbnails = document.querySelector('#thumbnails');
    this.mainPhoto = document.querySelector('#main-photo');
    
    let photo1 = document.querySelector('#photo1');
    photo1.classList.add('active');
    
    this.bindEvents();
  }

  bindEvents() {
    this.thumbnails.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick(event) {
    let clicked = event.target;

    if (clicked.tagName === 'IMG') {
      this.resetThumbnails();
      clicked.classList.add('active');
      let clickedSource = clicked.getAttribute('src');
      this.mainPhoto.setAttribute('src', clickedSource); 
    }
  }

  resetThumbnails() {
    let thumbnails = Array.from(this.thumbnails.children);
    thumbnails.forEach(thumbnail => {
      thumbnail.firstElementChild.classList.remove('active');
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new PhotoGallery();
});