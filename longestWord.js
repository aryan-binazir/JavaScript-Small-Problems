function longestWord(words) {
  return myReduce(words, longest);
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

function myReduce(array, func, initial) {
  let accum;
  let index;

  if (initial === undefined) {
    accum = array[0];
    index = 1;
  } else {
    accum = initial;
    index = 0;
  }

  for (index = 0; index < array.length; index += 1) {
    accum = func(accum, array[index]);
  }
  return accum;
}

console.log(longestWord(['abc', 'launch', 'targets', '']));      // "targets"