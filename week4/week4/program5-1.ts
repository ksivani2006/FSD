function displayLength<T extends { length: number }>(value: T): void {
    console.log("Length:", value.length);
}

displayLength("Liya");