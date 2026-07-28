"use strict";
//======================================================
// Program: Check Armstrong Number
//======================================================
Object.defineProperty(exports, "__esModule", { value: true });
let num = 153;
let original = num;
let sum = 0;
while (num > 0) {
    let digit = num % 10;
    sum += digit * digit * digit;
    num = Math.floor(num / 10);
}
if (sum === original) {
    console.log(original + " is an Armstrong Number");
}
else {
    console.log(original + " is not an Armstrong Number");
}
