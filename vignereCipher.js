const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
const MAX_ALPHABET = 26;

function vignereCipher(inputStr, keyword) {
  const maxKeywordIndex = keyword.length - 1;
  let currentKeywordIndex = 0;
  let lowerKeyword = keyword.toLowerCase();

  let charArr = [...inputStr].map(char => {
    if (currentKeywordIndex > maxKeywordIndex) currentKeywordIndex = 0;
    if (!isAlphabetic(char)) return char;
    let isUpper = isUpperCase(char);
    let lowerChar = char.toLowerCase();
    let currentChar = encrypt(lowerChar, lowerKeyword[currentKeywordIndex]);

    if (isUpper) {
      currentChar = currentChar.toUpperCase();
    }

    currentKeywordIndex += 1;
    return currentChar;
  });
  return charArr.join('');
}

function encrypt(char, encryptionChar) {
  let charVal = ALPHABET.indexOf(char);
  let encryptVal = ALPHABET.indexOf(encryptionChar);
  let newCharVal = charVal + encryptVal;

  while (newCharVal > MAX_ALPHABET) {
    newCharVal -= MAX_ALPHABET;
  }
  return ALPHABET[newCharVal];
}

function isAlphabetic(char) {
  return ALPHABET.includes(char.toLowerCase());
}

function isUpperCase(char) {
  return char.toUpperCase() === char;
}

console.log(vignereCipher("Pineapples don't go on pizzas!", "meat")); //Bmnxmtpeqw dhz'x gh ar pbldal!
console.log(vignereCipher("Pineapples don't go on pizzas!", "A")); //Pineapples don't go on pizzas!
console.log(vignereCipher("Pineapples don't go on pizzas!", "Aa")); //Pineapples don't go on pizzas!
console.log(vignereCipher("Pineapples don't go on pizzas!", "cab")); //Riogaqrlfu dpp't hq oo riabat!
console.log(vignereCipher("Dog!", "Rabbit")); //Uoh!
