//======================================================
// Program: Merge Two Arrays Using the Spread Operator
//======================================================

let arr1: number[] = [1, 2, 3];
let arr2: number[] = [4, 5, 6];

let mergedArray = [...arr1, ...arr2];

console.log("Merged Array:", mergedArray);