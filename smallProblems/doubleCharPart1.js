const repeater = argStr => {
  let resultArr = [];

  argStr.split('').forEach(char => {
    resultArr.push(char, char);
  });
  return resultArr.join('');
};

console.log(repeater('Hello'));        // "HHeelll)loo"
console.log(repeater('Good job!'));    // "GGoooodd  j)joobb!!"
console.log(repeater(''));             // "")