function anagram(wordArg, listArg) {
  return listArg.filter(wordCurrent => areAnagram(wordArg, wordCurrent));
}

function areAnagram(wordArg, wordCurrent) {
  let orderedWordArg = wordArg.split('').sort().join('');
  let wordCurrentOrdered = wordCurrent.split('').sort().join('');
  return orderedWordArg === wordCurrentOrdered;
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]