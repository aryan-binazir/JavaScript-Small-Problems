function findEven(arr) {
  let evenArr = arr.filter( num => num % 2 === 0 );

  evenArr.forEach(num => console.log(num));
}

findEven([1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0]);