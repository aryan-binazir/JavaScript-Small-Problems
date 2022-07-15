function slice(inputArr, startIndex, endIndex) {
  let slicedArr = [];
  
  for (let idx = startIndex; idx < endIndex; idx++) {
    slicedArr.push(inputArr[idx]);
  }
  return slicedArr;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]