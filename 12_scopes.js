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

// Nested Scope:

function one(){
    const username = "pavan";

    function two(){
        const website = "pavanpandya.us";
        console.log(`Username: ${username}`);
    }

    // console.log(`Website: ${website}`); // ReferenceError: website is not defined
    two();
}

one();

// How "username" is accessible in the nested function?
// The inner function has access to the outer function's variables/scope.
// This is called "Closure".

// Another Example:
if (true){
    const personName = "Pavan";
    if(personName === "Pavan"){
        const personWebsite = "pavanpandya.us";
        console.log(`Name: ${personName} and his Website: ${personWebsite}`);
    }
    // console.log(`Website: ${personWebsite}`); // ReferenceError: personWebsite is not defined
}

// console.log(`Name: ${personN`ame}`); // ReferenceError: personName is not defined

// Why?
// The variable 'personWebsite' is only accessible inside the inner block.
// The variable 'personName' is only accessible inside the outer block.

// Interesting Concept:

// // 1. First way of creating a function:
// function addOne(num){
//     return num + 1;
// }

// addOne(5); // 6

// // 2. Second way of creating a function:
// const addTwo = function(num){
    //     return num + 2;
    // }
    
    // addTwo(5); // 7

// The above code will work perfectly.
// Now, for a moment, let's think about the following code:

addOne(5); // 6

function addOne(num){
    return num + 1;
}

addTwo(5); // ReferenceError: Cannot access 'addTwo' before initialization

// Why?
// Because we are trying to access the function before it is declared.

const addTwo = function(num){
    return num + 2;
}
    
// What is the difference between the above two examples?
// In the first example, the function is hoisted.
// In the second example, the function is not hoisted.

// Hoisting:
// In JavaScript, a variable can be declared after it has been used.
// In other words, a variable can be used before it has been declared.
// Hoisting is JavaScript's default behavior of moving declarations to the top.

