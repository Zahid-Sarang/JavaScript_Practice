class BankAccount1 {
    customerName;
    accountNumber;
    #blance = 0;

    constructor(customerName, blance) {
        this.accountNumber = Date.now()
        this.customerName = customerName;
        this.#blance = blance;
    }

    deposit(amount) {
        this.#blance += amount
    }

    withdraw(amount) {
        this.#blance -= amount
    }
    set balance(amount){
        if(isNaN(amount)){
            throw new Error('Amount is not a valid input');
        }
        this.#blance=amount
    }
    get balance(){
        return this.#blance
    }
}

class currentAccount1 extends BankAccount1 {
    transactionLimit = 50000;

    constructor(customerName,blance=0){
     super(customerName,blance)
    }
    takeBusinessLoan(amount){
        console.log(`Taking business loan${amount}`);
    }
}

const zahidAccount = new currentAccount1("zahid sarang",6000);
zahidAccount.balance=80000;
console.log(zahidAccount.balance)

console.log(zahidAccount) 