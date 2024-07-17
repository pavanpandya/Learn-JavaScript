// For Loop:
// It is used to iterate over a sequence of elements. It is used when the number of iterations is known.

// Syntax:
// for (initialization; condition; increment/decrement) {
//     // code block
// }

// Working:
// 1. The initialization statement is executed only once at the beginning of the loop.
// 2. The condition is evaluated before each iteration. If the condition is true, the code block is executed.
// 3. The increment/decrement statement is executed after the code block.
// 4. The loop continues until the condition becomes false.

console.log('Understanding For loop:');

// Example-1:
for (let i = 0; i <= 10; i++) {
    const elm = i;
    console.log(elm);
}

// console.log(elm); // ReferenceError: elm is not defined

// Explanation:
// Because the variable elm is declared using let, it is block-scoped. Therefore, it is not accessible outside the for loop.

// Example-2: Print the table from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(`Table of ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// Example-3: Print the elements of an array
let myArray = [10, 20, 30, 40, 50];

console.log(`Length of myArray: ${myArray.length}`);

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// Break and Continue Statements:
// The break statement is used to exit the loop immediately.
// The continue statement is used to skip the current iteration and continue with the next iteration.

// Example-4: Print the elements of an array until a specific element is found
let myArray2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (let i = 0; i < myArray2.length; i++) {
    if (myArray2[i] === 50) {
        console.log('Element found');
        break;
    }
    console.log(myArray2[i]);
}

// Example-5: Skip the even numbers
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------

// While Loop:
// It is used to iterate over a sequence of elements. It is used when the number of iterations is not known.

// Syntax:
// while (condition) {
//     // code block
// }

// Working:
// 1. The condition is evaluated before each iteration. If the condition is true, the code block is executed.
// 2. The loop continues until the condition becomes false.

console.log('Understanding While loop:');

// Example-6: Print the elements of an array using while loop
let myArray3 = [10, 20, 30, 40, 50];
let i = 0;

while (i < myArray3.length) {
    console.log(myArray3[i]);
    i++;
}

// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------

// Do-While Loop:
// It is used to iterate over a sequence of elements. It is used when the number of iterations is not known.
// The do-while loop is similar to the while loop, except that the condition is evaluated after the code block.
// Therefore, the code block is executed at least once.

// Syntax:
// do {
//     // code block
// } while (condition);

// Working:
// 1. The code block is executed once.
// 2. The condition is evaluated before each iteration. If the condition is true, the code block is executed.
// 3. The loop continues until the condition becomes false.

console.log('Understanding Do-While loop:');

// Example-7: Print the elements of an array using do-while loop
let myArray4 = [10, 20, 30, 40, 50];
let j = 0;

do {
    console.log(myArray4[j]);
    j++;
}
while (j < myArray4.length);

// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------

// For-of Loop:
// It is used to iterate over the elements of an array or an iterable object.

// Syntax:
// for (variable of iterable) {
//     // code block
// }

// Working:
// 1. The variable is assigned the value of each element of the iterable object.
// 2. The code block is executed for each element of the iterable object.

console.log('Understanding For-of loop:');

// Example-8: Print the elements of an array using for-of loop
let myArray5 = [10, 20, 30, 40, 50];

for (let elm of myArray5) {
    console.log(elm);
}

// Output:
// 10
// 20
// 30
// 40
// 50

// Maps:
// Maps are used to store key-value pairs. The keys can be of any type.
// The keys are unique in a map. If the same key is added again, the value is updated.
// The keys can be of any type eg: string, number, object, etc.
// Only unique keys are allowed in a map.

const map = new Map();

map.set('IN', 'India');
map.set('US', 'United States');
map.set('UK', 'United Kingdom');
map.set('IN', 'India');

console.log(map);

// Output:
// Map(3) {
//     'IN' => 'India',
//     'US' => 'United States',
//     'UK' => 'United Kingdom'
//   }

// Applying for-of loop on a map:
for (let elm of map) {
    console.log(elm);
}

// Output:
// [ 'IN', 'India' ]
// [ 'US', 'United States' ]
// [ 'UK', 'United Kingdom' ]

// Applying for-of loop on a map:
for (let [key, value] of map) {
    console.log(`${key} - ${value}`);
}

// Output:
// IN - India
// US - United States
// UK - United Kingdom

// Applying for-of loop on a object:
const myObj = {
    'game1': 'Cricket',
    'game2': 'Football',
    'game3': 'Basketball'
};

// TypeError: myObj is not iterable
// for (let [key, value] of myObj) {
//     console.log(`${key} - ${value}`);
// }

// Why the above code is not working?
// The for-of loop works with iterable objects. Objects are not iterable by default.
// Object.entries() method is used to convert an object into an array of key-value pairs.

