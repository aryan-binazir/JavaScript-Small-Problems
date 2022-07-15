function sumSquareDifference(inputNum) {
  let squareOfSum = calcSquareOfSum(inputNum);
  let sumOfSquares = calcSumOfSquares(inputNum);

  return squareOfSum - sumOfSquares;
}

function calcSquareOfSum(inputNum) {
  let arrOfIntegers = [];
  for (let num = 1; num <= inputNum; num += 1) {
    arrOfIntegers.push(num);
  }

  return (arrOfIntegers.reduce((sum, num) => sum + num)) ** 2;
}

function calcSumOfSquares(inputNum) {
  let arrOfIntegers = [];
  for (let num = 1; num <= inputNum; num += 1) {
    arrOfIntegers.push(num ** 2);
  }
  return arrOfIntegers.reduce((sum, num) => sum + num );
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150