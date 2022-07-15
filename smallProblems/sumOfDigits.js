const sum = function (digits) {
  const digitsArr = String(digits).split('');
  let total = digitsArr.reduce((a, b) => a + Number(b), 0);

  return total;
};

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45