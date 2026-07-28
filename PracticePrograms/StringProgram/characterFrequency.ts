//======================================================
// Program: Count the Frequency of Characters in a String
//======================================================

let str: string = "typescript";
let frequency: Map<string, number> = new Map();

for (let ch of str) {
    if (frequency.has(ch)) {
        frequency.set(ch, frequency.get(ch)! + 1);
    } else {
        frequency.set(ch, 1);
    }
}

console.log("Character Frequencies:");

frequency.forEach((value, key) => {
    console.log(key + " : " + value);
});