const multiplyList = function (arr1, arr2) {
  const resultArr = [];

  for (let index = 0; index < arr1.length; index += 1) {
    resultArr.push(arr1[index] * arr2[index]);
  }
  return resultArr;
};


console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]