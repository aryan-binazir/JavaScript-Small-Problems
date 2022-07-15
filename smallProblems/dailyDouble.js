function crunch(inputStr) {
  strArr = inputStr.split('');
  let currentChar;
  let outputStr = '';

  for (let index = 0; index < strArr.length; index++) {
    if (strArr[index] === currentChar) {
      continue;
    } else {
      currentChar = strArr[index];
      outputStr += strArr[index];
    }
  }
  return outputStr;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));     // "4abcabcba"
console.log(crunch('ggggggggggggggg'));     // "g"
console.log(crunch('a'));     // "a"
console.log(crunch(''));     // ""