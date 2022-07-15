
function linkRed(node) {
  if (node.tagName === 'A') {
    node.style.color = 'red';
  }
}

function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

walk(document.body, linkRed);

console.log(images.length);
console.log(pngs.length);