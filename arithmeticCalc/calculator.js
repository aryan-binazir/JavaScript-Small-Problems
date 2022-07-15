class Calculator {
  constructor() {
    this.operator = '+';
    this.operatorSelector = document.querySelector('#operator');
    this.firstInput = document.querySelector('#first-number');
    this.secondInput = document.querySelector('#second-number');
    this.form = document.querySelector('form');
    this.result = document.querySelector('#result');
    this.bindEvents();
  }  

  bindEvents() {
    this.form.addEventListener('submit', this.calculate.bind(this));
    this.operatorSelector.addEventListener('change', this.setOperator.bind(this));
  }

  setOperator(event) {
    this.operator = event.target.value;
  }

  calculate(event) {
    event.preventDefault();
    const firstNum = Number(this.firstInput.value);
    const secondNum = Number(this.secondInput.value);
    let answer;

    switch (this.operator) {
      case '+':
        answer = firstNum + secondNum;
        break;
      case '-':
        answer = firstNum - secondNum;
        break;
      case '/':
        answer = firstNum / secondNum;
        break;
      case '*':
        answer = firstNum * secondNum;
        break;
    }
    this.result.textContent = String(answer);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const App = new Calculator();
})