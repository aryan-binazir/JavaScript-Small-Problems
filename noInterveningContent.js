function noInteveningContent(arr) {
  let outputStr = '';

  for (let idx = 0; idx < arr.length; idx++) {
    outputStr += String(arr[idx]);
  }
  return outputStr;
}

console.log(noInteveningContent([1, 2, 3, 4, 5, 6, 'hey', 7, 'friend', 8]));