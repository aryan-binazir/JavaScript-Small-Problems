const BLOCK_PAIRS = [['b','o'], ['x','k'], ['d','q'], ['c','p'],
  ['n','a'], ['g','t'], ['r','e'], ['f','s'], ['j','w'], ['h','u'],
  ['v','i'], ['l','y'], ['z','m']];

function isBlockWord(wordStr) {
  wordStr = wordStr.toLowerCase();
  let notAllowed = [];

  for (let index = 0; index < wordStr.length; index += 1) {
    let char = wordStr[index];
    if (notAllowed.includes(char)) return false;
    let blockPairedArr = findPair(char);
    notAllowed.push(blockPairedArr[0]);
    notAllowed.push(blockPairedArr[1]);
  }
  return true;
}

function findPair(char) {
  let returnPair;
  for (let index = 0; index < BLOCK_PAIRS.length; index += 1) {
    let currentArr = BLOCK_PAIRS[index];

    if (currentArr.includes(char)) returnPair = currentArr;
  }
  return returnPair;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false
console.log(isBlockWord('barb'));       // false
console.log(isBlockWord('BARB'));       // false
console.log(isBlockWord(''));       // true