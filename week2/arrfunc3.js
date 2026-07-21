"use strict";
const studentResult = (name, sub1, sub2, sub3) => {
    let total = sub1 + sub2 + sub3;
    let percentage = total / 3;
    console.log("Student Name:", name);
    console.log("Total Marks:", total);
    console.log("Percentage:", percentage.toFixed(2) + "%");
    if (percentage >= 90) {
        console.log("Grade: A");
    }
    else if (percentage >= 75) {
        console.log("Grade: B");
    }
    else if (percentage >= 50) {
        console.log("Grade: C");
    }
    else {
        console.log("Grade: Fail");
    }
};
studentResult("Rahul", 90, 85, 88);
