/*
Problem: Write a function similar to the oddLengths function from Exercise 6, 
but don't use map or filter. Instead, try to use the reduce method.

input: an array of strings

output: an array of the odd lengths of the elements in the original array

requirements: 
  - map out lengths of different elements in arr
  - filter arr to only include odd numbers

Examples:
console.log(oddLengths(['a', 'abcd', 'abcde', 'abc', 'ab'])); // => [1, 5, 3]

Data Structures
- fuction uses reduce method
- array as accumulator



*/
function oddLengths(arr) {
  return arr.reduce((returnOddArr, str) => {
    let str_len = str.length;
    if (str_len % 2 === 1) {
      returnOddArr.push(str_len);
    }
  return returnOddArr;
  }, []);
}

console.log(oddLengths(['a', 'abcd', 'abcde', 'abc', 'ab'])); //=> [1,3,5]