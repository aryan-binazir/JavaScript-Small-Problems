function concat(arr1, arr2) {
  let outputArr = [];

  for (let index = 0; index < arr1.length; index++) {
    push(outputArr, arr1[index]);
  }

  for (let index = 0; index < arr2.length; index++) {
    push(outputArr, arr2[index]);
  }
  return outputArr;
}

function push(arr, value) {
  let index = arr.length;
  arr[index] = value;

  return (index + 1);
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]