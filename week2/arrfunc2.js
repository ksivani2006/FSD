"use strict";
const calculateBMI = (name, weight, height) => {
    let bmi = weight / (height * height);
    console.log("Name:", name);
    console.log("Weight:", weight + " kg");
    console.log("Height:", height + " m");
    console.log("BMI:", bmi.toFixed(2));
    if (bmi < 18.5) {
        console.log("Category: Underweight");
    }
    else if (bmi < 25) {
        console.log("Category: Normal Weight");
    }
    else if (bmi < 30) {
        console.log("Category: Overweight");
    }
    else {
        console.log("Category: Obese");
    }
};
calculateBMI("Madhurima", 65, 1.68);
