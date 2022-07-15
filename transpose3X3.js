const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

function transpose(matrix) {
  let returnMatrix = [[],[],[]];

  for (let index = 0; index < matrix.length; index += 1) {
    returnMatrix[index].push(matrix[0][index], matrix[1][index],
      matrix[2][index]);
  }
  return returnMatrix;
}

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]