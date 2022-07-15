function matrixSums(arr) {
  let resultArray = [];

  arr.forEach(function(array) {
    resultArray.push(array.reduce((accum, curr) => accum + curr));
  });
  return resultArray;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]