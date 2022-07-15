function nodeSwap(id1, id2) {
  let node1 = document.getElementById(id1);
  let node2 = document.getElementById(id2);

  if (!(node1 && node2)) return undefined;
  if (node1.contains(node2) || node2.contains(node1)) return undefined;

  let node1Clone = node1.cloneNode(true);
  let node2Clone = node2.cloneNode(true);

  let node1Parent = node1.parentNode;
  let node2Parent = node2.parentNode;

  node1Parent.replaceChild(node2Clone, node1);
  node2Parent.replaceChild(node1Clone, node2);

  return true;
}

// at least one of the id attributes doesn't exist
console.log(nodeSwap(1, 20));
// undefined

// at least one of the nodes is a "child" of the other
console.log(nodeSwap(1, 4));
// undefined
console.log(undefined);
// undefined

// one swap
console.log(nodeSwap(1, 2));

// multiple swaps
console.log(nodeSwap(3, 1));
console.log(nodeSwap(7, 9));