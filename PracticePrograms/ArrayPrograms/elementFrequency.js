"use strict";
//======================================================
// Program: Count the Occurrences of Each Element
//======================================================
Object.defineProperty(exports, "__esModule", { value: true });
let arr = [1, 2, 2, 3, 4, 3, 2];
let frequency = new Map();
for (let num of arr) {
    frequency.set(num, (frequency.get(num) || 0) + 1);
}
console.log("Element Frequencies:");
frequency.forEach((value, key) => {
    console.log(key + " : " + value);
});
