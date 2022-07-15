function staggeredCase(inputStr) {
  let toUpper = true;
  let inputArr = inputStr.split('');

  let transformedArr = inputArr.map(char => {
    let returnChar;

    if (isAlphabetic(char)) {
      returnChar = changeCase(char, toUpper);
    } else {
      returnChar = char;
    }
    toUpper = !toUpper;
    return returnChar;
  });
  return transformedArr.join('');
}

function isAlphabetic(char) {
  return /[a-z]/i.test(char);
}

function changeCase(char, toUpper) {
  let returnChar;

  if (toUpper) {
    returnChar = char.toUpperCase();
  } else {
    returnChar = char.toLowerCase();
  }
  return returnChar;
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"