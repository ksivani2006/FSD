class College {
    static collegeName: string = "SVECW";
    readonly rollNo: number;
    studentName: string;

n    constructor(roll: number, name: string) {
        this.rollNo = roll;
        this.studentName = name;
    }

n    display(): void {
        console.log("College:", College.collegeName);
        console.log("Roll No:", this.rollNo);
        console.log("Student:", this.studentName);
    }
}

nlet s = new College(101, "Hema");
s.display();