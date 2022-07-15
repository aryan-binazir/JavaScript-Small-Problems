function fizzBuzz() {
  for (let currentNum = 1; currentNum <= 100; currentNum++) {
    if (multipleOfThreeAndFive(currentNum)) {
      console.log("FizzBuzz");
    } else if (multipleOfThree(currentNum)) {
      console.log("Fizz");
    } else if (multipleOfFive(currentNum)) {
      console.log("Buzz");
    } else {
      console.log(currentNum);
    }
  }
}

function multipleOfThreeAndFive(num) {
  return (num % 3 === 0 && num % 5 === 0);
}

function multipleOfThree(num) {
  return (num % 3 === 0);
}

function multipleOfFive(num) {
  return (num % 5 === 0);
}

fizzBuzz();

/* console output
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
… rest of output omitted for brevity
*/