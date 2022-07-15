const readlineSync = require("readline-sync");

console.log("Enter a phrase:");
let phrase = String(readlineSync.prompt());
let strLength = phrase.length;

console.log(`There are ${strLength} characters in ${phrase}.`);
