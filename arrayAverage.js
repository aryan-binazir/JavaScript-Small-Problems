const average = (arr) => {
  const arrLength = arr.length;
  let reducer = (accum, curr) => accum + curr;
  let total = arr.reduce(reducer);

  return Math.floor(total / arrLength);
};

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40