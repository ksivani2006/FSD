//======================================================
// Program: Find GCD and LCM of Two Numbers
//======================================================

let a: number = 24;
let b: number = 36;

let x = a;
let y = b;

while (y !== 0) {
    let temp = y;
    y = x % y;
    x = temp;
}

let gcd = x;
let lcm = (a * b) / gcd;

console.log("GCD =", gcd);
console.log("LCM =", lcm);