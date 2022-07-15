// retrive list of dates with bookings and store in array
// for each booking date, query what bookings exist on that day
// create li item, append ul item then subsequent li items then append to 
// "main-list"



class FindBookings {
  constructor() {
    this.getDatesWithBookings();
    this.ul = document.querySelector('#main-list');

    this.bindEvents();
  }

  bindEvents() {
    this.ul.addEventListener('click', this.showBookings);
  }

  showBookings(event) {
    
    let subUl = event.target.children[0];
    console.log(subUl)
    subUl.style.display = 'block';
  }

  async getDatesWithBookings() {
    let datesWithBookings = await this.makeRequest('GET', '/api/bookings');
    datesWithBookings = Array.prototype.slice.call(datesWithBookings);
    
    datesWithBookings.forEach(date => {
      this.findBookingsOnDate(date);
      
    });
  }

  async findBookingsOnDate(date) {
    let bookings = await this.makeRequest('GET', `/api/bookings/${date}`);
    bookings = Array.prototype.slice.call(bookings);
    this.addBookingsToPage(date, bookings)
  }

  addBookingsToPage(date, bookings) {
    let dateLi = document.createElement('li');
    dateLi.textContent = date;
    let subUl = document.createElement('ul');
    subUl.style.display = 'none';
    this.ul.appendChild(dateLi);
    dateLi.appendChild(subUl);

    bookings.forEach(booking => {
      let bookingLi = document.createElement('li');
      bookingLi.textContent = String(booking).split(',').join(' | ');
      subUl.appendChild(bookingLi);
    });
    console.log(date);
    console.log(bookings);
  }

  makeRequest(method, url, payload = null, responseType = 'json') {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open(method, url);
      if (method === 'POST') {
        request.setRequestHeader('Content-Type', 'application/json');
      }
      request.responseType = responseType;
      request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
          resolve(request.response);
        } else {
          reject({
            message: request.response,
            status: request.status,
            statusText: request.statusText,
          })
        }
      }
      request.onerror = () => {
        reject({
          message: request.response,
          status: request.status,
          statusText: request.statusText,
        })
      }
      request.send(payload);
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new FindBookings();
});
