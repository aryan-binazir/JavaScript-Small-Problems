const centerOf = argStr => {
  const argArr = argStr.split('');
  let strLength = argStr.length;

  if (strLength % 2 === 0) {
    return argArr.slice((strLength / 2) - 1, (strLength / 2) + 1).join('');
  } else {
    return argArr[Math.floor(strLength / 2)];
  }
};

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"