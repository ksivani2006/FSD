"use strict";
//======================================================
// Program: Count the Frequency of Characters in a String
//======================================================
Object.defineProperty(exports, "__esModule", { value: true });
let str = "typescript";
let frequency = new Map();
for (let ch of str) {
    if (frequency.has(ch)) {
        frequency.set(ch, frequency.get(ch) + 1);
    }
    else {
        frequency.set(ch, 1);
    }
}
console.log("Character Frequencies:");
frequency.forEach((value, key) => {
    console.log(key + " : " + value);
});
