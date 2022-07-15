function firstNOf(arr, count) {
  let resultArr = [];

  for (let index = 0; index < arr.length; index++) {
    resultArr[index] = arr[index];
  }
  return resultArr;
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(firstNOf(digits, 3));    // returns [4, 8, 15]