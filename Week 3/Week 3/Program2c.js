"use strict";
class Employee2 {
    empName;
    password;
    constructor(name, password) {
        this.empName = name;
        this.password = password;
    }
    login(pass) {
        if (pass === this.password)
            console.log("Login Successful");
        else
            console.log("Invalid Password");
    }
    display() {
        console.log("Employee:", this.empName);
    }
}
let e = new Employee2("Rahul", "admin123");
e.display();
e.login("admin123");
