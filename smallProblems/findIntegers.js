function findIntegers(arr) {
  return arr.filter(element => element === parseInt(element));
};

console.log(findIntegers([1, 'a', '1', 3, NaN, 3.1415, -4, null, false])); //should output [1, 3, -4]