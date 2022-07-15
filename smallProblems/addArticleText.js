function findP(node) {
  if (node instanceof HTMLParagraphElement) {
    node.classList.add('article-text');
  }

  let nodes = node.childNodes;
  for (let index = 0; index < nodes.length; index += 1) {
    findP(nodes[index]);
  }
}

findP(document.body);
