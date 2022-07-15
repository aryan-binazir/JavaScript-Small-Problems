const countOccurrences = (arr) => {
  const counterObj = {};

  for (let index = 0; index < arr.length; index += 1) {
    if (counterObj[arr[index]]) {
      counterObj[arr[index]] += 1;
    } else {
      counterObj[arr[index]] = 1;
    }
  }
  Object.keys(counterObj).forEach(key => console.log(`${key} => ${counterObj[key]}`));
};


const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2