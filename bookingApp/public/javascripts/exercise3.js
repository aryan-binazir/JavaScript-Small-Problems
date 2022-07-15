function makeBooking() {
  let form = document.querySelector('form');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let formData = new FormData(form);
    let json = JSON.stringify(formDataToJson(formData))
    let request = new XMLHttpRequest();
    request.open('POST', '/api/staff_members');
    request.setRequestHeader('Content-Type', 'application/json');

    request.send(json);

    request.addEventListener('load', event => {
      const status = request.status;
      
      if (status === 201) {
        const response = JSON.parse(request.response);
        alert(`Successfully created staff with id: ${response.id}`);
      } else if (status === 400) {
        alert(request.responseText);
      }

    });
  });

}

function formDataToJson(formData) {
  const json = {};
  for (const pair of formData.entries()) {
      json[pair[0]] = pair[1];
  }

  return json;
}

document.addEventListener('DOMContentLoaded', () => {
  makeBooking();
});



