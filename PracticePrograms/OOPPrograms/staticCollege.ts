//======================================================
// Program: Static College Name and Static Method
//======================================================

class College {
    static collegeName: string = "SVECW";

    static displayCollege(): void {
        console.log("College Name :", College.collegeName);
    }
}

College.displayCollege();