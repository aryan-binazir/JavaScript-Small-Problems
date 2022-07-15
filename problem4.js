/*
Problem:

Input: A list of numbers in short-hand range
Output: Return a list of complete numbers

Rules:
- Range limits are inclusive
- The possible separators are: ["-", ":", ".."]
- The number is always increasing

Examples / Test Cases:

"1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
"1-3, 1-2" --> 1, 2, 3, 11, 12
"1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
"104-2" --> 104, 105, ... 112
"104-02" --> 104, 105, ... 202
"545, 64:11" --> 545, 564, 565, .. 611
Data Structures
- Array to store inputs, split by ','

Algorithm
- Split string of numbers and separators into array of numbers (some with separators)
  - "1-3, 1-2" becomes ['1-3', '1-2']
- Map array, if single digit, leave as is
  - if seperator, return array by using helper processSeperatedNum(seperatedNumStr)
- Flatten Array so not nested

- return result of helper processCompleteNumbers()

Helper processSeperatedNum
- turn into array of digits

- starting return result of processCompleteNumbers()

Helper processCompleteNumbers(arr)
- Initialize empty resultArr
- set currentNum to first num in arr
- Loop through arr from index 2
  - Loop
    - if currentNum ends with arr[current index]
    - break and add currentNum to resultArr
*/


function processSeperatedNum(seperatedNumStr) {
  let resultArr = [];
  seperatedNumStrArr = seperatedNumStr.split(/[\:\-\..]/g);
  // seperatedNumArr[0] += 1;
  console.log(processCompleteNumbers(seperatedNumArr));
}


function processShortHand(numStr) {
  let numArr = numStr.split(',')
  console.log(numArr)
  let result = processCompleteNumbers(numArr);
  console.log(result)
}

function processCompleteNumbers(arr) {
  let resultArr = [];
  let currentNum = Number(arr[0]);
  resultArr.push(currentNum);

  for (let index = 1; index <= arr.length - 1; index += 1) {
    let endsWith = arr[index];
    let endsWithLength = endsWith.length;
    
    while(true) {
      let stringNum = String(currentNum);
      console.log(stringNum);

      if (stringNum.slice(stringNum.length - endsWithLength, stringNum.length ) === endsWith) {
        resultArr.push(currentNum);
        break;
      }
      currentNum += 1;
    }
  }
  return resultArr;
}


console.log(processShortHand("1, 3, 7, 2, 4, 1")) // --> 1, 3, 7, 12, 14, 21
// console.log(processShortHand("1-3, 1-2")) // --> 1, 2, 3, 11, 12
// console.log(processShortHand("1:5:2")) // --> 1, 2, 3, 4, 5, 6, ... 12
// console.log(processShortHand("104-2")) // --> 104, 105, ... 112
// console.log(processShortHand("104-02")) // --> 104, 105, ... 202
// console.log(processShortHand("545, 64:11")) // --> 545, 564, 565, .. 611

// console.log(processSeperatedNum('1:5:2')); // 1, 2, 3.... 12
// console.log(processSeperatedNum('104-2')); // 104, 105 ... 112
// console.log(processSeperatedNum('64..11')); // 64, 65 ... 111


// console.log(processCompleteNumbers(['1', '3', '7', '2', '4', '1']));  // --> 1, 3, 7, 12, 14, 21))
// console.log(processCompleteNumbers(['104', '02']));  // --> 104, 105, ... 202

