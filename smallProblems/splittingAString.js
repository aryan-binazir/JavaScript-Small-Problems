function splitString(string, delimeter) {
  let currentStr = ''

  if (delimeter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  for (let index = 0; index <= string.length - 1; index++) {
    if (string[index] === delimeter) {
      if (currentStr === '') {
        console.log('(this is a blank line)')
      } else {
      console.log(currentStr);
      currentStr = '';
      delimeterFound = true;
      }
    } else if (delimeter === '') {
      console.log(string[index]);
    } else {
      currentStr += string[index];
    }
  }
  console.log(currentStr);
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello