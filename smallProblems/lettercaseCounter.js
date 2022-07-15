function letterCaseCount(str) {
  let strArr = str.split('');
  let caseHolder = {lowercase: 0, uppercase: 0, neither: 0};

  strArr.forEach(char => {
    if (isUppercase(char)) {
      caseHolder.uppercase += 1;
    } else if (isLowercase(char)) {
      caseHolder.lowercase += 1;
    } else {
      caseHolder.neither += 1;
    }
  });
  return caseHolder;
}

function isUppercase(str) {
  return /[A-Z]/.test(str);
}

function isLowercase(str) {
  return /[a-z]/.test(str);
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }