function lastIndexOf(arr, value) {
  let indexFound = -1;
  
  for (let index = arr.length - 1; index >= 0; index--) {
    if (arr[index] === value) {
      indexFound = index;
      break;
    }
  }
  return indexFound;
}

console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1