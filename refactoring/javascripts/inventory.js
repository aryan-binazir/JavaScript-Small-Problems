let inventory;

class Inventory {
  constructor() {
    this.lastId = 0;
    this.collection = [];
    this.addItem = document.querySelector('#add_item');
    this.inventory = document.querySelector('#inventory');

    this.setDate();
    this.cacheTemplate();
    this.bindEvents();
  }

  setDate() {
    let date = new Date();
    document.querySelector("#order_date").textContent = date.toUTCString();
  }

  cacheTemplate() {
    let iTmpl = document.querySelector('#inventory_item');
    this.template = Handlebars.compile(iTmpl.innerHTML);
    iTmpl.remove();
  }

  add() {
    this.lastId += 1;
    let item = {
      id: this.lastId,
      name: "",
      stockNumber: "",
      quantity: 1
    };
    this.collection.push(item);

    return item;
  }

  remove(idx) {
    this.collection = this.collection.filter(item => {
      return item.id !== idx;
    });
  }

  get(id) {
    let foundItem;

    this.collection.forEach(item => {
      if (item.id === id) {
        foundItem = item;
      }
    });

    return foundItem;
  }

  update(itemRow) {
    let id = this.findID(itemRow);
    let item = this.get(id);

    item.name = itemRow.querySelector("[name^=item_name]").value;
    item.stockNumber = itemRow.querySelector("[name^=item_stock_number]").value;
    item.quantity = itemRow.querySelector("[name^=item_quantity]").value;
  }

  newItem(event) {
    event.preventDefault();
    let item = this.add();
    document.querySelector('#inventory').insertAdjacentHTML('beforeend', this.template({ id: item.id }));
  }

  findParent(event) {
    return event.target.closest("tr");
  }

  findID(item) {
    return +item.querySelector("input[type=hidden]").value;
  }

  deleteItem(event) {
    event.preventDefault();
    if (event.target.classList.contains('delete')) {
      let item = this.findParent(event);
      this.remove(this.findID(item));
      item.remove();
    }
  }

  updateItem(event) {
    if (event.target.tagName === 'INPUT') {
      let item = this.findParent(event);

      this.update(item);
    }
  }

  bindEvents() {
    document.querySelector("#add_item").addEventListener('click', this.newItem.bind(this));
    document.querySelector("#inventory").addEventListener('click', this.deleteItem.bind(this));
    document.querySelector("#inventory").addEventListener('focusout', this.updateItem.bind(this));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let inventory = new Inventory();
});
