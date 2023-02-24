// problem => every time we create object method also repeat which take extra memory 
// solution => shared a method using prototype

function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.balance = balance;
  this.accountNumber = Date.now();

  this.deposit = function (amount){
    this.balance += amount;
  };
  this.withdraw = (amount)=>{
    this.balance -= amount;
  }
}

//   const account1 = new BankAccount('John', 100);
//   console.log(account1)

//   const account2 = new BankAccount('Jane Doe', 200);
//   console.log(account2)


/*
  in the javaScript, function also a object 
*/

console.log(BankAccount.prototype);