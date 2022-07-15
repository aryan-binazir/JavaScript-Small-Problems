function isItemAvailable(requestedID, transactions) {
  let transactionList = transactions.filter(transaction =>
    transaction.id === requestedID);
  return processTransactions(transactionList);
}

function processTransactions(transactionList) {
  let total = 0;
  transactionList.forEach(transaction => {
    if (transaction.movement === 'in') {
      total += transaction.quantity;
    } else if (transaction.movement === 'out') {
      total -= transaction.quantity;
    }
  });
  return !!(total > 0);
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 15 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true