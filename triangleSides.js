function triangle (side1, side2, side3) {
  if (side1 <= 0 || side2 <= 0 || side3 <= 0) return `invalid`;
  let triangleArr = [side1, side2, side3].sort((a, b) => a - b);
  if (triangleArr[0] + triangleArr[1] < triangleArr[2]) return 'invalid';
  let triangleType = identifyTriangle(triangleArr);
  return triangleType;
}

function identifyTriangle(triangleArr) {
  let triangleType;

  if (triangleArr[0] === triangleArr[1] && triangleArr[1] === triangleArr[2]) {
    triangleType = 'equilateral';
  } else if (triangleArr[0] !== triangleArr[1] && triangleArr[1]
      !== triangleArr[2]) {
    triangleType = 'scalene';
  } else if (triangleArr[0] === triangleArr[1] || triangleArr[1]
      === triangleArr[2]) {
    triangleType = 'isosceles';
  }
  return triangleType;
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"