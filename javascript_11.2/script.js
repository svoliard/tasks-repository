class BankAccount {
    #accountNumber;
    #balance;
    accountType;
    constructor(accountNumber, accountType) {
        this.#accountNumber = accountNumber;
        this.#balance = 0;
        this.accountType = accountType;
    }
    deposit(amount) {
        this.#balance += amount;
    }
    withdraw(amount) {
        this.#balance -= amount;
    }
    checkBalance() {
        return this.#balance;
    }
    setAccountNumber(accountNumber) [
        this.#accountNumber = accountNumber;
    ]
    getAccountNumber() {
        return this.#accountNumber;
    }
};

let account = new BankAccount("245568", "checking");
console.log(account.checkBalance());
account.deposit(5000);
console.log(account.checkBalance());
account.withdraw(450);
console.log(account.checkBalance());
console.log(account.accountType);