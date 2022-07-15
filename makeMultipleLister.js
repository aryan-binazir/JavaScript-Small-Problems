function makeMultipleLister(num) {
  return function() {
    let currentNum = num;
    while(currentNum <= 100) {
      console.log(currentNum);
      currentNum += num;
    }
  }
}

let lister = makeMultipleLister(13);
lister();
// 13
// 26
// 39
// 52
// 65
// 78
// 91