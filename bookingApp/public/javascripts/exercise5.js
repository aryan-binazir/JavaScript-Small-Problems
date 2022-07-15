class Booking {
  constructor() {
    this.submitButton = document.querySelector('#submit');
    this.availableSchedules = this.fillOptions();

    this.bindEvents();
  }

  bindEvents() {
    this.submitButton.addEventListener('click', this.handleSubmit.bind(this));
  }

  async handleSubmit(event) {
    event.preventDefault();
    let json = this.getJSON();
   
    try {
      let response = await this.makeRequest('POST', '/api/bookings', json, 'text');
      alert("Booked successfully!");
    } catch(error) {
      alert(error.message);
    }
  }

  getJSON() {
    let id = this.getScheduleId();
    let email = document.querySelector('#student_email').value;
    let json = JSON.stringify({ student_email: email, id: id })

    return json;
  }

  getScheduleId() {
    let dropDown = document.querySelector('#schedule-select');
    dropDown = Array.prototype.slice.call(dropDown);
    let selected = dropDown.filter(option => option.selected === true)[0];
    return selected.scheduleId;
  }

  async fillOptions() {
    let scheduleList = await this.requestAvailableSchedules();
    let staffNameList = await this.retrieveStaffNames();
    staffNameList = Array.prototype.slice.call(staffNameList);
    let dropDown = document.querySelector('#schedule-select');

    scheduleList.forEach(schedule => {
      let staffName = this.findStaffName(staffNameList, schedule.id);
      let option = document.createElement('option');
      option.scheduleId = schedule.id;
      option.textContent = `${staffName} | ${schedule.date} | ${schedule.time}`;
      dropDown.appendChild(option);
    });
  }

  async retrieveStaffNames() {
    let staffNames;
    try {
      staffNames = await this.makeRequest('GET', '/api/staff_members');
    } catch(err) {
      alert(err.message);
    }
    return staffNames;
  }

  findStaffName(staffObj, id) {
    let staffName = staffObj.filter(staff => staff.id === id);
    return staffName[0].name;
  }

  async requestAvailableSchedules() {
    let request = await this.makeRequest('GET', '/api/schedules');
    return Array.prototype.slice.call(request);
  }

  makeRequest(method, url, payload = null, responseType = 'json') {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open(method, url);
      request.setRequestHeader('Content-Type', 'application/json');
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
  new Booking();
});
