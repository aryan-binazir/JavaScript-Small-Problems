function substring(inputStr, start, end = inputStr.length) {
  if (!Number.isInteger(start) || start < 0) {
    start = 0;
  }

  if (!Number.isInteger(end) || end < 0) {
    end = 0;
  }

  if (start > end) {
    [start, end] = [end, start];
  } else if (start === end) {
    return "";
  } 

  if (start > inputStr.length) {
    start = inputStr.length;
  } 
  
  if (end > inputStr.length) {
    end = inputStr.length;
  }
  let outputStr = inputStr.slice(start, end)
  return outputStr;
}

let string = 'hello world';

console.log(substring(string, 2, 4) == "ll");
console.log(substring(string, 4, 2) == "ll");
console.log(substring(string, 4, 4) == "");
console.log(substring(string, 0, -1) == "");
console.log(substring(string, 2) == "llo world");
console.log(substring(string, 'a') == "hello world");
console.log(substring(string, 8, 20) == "rld");