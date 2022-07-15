let rlSync = require('readline-sync');

const age = parseInt(rlSync.question("What's your age?\n"), 10);
const retirementAge = parseInt(rlSync.question("At what age would you like to retire?\n"), 10);

const currentDate = new Date;

const currentYear = currentDate.getFullYear();
const yearsLeft = retirementAge - age;

console.log(`\nIt's ${currentYear}. You will retire in ${currentYear + yearsLeft}.`);
console.log(`You have only ${yearsLeft} years of work to go!`);