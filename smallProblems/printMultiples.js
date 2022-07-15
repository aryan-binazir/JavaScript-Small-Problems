function logMultiples(multiple) {
  for(currentNum = 100; currentNum >= multiple; currentNum--) {
    if (isOdd(currentNum) && isMultipleOf(currentNum, multiple)) {
      console.log(currentNum);
    }
  }
}

function isOdd(num) {
  return (num % 2 === 1);
}

function isMultipleOf(num, multiple) {
  return (num % multiple === 0)
}

// Test cases
logMultiples(17);
//85
//51
//17

logMultiples(21);
//63
//21