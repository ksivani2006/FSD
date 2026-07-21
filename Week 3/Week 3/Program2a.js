"use strict";
class BankAccount {
    accountHolder;
    balance;
    constructor(name, balance) {
        this.accountHolder = name;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log("Amount Deposited:", amount);
    }
    showBalance() {
        console.log("Balance:", this.balance);
    }
}
let acc = new BankAccount("Hema", 5000);
console.log("Account Holder:", acc.accountHolder);
acc.deposit(2000);
acc.showBalance();
