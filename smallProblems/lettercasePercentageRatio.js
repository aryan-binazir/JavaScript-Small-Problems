function letterPercentages(inputStr) {
  let upperCount = 0;
  let lowerCount = 0;
  let neitherCount = 0;

  for (let index = 0; index < inputStr.length; index += 1) {
    let currentChar = inputStr[index];

    if (isAlphabetic(currentChar)) {
      if (isUpperCase(currentChar)) {
        upperCount += 1;
      } else {
        lowerCount += 1;
      }
    } else {
      neitherCount += 1;
    }
  }

  return returnObj(upperCount, lowerCount, neitherCount);
}

function isAlphabetic(char) {
  const ALPHA_ARRAY = 'abcdefghijklmnopqrstuvwxyz'.split('');
  if (typeof char !== 'string') return false;
  return ALPHA_ARRAY.includes(char.toLowerCase());
}

function isUpperCase(char) {
  return char.toUpperCase() === char;
}

function returnObj(upperCount, lowerCount, neitherCount) {
  let total = upperCount + lowerCount + neitherCount;

  return {
    lowercase: parseFloat(lowerCount * 100 / total).toFixed(2),
    uppercase: parseFloat(upperCount * 100 / total).toFixed(2),
    neither: parseFloat(neitherCount * 100 / total).toFixed(2),
  };
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

console.log(letterPercentages('AAAA'));
// { lowercase: "0.00", uppercase: "100.00", neither: "0.00" }