function gcd(num1, num2) {
  for (let currentDivisor = num2; currentDivisor >= 1; currentDivisor--) {
    if (num1 % currentDivisor === 0 && num2 % currentDivisor === 0) {
      console.log(currentDivisor);
      break;
    }
  }
}

gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1