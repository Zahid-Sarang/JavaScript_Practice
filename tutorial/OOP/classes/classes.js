class BankAccount {
    customerName;
    accountNumber;
    blance = 0;

    constructor(customerName, blance) {
        this.accountNumber = Date.now()
        this.customerName = customerName;
        this.blance = blance;
    }

    deposit(amount) {
        this.blance += amount
    }

    withdraw(amount) {
        this.blance -= amount
    }
}

const John_Doe = new BankAccount("Jhon Doe", 2000);

John_Doe.deposit(1000)

console.log(John_Doe)

const Harry = new BankAccount("Harry", 5000)

Harry.withdraw(3000);

console.log(Harry)