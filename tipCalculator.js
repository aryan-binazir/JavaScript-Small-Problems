let readlineSync = require('readline-sync');

let totalBeforeTip = parseFloat(readlineSync.question('What is the bill total?\n'));
let tipRate = parseFloat(readlineSync.question('What is the tip percentage?\n'));

totalBeforeTip = Number(totalBeforeTip);
tipRate = Number(tipRate);

totalTip = (totalBeforeTip * (tipRate / 100));
totalAmount = (Number(totalBeforeTip) + Number(totalTip));

console.log(`The tip is \$${totalTip.toFixed(2)}`);
console.log(`The total bill is \$${totalAmount.toFixed(2)}`);