for (let [key, value] of Object.entries(myObj)) {
    console.log(`${key} - ${value}`);
}

// Output:
// game1 - Cricket
// game2 - Football
// game3 - Basketball

// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------

// For-in Loop:
// It is used to iterate over the properties of an object.

// Syntax:
// for (variable in object) {
//     // code block
// }

// Working:
// 1. The variable is assigned the name of each property of the object.
// 2. The code block is executed for each property of the object.

console.log('Understanding For-in loop:');

// Example-9: Print the properties of an object using for-in loop
const myObj2 = {
    'game1': 'Cricket',
    'game2': 'Football',
    'game3': 'Basketball'
};

for (let key in myObj2) {
    console.log(`${key} - ${myObj2[key]}`);
}

// Output:
// game1 - Cricket
// game2 - Football
// game3 - Basketball

// Applying for-in loop on an array:
let myArray6 = [10, 20, 30, 40, 50];

for (let key in myArray6) {
    console.log(key);
}

// Output: (Index of the array)
// 0
// 1
// 2
// 3
// 4

for (let key in myArray6) {
    console.log(`${myArray6[key]}`);
}

// Output: (Elements of the array)
// 10
// 20
// 30
// 40
// 50

// Applying for-in loop on a map:
for (let key in map) {
    console.log(key);
}

// Output: No output

// Explanation:
// The for-in loop is used to iterate over the properties of an object. It does not work with maps because maps are not iterable objects.

// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------

// For-Each Loop:
// It is used to iterate over the elements of an array.

// Signature:
// Array<string>.forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void
// Performs the specified action for each element in an array.

// @param callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
// @param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

// Syntax:
// array.forEach(function(currentValue, index, arr), thisValue)
// array.forEach(function(currentValue, index, arr))
// array.forEach(function(currentValue, index))
// array.forEach(function(currentValue))
// array.forEach(functionName) // If the function is defined separately
// array.forEach(() => {})

// Parameters:
// 1. currentValue: The value of the current element.
// 2. index: The index of the current element.
// 3. arr: The array object the current element belongs to.

// Working:
// 1. The function is executed for each element of the array.
// 2. The function takes three arguments: currentValue, index, and arr.
// 3. The function can take an optional thisValue argument.

// Important Note:
// What is Callback Function?
// A callback function is a function that is passed as an argument to another function. The callback function is called inside the other function.
// It does not have a name and is defined inline.

console.log('Understanding For-Each loop:');

// Example-10: Print the elements of an array using for-each loop
const coding = ["js", "python", "java", "c++"];

coding.forEach( function (item) {
    console.log(item);
})

// Output:
// js
// python
// java
// c++

// Variation-1:
coding.forEach( function (item, index) {
    console.log(`${index} - ${item}`);
})

// Output:
// 0 - js
// 1 - python
// 2 - java
// 3 - c++

// Variation-2:
coding.forEach( function (item, index, arr) {
    console.log(`${index} - ${item} - ${arr}`);
})

// Output:
// 0 - js - js,python,java,c++
// 1 - python - js,python,java,c++
// 2 - java - js,python,java,c++
// 3 - c++ - js,python,java,c++

// Variation-3:
coding.forEach( (item) => {
    console.log(item);
})

// Output:
// js
// python
// java
// c++

// Variation-4:
function printMe(item) {   
    console.log(item);
}

coding.forEach(printMe);

// Output:
// js
// python
// java
// c++

// Note: We have to pass the reference of the function in the forEach loop. We should not call the function.

// Variation-5:
const myCoding = [
    {name: 'JavaScript', fileExtension: '.js'},
    {name: 'Python', fileExtension: '.py'},
    {name: 'Java', fileExtension: '.java'},
    {name: 'C++', fileExtension: '.cpp'}    
];

myCoding.forEach( (item) => {
    console.log(item.name);
})

// Output:
// JavaScript
// Python
// Java
// C++

// Let's see if the forEach loop return anything or not

const values = coding.forEach( (item) => {
    console.log(item);
})

console.log(values); // undefined

// Now, here the item is printed but the values is undefined. This is because forEach loop does not return anything.
// Let's try to return the item and see what happens:

const values2 = coding.forEach( (item) => {
    return item;
})

console.log(values2); // undefined

// Again, the value is undefined. This is because forEach loop does not return anything.

// Now, the question is what if we want to use the forEach loop and return the values. Let's see how we can do that:

let newNums3 = [];
myNums.forEach( (item) => {
    if (item > 5) {
        newNums3.push(item);
    }
})

console.log(newNums3); // Output: [ 6, 7, 8, 9, 10 ]

// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------