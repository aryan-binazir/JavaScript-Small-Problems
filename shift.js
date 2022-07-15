function shift(arr) {
  let shiftedElement = arr[0];
  
  if (arr.length === 0) {
    return undefined;
  }

  for (let idx = 0; idx <= arr.length - 1; idx++) {
    arr[idx] = arr[idx + 1];
  }

  arr.length = arr.length - 1;

  return shiftedElement;
}

let count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]