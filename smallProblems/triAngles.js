function triangle(angle1, angle2, angle3) {
  let triangleArr = [angle1, angle2, angle3];
  let triangleType;

  if (areValid(triangleArr)) {
    triangleType = identifyTriangle(triangleArr);
  } else {
    triangleType = 'invalid';
  }
  return triangleType;
}

function identifyTriangle(triangleArr) {
  let triangleType;
  if (triangleArr[0] < 90 && triangleArr[1] < 90 && triangleArr[2] < 90) {
    triangleType = 'acute';
  } else if (triangleArr[0] === 90 || triangleArr[1] === 90 ||
      triangleArr[2] === 90) {
    triangleType = 'right';
  } else {
    triangleType = 'obtuse';
  }
  return triangleType;
}

function areValid(angles) {
  const totalAngle = angles.reduce((total, angle) => total + angle);
  const allNonZero = angles.every(angle => angle > 0);

  return totalAngle === 180 && allNonZero;
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"