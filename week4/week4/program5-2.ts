function showItems<T extends any[]>(items: T): void {
    console.log(items);
}

showItems([10, 20, 30]);