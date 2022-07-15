const interleave = function (arr1, arr2) {
  const resultArr = [];

  for (let index = 0; index < arr1.length; index += 1) {
    resultArr.push(arr1[index], arr2[index]);
  }
  return resultArr;
};

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]