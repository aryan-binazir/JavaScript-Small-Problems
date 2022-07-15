function penultimate(string) {
  let strArr = string.split(' ');
  return strArr[strArr.length - 2];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"