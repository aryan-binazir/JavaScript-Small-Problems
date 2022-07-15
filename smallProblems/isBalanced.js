function isBalanced(arr) {
  let parenArray = arr.split('');
  let count = 0;

  parenArray = parenArray.filter(char => char === ')' || char === '(');

  for (let index = 0; index <= parenArray.length - 1; index += 1) {
    if (parenArray[index] === '(') {
      count += 1;
    } else {
      count -= 1;
    }
    if (count < 0) return false;
  }
  if (count === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false