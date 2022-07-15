function utf16Value(str) {
  let valueTotal = 0;

  for (let index = 0; index < str.length; index++) {
    valueTotal += str.charCodeAt(index);
  }
  return valueTotal;
}

console.log(utf16Value('Four score') === 984);
console.log(utf16Value('Launch School') === 1251);
console.log(utf16Value('a') === 97);
console.log(utf16Value('') === 0);