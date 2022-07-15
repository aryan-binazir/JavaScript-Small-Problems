
function logOddNumbers(maxNum) {
  for(currentNum = 1; currentNum <= maxNum; currentNum++) {
    if (isOdd(currentNum)) {
      console.log(currentNum);
    }
  }
}

function isOdd(num) {
  return (num % 2 == 1);
}

logOddNumbers(19);

/* expected output on console
1
3
5
7
9
11
13
15
17
19
*/