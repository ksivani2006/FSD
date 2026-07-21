"use strict";
class College {
    static collegeName = "SVECW";
    rollNo;
    studentName;
    constructor(roll, name) {
        this.rollNo = roll;
        this.studentName = name;
    }
    display() {
        console.log("College:", College.collegeName);
        console.log("Roll No:", this.rollNo);
        console.log("Student:", this.studentName);
    }
}
let s = new College(101, "Hema");
s.display();
