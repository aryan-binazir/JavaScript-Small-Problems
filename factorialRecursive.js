
function factorial(num) {
  if (num === 1) return 1;

  // product *= num * factorial(num - 1);
  // return product;
  return num * factorial(num - 1)
}

console.log(factorial(1) == 1);
console.log(factorial(2) == 2);
console.log(factorial(3) == 6);
console.log(factorial(4) == 24);
console.log(factorial(5) == 120);