function multiply(a, b) {
  return a*b;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

console.log('Let\'s multiply two numbers!\n');

let num1 = getNumber('Enter a number.\n');
let num2 = getNumber('Enter another number.\n');

console.log(`The multiplication of ${num1} and ${num2} is ${multiply(num1, num2)}.`);