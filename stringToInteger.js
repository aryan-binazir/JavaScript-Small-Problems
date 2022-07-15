const DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};

function stringToInteger(str) {
  let arrStr = str.split('');
  let outputInt = 0;
  let multiplier = str.length - 1;
  let index = 0;

  for (multiplier; multiplier >= 0; multiplier--) {
    outputInt += Math.pow(10, multiplier) * arrStr[index];
    index += 1;
  }
  return outputInt;
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570