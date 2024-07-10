"use strict"; // Treat all JS code as newer version as per newer standards. Currently, it is not required to use this line as it automatically treats all JS code as newer version.

// It will display an alert box with the message "Data Types in JavaScript". But can only be run in browser. If you run this in Node.js, it will throw an error.
// ReferenceError: alert is not defined
// alert("Data Types in JavaScript"); 

// ----------------------------------------------
// Data Types in JavaScript:
// ----------------------------------------------

// 1. Primitive Data Types
// 2. Non-Primitive Data Types

// 1. Primitive Data Types:
// a. String
// b. Number
// c. Boolean
// d. Undefined
// e. Null
// f. Symbol
// g. BigInt

// a. String:
let person_name = "John Doe";
console.log(person_name); // John Doe
console.log(typeof person_name); // string

// b. Number:
let age = 30;
console.log(age); // 30
console.log(typeof age); // number

// c. Boolean: true or false
let isMarried = false;
console.log(isMarried); // false
console.log(typeof isMarried); // boolean

// d. Undefined:
let car;
console.log(car); // undefined
console.log(typeof car); // undefined

// e. Null:
let bike = null;
console.log(bike); // null
console.log(typeof bike); // object

// f. Symbol:
let sym = Symbol();
console.log(sym); // Symbol()
console.log(typeof sym); // symbol

// g. BigInt: The max it can store is 2^53 - 1.
let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt); // 1234567890123456789012345678901234567890n
console.log(typeof bigInt); // bigint

// 2. Non-Primitive Data Types:
// a. Object
// b. Array
// c. Function
// d. Date
// e. RegExp

// a. Object:
let person = {
    name: "John Doe",
    age: 30,
    isMarried: false
};
console.log(person); // { name: 'John Doe', age: 30, isMarried: false }
console.log(typeof person); // object

// b. Array:
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits); // [ 'Apple', 'Banana', 'Orange' ]
console.log(typeof fruits); // object

// c. Function:
function greet() {
    console.log("Hello from greet function!");
}
console.log(greet); // [Function: greet]
console.log(typeof greet); // function

// d. Date:
let today = new Date();
console.log(today); // 2021-09-10T17:38:31.000Z
console.log(typeof today); // object

// e. RegExp:
let pattern = /xyz/;
console.log(pattern); // /xyz/
console.log(typeof pattern); // object

