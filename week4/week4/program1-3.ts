namespace Employee {
    export class Details {
        show(name: string, id: number): void {
            console.log("Employee Name:", name);
            console.log("Employee ID:", id);
        }
    }
}

let emp = new Employee.Details();
emp.show("liya", 101);