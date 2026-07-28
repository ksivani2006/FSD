//======================================================
// Program: Readonly Student ID
//======================================================

class StudentInfo {
    readonly studentId: number;
    name: string;

    constructor(studentId: number, name: string) {
        this.studentId = studentId;
        this.name = name;
    }

    display(): void {
        console.log("Student ID :", this.studentId);
        console.log("Student Name :", this.name);
    }
}

let student = new StudentInfo(101, "Susmitha");

student.display();