"use strict";
//======================================================
// Program: Find the Missing Number in an Array
//======================================================
Object.defineProperty(exports, "__esModule", { value: true });
let arr = [1, 2, 3, 5];
let n = 5;
let expectedSum = (n * (n + 1)) / 2;
let actualSum = arr.reduce((sum, value) => sum + value, 0);
console.log("Missing Number:", expectedSum - actualSum);
