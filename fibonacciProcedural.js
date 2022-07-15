function fibonacci(n) {
  let fibArr = [0,1,1];

  if (n < 3) return 1;

  for (let index = 3; index <= n; index += 1) {
    // console.log(fibArr[index - 2]+ fibArr[index - 1])
    fibArr.push(fibArr[index - 2] + fibArr[index - 1]);
  }
  return fibArr[fibArr.length - 1];
}

console.log(fibonacci(2));        // 1
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050