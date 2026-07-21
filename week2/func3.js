"use strict";
function checkEligibility(name, age) {
    if (age >= 18) {
        return `${name} is eligible to vote.`;
    }
    else {
        return `${name} is not eligible to vote.`;
    }
}
console.log(checkEligibility("Rahul", 20));
