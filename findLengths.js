function findOddLengths(arr) {
  let lengthArr = arr.map(el => el.length);
  return lengthArr.filter(el => el % 2 !== 0);
}


console.log(findOddLengths(['a', 'abcd', 'abcde', 'abc', 'ab'])); //=> [1, 5, 3]