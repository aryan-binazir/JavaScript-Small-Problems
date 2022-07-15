document.addEventListener("mousemove", event => { 
  let lastX = String(event.clientX) + "px";
  let lastY = String(event.clientY) + "px";

  let x = document.querySelector('.x');
  x.style.left = lastX;
  x.style.top = lastY;
});

document.addEventListener("keyup", event => {
  let keyStroke = event.key;
  let color;
  
  if (keyStroke === 'r') {
    color = 'red'
  } else if (keyStroke === 'b') {
    color = 'blue'
  } else if (keyStroke === 'g') {
    color = 'green'
  } 
  
  
  if (color) {
    let x = document.querySelector('.x');
    for (let index = 0; index < x.children.length; index += 1) {
      let child = x.children[index];
      child.style.background = color;
    }
  }
});