let readlineSync = require('readline-sync');
let score1 = readlineSync.question("What was your first score? ");
let score2 = readlineSync.question("What was your second score? ");
let score3 = readlineSync.question("What was your third score? ");

grade(parseInt(score1, 10), parseInt(score2, 10), parseInt(score3, 10));

function grade(grade1, grade2, grade3) {
  let averageScore = (grade1 + grade2 + grade3) / 3;
  let finalGrade;

  if (averageScore >= 90) {
    finalGrade = 'A';
  } else if (averageScore >= 70) {
    finalGrade = 'B';
  } else if (averageScore >= 50) {
    finalGrade = 'C';
  } else {
    finalGrade = 'F';
  }
  console.log(`Your grade is ${finalGrade}`);
}