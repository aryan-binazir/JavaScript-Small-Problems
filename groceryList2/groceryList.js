class GroceryList {
  constructor() {
    this.form = document.querySelector('form');
    this.groceries = document.querySelector('#grocery-list');

    this.bindEvents();
  }

  bindEvents() {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
  }

  handleSubmit(event) {
    event.preventDefault();
    let name = this.getName();
    let quantity = this.getQuantity();
    this.groceries.appendChild(this.createNewListItem(name, quantity));
  }

  createNewListItem(name, quantity) {
    let newItem = document.createElement('li');
    newItem.textContent = `${quantity} ${name}`;
    return newItem;
  }

  getName() {
    let name = document.querySelector('#name').value;
    return name;
  }

  getQuantity() {
    let quantity = document.querySelector('#quantity').value;
    if (quantity === '') quantity = 1;
    return quantity;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new GroceryList()
});