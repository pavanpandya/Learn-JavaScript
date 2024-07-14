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

const tinderUser = new Object();
// const tinderUser = {};

// We can use either way to create the object. It will gives us the same output.
// The only difference is that the first one is a singleton object and the second one is not.

tinderUser.id = 1;
tinderUser.name = "Pavan";
tinderUser.age = 22;
tinderUser.location = "Bloomington";
tinderUser.email = "pavan@gmail.com";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email: "pavan@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Pavan",
            lastname: "Pandya"
        }
    }
}

console.log(regularUser);
// If we want to access the firstname, then we need to use the dot operator.
console.log(regularUser.fullname.userfullname.firstname);

// Optional Chaining:
// It means that if the property is not available, then it will not throw the error.
// It will return undefined.
console.log(regularUser?.fullname?.userfullname?.firstname);

// Combining Objects:

const target={
    1: "a",
    2: "b",
}

const source={
    3: "c",
    4: "d",
}

// const obj3 = {target, source};
// console.log(obj3); // Output: { target: { '1': 'a', '2': 'b' }, source: { '3': 'c', '4': 'd' } }
// To fix this, we can use the spread operator.

const obj3 = {...target, ...source};
console.log(obj3); // Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// Another way to combine the objects:
const returnedTarget = Object.assign(target, source);
console.log(returnedTarget); // Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// OR
// const returnedTarget = Object.assign({}, target, source);
// console.log(returnedTarget); // Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// NOTE: Either you pass the "{}" or not in the Object.assign() method, it will give the same output.
// But it is recommended to pass the "{}" to have clear understanding that all objects are combined into the "{}" target object.
// Otherwise, they will be combined into the target object itself.

console.log(target === returnedTarget); // Output: true 

const users = [
    {
        name: "Pavan",
        age: 22,
        location: "Bloomington",
        email: "pavan@gmail.com"
    },
    {
        name: "Deep",
        age: 22,
        location: "Ahmedabad",
        email: "deep@gmail.com"
    }
]

console.log(users);

// Accessing the object properties of 2nd user:
console.log(users[1].name);

// Important Thing to note:
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // Output: [ 'id', 'name', 'age', 'location', 'email', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // Output: [ 1, 'Pavan', 22, 'Bloomington', 'pavan@gmail.com', false ]
// Since the output is in the form of an array, we can use the loop to iterate over the object properties.

console.log(Object.entries(tinderUser)); 
// Output: [
//   [ 'id', 1 ],
//   [ 'name', 'Pavan' ],
//   [ 'age', 22 ],
//   [ 'location', 'Bloomington' ],
//   [ 'email', 'pavan@gmail.com' ],
//   [ 'isLoggedIn', false ]
// ]
// Here, the first element is the key and the second element is the value.

// HasOwnProperty:
// It is used to check whether the property is available in the object or not.
console.log(tinderUser.hasOwnProperty("name")); // Output: true
console.log(tinderUser.hasOwnProperty("fullname")); // Output: false   