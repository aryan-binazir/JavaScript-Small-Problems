function multiplyAllPairs(firstArr, secondArr) {
  const resultArr = [];

  for (let index1 = 0; index1 < firstArr.length; index1 += 1) {
    for (let index2 = 0; index2 < secondArr.length; index2 += 1) {
      resultArr.push(firstArr[index1] * secondArr[index2]);
    }
  }
  return resultArr.sort((a,b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]