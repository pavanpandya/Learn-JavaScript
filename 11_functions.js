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

// More on Functions: (Lecture-2)

// Consider a scenario where you are not sure about the number of arguments that will be passed to the function.
// function calculateCartTotal(productPrices){
//     return productPrices;
// }

// console.log(calculateCartTotal(100, 200, 300, 400, 500)); // 100

// In such cases, we can use the rest parameter.
// It allows us to represent an indefinite number of arguments as an array.

function calculateCartTotal(...productPrices){
    return productPrices;
}

console.log(calculateCartTotal(100, 200, 300, 400, 500)); // [100, 200, 300, 400, 500]

// Note: Here, you may get confused with the spread operator.
// But, the spread operator is used to unpack elements from an array.
// Whereas, the rest parameter is used to pack elements into an array.
// The way they are used, helps to differentiate between them.

// Passing Object as an Argument:
const productDetail = {
    productName: "Apple",
    productPrice: 100
}

function displayProductDetails(product){
    console.log(`Product name is ${product.productName} and its price is ${product.productPrice}.`);
}

displayProductDetails(productDetail); // Product name is Apple and its price is 100.

// Points to remember:
// There can be a case where even though the function is expecting an object as an argument, but you may pass a different type of argument.
// Or the object properties that we are trying to access may not exist. In that case, we will get "undefined" as the output.

// We can also pass the object directly
displayProductDetails({
    productName: "Banana",
    productPrice: 50
}); // Product name is Banana and its price is 50.

// Passing Array as an Argument:
const myNewArray = [10, 20, 30, 40, 50];

function returnFirstElement(arr){
    return arr[0];
}

console.log("First Element is: ", returnFirstElement(myNewArray)); // 10