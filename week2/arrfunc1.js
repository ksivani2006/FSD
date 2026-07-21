"use strict";
const calculateElectricityBill = (customerName, units) => {
    let bill;
    if (units <= 100) {
        bill = units * 2;
    }
    else if (units <= 300) {
        bill = (100 * 2) + ((units - 100) * 4);
    }
    else {
        bill = (100 * 2) + (200 * 4) + ((units - 300) * 6);
    }
    console.log("Customer Name:", customerName);
    console.log("Units Consumed:", units);
    console.log("Electricity Bill: ₹" + bill);
};
calculateElectricityBill("Nissy", 350);
