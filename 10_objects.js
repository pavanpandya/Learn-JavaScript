// Objects: It can be created either using the literals or using the Object constructor.

// What is singleton object?
// Singleton object is an object that is created only once in the memory and shared across the application. 
// If it is created using the object literal, then it is not a singleton object.

// Object Literals:
const JsUser = {
    name: "Pavan",
    "full name": "Pavan Pandya", // By Default the key are considered with quotes.
    age: 22,
    location: "Bloomington",
    email: "pavan@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
}

// Accessing the object properties:
console.log(JsUser.email); // OR
console.log(JsUser["email"]);

console.log(JsUser["full name"]); // Accessing the key with spaces. (Only Way)

// Interview Question:
// Use the symbol to create the unique key in the object and print its value.

const sym = Symbol("key");
const sym2 = Symbol("key");

const obj = {
    [sym]: "value",
    sym2: "value2"
}

console.log(obj.sym); // undefined
console.log(obj[sym]); // value
console.log(obj.sym2); // value2
// In the above example, even though we got the value of sym2, it is not used as a symbol.

// NOTE: To use the symbol as a key, we need to use the square brackets.

// Changing the object properties:
JsUser.email = "pavan@huggingface.com";
console.log(JsUser);

// Let's say you don't what to change the object properties, then you can use the Object.freeze() method.
// Object.freeze(JsUser);

// JsUser.email = "pavan@openai.com";
// console.log(JsUser); // It will not change the value.

console.log("I am here!")

// Adding function to the object:
JsUser.greeting = function() {
    console.log("Hello JS User");
}

JsUser.greeting2 = function() {
    // console.log("Hello JS User, " + this.name); // OR
    console.log(`Hello JS User, ${this.name}`);
}


console.log(JsUser.greeting); 
// Output: [Function (anonymous)] - This means that the function is added to the object.

console.log(JsUser.greeting()); 
console.log(JsUser.greeting2()); 