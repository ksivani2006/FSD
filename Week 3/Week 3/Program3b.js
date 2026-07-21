"use strict";
class Vehicle {
    static company = "Honda";
    regNo;
    model;
    constructor(regNo, model) {
        this.regNo = regNo;
        this.model = model;
    }
    display() {
        console.log("Company:", Vehicle.company);
        console.log("Registration No:", this.regNo);
        console.log("Model:", this.model);
    }
}
let v = new Vehicle("AP39AB1234", "Activa");
v.display();
