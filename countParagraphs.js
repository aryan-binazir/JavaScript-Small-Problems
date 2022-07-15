let countParagraphs = 0;

function styleNode(node) {
  if (node.tagName === "P") {
    countParagraphs += 1;
  }
}

function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

walk(document.body, styleNode);

console.log(countParagraphs);