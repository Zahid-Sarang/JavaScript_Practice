function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

const zahid1Account = new BankAccount("Sarang Zahid Parvez", 2000);
console.log(zahid1Account);

/*----------------*/
/* current account*/
/*----------------*/

function CurrentAccount(customerName, balance = 0) {
  BankAccount.call(this, customerName, balance);
  this.transactionLimit = 50000;
}
CurrentAccount.prototype = Object.create(BankAccount.prototype);

CurrentAccount.prototype.takeBusinessLoan = function (amount) {
  console.log(`taking bussiness loan ${amount}`);
};

const zahid2Account = new CurrentAccount("Sarang Zahid Parvez", 4000);
zahid2Account.withdraw(1000)
console.log(zahid2Account);

/*----------------*/
/* Saving account*/
/*----------------*/

function SavingAccount(customerName, balance = 0) {
  BankAccount.call(this, customerName, balance); // constructor linking
  this.transactionLimit = 10000;
}
SavingAccount.prototype = Object.create(BankAccount.prototype);

SavingAccount.prototype.takePersonalLoan = function (amount) {
  console.log(`taking personal loan ${amount}`);
};

const zahidAccount = new SavingAccount("Sarang Zahid Parvez", 8000);

zahidAccount.deposit(5000);
zahidAccount.takePersonalLoan(50000)
console.log(zahidAccount);

/* ----------------------*/
/*     Using Class       */
/* --------------------- */

class BankAccount1 {
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

class currentAccount1 extends BankAccount1 {
    transactionLimit = 50000;

    constructor(customerName,blance=0){
     super(customerName,blance)
    }
    takeBusinessLoan(amount){
        console.log(`Taking business loan${amount}`);
    }
}

class savingAccount1 extends BankAccount1 {
    transactionLimit = 10000;

    constructor(customerName,blance=0){
     super(customerName,blance)
    }
    takePerosonalLoan(amount){
        console.log(`Taking personal loan: ${amount}`);
    }
}

const sarangAccount = new savingAccount1("Zahid sarang",1000);
sarangAccount.deposit(20);
sarangAccount.withdraw(10);
sarangAccount.takePerosonalLoan(1000);
console.log(sarangAccount) 
