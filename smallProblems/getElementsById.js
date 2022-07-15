function getElementsByTagName(tag) {
  let pElements = [];
  walk(document.body, (node) => {
    if (node.tagName === tag.toUpperCase()) {
      pElements.push(node);
    }
  });
  return pElements;
}

function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

let pElements = getElementsByTagName('p');
console.log(pElements);
pElements.forEach(element => element.classList.add('article-text'));

