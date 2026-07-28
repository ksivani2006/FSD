"use strict";
//======================================================
// Program: MathOperations Namespace
//======================================================
Object.defineProperty(exports, "__esModule", { value: true });
var MathOperations;
(function (MathOperations) {
    function add(a, b) {
        return a + b;
    }
    MathOperations.add = add;
    function subtract(a, b) {
        return a - b;
    }
    MathOperations.subtract = subtract;
    function multiply(a, b) {
        return a * b;
    }
    MathOperations.multiply = multiply;
    function divide(a, b) {
        return a / b;
    }
    MathOperations.divide = divide;
})(MathOperations || (MathOperations = {}));
console.log("Addition :", MathOperations.add(10, 5));
console.log("Subtraction :", MathOperations.subtract(10, 5));
console.log("Multiplication :", MathOperations.multiply(10, 5));
console.log("Division :", MathOperations.divide(10, 5));
