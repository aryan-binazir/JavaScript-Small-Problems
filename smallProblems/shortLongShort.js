function shortLongShort(str1, str2) {
  let outputStr;
  if (str1.length > str2.length) {
    outputStr = concatStrings(str2, str1);
  } else if (str1.length < str2.length) {
    outputStr = concatStrings(str1, str2)
  }
  return outputStr;
}

function concatStrings(shortString, LongString) {
  return (shortString + LongString + shortString);
}

console.log(shortLongShort('abc', 'defgh') === "abcdefghabc");
console.log(shortLongShort('abcde', 'fgh') === "fghabcdefgh");
console.log(shortLongShort('', 'xyz') === "xyz");