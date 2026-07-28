//======================================================
// Program: Check Armstrong Number
//======================================================

let num: number = 153;
let original: number = num;
let sum: number = 0;

while (num > 0) {
    let digit = num % 10;
    sum += digit * digit * digit;
    num = Math.floor(num / 10);
}

if (sum === original) {
    console.log(original + " is an Armstrong Number");
} else {
    console.log(original + " is not an Armstrong Number");
}