const wordCap = function (inputStr) {
  let inputArr = inputStr.split(/[ ]/);

  inputArr = inputArr.map(word => word[0].toUpperCase() +
    word.slice(1).toLowerCase());
  return inputArr.join(' ');
};

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
