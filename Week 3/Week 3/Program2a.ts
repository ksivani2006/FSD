class BankAccount {
    public accountHolder: string;
    private balance: number;

    constructor(name: string, balance: number) {
        this.accountHolder = name;
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log("Amount Deposited:", amount);
    }

    showBalance(): void {
        console.log("Balance:", this.balance);
    }
}

let acc = new BankAccount("Hema", 5000);
console.log("Account Holder:", acc.accountHolder);
acc.deposit(2000);
acc.showBalance();