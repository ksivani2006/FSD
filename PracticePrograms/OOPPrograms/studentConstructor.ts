//======================================================
// Program: Student Class with Constructor
//======================================================

class Student {
    id: number;
    name: string;
    course: string;

    constructor(id: number, name: string, course: string) {
        this.id = id;
        this.name = name;
        this.course = course;
    }

    display(): void {
        console.log("Student ID :", this.id);
        console.log("Student Name :", this.name);
        console.log("Course :", this.course);
    }
}

let student = new Student(101, "Susmitha", "AI & DS");

student.display();