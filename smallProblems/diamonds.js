"use strict";
function diamond(maxStars) {
  let starsArr = [];
  let spacesArr = [];

  for (let index = 0; index <= (maxStars ) / 2; index += 1) {
    let currStars = (2 * index) + 1;
    starsArr.push(currStars);
    spacesArr.push(maxStars - currStars);
  }
  printStar(starsArr, spacesArr);
  starsArr.reverse().shift();
  spacesArr.reverse().shift();
  printStar(starsArr, spacesArr);
}

function printStar(starsArr, spacesArr) {
  for (let index = 0; index <= starsArr.length - 1; index += 1) {
    let currentStars = '*'.repeat(starsArr[index]);
    let currentSpaces = ' '.repeat(spacesArr[index] / 2);
    console.log(`${currentSpaces} ${currentStars} ${currentSpaces}`);
  }
}

diamond(1);
// logs
// *

diamond(3);
// logs
//  *
// ***
//  *

diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

