function push(arr, value) {
  let index = arr.length;
  arr[index] = value;

  return (index + 1);
}

let count = [0, 1, 2];
console.log(push(count, 3));         // 4
console.log(count);                  // [ 0, 1, 2, 3 ]