// In this file, we will understand how the code is executed in JavaScript and how the call stack works.

// How the code is executed in JavaScript?
// JavaScript is a single-threaded language, which means it has only one call stack. The call stack is a data structure that records the function calls, in other words, it keeps track of the function calls. When a function is called, it is pushed onto the call stack and when the function returns, it is popped from the call stack.

// The Global Execution Context is the default context in which your JavaScript code runs. There is only one global execution context per program, and it is created when the JavaScript engine starts executing the code. The global execution context consists of two main phases: the memory (or creation) phase and the execution phase.

// Phase 1: Memory (or Creation) Phase:
// During the creation phase, the JavaScript engine sets up the Global Object ("window" object in the browser, "global" object or "{}" in Node.js). The global object is a special object that is created before any code is executed. It is a container for all global variables and functions. The global object is accessible from any part of your code.
// The "this" keyword is assigned to the global object. Therefore, when you refer to "this" in the global scope, it refers to the global object.

// Memory Allocation: 
// Variables: Memory is allocated for variables declared with "var", "let", and "const". "var" variables are initialized with undefined, while "let" and "const" are not initialized at this stage.
// Functions: Memory is allocated for function declarations, and the entire function is hoisted, meaning the function can be called before its declaration in the code.

// Phase 2: Execution Phase:
// Code Execution: The engine executes the code line by line. During this execution:
// Variables: "var" variables get their assigned values, while "let" and "const" are accessed only after their declaration (in the Temporal Dead Zone until then).
// Functions: Functions are available for invocation because they were fully hoisted in the creation phase.

// NOTE: What is temporal dead zone?
// The temporal dead zone is the period between the creation of a variable and its initialization. During this period, accessing the variable will result in a ReferenceError.

// Function Execution Context:
// When a function is invoked, the JavaScript engine creates a new execution context specifically for that function. This function execution context goes through the same two main phases as the global execution context: the memory (or creation) phase and the execution phase.

// Components of the Function Execution Context:
// Variable Environment: This contains the function’s local variables and function declarations.
// Lexical Environment: This includes the local environment as well as other referencecs to its outer environment.
// "this" refers to the object context in which the function is invoked.
// Scope Chain: This consists of current function's lexical environment and its parent environment upto the global environment.

// Phase of Function Execution Context:
// Phase-1 - Memory (or Creation) Phase:
// The Activation Object, also known as the Lexical Environment, is created. This object contains:
// Local Variables: Memory is allocated for variables declared within the function. "var" variables are initialized to undefined, while "let" and "const" are allocated but remain uninitialized until their declarations are encountered.
// Function Declarations: Memory is allocated for function declarations, and the entire function definitions are hoisted.
// Arguments Object: The arguments object is created, which contains all the arguments passed to the function.

// "this" Binding: The value of "this" is determined based on how the function is called:
// For a function called as a method of an object, "this" refers to that object.
// For a function called as a regular function, "this" refers to the global object (in non-strict mode) or undefined (in strict mode).
// For a function called with new, "this" refers to the new instance object.

// NOTE: What is non-strict mode and strict mode?
// In non-strict mode, the value of "this" is the global object. In strict mode, the value of "this" is undefined.

// Phase-2 - Execution Phase:
// // The engine executes the code line by line. During this execution:
// Variable Initialization: Variables declared with var are assigned their values. let and const variables are initialized and assigned values when their declarations are encountered.
// Code Execution: The code inside the function is executed. This includes evaluating expressions, invoking other functions, and manipulating data.
// Once the function execution is complete, the function execution context is popped off the call stack, and the control is returned to the calling function.

// Call Stack:
// The call stack is a data structure that records function calls. When a function is called, it is pushed onto the call stack. When the function returns, it is popped from the call stack. The call stack follows the Last In, First Out (LIFO) principle.

// ---------------------------------------------------------------------------------------------------------------------------
// Example:
// ---------------------------------------------------------------------------------------------------------------------------

var x = 10;

function outer() {
  var y = 20;

  function inner() {
        var z = 30;
        console.log(x); // 10
        console.log(y); // 20
        console.log(z); // 30

        console.log(this); // global object
    }
    inner();
    console.log(this); // global object
}

outer();


// Explanation:
// Global Execution Context is created when the JavaScript engine starts executing the code.

// Creation Phase:
// var x: Memory allocated and initialized to undefined.
// function outer: Memory allocated, and the entire function is hoisted.

// Execution Phase:
// x = 10: x is assigned the value 10.
// outer() is invoked, creating a new function execution context for outer.

// Outer Function Execution Context
// Creation Phase:
// var y: Memory allocated and initialized to undefined.
// function inner: Memory allocated, and the entire function is hoisted.
// "this" is set to the global object (in non-strict mode).

// Execution Phase:
// y = 20: y is assigned the value 20.
// inner() is invoked, creating a new function execution context for inner.

// Inner Function Execution Context
// Creation Phase:
// var z: Memory allocated and initialized to undefined.
// "this" is set to the global object (in non-strict mode).

// Execution Phase:
// z = 30: z is assigned the value 30.
// console.log(x): Logs 10, accessing x from the global scope.
// console.log(y): Logs 20, accessing y from the outer function’s scope.
// console.log(z): Logs 30, accessing z from the inner function’s scope.

// NOTE: The call stack can be visualized by running the code in a browser under sources tab and checking the call stack.

// ---------------------------------------------------------------------------------------------------------------------------

// Use the below code to visualize the call stack in the browser console:
function one(){
    console.log("one");
    two()
}
function two(){
    console.log("two");
    three()
}
function three(){
    console.log("three");
}

one();

// Output:
// one
// two
// three

// Call Stacl Working:
// one() is called and pushed onto the call stack.
// one() logs "one" and calls two().
// two() is called and pushed onto the call stack.
// two() logs "two" and calls three().
// three() is called and pushed onto the call stack.
// three() logs "three".
// three() is popped off the call stack.
// two() is popped off the call stack.
// one() is popped off the call stack.

// ---------------------------------------------------------------------------------------------------------------------------