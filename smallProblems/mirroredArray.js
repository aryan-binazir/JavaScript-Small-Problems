function mirroredArray(arr) {
  return arr.concat(arr.slice(0).reverse());
}

console.log(mirroredArray([1,2,3,4]));
console.log(mirroredArray([3,3,4,4]));