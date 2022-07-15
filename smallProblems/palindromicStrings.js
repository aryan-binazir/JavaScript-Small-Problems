function palindromes(str) {
  return substrings(str).filter(isPalindrome);
}

function substrings(str) {
  let strArr = [...str];
  let substrings = strArr.flatMap((_, idx) => {
    return leadingSubstrings(strArr.slice(idx, strArr.length).join(''));
  });
  return substrings;
}

function leadingSubstrings(str) {
  let resultArr = [];
  for (let length = 1; length <= str.length; length += 1) {
    resultArr.push(str.slice(0, length));
  }
  return resultArr;
}

function isPalindrome(currentStr) {
  if (currentStr.length === 1) return false;
  return currentStr === [...currentStr].reverse().join('');
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]