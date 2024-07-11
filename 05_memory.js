// Primitive DataTypes are stored in the stack memory, while Non-Primitive DataTypes are stored in the heap memory.
// Non-Primitive DataTypes are also called as Reference Types.
// Non-Primitive DataTypes are stored in the heap memory, and the reference to the memory location is stored in the stack memory.

// Example:

let personOne = {
    name: "John Doe",
    age: 30
};

let personTwo = personOne;

console.log(personOne); // { name: 'John Doe', age: 30 }
console.log(personTwo); // { name: 'John Doe', age: 30 }

personTwo.name = "Jane Doe";

console.log(personOne); // { name: 'Jane Doe', age: 30 }
console.log(personTwo); // { name: 'Jane Doe', age: 30 }

// In the above example, personOne is an object, and personTwo is assigned to personOne.
// When we change the name of personTwo, it also changes the name of personOne.
// This is because both personOne and personTwo are pointing to the same memory location in the heap memory.
// So, when we change the name of personTwo, it also changes the name of personOne.

// Example:

let num1 = 10;
let num2 = num1;

console.log(num1); // 10
console.log(num2); // 10

num2 = 20;

console.log(num1); // 10
console.log(num2); // 20

// In the case of Primitive DataTypes, the value is stored in the stack memory, and the value is copied to another variable.
// So, changing the value of one variable does not affect the value of another variable.
