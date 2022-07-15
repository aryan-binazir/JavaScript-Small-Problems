const foo = {name: 'foo'};
const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';

Object.prototype.ancestors = function() {
  let ancestorList = [];
  let currentPrototype = Object.getPrototypeOf(this);

  while (currentPrototype !== Object.prototype) {
    ancestorList.push(currentPrototype.name);
    currentPrototype = Object.getPrototypeOf(currentPrototype);
  }

  ancestorList.push('Object.prototype');

  return ancestorList;
};

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']