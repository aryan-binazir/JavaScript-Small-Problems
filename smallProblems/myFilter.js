function myFilter(array, func) {
  let resultArr = [];

  for (let index = 0; index < array.length; index++) {
    if (func(array[index])) {
      resultArr.push(array[index]);
    }
  }
  return resultArr;
}

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) ===
    Math.pow(triple.c, 2);
};

console.log(myFilter([{ a: 3, b: 4,  c: 5 },
  { a: 5, b: 12, c: 13 },
  { a: 1, b: 2,  c: 3 },], isPythagoreanTriple));

// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]