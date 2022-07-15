function runningTotal(arr) {
  let total = 0;
  let resultArr = [];

  arr.forEach(function(num) {
    total += num;
    resultArr.push(total);
  });
  return resultArr;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []