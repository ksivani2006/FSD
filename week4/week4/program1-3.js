var Employee;
(function (Employee) {
    class Details {
        show(name, id) {
            console.log("Employee Name:", name);
            console.log("Employee ID:", id);
        }
    }
    Employee.Details = Details;
})(Employee || (Employee = {}));
let emp = new Employee.Details();
emp.show("liya", 101);
export {};
