function sum(array) {
  let arrayLength = array.length;
  let total = 0;

  for (let index = 0; index <= arrayLength - 1; index++) {
    total += array[index];
  }

  return total
}

function average(array) {
  let total = sum(array);
  let arrayLength = array.length;
  return total / arrayLength;
}

  let temperatures = [66, 33, 21, 101, 110]
console.log(average(temperatures));
