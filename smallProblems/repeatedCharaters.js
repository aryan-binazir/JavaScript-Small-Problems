function repeatedCharacters(inputStr) {
  let arr = inputStr.toLowerCase().split('');
  let charCounter = {};

  for (let index = 0; index <= arr.length - 1; index++) {
    if (charCounter[arr[index]]) {
      charCounter[arr[index]] += 1;
    } else {
      charCounter[arr[index]] = 1;
    }
    }
  for (let key in charCounter) {
    if (charCounter[key] === 1)
    delete charCounter[key];
  }
  return charCounter;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }