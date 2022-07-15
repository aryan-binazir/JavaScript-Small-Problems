function sliceTree(startIndex, endIndex) {
  let currentTree = [];
  let start = getNode(startIndex);
  let end = getNode(endIndex);
  if (!(start && end)) return undefined;
  let node = end;

  while(node !== start){
    if (node.tagName === 'BODY') return undefined;
    currentTree.unshift(node.tagName);
    node = node.parentNode;
  } 
  
  currentTree.unshift(node.tagName);

  return currentTree;
}

function getNode(id) {
  return document.getElementById(`${id}`);
}



console.log(sliceTree(1, 4));
// ["ARTICLE", "HEADER", "SPAN", "A"]
console.log(sliceTree(1, 76));
// undefined
console.log(sliceTree(2, 5));
// undefined
console.log(sliceTree(5, 4));
// undefined
console.log(sliceTree(1, 23));
// ["ARTICLE", "FOOTER"]
console.log(sliceTree(1, 22));
// ["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]
console.log(sliceTree(11, 19));;
// ["SECTION", "P", "SPAN", "STRONG", "A"]