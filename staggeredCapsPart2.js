function staggeredCase(inputStr) {
  let toUpper = true;
  let inputArr = inputStr.split('');

  let transformedArr = inputArr.map(char => {
    let returnChar;

    if (isAlphabetic(char)) {
      returnChar = changeCase(char, toUpper);
      toUpper = !toUpper;
    } else {
      returnChar = char;
    }
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

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"