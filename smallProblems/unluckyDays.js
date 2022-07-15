function fridayThe13ths(year) {
  const thirteenths = [];
  const MONTHS = 12;

  for (let index = 1; index <= MONTHS; index += 1) {
    thirteenths.push(new Date(year, index, 13));
  }

  return thirteenths.reduce((count, day) => day.getDay() === 5 ?
    (count + 1) : count, 0);
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2