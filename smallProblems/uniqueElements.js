function uniqueElements(arr) {
  let uniqueArr = [];

  for (let index = 0; index < arr.length; index++) {
    if (uniqueArr.includes(arr[index])) {
      continue;
    }
    uniqueArr.push(arr[index]);
  }
  return uniqueArr;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]