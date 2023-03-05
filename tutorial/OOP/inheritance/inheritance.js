function BankAccount (customerName,balance=0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance
}

BankAccount.prototype.deposit = function(amount) {
    this.balance += amount
};

BankAccount.prototype.withdraw = function(amount) {
    this.balance -= amount
};
