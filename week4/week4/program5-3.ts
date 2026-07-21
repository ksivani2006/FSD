interface Student {
    name: string;
}

function displayStudent<T extends Student>(student: T): void {
    console.log("Student Name:", student.name);
}

displayStudent({ name: "Liya" });