function indexOf(strToSlice, strToFind) {
  let location;
  for (let index1 = 0; index1 < strToSlice.length; index1++) {
    for (let index2 = index1 + 1; index2 <= index1 + strToFind.length; index2++) {
      currentSubString = strToSlice.slice(index1, index2);
      if (currentSubString === strToFind) {
        location = index1;
      }
    }
    if (location) {
      break;
    }
  }
  return(location || -1);
}

function lastIndexOf(strToSlice, strToFind) {
  let location;
  for (let index1 = strToSlice.length; index1 > 0; index1--) {
    for (let index2 = index1 - 1; index2 >= index1 - strToFind.length; index2--) {
      currentSubString = strToSlice.slice(index2, index1);
      if (currentSubString === strToFind) {
        location = index2;
      }
    }
    if (location) {
      break;
    }
  }
  return(location || -1);
}

console.log(indexOf('Some strings', 's') == 5);
console.log(indexOf('Blue Whale', 'Whale') == 5);
console.log(indexOf('Blue Whale', 'Blute') == -1);
console.log(indexOf('Blue Whale', 'leB') == -1);

console.log(lastIndexOf('Some strings', 's') == 11);
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale') == 19);
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all') == -1);