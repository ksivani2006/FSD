function printArray<T>(arr: T[]): void {
    arr.forEach(item => console.log(item));
}

printArray<number>([10, 20, 30]);