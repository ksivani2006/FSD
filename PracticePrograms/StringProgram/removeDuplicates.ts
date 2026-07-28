//======================================================
// Program: Remove Duplicate Characters from a String
//======================================================

let str: string = "programming";
let result: string = "";

for (let ch of str) {
    if (!result.includes(ch)) {
        result += ch;
    }
}

console.log("Original String :", str);
console.log("After Removing Duplicates :", result);