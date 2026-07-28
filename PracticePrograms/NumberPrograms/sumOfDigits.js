"use strict";
//======================================================
// Program: Find the Sum of Digits of a Number
//======================================================
Object.defineProperty(exports, "__esModule", { value: true });
let num = 12345;
let sum = 0;
while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
}
console.log("Sum of Digits =", sum);
