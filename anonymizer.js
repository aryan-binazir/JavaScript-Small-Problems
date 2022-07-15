"use strict";

let Account = (function() { 
  const ANON_CHARS = '123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const ANONYMOUS_DISPLAY_LENGTH = 16;
  const MAX_LENGTH = ANON_CHARS.length; // 61
  const INVALID_PASSWORD = "Invalid Password"

  function anonymous() {
    let anonStr = '';

    for(let count = 0; count < ANONYMOUS_DISPLAY_LENGTH; count += 1) {
      let currentNum = selectRandomNum(0, MAX_LENGTH);
      anonStr += String(ANON_CHARS[currentNum]);
    }
    return anonStr;
  }

  function selectRandomNum(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
  }

  function createDisplayName() {
    return anonymous();
  }

  function invalidPassword() {
    return INVALID_PASSWORD;
  }
  
  function isValidPassword(inputPassword, userPassword) {
    return inputPassword === userPassword;
  }

  return (function() {

    let userEmail;
    let userPassword;
    let userFirstName;
    let userLastName;

    
    return {
      init(email, password, firstName, lastName) {
        userEmail = email;
        userPassword = password;
        userFirstName = firstName;
        this.displayName = createDisplayName();
        return this;
      },
      reanonymize(inputPassword) {
        if (isValidPassword(inputPassword, userPassword)) {
          this.displayName = createDisplayName();
          console.log(true);
        } else {
          return invalidPassword();
        }
      },
      resetPassword(currentPassword, newPassword) {
        if (isValidPassword(currentPassword, userPassword)) {
          userPassword = newPassword;
          return 'true';
        } else {
          return invalidPassword();
        }
      },
      firstName(inputPassword) {
        if (isValidPassword(inputPassword, userPassword)) {
          return userFirstName;
        } else {
          return invalidPassword();
        }
      },
      lastName(inputPassword) {
        if (isValidPassword(inputPassword, userPassword)) {
          return userLastName;
        } else {
          return invalidPassword();
        }
      },
      email(inputPassword) {
        if (isValidPassword(inputPassword, userPassword)) {
          return userEmail;
        } else {
          return invalidPassword();
        }
      },
      displayName() {
        return this.displayName;
      },
    }
  })();
})();


let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true
console.log(fooBar.email('abc'));                  // logs foo@bar.com

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false
