"use strict";
class Student {
    name;
    rollNo;
    branch;
    constructor(name, rollNo, branch) {
        this.name = name;
        this.rollNo = rollNo;
        this.branch = branch;
    }
    display() {
        console.log("Student Name:", this.name);
        console.log("Roll No:", this.rollNo);
        console.log("Branch:", this.branch);
    }
}
let s1 = new Student("Jasmine", 101, "AI&DS");
s1.display();