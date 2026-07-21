function calculateSI(principal: number, rate: number, time: number): number {
    return (principal * rate * time) / 100;
}

let interest: number = calculateSI(10000, 5, 2);

console.log("Simple Interest:", interest);