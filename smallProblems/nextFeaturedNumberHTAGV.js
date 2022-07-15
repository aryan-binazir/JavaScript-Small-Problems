const SEVEN = 7;
const NO_NEXT_FEATURED_NUMBER = "There is no possible number that fulfills those requirements.";
const MAX_FEATURED_NUMBER = 9876543201;

function featured(inputNum) {
  let currentNum = inputNum + 1;
  if (currentNum > MAX_FEATURED_NUMBER) return NO_NEXT_FEATURED_NUMBER;
  currentNum = findNextMultipleOfSeven(currentNum);

  for (currentNum; currentNum <= MAX_FEATURED_NUMBER; currentNum += 7) {
    if (isOdd(currentNum) && checkUniqueDigits(currentNum)) return currentNum;
  }

  return NO_NEXT_FEATURED_NUMBER;
}

function findNextMultipleOfSeven(currentNum) {
  if (isMultipleOf7(currentNum)) return currentNum;
  let remainder = SEVEN - (currentNum % SEVEN);
  currentNum += remainder;

  return currentNum;
}

function isOdd(inputNum) {
  return inputNum % 2 === 1;
}

function isMultipleOf7(inputNum) {
  return inputNum % SEVEN === 0;
}

function checkUniqueDigits(inputNum) {
  let numArr = String(inputNum).split('').map(char => Number(char));
  numArr.sort((a, b) => a - b);

  for (let index = 0; index < numArr.length - 1; index += 1) {
    if (numArr[index] === numArr[index + 1]) return false;
  }

  return true;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."