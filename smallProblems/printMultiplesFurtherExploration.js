function logMultiples(multiple) {
  largestMultiple = Math.floor(100 / multiple) * multiple;

  for(currentNum = largestMultiple; currentNum >= multiple; currentNum -= multiple) {
    if (isOdd(currentNum)) {
      console.log(currentNum);
    }
  }
}


function isOdd(num) {
  return (num % 2 === 1);
}

// Test cases
logMultiples(17);
//85
//51
//17

logMultiples(21);
//63
//21