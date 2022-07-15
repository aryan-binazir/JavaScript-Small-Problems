const ALPHA_ARRAY = 'abcdefghijklmnopqrstuvwxyz'.split('');

function cleanUp(str) {
  let inputArr = str.split('');
  let outputArr = [];

  for (let index = 0; index <= inputArr.length; index++) {
    currentChar = inputArr[index];

    if (ALPHA_ARRAY.includes(currentChar)) {
      outputArr.push(currentChar);
    } else if (outputArr[outputArr.length - 1] === ' ') {
      continue;
    } else {
      outputArr.push(' ');
    }
  }
  return outputArr.join('');
}


console.log(cleanUp("---what's my +*& line?") === " what s my line ");