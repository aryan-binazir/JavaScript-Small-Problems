let nodes = document.querySelectorAll('.toctext')
let changeToGreen = true;

for (let index = 0; index < nodes.length; index += 1) {
  if (changeToGreen) {
    nodes[index].style.color = 'green';
  }
  changeToGreen = !changeToGreen;
}