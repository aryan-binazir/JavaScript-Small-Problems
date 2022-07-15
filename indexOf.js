function indexOf(arr, value) {
  let indexFound = -1;
  
  for (let index = 0; index <= arr.length - 1; index++) {
    if (arr[index] === value) {
      indexFound = index;
      break;
    }
  }
  return indexFound;
}

console.log(indexOf([1, 2, 3, 3], 3));         // 2
console.log(indexOf([1, 2, 3], 4));            // -1