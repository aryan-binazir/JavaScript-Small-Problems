function checkValidity(cardNum) {
  let cleanedStr = cardNum.replace(/\D/g,'');
  if (cleanedStr.length === 0) return false;
  let inputArr = cleanedStr.split('').reverse();
  let doubledArr = doubleSecondElements(inputArr);
  let checksum = doubledArr.reduce((sum, num) => sum + num);

  return checksum % 10 === 0;
}

function doubleSecondElements(inputArr) {
  let returnNum;
  let secondNum = false;

  let doubledArr = inputArr.map(num => {
    if (secondNum) {
      returnNum = Number(num * 2);
      if (returnNum > 9) {
        returnNum -= 9;
      }
    } else {
      returnNum = Number(num);
    }
    secondNum = !secondNum;
    return returnNum;
  });
  return doubledArr;
}

console.log(checkValidity('1111')); // false
console.log(checkValidity('8763')); // true
console.log(checkValidity('2323 2005 7766 3554')); // true
console.log(checkValidity('2323 2005 7767 3554')); // false
console.log(checkValidity('8df7  - 6 %3')); //true
console.log(checkValidity('true')); // false
console.log(checkValidity('8763')); // true