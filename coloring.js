function colorGeneration(targetGen) {
  walk(document.body, colorNode, targetGen, 0);
}

function colorNode(node) {
  node.classList.add("generation-color");
}

function walk(node, callback, targetGen, currentGen) {
  console.log(currentGen)
  console.log(node)
  if (targetGen === currentGen) callback(node);                                                   // do something with node
  for (let index = 0; index < node.children.length; index += 1) { // for each child node
    walk(node.children[index], callback, targetGen, currentGen+1);                         // recursively call walk()
  }
}

colorGeneration(4);