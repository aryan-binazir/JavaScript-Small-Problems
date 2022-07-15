// take 2 element ids and swaps the positiong of the elements represented by the ids

// return true for valid swaps and undefined for invalid

// can assume nodes will have a value for id attribute and two arguements will always be provided.
// If either node doesn't exist, return undefined
// If one node is a child of the other, return undefined

// Algorithm
// assign argument to firstNodeId, secondNodeId
// pull values for firstNode and secondNode
// if either is null then return undefined
// if either is a child of the other then return undefined

function nodeSwap(firstNodeId, secondNodeId) {
  let firstNode = document.getElementById(firstNodeId);
  let secondNode = document.getElementById(secondNodeId);
  if(!firstNode || !secondNode) return undefined;
  if(isDescendant(firstNode, secondNode) || isDescendant(secondNode, firstNode)) {
    return undefined;
  }
  let firstNodeClone = firstNode.cloneNode(true);
  let secondNodeClone = secondNode.cloneNode(true);
  let firstNodeParent = firstNode.parentNode;
  let secondNodeParent = secondNode.parentNode;

  firstNodeParent.replaceChild(secondNodeClone, firstNode);
  secondNodeParent.replaceChild(firstNodeClone, secondNode);
  return true;
}

function isDescendant(firstNode, secondNode) {
  let descendants = Array.from(firstNode.querySelectorAll("*"));
  if (descendants.includes(secondNode)) return true;
}

// Invalid swaps
// at least one of the id attributes doesn't exist
console.log(nodeSwap(1, 20));
// undefined

// at least one of the nodes is a "child" of the other
console.log(nodeSwap(1, 4)); // undefined
console.log(nodeSwap(9, 3)); // undefined

// One swap
console.log(nodeSwap(1, 2)); // true

// multiple swaps
console.log(nodeSwap(3, 1)); //true
console.log(nodeSwap(7, 9)); //true