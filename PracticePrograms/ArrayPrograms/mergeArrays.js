"use strict";
//======================================================
// Program: Merge Two Arrays Using the Spread Operator
//======================================================
Object.defineProperty(exports, "__esModule", { value: true });
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergedArray = [...arr1, ...arr2];
console.log("Merged Array:", mergedArray);
