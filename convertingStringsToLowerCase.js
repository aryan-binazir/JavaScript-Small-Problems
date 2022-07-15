function toLowerCase(inputStr) {
  let outputStr = '';

  inputStr.split('').forEach(function(char) {
    let asciiNumeric = char.charCodeAt(0);
    if (asciiNumeric >= 65 && asciiNumeric <= 90) {
      asciiNumeric += 32;
    }
    outputStr += String.fromCharCode(asciiNumeric);
  });
  return outputStr;
}

console.log(toLowerCase('ALPHABET') === "alphabet");
console.log(toLowerCase('123') === "123");
console.log(toLowerCase('abcDEF') === "abcdef");