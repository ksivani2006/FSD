//======================================================
// Program: BankAccount Class
//======================================================

class BankAccount {
    accountHolder: string;
    balance: number;

    constructor(accountHolder: string, balance: number) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log("Deposited :", amount);
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrawn :", amount);
        } else {
            console.log("Insufficient Balance");
        }
    }

    displayBalance(): void {
        console.log("Current Balance :", this.balance);
    }
}

let account = new BankAccount("Susmitha", 5000);

account.deposit(2000);
account.withdraw(1500);
account.displayBalance();