function findFibonacciIndexByLength(lengthToFind) {
  let counter = 2n;
  let fibonacci = 1n;
  let prevNum = 1n;

  while (String(fibonacci).length != lengthToFind) {
    let tempNum = fibonacci;
    fibonacci = fibonacci + prevNum;
    prevNum = tempNum;
    counter += 1n;
  }
  return counter;
}

console.log(findFibonacciIndexByLength(2n) === 7n);  
console.log(findFibonacciIndexByLength(3n) === 12n);
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);