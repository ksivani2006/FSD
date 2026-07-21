class Vehicle {
    static company: string = "Honda";
    readonly regNo: string;
    model: string;

    constructor(regNo: string, model: string) {
        this.regNo = regNo;
        this.model = model;
    }

    display(): void {
        console.log("Company:", Vehicle.company);
        console.log("Registration No:", this.regNo);
        console.log("Model:", this.model);
    }
}

let v = new Vehicle("AP39AB1234", "Activa");
v.display();