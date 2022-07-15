function transpose(matrix) {
  let returnMatrix = [];

  for (let index = 0; index < matrix[0].length; index += 1) {
    returnMatrix.push([]);
  }

  console.log(returnMatrix);
  for (let index = 0; index < matrix[0].length; index += 1) {
    for (let index2 = 0; index2 < matrix.length; index2 += 1) {
      returnMatrix[index].push(matrix[index2][index]);
    }
  }
  return returnMatrix;
}

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]
console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]