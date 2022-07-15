function substrings(str) {
  let substrings = [];
  for (let index = 0; index < str.length; index += 1) {
    substrings.push(leadingSubstrings(str.slice(index, str.length)));
  }
  return substrings;
}

function leadingSubstrings(str) {
  let resultArr = [];
  for (let length = 1; length <= str.length; length += 1) {
    resultArr.push(str.slice(0, length));
  }
  return resultArr;
}


console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]