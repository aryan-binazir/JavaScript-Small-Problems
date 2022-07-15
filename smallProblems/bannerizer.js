function logInBox(str) {
  let otherGap = ' '.repeat((str.length - str.length) / 2);
  let totalBetween = str.length + 2;

  console.log('+' + '-'.repeat(totalBetween) + '+');
  console.log('|' + ' '.repeat(totalBetween) + '|');
  console.log('| ' + str + ' |')
  console.log('|' + ' '.repeat(totalBetween) + '|');
  console.log('+' + '-'.repeat(totalBetween) + '+');
}

logInBox('To boldly go where no one has gone before.');

// should output

/*
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
*/

logInBox('');
/*
+--+
|  |
|  |
|  |
+--+
*/