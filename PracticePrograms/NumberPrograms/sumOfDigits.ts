//======================================================
// Program: Find the Sum of Digits of a Number
//======================================================

let num: number = 12345;
let sum: number = 0;

while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
}

console.log("Sum of Digits =", sum);