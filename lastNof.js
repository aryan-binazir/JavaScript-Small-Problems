function lastNOf(arr, count) {
  let resultArr = [];
  let index = arr.length - count;
  let index2 = 0;

  if (index < 0) {
    index = 0;
  }

  for (index; index < arr.length; index++) {
    resultArr[index2] = arr[index];
    index2 += 1;
  }
  return resultArr;
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 3));    // returns [16, 23, 42]
console.log(lastNOf(digits, 5));    // returns [8, 15, 16, 23, 42]
console.log(lastNOf(digits, 15));    // returns [4, 8, 15, 16, 23, 42]