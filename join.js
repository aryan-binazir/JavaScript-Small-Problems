function join(inputArr, inputStr) {
  let joiner = inputStr;
  let outputStr = '';
  
  for (index = 0; index < inputArr.length; index++){
    outputStr += String(inputArr[index]);
    
    if (index < inputArr.length - 1){
    outputStr += String(joiner);
    }
  }
  return outputStr;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'