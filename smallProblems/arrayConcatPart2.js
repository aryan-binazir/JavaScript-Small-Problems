function concat(...args) {
  let resultArray = args[0].slice();
  let restOfArgs = args.slice(1);
  
  restOfArgs.forEach(function(element) {
    if (Array.isArray(element)) {
      element.forEach(subelement => resultArray.push(subelement));
    } else {
      resultArray.push(element);
    }
  });
  return resultArray;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two'])); // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4)); // [1, 2, "three", 4]