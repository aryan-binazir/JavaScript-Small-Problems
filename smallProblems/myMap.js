function myMap(array, func) {
  let resultArray = [];
  for (let index = 0; index < array.length; index++) {
    resultArray.push(func(array[index]));
  }
  return resultArray;
}

let plusOne = num => num + 1;
console.log(myMap([1, 2, 3, 4], plusOne));       // [ 2, 3, 4, 5 ]