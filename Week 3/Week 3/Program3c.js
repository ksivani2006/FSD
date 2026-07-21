"use strict";
class Bank {
    static bankName = "State Bank";
    accountNumber;
    customerName;
    balance;
    constructor(accNo, name, balance) {
        this.accountNumber = accNo;
        this.customerName = name;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    display() {
        console.log("Bank:", Bank.bankName);
        console.log("Account No:", this.accountNumber);
        console.log("Customer:", this.customerName);
        console.log("Balance:", this.balance);
    }
}
let b = new Bank(12345, "Kiran", 10000);
b.deposit(3000);
b.display();
