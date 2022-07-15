function wordCount(inputStr) {
  countObject = new Object;
  strArr = inputStr.split(' ');

  strArr.forEach(function(str) {
  if (countObject[str]) {
    countObject[str] += 1;
  } else {
    countObject[str] = 1;
  }
  });
  return countObject;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }