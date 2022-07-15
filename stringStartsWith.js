function startsWith(string, searchStr) {
  strLength = searchStr.length;
  if (string === '' ) {
    return true;
  }
  return (string.slice(0,strLength) === searchStr);
}

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We') === true);
console.log(startsWith(str, 'We put') === true);
console.log(startsWith(str, '') === true);
console.log(startsWith(str, 'put') === false);

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString) === false);