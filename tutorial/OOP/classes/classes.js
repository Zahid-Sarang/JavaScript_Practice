class BankAccount {
    customerName;
    accountNumber;
    blance = 0;

    constructor(customerName,blance){
        this.accountNumber= Date.now()
        this.customerName = customerName;
        this.blance = blance;
    }
}

const John_Doe = new BankAccount ("Jhon Doe",2000) ;

console.log(John_Doe)

