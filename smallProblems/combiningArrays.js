function union(arr1, arr2) {
  let resultArr = [];

  arr1.forEach(function(element) {
    if (!resultArr.includes(element)) {
      resultArr.push(element);
    }
  });
  
  arr2.forEach(function(element) {
    if (!resultArr.includes(element)) {
      resultArr.push(element);
    }
  });
  return resultArr;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
