function walk(node) {
  let descendants;
  if (!node.children) {
    return [node.tagName, []];
  }

  descendants = [node];

  for (let index = 0; index < node.children.length; index += 1) {  
    descendants.push(walk(node.children[index]));
  }
  return descendants;
}

function nodesToArr() {
  let nodeArr = walk(document.body);
  return nodeArr;
}

console.log(nodesToArr());