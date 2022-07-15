function splice(inputArr, startIndex, removeLength) {
  let splicedArr = [];

  for (let idx = startIndex; idx < inputArr.length; idx++) {
    
    if (idx < startIndex + removeLength) {
      splicedArr.push(inputArr[idx]);
    }

    inputArr[idx] = inputArr[idx + removeLength];
  }
  inputArr.length = startIndex + 1;
  return splicedArr;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]