const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function signedIntegerToString(num) {
  let result = '';
  let numNegative = false;

  if (num === 0) {
    return '0'
  }

  if (num < 0) {
    numNegative = true;
    num *= -1;
  }

  do {
    let remainder = num % 10;
    num = Math.floor(num / 10);
    result = DIGITS[remainder] + result;
  } while (num > 0)
  
  if (numNegative) {
  return '-'.concat(result);
  } else {
    return '+'.concat(result);
  }
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"