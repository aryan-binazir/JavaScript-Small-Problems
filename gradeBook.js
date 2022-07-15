function getGrade (grade1, grade2, grade3) {
  let average = parseInt((Number(grade1) + Number(grade2) + Number(grade3)) / 3);
  
  if (average >= 90) {
    return 'A';
  } else if (average >= 80) {
    return 'B';
  } else if (average >= 70) {
    return 'C';
  } else if (average >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(95, 90, 93) === "A");
console.log(getGrade(50, 50, 95) === "D");
console.log(getGrade(3, 11, 21) === "F");
console.log(getGrade(90, 78, 81) === "B");
console.log(getGrade(73, 74, 65) === "C");