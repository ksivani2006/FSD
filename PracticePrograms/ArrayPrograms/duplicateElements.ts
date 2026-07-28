//======================================================
// Program: Find Duplicate Elements in an Array
//======================================================

let arr: number[] = [1, 2, 3, 2, 4, 5, 3, 6];

let duplicates = new Set<number>();
let visited = new Set<number>();

for (let num of arr) {
    if (visited.has(num)) {
        duplicates.add(num);
    } else {
        visited.add(num);
    }
}

console.log("Duplicate Elements:", [...duplicates]);