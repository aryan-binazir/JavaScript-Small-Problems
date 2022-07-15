function factorial(num) {
  product = 1
  for(let counter = num; counter > 0; counter--) {
    product *= counter;
  }
  return product
}

console.log(factorial(1) == 1);
console.log(factorial(2) == 2);
console.log(factorial(3) == 6);
console.log(factorial(4) == 24);
console.log(factorial(5) == 120);