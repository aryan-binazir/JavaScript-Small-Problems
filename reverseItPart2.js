const reverseWords = (inputStr) => {
  const wordsArr = inputStr.split(' ');

  let resultArr = wordsArr.map(word => {
    let wordToReturn = '';
    if (word.length >= 5) {
      wordToReturn = word.split('').reverse().join('');
    } else {
      wordToReturn = word;
    }
    return wordToReturn;
  });
  return resultArr.join(' ');
};

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"