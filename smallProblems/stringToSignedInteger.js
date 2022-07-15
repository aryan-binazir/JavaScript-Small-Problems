const DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};

function stringToSignedInteger(str) {
  let arrStr = str.split('');
  let outputInt = 0;
  let multiplier = str.length - 1;
  let index = 0;
  let numNegative = false;

  if (arrStr[0] === '-') {
    numNegative = true;
    arrStr.splice(0, 1);
    multiplier -= 1;
  } else if (arrStr[0] === '+') {
    arrStr.splice(0, 1);
    multiplier -= 1;
  }

  for (multiplier; multiplier >= 0; multiplier--) {
    outputInt += Math.pow(10, multiplier) * arrStr[index];
    index += 1;
  }

  if (numNegative) {
    outputInt *= -1;
  }
  return outputInt;
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100