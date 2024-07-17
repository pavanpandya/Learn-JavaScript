// Immediately Invoked Function Expression (IIFE)
// An IIFE is a function that is executed immediately after it is created.

// Why it is also used?
// Avoiding Global Scope Pollution:
// Variables declared inside the IIFE are not added to the global scope. This helps in preventing naming conflicts with other scripts and libraries.

// Encapsulation:
// It allows encapsulation of variables. Variables declared inside the IIFE are not accessible from the outside, providing a level of privacy.

// Isolation:
// // It helps in isolating code. Variables declared inside the IIFE do not interfere with variables in the outer scope, and vice versa.

// Syntax:\
// ()(); // Syntax for IIFE
// The first pair of parentheses defines the function, and the second pair invokes it just like we write: 
// function functionName() { } // Function Definition
//functionName(); // Function Call


// Function-1: IIFE without parameters 
// Named IIFE:
(function chai() {
    console.log(`DB connected`);
})();
// Output: DB connected

( () => {
    console.log(`DB Two connected`);
})();

// If two IIFE are used, it's a good practice to end each with a semicolon to avoid potential issues.

// Function-2: IIFE with parameters
(
    (name) => {
        console.log(`${name} DB connected`);
    }
)('Postgres');
// Output: Postgres DB connected 

// Explanation:
// - The first IIFE is named 'chai' and logs "DB connected" immediately when the script runs.
// - The second IIFE is unnamed and takes a parameter 'name',  followed by the provided name ('Postgres').
// - Both IIFE syntaxes are valid, and the use of parentheses around the function helps to indicate that it's a function expression being invoked immediately.

// Note: Ending IIFE with semicolons is especially important when you are combining multiple JavaScript files into one, to prevent unexpected issues due to automatic semicolon insertion.
