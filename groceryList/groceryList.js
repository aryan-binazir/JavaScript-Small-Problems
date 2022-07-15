class GroceryList {
  constructor() {
    this.form = document.querySelector('form');
    this.nameInput = document.querySelector('#name');
    this.quantityInput = document.querySelector('#quantity');
    this.groceryList = document.querySelector('#grocery-list');

    this.clearForm();
    this.bindEvents();
  }

  bindEvents() {
    this.form.addEventListener('submit', this.addToList.bind(this));
  }

  addToList(event) {
    event.preventDefault();
    const li = document.createElement("li");
    let quantity;

    if (this.quantityInput.value) {
      quantity = this.quantityInput.value;
    } else {
      quantity = 1;
    }

    li.appendChild(document.createTextNode(`${quantity} ${this.nameInput.value}`));
    this.groceryList.appendChild(li);
    this.clearForm();
  }

  clearForm() {
    this.nameInput.value = '';
    this.quantityInput.value = '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const App = new GroceryList();
});

// Your JavaScript code should:

// Add an event handler for the submit event on the form.
// Retrieve the item name and value from the form elements.
// Use a quantity of 1 if the quantity field is left empty.
// Create a new list item object using the name and quantity as strings.
// Add the list item to the grocery list portion of the HTML.
// Clear the form's contents.