"use strict";
//======================================================
// Program: Find Duplicate Elements in an Array
//======================================================
Object.defineProperty(exports, "__esModule", { value: true });
let arr = [1, 2, 3, 2, 4, 5, 3, 6];
let duplicates = new Set();
let visited = new Set();
for (let num of arr) {
    if (visited.has(num)) {
        duplicates.add(num);
    }
    else {
        visited.add(num);
    }
}
console.log("Duplicate Elements:", [...duplicates]);
