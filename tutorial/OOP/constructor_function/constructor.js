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
  
  // every object is store on diffrent location that's why when we change some value in 1st object it dont effect on the other value
  // const zahidAccount = new BankAccount("Sarang Zahid Parvez", 4000);
  // const ParvezAccount = new BankAccount("Parvez");
  // zahidAccount.deposit(10000);
  // zahidAccount.withdraw(5000);
  // ParvezAccount.deposit(5000);
  
  // console.log(zahidAccount,ParvezAccount);
  // console.log(BankAccount)
  
  // ============================================================================ //
  
  const accounts = []
  
  const accountForm = document.querySelector('#accountForm');
  const customerName = document.querySelector('#customerName');
  const balance = document.querySelector('#balance');
  
  accountForm.addEventListener('submit',(e) => {
      e.preventDefault();
      const account = new BankAccount(customerName.value,+balance.value)
        accounts.push(account)
        console.log(accounts)
  })
  
  
  // =============================== deposite ============================================= //
  
  const depositForm = document.querySelector('#depositForm');
  const accountNumber = document.querySelector('#accountNumber');
  const amount = document.querySelector('#amount')
  
  depositForm.addEventListener('submit',(e) => {
      e.preventDefault();
      const account = accounts.find(account => account.accountNumber === +accountNumber.value)
      account.deposit(+amount.value)
      console.log(account)
  
  })
  
  // =============================== withdraw ============================================= //
  
  const withdrawForm = document.querySelector('#withdrawForm');
  const withdrawaccountNumber = document.querySelector('#withdrawaccountNumber');
  const withdrawamount = document.querySelector('#withdrawamount')
  
  
  withdrawForm.addEventListener('submit',(e) => {
      e.preventDefault();
      const account = accounts.find(account => account.accountNumber === +withdrawaccountNumber.value)
      console.log(account)
      account.withdraw(+withdrawamount.value)
  })
  