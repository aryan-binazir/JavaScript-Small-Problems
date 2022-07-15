function halvsies(arr) {
  let midPoint = Math.floor(arr.length / 2);
  let resultsArr = [];

  if (arr.length % 2 ===0) {
    midPoint -= 1;
  }
  resultsArr.push(arr.slice(0, midPoint + 1));
  resultsArr.push(arr.slice(midPoint + 1, arr.length));
  return resultsArr;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]