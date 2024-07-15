let a = 100;
var c = 300;

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    myvar = 40;

    console.log(`Value of "a" inside the block: ${a}`); // 10 // Block-scoped
}

// Let's understand the scope of variables:
// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
console.log(c); // 30

// The variable 'a' and 'b' are not defined because they are block-scoped.
// The value of 'c' is changed because it is globally scoped.

console.log(`Value of "a" outside the block: ${a}`); // 100 // Global scope

// Important Interview Question:
// Scope in Browser Console vs Node.js:
// In the browser console, the global scope is the window object.
// In Node.js, the global scope is the global object.