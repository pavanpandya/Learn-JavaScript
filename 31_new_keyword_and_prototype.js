// Prototype in JavaScript:
// Prototypes are the mechanism by which JavaScript objects inherit features from one another.

const myObject = {
    city: "Madrid",
    greet() {
        console.log(`Greetings from ${this.city}`);
    },
};

myObject.greet(); // Greetings from Madrid

// This is an object with one data property, city, and one method, greet().

// Important:
// Every object in JavaScript has a built-in property, which is called its prototype.
// The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain.
// The chain ends when we reach a prototype that has "null" for its own prototype.
// When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. 
// If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case "undefined" is returned.

const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

// {}
// [Object: null prototype] {}
// null

// This code creates a Date object, then walks up the prototype chain, logging the prototypes. 
// It shows us that the prototype of myDate is a Date.prototype object, and the prototype of that is Object.prototype.


// Shadowing properties:
// What happens if you define a property in an object, when a property with the same name is defined in the object's prototype? Let's see:

const myDate2 = new Date(1995, 11, 17);

console.log(myDate2.getTime()); // 819176400000

myDate2.getTime = function () {
  console.log("something else!");
};

myDate2.getTime(); // 'something else!'

// Note:
// This should be predictable, given the description of the prototype chain. When we call getTime() the browser first looks in myDate for a property with that name, and only checks the prototype if myDate does not define it. So when we add getTime() to myDate, then the version in myDate is called.
// This is called "shadowing" the property.

// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------

function multiplyByTwo(num) {
    return num * 2;
}

console.log(multiplyByTwo(5)); // 10

// What if I write:
console.log(multiplyByTwo.prototype);
// Output: {}

multiplyByTwo.power = 2;
console.log(multiplyByTwo.power);
// Output: 2

function createProduct(name, price) {
    this.name = name;
    this.price = price;
}

createProduct.prototype.discount = 0.8;

createProduct.prototype.calculatePrice = function () {
    return this.price * this.discount;
};

createProduct.prototype.printMe = function () {
    console.log(`${this.name} costs ${this.calculatePrice()}`);
}

// const product1 = createProduct("phone", 1000); 
// Output:
// product1.printMe();
//          ^

// TypeError: Cannot read properties of undefined (reading 'printMe')

const product1 = new createProduct("phone", 1000); 
product1.printMe(); // phone costs 800

const product2 = new createProduct("laptop", 2000);
product2.discount = 0.7;
product2.printMe(); // laptop costs 1400

// How does this work?
// When we create a function in JavaScript, it automatically gets a property called prototype, which is an object.
// We can add properties and methods to this prototype object, and they will be shared by all instances of the function.
// This is how we can add methods to all instances of a function, without having to add them to each instance individually.

// Role of "new" keyword:
// Because of "new" keyword, we are able to access the new prototype properties and methods.

// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------

// Important:
// Here's what happens behind the scenes when the new keyword is used:

// A new object is created: The new keyword initiates the creation of a new JavaScript object.

// A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

// The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

// The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------

// Lecture on Prototype:

let myHeros = ["thor", "ironman", "captain america"];

let heroPower = {
    thor: "thunder",
    ironman: "technology",
    "captain america": "shield",
    getIronManPower() {
        return this.ironman;
    }
};

console.log(heroPower.getIronManPower()); // technology

// What if I write:
// console.log(heroPower.pavan());

Object.prototype.pavan = function () {
    console.log("Hi, I am Pavan");
};

heroPower.pavan(); // Hi, I am Pavan

// What if I write:
myHeros.pavan(); // Hi, I am Pavan

// We directly added a method to the Object prototype, so all objects in JavaScript inherit this method.
// It is also accessible to arrays, because arrays are objects in JavaScript.

// Let's check if we add a new prototype method to the Array, Will it be accessible to the objects?
Array.prototype.deep = function () {
    console.log("Hi, I am Deep");
}

myHeros.deep(); // Hi, I am Deep

// heroPower.deep(); 
// Output:
// heroPower.deep(); 
//           ^

// TypeError: heroPower.deep is not a function

// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------

// Prototype Inheritance:
// In JavaScript, objects can inherit properties and methods from other objects.

const User = {
    isVerified: true,
}

const Teacher = {
    subject: "JavaScript",
}

const TeachingSupport = {
    isAvailable: true,
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

// You can also define it outside the object:
Teacher.__proto__ = User

console.log(Teacher.isVerified); // true
console.log(TASupport.isAvailable); // true

// Modern Syntax:
// (method) ObjectConstructor.setPrototypeOf(o: any, proto: object | null): any
// Sets the prototype of a specified object o to object proto or null. Returns the object o.

// @param o — The object to change its prototype.

// @param proto — The value of the new prototype or null.
Object.setPrototypeOf(Teacher, User);

// Example:
let anotherUsername = "JavaScriptCoureByChaiAurCode   "

String.prototype.trueLength = function () {
    console.log(this);
    return this.trim().length;
}

console.log(anotherUsername.trueLength()); 
// [String: 'JavaScriptCoureByChaiAurCode   '] --> Output of console.log(this);
// 28

console.log("Pavan".trueLength()); 
// [String: 'Pavan'] --> Output of console.log(this);
// 5