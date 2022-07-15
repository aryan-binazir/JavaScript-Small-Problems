const ItemCreator = (function() {
  const INVALID_INPUTS = "Invalid information!"

  function isValidCategory(category) {
    return category.split(' ').length === 1;
  }

  function isValidItemName(itemName) {
    let tempItemName = itemName.replace(/\s/g, '');
    return tempItemName.length >= 5;
  }

  function isValidQuantity(quantity) {
    return typeof quantity === 'number'
  }

  function getSKUCode(itemName, category) {
    let tempItemName = itemName.replace(/\s/g, '');
    return (String(tempItemName.slice(0, 3)) + String(category.slice(0, 2))).toUpperCase();
  }

  return function(itemName, category, quantity) {
    if (isValidCategory(category) && isValidItemName(itemName) && isValidQuantity(quantity)) {
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;
      this.SKUCode = getSKUCode(itemName, category);
      this.valid = true;
    } else {
      this.valid = false;
    }
  }
})();

const ItemManager = {
  items: [],
  create(itemName, category, quantity) {
    let newItem = new ItemCreator(itemName, category, quantity);
    if (newItem.valid) {
      this.items.push(newItem);
      console.log('valid item');
    }
  },
  update(SKUCode, updates) {
    let itemToUpdate = this.findItem(SKUCode)
    Object.keys(updates).forEach(key => itemToUpdate[key] = updates[key]);
  },
  findItem(SKUCode) {
    for(let index = 0; index < this.items.length; index += 1) {
      let currentItem = this.items[index]
      if (SKUCode === currentItem.SKUCode) {
        return currentItem;
      }
    }
  },
  inStock() {
    return this.items.filter(item => item.quantity > 0);
  },
  itemsInCategory(inputCategory) {
    return this.items.filter(item => item.category === inputCategory);
  },
  delete(SKUCode) {
    let itemToDelete = this.findItem(SKUCode);
    this.items.splice(this.items.indexOf(itemToDelete), 1)
  }
};

const ReportManager = {
  init(obj) {
    this.items = obj;
  },
  reportInStock() {
    console.log(this.items.inStock().map(item => item.itemName).join(', '));
  },
  createReporter(SKUCode) {
    let self = this;
    return {
      itemInfo() {
        let currentItem = self.items.findItem(SKUCode);
        Object.entries(currentItem).forEach(([key, value]) => console.log(`${key}: ${value}`));
      },
    }
  },
}

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

console.log(ItemManager.items);
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
console.log(ItemManager.inStock());
// returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// logs football,kitchen pot
console.log(ItemManager.itemsInCategory('sports'));
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
console.log(ItemManager.items);
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10