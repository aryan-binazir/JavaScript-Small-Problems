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


console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]