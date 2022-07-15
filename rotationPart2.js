function rotateRightmostDigits(number, n) {
  if (n === 1) return number;
  let numArr = String(number).split('');
  let holderArr = numArr.splice(numArr.length - n, numArr.length);
  return numArr.concat(rotateArray(holderArr)).join('');
}

function rotateArray(array) {
  if (!Array.isArray(array)) {
    return;
  }

  if (array.length === 0) {
    return [];
  }

  return array.slice(1).concat(array[0]);
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917