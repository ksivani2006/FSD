class Employee {
    empId: number;
    empName: string;
    department: string;
    salary: number;

    constructor(id: number, name: string, department: string, salary: number) {
        this.empId = id;
        this.empName = name;
        this.department = department;
        this.salary = salary;
    }

    displayDetails(): void {
        console.log("Employee ID:", this.empId);
        console.log("Employee Name:", this.empName);
        console.log("Department:", this.department);
        console.log("Salary:", this.salary);
    }

    increaseSalary(amount: number): void {
        this.salary += amount;
        console.log("Updated Salary:", this.salary);
    }

    annualSalary(): void {
        console.log("Annual Salary:", this.salary * 12);
    }
}

let emp = new Employee(201, "Rahul", "IT", 45000);

emp.displayDetails();
emp.increaseSalary(5000);
emp.annualSalary();