function checkForThree(inputArr) {
  hasThree = false;
  inputArr.forEach(function(num) {
    if (num === 3) {
      hasThree = true;
    }
  });
  return hasThree;
}

console.log(checkForThree([1, 3, 5, 7, 9, 11])); //true
console.log(checkForThree([])); //false
console.log(checkForThree([2, 4, 6, 8])); //false