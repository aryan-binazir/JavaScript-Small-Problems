const readlineSync = require("readline-sync");
const numbers = [];

console.log("Enter 1st number: ")
numbers.push(readlineSync.prompt());
console.log("Enter 2nd number: ")
numbers.push(readlineSync.prompt());
console.log("Enter 3rd number: ")
numbers.push(readlineSync.prompt());
console.log("Enter 4th number: ")
numbers.push(readlineSync.prompt());
console.log("Enter 5th number: ")
numbers.push(readlineSync.prompt());
console.log("Enter number to find: ")
let numToFind =  readlineSync.prompt();

if (numbers.includes(numToFind)) {
  console.log(`The number ${numToFind} appears in [${numbers.join(', ')}]`);
} else {
  console.log(`The number ${numToFind} does not appear in [${numbers.join(', ')}]`);
}