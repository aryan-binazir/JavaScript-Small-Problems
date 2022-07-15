function oddElementsOf(arr) {
  let index = 1;
  let resultArr = [];

  for (index; index < arr.length; index += 2) {
    resultArr.push(arr[index]);
  }
  return resultArr;
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));    // returns [8, 16, 42]