"use strict";
//======================================================
// Program: Rotate an Array by N Positions
//======================================================
Object.defineProperty(exports, "__esModule", { value: true });
let arr = [1, 2, 3, 4, 5];
let n = 2;
let rotated = [...arr.slice(n), ...arr.slice(0, n)];
console.log("Rotated Array:", rotated);
