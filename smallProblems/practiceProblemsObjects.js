let invoices = {
  unpaid: [],
  add: function(name, amount) {
    this.unpaid.push({
      name,
      amount,
    });
  },
  totalDue: function() {
    return this.unpaid.reduce((sum, invoice) => sum + invoice.amount, 0);
  },
  totalPaid: function() {
    return this.paid.reduce((sum, invoice) => sum + invoice.amount, 0);
  },
  paid: [],
  payInvoice: function (clientName) {
    let unpaid = [];
    this.unpaid.forEach(invoice => {
      if (clientName === invoice.name) {
        this.paid.push(invoice);
      } else {
        unpaid.push(invoice);
      }
    });
    this.unpaid = unpaid;
  },
};


invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);

invoices.payInvoice("Due North Development");
invoices.payInvoice("Slough Digital");

console.log(invoices.totalPaid());
console.log(invoices.totalDue());