document.addEventListener("mousemove", event => { 
  let lastX = String(event.clientX) + "px";
  let lastY = String(event.clientY) + "px";

  let x = document.querySelector('.x');
  x.style.left = lastX;
  x.style.top = lastY;
});