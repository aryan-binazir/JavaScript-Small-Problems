const EXAM_WEIGHTING = 0.65;
const EXERCISE_WEIGHTING = 0.35;

function generateClassRecordSummary(scores) {
  let scoreData = Object.keys(scores).map(student => scores[student].scores);
  let examData = scoreData.map(score => score.exams);

  return {
    studentGrades: getStudentScore(scoreData),
    exams: computeExamSummary(examData),
  };
}

function getStudentScore(scores) {
  let gradeArr = [];

  scores.forEach(score => {
    let examAvg = computeExamAvg(score.exams);
    let exerciseScore = computeExerciseScore(score.exercises);
    let weightedScore = computeWeightedScore(examAvg, exerciseScore);
    gradeArr.push(addScoreSymbol(weightedScore));
  });
  return gradeArr;
}

function computeExerciseScore(scoresArr) {
  return scoresArr.reduce((total, curr) => total + curr);
}

function computeExamAvg(scoresArr) {
  let examAvg = findAvg(scoresArr);
  return Number(examAvg);
}

function findAvg(arr) {
  let count = arr.length;
  let sum = arr.reduce((total, curr) => total + curr);
  return (sum / count).toFixed(1);
}

function computeExamSummary(scores) {
  let examArr = [];
  let examScoresByExam = getScoresByExam(scores);

  examScoresByExam.forEach(exam => {
    examArr.push({average: getAvg(exam), minimum: getMin(exam),
      maximum: getMax(exam)});
  });
  return examArr;
}

function getAvg(examArr) {
  let examAvg = findAvg(examArr);
  return Number(examAvg);
}

function getMin(examArr) {
  return Math.min(...examArr);
}

function getMax(examArr) {
  return Math.max(...examArr);
}

function getScoresByExam(scores) {
  let examArr = [];
  for (let index = 0; index < scores.length - 1; index += 1) {
    let scoreArr = [];
    scores.forEach(studentScores => {
      scoreArr.push(studentScores[index]);
    });
    examArr.push(scoreArr);
  }
  return examArr;
}

function addScoreSymbol(score) {
  if (score >= 93) return score + " (A)";
  if (score >= 85) return score + " (B)";
  if (score >= 77) return score + " (C)";
  if (score >= 69) return score + " (D)";
  if (score >= 60) return score + " (E)";
  return score + " (F)";
}

function computeWeightedScore(examAvg, exerciseScore) {
  return (parseInt((examAvg * EXAM_WEIGHTING) +
    (exerciseScore * EXERCISE_WEIGHTING), 10));
}


let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }