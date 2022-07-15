function newStack() {
  const stack = [];

  return {
    push(value) {
      stack.push(value);
    },
    pop() {
      return stack.pop();
    },
    printStack() {
      for (let index = 0; index < stack.length; index += 1) {
        console.log(stack[index]);
      }
    },
  };
}

let stack = newStack();
stack.push(5);
stack.push(10);
stack.printStack(); // 5 10
stack.pop();
stack.printStack(); // 5
