let images = [];
let pngs = [];

function change(node) {
  if (node.tagName === "IMG") {
    images.push(node);
    let src = node.src.split('.');
    if (src[src.length - 1] === 'png') {
      pngs.push(node);
    }
  }
  first = false;
}

function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

walk(document.body, change);

console.log(images.length);
console.log(pngs.length);