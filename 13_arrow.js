const user = {
    username: "Pavan",
    age: 22,
    welcomeMessage: function(){
        console.log(`Hi ${this.username}, Welcome to the world of JavaScript!`);
        // Here, "this" refers to the user object (refers to current context). 
        console.log(this);

    }
}

user.welcomeMessage(); // Hi Pavan, Welcome to the world of JavaScript!

// Now, let's change the value of username
user.username = "Deep";
user.welcomeMessage(); // Hi Deep, Welcome to the world of JavaScript!

// It will print the updated username value because "this" refers to the current context (user object).

// Important:
// What is "this" keyword?
// "this" keyword refers to the object that is calling the function.
// In the above example, user object is calling the function welcomeMessage() and hence "this" refers to the user object.

// Interesting fact:
// It will print the global object (window object in case of browser).
console.log(this); // Output: {}

function coffee(){
    console.log(this);
}

coffee(); 

// Output:
/* <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
} */

function printUserName(){
    let username = "Pavan"
    console.log(this.username)
}

printUserName() // Output: undefined

// Why?
// In JavaScript, "this" refers to the object that a function is a method of. When you call printUserName(), it’s not a method of any object, so this doesn’t refer to any object and this.username is undefined.

// Another Example by GPT:
// In JavaScript, "this" is a special keyword that refers to the “owner” of the function we’re executing, or rather, to the object that a function is a method of.

// Let’s say we have a dog, and we want to describe the dog’s action:

// JavaScript

// let dog = {
//     name: "Buddy",
//     bark: function() {
//         console.log(this.name + " says woof!");
//     }
// };

// dog.bark(); // Output: Buddy says woof!
// In this case, "this" inside the bark function refers to the dog object, because bark is a method of dog. So "this.name" is the same as "dog.name".
// But if you have a function all by itself, not attached to an object, this doesn’t have anything to refer to, so it’s undefined. That’s why in our above example, "this.username" was undefined. The function printUserName wasn’t part of an object, so this didn’t refer to anything.


// Arrow Functions:
const printUserDetails = () => {
    let username = "Pavan"
    console.log(this.username)
    console.log(this) // Output: {}
}

printUserDetails() // Output: undefined

const addTwoNumbers = (a, b) => {
    return a + b;
}

console.log(addTwoNumbers(5, 10)) // Output: 15

// NOTE: The above thing is called implicit return. If you have only one statement in the function, you can omit the curly braces and the return keyword. The value of the statement will be returned automatically. Therefore, the above function can be written as:

// const addTwoNumbers = (a, b) => a + b; // OR
// const addTwoNumbers = (a, b) => (a + b);

