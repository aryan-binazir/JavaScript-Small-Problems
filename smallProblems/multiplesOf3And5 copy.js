function multisum(maxNum) {
  let numArr = returnMultiplesOf3And5(maxNum);
  return numArr.reduce((total, currentNum) => total + currentNum);
}

function isMultiple(number, divisor) {
  return (number % divisor === 0);
}

function returnMultiplesOf3And5(maxNum) {
  let returnArray = [];

  for (let counter = 1; counter <= maxNum; counter += 1) {
    if (isMultiple(counter, 3) || isMultiple(counter, 5)) { 
      returnArray.push(counter);
    }
  }
  return returnArray;
}

console.log(multisum(3) === 3);
console.log(multisum(5) === 8);
console.log(multisum(10) === 33);
console.log(multisum(1000) === 234168);