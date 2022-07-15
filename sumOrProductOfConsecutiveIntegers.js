let readlineSync = require('readline-sync');

let number = parseInt(readlineSync.question('Enter an integer greater than 0: '));
let sumOrProduct = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product: ');
let operation;
let total;

function computeSum(maxNum) {
  let total = 0;
  for (currentNum = 1; currentNum <= maxNum; currentNum++) {
    total += currentNum;
  }
  return total;
}

function computeProduct(maxNum) {
  let total = 1;
  for (currentNum = 1; currentNum <= maxNum; currentNum++) {
    total *= currentNum;
  }
  return total;
}

if (sumOrProduct === 's') {
  operation = 'sum';
  total = computeSum(number);
} else if (sumOrProduct === 'p') {
  operation = 'product';
  total = computeProduct(number);
}

console.log(`The ${operation} of the integers between 1 and ${number} is ${total}.`);