let readlineSync = require('readline-sync');
let password = ''
for (attemptsLeft = 3; attemptsLeft > 0; attemptsLeft--) {
  password = readlineSync.question("What is the password? ");
  if (password === 'password') {
    break;
  }
}

if (password === 'password') {
  console.log("You have successfully logged in.");
} else {
  console.log("You have been denied access.");
}