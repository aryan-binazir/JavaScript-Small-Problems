class ScheduleAdder {
  constructor() {
    this.addButton = document.querySelector('#btnAdd');
    this.submitButton = document.querySelector('#submit');
    this.forms = document.querySelector("div");
    
    this.createDropDown();
    this.bindEvents();
  }

  bindEvents() {
    this.addButton.addEventListener('click', this.addSchedulerOptions.bind(this));
    this.submitButton.addEventListener('click', this.submitForm.bind(this));
  }

  submitForm(event) {
    event.preventDefault();
    this.submitData();
  }

  addSchedulerOptions(event) {
    event.preventDefault();
    let form = this.forms.firstElementChild;
    let newList = this.forms.firstElementChild.cloneNode(true);
    newList.reset();
    this.forms.appendChild(newList);
  }

  async submitData() {
    let data = this.getFormData();
    let json = JSON.stringify(data);
    
    try {
      let request = await this.makeRequest('POST', '/api/schedules', json, 'text');
      alert(request)
      Array.from(document.forms).forEach(form => form.reset());
    } catch(error) {
      alert(error.message)
    }
  }

  getFormData() {
    let data = { schedules: [] };
    let forms = Array.from(document.forms);
    forms.forEach(form => {
      let formData = new FormData(form);
      let jsonData = this.convertToJson(formData);
      data.schedules.push(jsonData);
    });
    return data;
  }

  convertToJson(formData) {
    let json = {};
    for(const pair of formData.entries()) {
      json[pair[0]] = pair[1];
    };
    return json;
  }

  async createDropDown() {
    let dropDown = document.querySelector('.staff-dropdown');
    let optionList = await this.createStaffList();
    optionList.forEach(option => {
      dropDown.appendChild(option);
    })
  }

  async createStaffList() {
    let staff = await this.retrieveStaff();
    staff = Array.prototype.slice.call(staff);

    let staffOptionList = staff.map(staff => {
      let option = document.createElement('option');
      option.textContent = staff.name
      return option;
    });
    return staffOptionList;
  }

  async retrieveStaff() {
    try {
      let response = await this.makeRequest('GET', '/api/staff_members');
      return response;
    } catch(e) {
      alert(e.message);
    }
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
  const App = new ScheduleAdder();
})