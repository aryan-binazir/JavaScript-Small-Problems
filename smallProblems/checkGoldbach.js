function checkGoldbach(num) {
  let outputArray = [];

  for (let currentNum = 0; currentNum <= num - currentNum; currentNum++) {
    let candidate1 = currentNum;
    let candidate2 = num - currentNum;
    if (isPrime(candidate1) && isPrime(candidate2)) {
      outputArray.push([candidate1, candidate2]);
    }
  }
  outputArray.forEach(pair => console.log(`${pair[0]} ${pair[1]}`));
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let currentNum = 2; currentNum < num; currentNum++) {
    if (num % currentNum === 0) {
      return false;
    }
  }
  return true;
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53