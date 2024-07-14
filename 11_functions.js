// Functions in JavaScript:
// Used to perform a specific task.

// Function Declaration or Function Definition:
function greet() {
    console.log('Hello World');
}

// Function Call:
greet();

// Function with Parameters:
function addTwoNumbers(a, b) {
    console.log(a + b);
}

addTwoNumbers(10, 20);

// Difference between Parameters and Arguments:
// Parameters are the variables used in the function definition.
// Arguments are the values passed to the function.

// Now, let's store the value
const res = addTwoNumbers(10, 20);
console.log("Result: ", res); // undefined

// Why undefined?
// Because the function doesn't return anything.

// Function with Return Statement:
function addTwoNums(a, b) {
    // let result = a + b;
    // return result;
    return a + b;
}

const result = addTwoNums(10, 20);
console.log("Result: ", result); // 30

function loginUserMessage(username){
    return `Welcome ${username}, Have a nice day!`;
}

loginUserMessage("Pavan Pandya"); // Doesn't print anything.

// First way to print the message
const msg = loginUserMessage("Pavan Pandya");
console.log(msg); // Welcome Pavan Pandya, Have a nice day! 

// Second way to print the message
console.log(loginUserMessage("Pavan Pandya")); // Welcome Pavan Pandya, Have a nice day!

// Another thing to remember:
// Let's say, if you don't pass any argument to the function, then the parameter will be undefined.
console.log(loginUserMessage()); // Welcome undefined, Have a nice day!

// Introducing Conditional Statements in Functions:
function loginUserMessage2(username){
    if(!username){
        return `Please enter your username!`;
    } else {
        return `Welcome ${username}, Have a nice day!`;
    }
}

console.log(loginUserMessage2()); // Please enter your username!

// Function with Default Parameters:
function loginUserMessage3(username = 'Guest'){
    return `Welcome ${username}, Have a nice day!`;
}

console.log(loginUserMessage3()); // Welcome Guest, Have a nice day!
console.log(loginUserMessage3("Deep")); // Welcome Deep, Have a nice day!