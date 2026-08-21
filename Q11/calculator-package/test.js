const calculator = require('./index');

console.log("===== CALCULATOR PACKAGE TEST =====");

console.log("Addition:", calculator.add(20, 10));
console.log("Subtraction:", calculator.subtract(20, 10));
console.log("Multiplication:", calculator.multiply(20, 10));
console.log("Division:", calculator.divide(20, 10));

console.log("===== TEST COMPLETED =====");