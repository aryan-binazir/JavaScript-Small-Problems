function swap(str) {
  let sentenceArr = str.split(' ');
  let result = '';
  let resultArr = []
  
  sentenceArr.forEach(function(subarray) {
    // result += swapFirstAndLast(subarray).join('');
    resultArr.push(swapFirstAndLast(subarray).join(''));
  });

  return resultArr.join(' ');
}

function swapFirstAndLast(arr) {
  let resultArr = [...arr];
  [resultArr[0], resultArr[resultArr.length - 1]] = [resultArr[resultArr.length - 1], resultArr[0]]

  return resultArr;
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
