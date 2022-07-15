/*
Problem: Implement a function that takes a string and a number times as arguments.
The function should return the string repeated times number of times. If times is 
not a number, return undefined. If it is a negative number, return undefined also.
If times is 0, return an empty string. You may ignore the possibility that times is
a number that isn't an integer.

Input: String and a number 
Output: A string (repeated)

Requirements
  - If times is not a number, return undefined
  - if times is 0, return empty string
  - if times is 

Data structures
- a string to concatenate additional repetitions on to and output
- 

Algorithm

Fuction `repeat`
# assign argument to inputStr, second argument to times
# initialize outputStr to ''
# loop from 0 to times
  # concatenate inputStr to outputStr

# return outputStr


*/






function repeat(inputStr, times) {
  if (times === 0) {
    return "";
  } else if (times < 0) {
    return undefined;
  } else if (times != parseInt(times, 10)) {
    return undefined;
  }
  let outputStr = '';

  for (let counter = 0; counter < times; counter++) {
    outputStr += inputStr;
  }
  return outputStr;
}

console.log(repeat('abc', 1) === "abc");
console.log(repeat('abc', 2) ==="abcabc");
console.log(repeat('abc', -1) === undefined);
console.log(repeat('abc', 0) === "");
console.log(repeat('abc', 'a') === undefined);
console.log(repeat('abc', false) === undefined);
console.log(repeat('abc', null) === undefined);
console.log(repeat('abc', '  ') === undefined);