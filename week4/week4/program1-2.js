var Calculator;
(function (Calculator) {
    function add(a, b) {
        console.log("Sum =", a + b);
    }
    Calculator.add = add;
})(Calculator || (Calculator = {}));
Calculator.add(10, 20);
export {};
