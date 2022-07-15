function reverse(inputForReversal) {
  let toReverse;
  let reversedArray = [];

  if (Array.isArray(inputForReversal)) {
    toReverse = inputForReversal.slice();
  } else {
    toReverse = inputForReversal.split('');
  }

  const arrLength = toReverse.length
  
  for (let counter = 0; counter < arrLength; counter++) {
    reversedArray.push(toReverse.pop());
  }
  return (Array.isArray(inputForReversal) ? reversedArray : reversedArray.join(''));
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]