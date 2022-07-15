function getSchedules() {
  const scheduleCount = {};
  let request = new XMLHttpRequest();
  request.open('GET', 'http://localhost:3000/api/schedules');
  request.timeout = 5000;

  request.addEventListener('load', event => {
    let data = JSON.parse(request.response);
    
    data = data.filter(schedule => schedule.student_email === null);

    if (data.length < 1) {
      alert('There are no schedules available for booking.')
      return;
    }

    data.forEach(schedule => {
      console.log(schedule);
      if (scheduleCount[schedule.staff_id]) {
        scheduleCount[schedule.staff_id] += 1;
      } else {
        scheduleCount[schedule.staff_id] = 1;
      }
    })
    
    let outputArr = [];
    Object.keys(scheduleCount).forEach(staff_id => {
      outputArr.push(`staff ${staff_id}: ${scheduleCount[staff_id]}`);
    });
    alert(outputArr.join("\n"));
  });

  request.addEventListener('timeout', event => {
    alert('It is taking longer than usual, please try again later.')
  });
  
  request.addEventListener('loadend', event => {
    alert('The request has completed.');
  });

  request.send();
}

document.addEventListener('DOMContentLoaded', () => {
  getSchedules();
})

