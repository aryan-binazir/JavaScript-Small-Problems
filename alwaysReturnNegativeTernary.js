const negative = num => {
  let resultNum;
  num < 0 ? resultNum = num : resultNum = num * -1;

  return resultNum;
};

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0