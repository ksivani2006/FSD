class Employee2 {
    public empName: string;
    private password: string;

n    constructor(name: string, password: string) {
        this.empName = name;
        this.password = password;
    }

n    login(pass: string): void {
        if (pass === this.password)
            console.log("Login Successful");
        else
            console.log("Invalid Password");
    }

n    display(): void {
        console.log("Employee:", this.empName);
    }
}

let e = new Employee2("Rahul", "admin123");
e.display();
e.login("admin123");