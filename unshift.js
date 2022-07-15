function unshift(arr, value) {
  
  for (let idx = arr.length; idx > 0; idx--) {
    arr[idx] = arr[idx - 1];
  }

  arr[0] = value;
  return (arr.length);
}

let count = [1, 2, 3];
console.log(unshift(count, 0));    // 4
console.log(count);    // [ 0, 1, 2, 3 ]