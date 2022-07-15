"use strict";

const ALPHABET_ARRAY = 'abcdefghijklmnopqrstuvwxyz'.split('');
const CIPHER_KEY = 13;
const MAX_INDEX_ALPHABET = 25;
const WRAP_ADJUSTER = 26;

function rot13(inputStr) {
  const inputArr = inputStr.split('');
  let encryptedString = '';

  inputArr.forEach(function(char) {
    let isUpper = checkIsUpperCase(char);

    if (isEnglishAlphabet(char)) {
      encryptedString += applyRotCipher(char, isUpper);
    } else {
      encryptedString += char;
    }
  });
  return encryptedString;
}

function checkIsUpperCase(char) {
  return (char.toUpperCase() === char);
}

function isEnglishAlphabet(char) {
  return (ALPHABET_ARRAY.includes(char.toLowerCase()));
}

function applyRotCipher(char, isUpper) {
  let index = ALPHABET_ARRAY.indexOf(char.toLowerCase());
  index += CIPHER_KEY;

  if (index > MAX_INDEX_ALPHABET) {
    index -= WRAP_ADJUSTER;
  }

  if (isUpper) {
    return (ALPHABET_ARRAY[index].toUpperCase());
  } else {
    return (ALPHABET_ARRAY[index]);
  }
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs: Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.