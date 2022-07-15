function objectsEqual(obj1, obj2) {
  const arrayKeys = Object.keys(obj1);
  if (arrayKeys.length !== Object.keys(obj2).length) return false;

  for (let index = 0; index < arrayKeys.length; index += 1) {
    let currentKey = arrayKeys[index];
    if (!(obj2.hasOwnProperty(currentKey))) return false;
    if (!(obj1[currentKey] === obj2[currentKey])) return false;
  }
  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
console.log(objectsEqual({}, {}));                                      // true
