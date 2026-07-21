class Student {
    name: string;
    rollNo: number;
    branch: string;

    constructor(name: string, rollNo: number, branch: string) {
        this.name = name;
        this.rollNo = rollNo;
        this.branch = branch;
    }

    display(): void {
        console.log("Student Name:", this.name);
        console.log("Roll No:", this.rollNo);
        console.log("Branch:", this.branch);
    }
}

let s1 = new Student("Jasmine", 101, "AI&DS");
s1.display();