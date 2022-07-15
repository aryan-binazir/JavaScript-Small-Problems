function removeVowels(arr) {
  let resultArr = [];

  arr.forEach(str => {
    let currentStr = str.match(/[^aeiou]/gi);
    if (currentStr) {
      currentStr = currentStr.join('');
    } else {
      currentStr = "";
    }
    resultArr.push(currentStr);
  });
  return resultArr;
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]