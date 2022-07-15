function maxRotation(num) {
  let numStr = rotateString(String(num));

  for (let index = 1; index < numStr.length; index += 1) {
    numStr = numStr.slice(0,index).concat(rotateString(numStr.slice(index, numStr.length)));
  }
  return Number(numStr);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845