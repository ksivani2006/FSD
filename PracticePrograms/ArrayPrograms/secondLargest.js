"use strict";
//======================================================
// Program: Find the Second Largest Number in an Array
//======================================================
Object.defineProperty(exports, "__esModule", { value: true });
let arr = [10, 25, 40, 15, 35];
arr.sort((a, b) => b - a);
console.log("Second Largest Element:", arr[1]);
