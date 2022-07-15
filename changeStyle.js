
function styleNode(node) {
  if (node.textContent === 'On the River') {
    node.style.color = "red";
    node.style.fontSize = "48px";
  }
}

function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

walk(document.body, styleNode);