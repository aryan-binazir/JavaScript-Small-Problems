function shift(arr) {
  if(arr.length === 0) {
    return undefined;
  }

  let returnedElement = arr.splice(0,1).pop();
  return returnedElement;
}

function unshift(arr, ...args) {
  for (let index = 0; index < args.length; index++) {
    arr.splice(index, 0, args[index]);
  }
  return arr.length;
}


console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]