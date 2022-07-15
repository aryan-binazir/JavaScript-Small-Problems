const DIGITS_ARRAY = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const ZEROES = '0000000000';

function cleanNumber(inputStr) {
  if (typeof inputStr !== 'string') return ZEROES;
  let inputArr = inputStr.split('');

  let selectedArr = inputArr.filter(char => DIGITS_ARRAY.includes(char));
  let arrLength = selectedArr.length;
  if (arrLength === 10) {
    return selectedArr.join('');
  } else if (arrLength === 11) {
    if (selectedArr[0] === '1') {
      return selectedArr.slice(1).join('');
    }
  }
  return ZEROES;
}

console.log(cleanNumber('1310-562$!$!#!7$%5#$%^18')); // '3105627518'
console.log(cleanNumber('310-562$!$!#!7$%5#$%^18')); // '3105627518'
console.log(cleanNumber('  310-5  62$!$!#! 7$%5#$%^-18')); // '0000000000'
console.log(cleanNumber('23105627518')); // '0000000000'
console.log(cleanNumber('310-562-7518')); // '3105627518'
console.log(cleanNumber('12345678910111213')); // '0000000000'
console.log(cleanNumber('hey')); // '0000000000'
console.log(cleanNumber(3105629999)); // '0000000000'
console.log(cleanNumber('319')); // '0000000000'