"use strict";
//======================================================
// Program: Generate Prime Numbers in a Range
//======================================================
Object.defineProperty(exports, "__esModule", { value: true });
let start = 1;
let end = 30;
console.log("Prime Numbers:");
for (let num = start; num <= end; num++) {
    if (num < 2)
        continue;
    let prime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            prime = false;
            break;
        }
    }
    if (prime) {
        console.log(num);
    }
}
