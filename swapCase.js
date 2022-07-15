function swapCase(inputStr) {
  let inputArr = inputStr.split('');

  let transformedArr = inputArr.map(char => {
    let returnChar = char;
    if (isUpperCase(char)) {
      returnChar = char.toLowerCase();
    } else if (isLowerCase(char)) {
      returnChar = char.toUpperCase();
    }
    return returnChar;
  });
  return transformedArr.join('');
}

function isLowerCase(char) {
  return /[a-z]/.test(char);
}

function isUpperCase(char) {
  return /[A-Z]/.test(char);
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"