let firstWords = [];

function styleNode(node) {
  if (node.tagName === "P") {
    let text = node.firstChild.data.trim();
      firstWords.push(text.split(' ')[0])
    }
}

function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

walk(document.body, styleNode);

console.log(firstWords);