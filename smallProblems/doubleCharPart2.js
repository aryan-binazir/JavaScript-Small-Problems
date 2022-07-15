const CONSONANTS = 'bcdfghjklmnpqrstvwxyz'.split('');

const doubleConsonants = argStr => {
  let resultArr = [];

  argStr.split('').forEach(char => {

    if (CONSONANTS.includes(char.toLowerCase())) {
      resultArr.push(char, char);
    } else {
      resultArr.push(char);
    }
  });
  return resultArr.join('');
};

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""