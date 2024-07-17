// --------------------------------------------------------------------------------------------------------
// IF statement:
// The if statement is used to execute a block of code only if the condition is true.

// Syntax:
// if (condition) {
//     // code block
// }

// Operator that can be use in condition:
// 1. == (Equality Operator): Compares the values of two operands.
// 2. === (Strict Equality Operator): Compares the values and types of two operands.
// 3. != (Inequality Operator): Compares the values of two operands.
// 4. !== (Strict Inequality Operator): Compares the values and types of two operands.
// 5. > (Greater than Operator): Compares the values of two operands.
// 6. < (Less than Operator): Compares the values of two operands.
// 7. >= (Greater than or Equal Operator): Compares the values of two operands.
// 8. <= (Less than or Equal Operator): Compares the values of two operands.

// Example-1:
const isUserLoggedIn = true;

if (isUserLoggedIn) {
    console.log('Welcome User');
}

// Output: Welcome User

// Example-2: 
if (2 == "2") {
    console.log('Code Executed Successfully!');
}

// Output: Code Executed Successfully!

// Example-3: Strict Equality Operator
if (2 === "2") {
    console.log('Code Executed Successfully!');
}

// Output: No output

// Explanation:
// In Example-2, the condition 2 == "2" is true because the values are equal after type conversion.
// In Example-3, the condition 2 === "2" is false because the values are equal, but the types are different.

// IF-ELSE statement:
// The if-else statement is used to execute a block of code if the condition is true and another block of code if the condition is false.

// Syntax:
// if (condition) {
//     // code block
// } else {
//     // code block
// }

// Example-4:
const temperature = 30;

if (temperature > 30) {
    console.log('It is hot outside!');
}
else {
    console.log('It is cold outside!');
}

// Output: It is cold outside!

// Interesting Fact:
const score = 100;

if (score == 100) {
    const power = "Fly"
    console.log(`User power: ${power}`);
}

// Output: User power: Fly

// console.log(`User power: ${power}`); // ReferenceError: power is not defined

// Explanation:
// The variable "power" is defined inside the if block, so it is not accessible outside the block.
// This is because the "let" and "const" keywords are block-scoped.

// But, if we have used the "var" keyword to define the variable, then it will be accessible outside the block.

// Example-5:
if (score == 100) {
    var power = "Fly"
}

console.log(`User power: ${power}`); // Output: User power: Fly


// Implicit Scope:
const balance = 1000;

if (balance > 500) console.log('You have enough balance!');

// Output: You have enough balance!

// You can use "," to separate multiple statements in a single line. However, it is not recommended to use it as it makes the code less readable.
if (balance > 500) console.log('You have enough balance!'), 
console.log('You can withdraw money!');

// Output: You have enough balance!
//         You can withdraw money!

// IF-ELSE-IF statement: Nested Conditions

// Syntax:

// if (condition1) {
//     // code block
// } else if (condition2) {
//     // code block
// } else {
//    // code block
// }

// Example-6:
const marks = 80;

if (marks >= 90) {
    console.log('Grade A');
}
else if (marks >= 80) {
    console.log('Grade B');
}
else if (marks >= 70) {
    console.log('Grade C');
}
else {
    console.log('Grade D');
}

// Output: Grade B

// Checking Multiple Conditions:

// Logical Operators:
// 1. && (Logical AND): Returns true if both operands are true.
// 2. || (Logical OR): Returns true if any of the operands are true.
// 3. ! (Logical NOT): Returns true if the operand is false.

// Example-7:
const userLoggedIn = true;
const isAdmin = true;

if (userLoggedIn && isAdmin) {
    console.log('Welcome Admin');
}

// Output: Welcome Admin

// Example-8:
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log('User Logged In Successfully!');
}

// Output: User Logged In Successfully!

// --------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------

// SWITCH statement:
// The switch statement is used to select one of many code blocks to be executed.

// Syntax:
// switch (expression) {
//     case value1:
//         // code block
//         break;
//     case value2:
//         // code block
//         break;
//     default:
//         // code block
// }

// Example-9:
const month = 3;

switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
    default:
        console.log('Invalid Month');
}

// Output: March

// NOTE: The "break" statement is used to exit the switch statement. If the break statement is not used, the code will continue to execute the next case except the default case.

// Example-10:
const programmingLanguage = 'JavaScript';

switch (programmingLanguage) {
    case 'JavaScript':
    case 'Python':
    case 'Java':
        console.log('Programming Language');
        break;
    default:
        console.log('Invalid Programming Language');
}

// Output: Programming Language

// --------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------

// Truthy and Falsy Values:
// In JavaScript, a value is considered truthy if it converts to true when evaluated in a Boolean context.

// Truthy Values:
// 1. true
// 2. 42
// 3. "0"
// 4. "false" or 'false'
// 5. " "
// 6. {}
// 7. []
// 8. function() {}

// Important Note:
// 1. false == 0 // true
// 2. false == "" // true
// 3. 0 == "" // true

// In JavaScript, a value is considered falsy if it converts to false when evaluated in a Boolean context.

// Falsy Values:
// 1. false
// 2. 0
// 3. -0
// 4. 0n (bigint)
// 5. ""
// 6. null
// 7. undefined
// 8. NaN

// Example-11:
// Let's check if the Object is empty or not.
const user = {};

// console.log(Object.keys(user)); // Output: []
if (Object.keys(user).length === 0) {
    console.log('Object is empty');
}

// Output: Object is empty

// --------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------

// Nullish Coalescing Operator (??):
// The nullish coalescing operator is used to check if the value is null or undefined.

// Syntax:
// expression1 ?? expression2

// Example-12:
const name = null;
const username = name ?? 'Guest';
console.log(username); // Output: Guest

// Example-13:
// Important Note: const val1; // SyntaxError: Missing initializer in const declaration
let val1;
val1 = 5 ?? 18;
console.log(val1); // Output: 5

let val2;
val2 = null ?? 5 ?? 10;
console.log(val2); // Output: 5

// Explanation:
// The nullish coalescing operator (??) returns the first defined value from the left side.

// --------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------

// Ternary Operator:
// The ternary operator is a shorthand way to write the if-else statement.

// Syntax:
// condition ? expression1 : expression2

// Example-14:
const age = 18;
const isAdult = age >= 18 ? 'Adult' : 'Not Adult';
console.log(isAdult); // Output: Adult

// Summary:
// 1. Use the if statement to execute a block of code only if the condition is true.
// 2. Use the if-else statement to execute a block of code if the condition is true and another block of code if the condition is false.
// 3. Use the if-else-if statement to execute a block of code based on multiple conditions.
// 4. About Scope: The "let" and "const" keywords are block-scoped, and the "var" keyword is function-scoped.
// 5. We can write multiple statements in a single line using ",". However, it is not recommended.
// 6. Use the switch statement to select one of many code blocks to be executed.
// 7. Break statement is used to exit the switch statement. If the break statement is not used, the code will continue to execute the next case except the default case.
// 8. Use the truthy and falsy values to check if the value is truthy or falsy.
// 9. Use the nullish coalescing operator (??) to check if the value is null or undefined.
// 10. Use the ternary operator as a shorthand way to write the if-else statement.