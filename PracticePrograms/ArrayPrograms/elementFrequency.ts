//======================================================
// Program: Count the Occurrences of Each Element
//======================================================

let arr: number[] = [1, 2, 2, 3, 4, 3, 2];

let frequency = new Map<number, number>();

for (let num of arr) {
    frequency.set(num, (frequency.get(num) || 0) + 1);
}

console.log("Element Frequencies:");

frequency.forEach((value, key) => {
    console.log(key + " : " + value);
});