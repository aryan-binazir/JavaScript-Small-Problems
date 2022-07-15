
let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(inputObj, inputArray) {
  let outputObj = {};

  if (inputArray) {
  inputArray.forEach(key => outputObj[key] = inputObj[key]);
  return outputObj;
  } else {
    return Object.assign(outputObj, inputObj)
  }
}

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }