function multiplesOfThreeOrFive(min, max) {
  for(currentNum = min; currentNum <= max; currentNum++) {
    if (divByThreeAndFive(currentNum)) {
      console.log(String(currentNum + '!'));
    } else if (divByThreeOrFive(currentNum)) {
      console.log(String(currentNum))
    }
    }
  }

function divByThreeAndFive(num) {
  return (num % 3 == 0 && num % 5 == 0);
}

function divByThreeOrFive(num) {
  return (num % 5 == 0 || num % 3 == 0);
}

multiplesOfThreeOrFive(1, 100);