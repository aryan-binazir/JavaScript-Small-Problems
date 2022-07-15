function leadingSubstrings(str) {
  let resultArr = [];
  for (let length = 1; length <= str.length; length += 1) {
    resultArr.push(str.slice(0, length));
  }
  return resultArr;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]