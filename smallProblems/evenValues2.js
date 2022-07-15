function findEven(arr) {
  
  arr.forEach(function(subArray) {
    subArray.forEach(function(num) {
      if (num % 2 === 0) {
        console.log(num);
      }
    });
  });
}

findEven([
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
]);