// problem => every time we create object method also repeat which take extra memory
// solution => shared a method using prototype

// ===================================================================================================================================//

function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.balance = balance;
  this.accountNumber = Date.now();

  // this.deposit = function (amount) {
  //   this.balance += amount;
  // };
  this.withdraw = (amount) => {
    this.balance -= amount;
  };
}

//   const account2 = new BankAccount('Jane Doe', 200);
//   console.log(account2)

/*
    in the javaScript, function also a object 
*/

// ===================================================================================================================================//

// in the javaScript whenever function is created a prototype property add to every function
// and prototype value is empty object {}

// =============================== deposite ============================================================================ //

BankAccount.prototype.deposit = function (amount) {
  // you can not use arrow function because arrow func doesn't have it's own context and it will be find this.balnce on window object and it dot get it
  this.balance += amount;
};

console.log(BankAccount.prototype);

const account1 = new BankAccount("John", 100);
account1.deposit(500);
console.log(account1);

// Javascript will first check in the constructor, if it does not find the method, then it will check in the prototype. if it still dont get that then it will check BankAccount constructor

// ===================================================================================================================================//

// =============================== withdraw ============================================================================ //

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

console.log(BankAccount.prototype);

const account2 = new BankAccount("Jane Doe", 2000);
account2.withdraw(500);
console.log(account2);

// ===================================================================================================================================//
