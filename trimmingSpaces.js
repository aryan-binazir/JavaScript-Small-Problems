function trim(str) {
  if (!str) {
    return ("");
  }
  
  let trimLeft = findLeft(str);
  let trimRight = findRight(str);
  return (str.slice(trimLeft, trimRight));
}

function findLeft(str) {
  let currentChar = 0
  while (str[currentChar] === ' ') {
    currentChar += 1;
  }
  return currentChar;
}

function findRight(str) {
  let currentChar = str.length - 1
  while (str[currentChar] === ' ') {
    currentChar -= 1;
  }
  return currentChar + 1;
}


console.log(trim('  abc  ') == "abc");
console.log(trim('abc   ') == "abc");
console.log(trim(' ab c') == "ab c");
console.log(trim(' a b  c') == "a b  c");
console.log(trim('      ') == "");
console.log(trim('') == "");