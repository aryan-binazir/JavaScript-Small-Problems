function generatePattern(nStars) {
  for (let currentNum = 1; currentNum <= nStars; currentNum++) {
    currentStr = ''
    for (let outputNum = 1; outputNum <= nStars; outputNum++) {
      if (outputNum <= currentNum) {
        currentStr += outputNum
      } else if (outputNum > 9) {
        currentStr += '**'
      } else {
        currentStr += '*'
      }
    }
    console.log(currentStr)
  }
}

generatePattern(13);

/* console output
1******
12*****
123****
1234***
12345**
123456*
1234567
*/