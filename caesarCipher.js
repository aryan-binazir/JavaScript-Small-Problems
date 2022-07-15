"use strict";

const ALPHABET_ARRAY = 'abcdefghijklmnopqrstuvwxyz'.split('');
const MAX_ALPHABET = 26;

function caesarEncrypt(inputStr, key) {
  let inputArr = inputStr.split('').map(char => {
    let upperCase = isUpperCase(char);
    let toReturn;

    if (isAlphabetic(char)) {
      toReturn = ALPHABET_ARRAY[wrapHelper(char, key)];
    } else {
      toReturn = char;
    }

    if (upperCase) {
      toReturn = toReturn.toUpperCase();
    }

    return toReturn;
  });

  return inputArr.join('');
}

function isAlphabetic(char) {
  return ALPHABET_ARRAY.includes(char.toLowerCase());
}

function isUpperCase(char) {
  return char === char.toUpperCase();
}

function wrapHelper(char, key) {
  let indexOfChar = ALPHABET_ARRAY.indexOf(char.toLowerCase());
  let newKey = (indexOfChar + key);
  if (newKey >= MAX_ALPHABET) {
    newKey -= MAX_ALPHABET;
  }
  return newKey;
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"