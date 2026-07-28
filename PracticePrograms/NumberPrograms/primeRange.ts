//======================================================
// Program: Generate Prime Numbers in a Range
//======================================================

let start: number = 1;
let end: number = 30;

console.log("Prime Numbers:");

for (let num = start; num <= end; num++) {

    if (num < 2) continue;

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