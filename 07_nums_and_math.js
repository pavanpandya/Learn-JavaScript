// Interesting Fact.
const score = 400
console.log(score); // 400

const balance = new Number(1000)
console.log(balance); // [Number: 1000]

// Why the first console.log() prints 400 and the second one prints [Number: 1000]?
// The first console.log() prints 400 because it is a primitive value (automatically defined as Number).
// The second console.log() prints [Number: 1000] because it is an object.

// toString() method used to converts a number to a string.
console.log(balance.toString());
console.log(typeof balance.toString()); // string

// toFixed() method used to formats a number using fixed-point notation.
console.log(balance.toFixed(2)); // 1000.00

// toPrecision() method used to formats a number to a specified length.
const anotherNum = 23.8966
console.log(anotherNum.toPrecision(3)); // 23.9
console.log(anotherNum.toPrecision(2)); // 24

// toLocaleString() method used to converts a number into a string, using a local language format.
const num = 1000000
console.log(num.toLocaleString()); // 1,000,000 (US Standards)
// If you want to use a different country standard, you can pass the country code as an argument.   
console.log(num.toLocaleString('en-IN')); // 10,00,000 (Indian Standards)

// Max and Min values of a number.
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324

// Max and Min Safe Integer
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// --------------------------------------------------------------------------------
// Maths:
// --------------------------------------------------------------------------------

console.log(Math); // Output: Object [Math] {}

// Math.PI
console.log(Math.PI); // 3.141592653589793

// Basic Math Operations
console.log(Math.abs(-4.7)); // 4.7
console.log(Math.ceil(4.4)); // 5
console.log(Math.floor(4.7)); // 4
console.log(Math.round(4.4)); // 4
console.log(Math.pow(8, 2)); // 64
console.log(Math.sqrt(64)); // 8
console.log(Math.cbrt(64)); // 4
console.log(Math.min(0, 150, 30, 20, -8, -200)); // -200
console.log(Math.max(0, 150, 30, 20, -8, -200)); // 150

// Random
console.log(Math.random()); // Random number between 0 (inclusive), and 1 (exclusive)
console.log((Math.random() * 10) + 1); // Random number between 1 (inclusive), and 10 (exclusive)

// Note: In the above example, we added 1 to the result because Math.random() can generate a value like 0.0002.. and when we multiply it by 10, it will be 0.002.. and when we add 1 to it, it will be 1.002.. which is between 1 and 10.

// Random number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1);

// Random number between a range
const min = 5
const max = 10
console.log(Math.floor(Math.random() * (max - min + 1)) + min);