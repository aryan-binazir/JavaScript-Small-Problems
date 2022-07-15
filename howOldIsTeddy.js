/*
Problem: Build a program that randomly generates Teddy's age, and logs it to the 
console. Have the age be a random number between 20 and 200 (inclusive).

Input:
Output:


*/

function getRandomAge(min, max) {
  let age = Math.floor(Math.random() * max);

  if (age < min) {
    age += min;
  }

  return age;
}

console.log(`Teddy is ${getRandomAge(20, 200)} years old!`)