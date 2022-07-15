const buyFruit = function (list) {
  return list.flatMap(pair => {
    let resultArr = [];
    let fruit = pair[0];
    let quantity = pair[1];
    let count = 0;
    while (count < quantity) {
      resultArr.push(fruit);
      count += 1;
    }
    return resultArr;
  });
};

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]