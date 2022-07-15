function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for(currentNum = 2; currentNum < num; currentNum++) {
    if (num % currentNum === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false