class Bookings {
  async cancelBooking(bookingId) {
    try {
      let response = await this.makeRequest('PUT', `/api/bookings/${String(bookingId)}`);
      alert('Succesfully deleted!')
    } catch(err) {
      alert('Deleting failed!')
    }
  }

  async cancelSchedule(scheduleId) {
    try {
      let response = await this.makeRequest('DELETE', `/api/schedules/${String(scheduleId)}`);
      alert('Succesfully deleted!')
    } catch(err) {
      alert('Deleting failed!')
    }
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

new Bookings();