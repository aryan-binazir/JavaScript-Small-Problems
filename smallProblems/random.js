function randomBetween(min, max) {
  if (min === max) {
    return max;
  } else if (min > max) {
    [min, max] = [max, min];
  }

  let difference = max - min + 1;
  return Math.floor(Math.random() * difference) + min;
};

console.log(randomBetween(1, 5));
