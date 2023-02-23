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