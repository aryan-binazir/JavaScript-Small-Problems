function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(callbacks) {
  let callbackFuncs = Array.prototype.slice.call(arguments);
  let cbLength = callbackFuncs.length;
  let maxTime = cbLength * 2;
  
  for (let index = 1; index <= maxTime; index += 1) {
    setTimeout(() => {
      console.log(index);
    }, index * 1000);
  }
  for (let index = 0; index < cbLength; index += 1) {
    let randomNum = Math.floor(Math.random() * maxTime) + 1;

    setTimeout(()=> {
      callbackFuncs[index]();
    }, randomNum * 1000);
  }
  
}

randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6