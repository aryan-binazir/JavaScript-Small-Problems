const ALPHABET_ARRAY = 'abcdefghijklmnopqrstuvwxyz'.split('');
const NUMBER_ARRAY = '123456789'.split('');

function isPalindrome(str) {
  return str === str.split('').reverse().join('')
}

function isRealPalindrome(str) {
  let result = '';

  str.toLowerCase().split('').forEach(function(char) {
    if (isAlphaNumeric(char)) {
      result += char;
    }
  });
  return isPalindrome(result);
}

function isAlphaNumeric(char) {
  return (NUMBER_ARRAY.includes(char) || ALPHABET_ARRAY.includes(char))
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false