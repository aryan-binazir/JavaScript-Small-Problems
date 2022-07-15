function isDoubleDouble(num) {
  let midPoint = String(num).length / 2;
  let firstHalf = String(num).slice(0, midPoint);
  let secondHalf = String(num).slice(midPoint, midPoint * 2);
  return (firstHalf === secondHalf);
}

function twice(num) {
  let outputNum;

  if (isDoubleDouble(num)) {
    outputNum = num;
  } else {
    outputNum = num * 2;
  }
  return outputNum;
}

console.log(twice(37) === 74);
console.log(twice(44) === 44);
console.log(twice(334433) === 668866);
console.log(twice(444) === 888);
console.log(twice(107) === 214);
console.log(twice(103103) === 103103);
console.log(twice(3333) === 3333);
console.log(twice(7676) === 7676);
