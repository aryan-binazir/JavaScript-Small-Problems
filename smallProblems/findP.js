let pElements = [];

function findP(node) {
  for (let index = 0; index < node.childNodes.length; index += 1) {
    let currentChild = node.childNodes[index];
    if (currentChild.tagName === "P") {
      pElements.push(currentChild);
    }
  }
}

findP(document.body);
console.log(pElements);