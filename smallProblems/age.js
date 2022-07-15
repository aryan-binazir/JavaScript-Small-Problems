let rlSync = require('readline-sync');
let age = Number(rlSync.question('What is your age?\n'));
console.log(`You are ${age} years old.`)
for(num = 10; num <= 40 ; num += 10) {
  console.log(`In ${num} years, you will be ${age + num} years old.`)
}