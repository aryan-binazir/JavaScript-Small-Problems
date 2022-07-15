class Calculator {
  constructor() {
    this.form = document.querySelector('form');
    this.bindEvents();
  }

  bindEvents() {
    this.form.bind(addEventListener('submit', this.calculate.bind(this)));
  }
  
  calculate(event) {
    event.preventDefault();
    let operator = document.querySelector('#operator').value;
    let firstNum = this.getValue('#first-number');
    let secondNum = this.getValue('#second-number');

    switch(operator) 
    {
      case '+':
      this.add(firstNum, secondNum);
      break;
      case '-':
      this.subtract(firstNum, secondNum);
      break;
      case '/':
      this.divide(firstNum, secondNum);
      break;
      case '*':
      this.multiply(firstNum, secondNum);
      break;
    }

  }

  getValue(id) {
    return Number(document.querySelector(`${id}`).value);
  }

  add(a, b) {
    this.changeOutput(a + b);
  }

  subtract(a, b){
    this.changeOutput(a - b);
  }

  divide(a, b) {
    this.changeOutput(a / b);
  }

  multiply(a, b) {
    this.changeOutput(a * b);
  }

  changeOutput(num) {
    let result = document.querySelector('#result');
    result.textContent = String(num);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const App = new Calculator();
})