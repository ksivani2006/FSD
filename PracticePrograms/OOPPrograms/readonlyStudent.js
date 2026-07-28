"use strict";
//======================================================
// Program: Readonly Student ID
//======================================================
Object.defineProperty(exports, "__esModule", { value: true });
class StudentInfo {
    studentId;
    name;
    constructor(studentId, name) {
        this.studentId = studentId;
        this.name = name;
    }
    display() {
        console.log("Student ID :", this.studentId);
        console.log("Student Name :", this.name);
    }
}
let student = new StudentInfo(101, "Susmitha");
student.display();
