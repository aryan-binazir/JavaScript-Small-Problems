function substr(inputStr, start, length) {
  if (start < 0) {
    start += inputStr.length
  }
  let outputStr = ''

  for (let counter = 0; counter < length; counter++) {
    index = start + counter

    if (inputStr[index] === undefined) {
      break;
    }
    outputStr += inputStr[index]
  }
  return outputStr
}

let string = 'hello world';

console.log(substr(string, 2, 4) == "llo ");
console.log(substr(string, -3, 2) == "rl");
console.log(substr(string, 8, 20) == "rld");
console.log(substr(string, 0, -20) == "");
console.log(substr(string, 0, 0) == "");