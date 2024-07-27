// JavaScript does have classes, but they are syntactic sugar over its prototypal inheritance system. 
// This means that while JavaScript classes look and behave similarly to classes in traditional object-oriented languages like Java or C++, under the hood they work with prototypes.

// Class Syntax in JavaScript
// JavaScript classes were introduced in ECMAScript 6 (ES6) and provide a more familiar syntax for creating objects and dealing with inheritance. 
// Here is an example of a simple class in JavaScript:

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    describe() {
        return `${this.name} is a ${this.species}.`;
    }

    speak(sound) {
        return `${this.name} says ${sound}.`;
    }
}

const lion = new Animal('Leo', 'lion');
console.log(lion.describe()); // Leo is a lion.
console.log(lion.speak('roar')); // Leo says roar.

// Class Features:
// Constructor: A special method for creating and initializing objects created with the class.
// Methods: Functions associated with a class that define behaviors.
// Inheritance: Classes can extend other classes to inherit properties and methods.

// Inheritance in JavaScript:
// class Animal {
//     constructor(name, species) {
//         this.name = name;
//         this.species = species;
//     }

//     describe() {
//         return `${this.name} is a ${this.species}.`;
//     }
// }

class Dog extends Animal {
    constructor(name, breed) {
        super(name, 'dog');
        this.breed = breed;
    }

    bark() {
        return `${this.name} barks.`;
    }
}

const dog = new Dog('Buddy', 'Golden Retriever');
console.log(dog.describe()); // Buddy is a dog.
console.log(dog.bark()); // Buddy barks.

// Under the Hood: Prototypal Inheritance
// Despite the class syntax, JavaScript uses prototypes for inheritance. Each function in JavaScript has a prototype property that is used to build the prototype chain.

// Here's how the above Animal and Dog classes look with prototype-based syntax:
// function Animal(name, species) {
//     this.name = name;
//     this.species = species;
// }

// Animal.prototype.describe = function () {
//     return `${this.name} is a ${this.species}.`;
// };

// function Dog(name, breed) {
//     Animal.call(this, name, 'dog');
//     this.breed = breed;
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.bark = function () {
//     return `${this.name} barks.`;
// };

// const dog = new Dog('Buddy', 'Golden Retriever');
// console.log(dog.describe()); // Buddy is a dog.
// console.log(dog.bark()); // Buddy barks.

// Key Points:
// Classes: Introduced in ES6, they provide a clearer and more concise syntax to work with objects and inheritance.
// Constructor: The constructor method is used to initialize class instances.
// Methods: Defined inside the class, they describe the behaviors of the instances.
// Inheritance: Achieved using the extends keyword and the super() function.
// Prototypal Inheritance: Under the hood, JavaScript still uses prototypes to handle inheritance.

// Prototype-based inheritance, also known as prototypal inheritance, is a style of object-oriented programming in JavaScript where objects inherit properties and methods directly from other objects. Instead of using classes as blueprints to create instances (like in classical inheritance), JavaScript uses prototypes.

// Key Concepts of Prototypal Inheritance
// Prototype:

// Every JavaScript object has an internal link to another object called its prototype.
// This prototype object can have its own prototype, forming a prototype chain.
// The chain ends when a prototype has null as its prototype.
// Prototype Chain:

// When a property or method is accessed on an object, JavaScript looks for it in the object itself.
// If not found, it moves up the prototype chain and looks for it in the object's prototype.
// This continues until the property is found or the end of the prototype chain is reached.

// --------------------------------------------------------------
// --------------------------------------------------------------

// More on Objects:
// What is object literal?
// An object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}).
// Object is itself the object literal. It is the basic unit.

const user = {
    // Properties
    username: "Pavan",
    age: 22,

    // Methods
    getUserDetails: function () {
        // this keyword refers to the object that the method is called on
        // or we can say the current context of the method.
        console.log(this);
        // Output: { username: 'Pavan', age: 22, getUserDetails: [Function: getUserDetails] }

        return `${this.username} is ${this.age} years old.`;
    }
}

console.log(user.username); // Pavan
console.log(user.getUserDetails()); // Pavan is 22 years old.

// Note: We are executing the getUserDetails method using the user object and not just passing the reference to the function.

// Interesting Observation:
let myarr = [1,2,3]
myarr;

let myarr2 = [5,6]
myarr2;

// Now, How the map function will identify if it has to apply the loop to myarr or myarr2?
// The answer is, it will identify by the context of the function.
// This is achieved by the "this" keyword.

// What if you print this in the global context?
// 1. In case of browser, it will refer to the "window" object.
// 2. In case of node.js, it will refer to the "global" object i.e. {}

// --------------------------------------------------------------
// --------------------------------------------------------------

// Another Implementation:
function User(username, loginCount){
    // username = username;
    // loginCount = loginCount;
    // The above code is very confusing as it is not clear whether we are assigning the value to the parameter or the property of the object.

    // To avoid this, we can use the "this" keyword.
    // Here, "this.username" behaves like a property of the object. (like a variable or key)
    this.username = username;
    this.loginCount = loginCount;

    return this;

};

const userOne = User("Pavan", 5);
const userTwo = User("Deep", 10);

console.log(userOne); 
// Output:
{/* <ref *1> Object [global] {
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
  crypto: [Getter],
  username: 'Deep',
  loginCount: 10
} */}

// If you observe the output, the username and loginCount of userOne is overwrite by the username and loginCount of userTwo.

// Why is this happening?
// This is because we are returning the "this" object from the function User.

// We don't want such behaviour and that is the reason we use "Objects" in JavaScript.

// Fixing the above issue:
const userThree = new User("Pavan", 5);
const userFour = new User("Deep", 10);

console.log(userThree); // User { username: 'Pavan', loginCount: 5 }
console.log(userFour); // User { username: 'Deep', loginCount: 10 }

// What if you don't return the "this" object from the function?
// No Change in the output.

// --------------------------------------------------------------
// --------------------------------------------------------------

// Constructor Functions:
const promiseOne = new Promise(function (resolve, reject) {});
const date = new Date();

// Here, "new" keyword is the constructor function. It allows you to create multiple instances from the single object literal.

// Important Points:
//  Whenever you write "new" keyword, an empty object is created. It is called "instance".
//  The constructor function is called because of "new" keyword. It packs all the arguments and properties into the instance.
//  Injects all arguments and properties into the "this" object.
//  You get those arguments and properties in the instance.

// Can you write something like this?
console.log(userThree.constructor); // Output: [Function: User]

// instanceof operator: It is used to check the type of the object.
console.log(userThree instanceof User); // true

