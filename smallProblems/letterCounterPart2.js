const ALPHABET_ARRAY = 'abcdefghijklmnopqrstuvwxyz'.split('');

function wordSizes(inputStr) {
  const wordArr = inputStr.toLowerCase().split(' ');
  const countObj = {};
  let wordArrAlpha = [];
  
   wordArr.forEach(function(word) {
     tempWord = '';
    word.split('').forEach(function(char) {
      // console.log(char);
    if (ALPHABET_ARRAY.includes(char)) {
      tempWord += char;
      } 
    });
    wordArrAlpha.push(tempWord)
  });
  
  wordArrAlpha.forEach(function(word) {
    wordLength = word.length;
    if (countObj[wordLength]) {
      countObj[wordLength] += 1;
    } else {
      countObj[wordLength] = 1;
    }
  });
  return countObj;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}