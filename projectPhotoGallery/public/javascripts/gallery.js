class PhotoGallery {
  constructor() {
    this.photoData;
    this.templates = {};
    this.currentPhotoId;

    this.compileHandlebars();
    this.getPhotos();

    this.bindEvents()
  }

  bindEvents = () => {
    document.querySelector('.next').addEventListener('click', this.handleNext);
    document.querySelector('.prev').addEventListener('click', this.handlePrev);
  }

  handleNext = (event) => {
    event.preventDefault()
    let nextPhotoId;
    let currentPhoto = this.photoData.filter(({id}) => id === (this.currentPhotoId))[0];
    let nextPhoto = this.photoData.filter(({id}) => id === (this.currentPhotoId + 1))[0];
    
    
    if (typeof nextPhoto !== 'undefined') {
      nextPhotoId = nextPhoto.id;
    } else {
      nextPhotoId = this.photoData[0].id;
      nextPhoto = this.photoData[0];
    }
    console.log(nextPhoto)
    console.log('curr is ' + currentPhoto)

    this.renderPhotos();
    this.renderPhotoInformation(nextPhotoId);
    this.getPhotoCommentsData(nextPhotoId);
    currentPhoto.classList.add('hide');
    console.log(currentPhoto);
    nextPhoto.classList.remove('show');
    this.currentPhotoId = nextPhotoId;
  }

  handlePrev = (event) => {
    event.preventDefault()
    let prevPhotoId;
    let currentPhoto = this.photoData.filter(({id}) => id === (this.currentPhotoId))[0];
    let prevPhoto = this.photoData.filter(({id}) => id === (this.currentPhotoId - 1))[0];

    if (typeof prevPhoto !== 'undefined') {
      prevPhotoId = prevPhoto.id;
    } else {
      prevPhotoId = this.photoData[0].id;
      console.log(prevPhotoId)
    }
    this.renderPhotos();
    this.renderPhotoInformation(prevPhotoId);
    this.getPhotoCommentsData(prevPhotoId);
    currentPhoto.classList.add('hide');
    prevPhoto.classList.remove('show');
    this.currentPhotoId = prevPhotoId;
  }

  compileHandlebars() {
    document.querySelectorAll("script[type='text/x-handlebars']").forEach(tmpl => {
      this.templates[tmpl["id"]] = Handlebars.compile(tmpl["innerHTML"]);
    });
    
    document.querySelectorAll("[data-type=partial]").forEach(tmpl => {
      Handlebars.registerPartial("comment", tmpl["innerHTML"]);
    });
  }

  async getPhotos() {
    try {
      const response = await fetch('/photos', {
        method: 'GET',
      });

      if (response.ok) {
        console.log(`Got response: ${response.status}`);
        let data = await response.json();
        this.photoData = data;
        this.renderPhotos();
        const firstPhotoId = this.photoData[0].id;
        this.renderPhotoInformation(firstPhotoId);
        await this.getPhotoCommentsData(firstPhotoId);
        this.currentPhotoId = firstPhotoId;
      } else {
        console.log(`Got response: ${response.status}`)
      }
    } catch(error) {
      console.log(`fetch failed: ${error}`)
    }
  }

  clearContents(element) {
    while (element.firstChild) { element.removeChild( element.firstChild )};
  }

  async getPhotoCommentsData(idx) {
    try {
      const response = await fetch(`/comments?photo_id=${idx}`, {
        method: 'GET',
      });

      if (response.ok) {
        console.log(`Got response: ${response.status}`);
        let commentsJson = await response.json();
        console.log(commentsJson)
        let commentList = document.querySelector("#comments ul");
        this.clearContents(commentList);
        commentList.insertAdjacentHTML('beforeend', this.templates.photo_comments({ comments: commentsJson }))
      } else {
        console.log(`Got response: ${response.status}`)
      }
    } catch(error) {
      console.log(`fetch failed: ${error}`)
    }
  }

  renderPhotos() {
    let slides = document.getElementById('slides');
    slides.insertAdjacentHTML('beforeend', this.templates.photos({ photos: this.photoData }));
  }

   renderPhotoInformation(idx) {
    let photo = this.photoData.filter(item => {
      return item.id === idx;
    })[0];
    let header = document.querySelector("section > header");
    this.clearContents(header);
    header.insertAdjacentHTML('beforeend', this.templates.photo_information(photo));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let app = new PhotoGallery();
})