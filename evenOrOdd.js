function evenOrOdd(num) {
  if (num !== parseInt(num)) {
    return "The number entered is not an integer."
  }
  if (num === 0) {
    return false;
  }

  num = num / 2;
  return (num === parseInt(num));
}

console.log(evenOrOdd(0));
console.log(evenOrOdd(1));
console.log(evenOrOdd(222));
console.log(evenOrOdd(11112124317));
console.log(evenOrOdd('hey'));
console.log(evenOrOdd(false));