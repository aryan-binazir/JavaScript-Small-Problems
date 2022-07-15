let first = true;

function addStanza(node) {
  if ((!first) && node.tagName === "P") {
    node.classList.add('stanza');
  }
  first = false;
}

function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

walk(document.body, addStanza);