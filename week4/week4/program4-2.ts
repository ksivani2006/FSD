function square<T extends number>(num: T): void {
    console.log(num * num);
}

square(5);