
function startCounting() {
  let number = 0;
  return setInterval(() => {
    console.log(`${number}`);
    number += 1;
  }, 1000);
}

function stopCounting(id) {
  clearInterval(id);
}

let interval = startCounting();
// stopCounting(interval);