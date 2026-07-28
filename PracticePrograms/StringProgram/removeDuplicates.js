"use strict";
//======================================================
// Program: Remove Duplicate Characters from a String
//======================================================
Object.defineProperty(exports, "__esModule", { value: true });
let str = "programming";
let result = "";
for (let ch of str) {
    if (!result.includes(ch)) {
        result += ch;
    }
}
console.log("Original String :", str);
console.log("After Removing Duplicates :", result);
