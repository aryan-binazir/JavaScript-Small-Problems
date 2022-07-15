function octalToDecimal(numberString) {
  let resultNum = 0;
  let numberArr = numberString.split('').reverse();

  numberArr.forEach((num, index) => {
    resultNum += (Number(num) * Math.pow(8, index));
  });
  return resultNum;
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9