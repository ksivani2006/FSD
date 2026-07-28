"use strict";
//======================================================
// Program: Check Strong Number
//======================================================
Object.defineProperty(exports, "__esModule", { value: true });
let num = 145;
let original = num;
let sum = 0;
while (num > 0) {
    let digit = num % 10;
    let fact = 1;
    for (let i = 1; i <= digit; i++) {
        fact *= i;
    }
    sum += fact;
    num = Math.floor(num / 10);
}
if (sum === original) {
    console.log(original + " is a Strong Number");
}
else {
    console.log(original + " is not a Strong Number");
}
