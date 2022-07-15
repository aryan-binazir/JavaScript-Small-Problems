function missing(sortedArr) {
  let resultsArr = [];
  let smallest = sortedArr[0];
  let largest = sortedArr[sortedArr.length -1];

  for (let currentNum = smallest; currentNum < largest; currentNum++) {
    if (sortedArr.includes(currentNum)) {
      continue;
    }
    resultsArr.push(currentNum);
  }
  return resultsArr;
}


console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                   // []
console.log(missing([1, 5]));                   // [2, 3, 4]
console.log(missing([6]));                   // [];