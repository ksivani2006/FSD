"use strict";
//======================================================
// Program: Static College Name and Static Method
//======================================================
Object.defineProperty(exports, "__esModule", { value: true });
class College {
    static collegeName = "SVECW";
    static displayCollege() {
        console.log("College Name :", College.collegeName);
    }
}
College.displayCollege();
