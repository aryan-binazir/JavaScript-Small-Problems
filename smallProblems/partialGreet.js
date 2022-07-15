function greet(greeting, name) {
  let capitalized = greeting[0].toUpperCase() + greeting.slice(1);
  let message = capitalized + ', ' + name + '!';
  console.log(message);
}

function createGreeting(func, greeting) {
  return function(name) {
    func(greeting, name);
  }
}

let sayHello = createGreeting(greet, 'Hello');
let sayHi = createGreeting(greet, 'Hi');

sayHello('Brandon');
// Hello, Brandon!
sayHi('Sarah');
// Hi, Sarah!