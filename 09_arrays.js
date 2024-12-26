// Arrays:
// 1. Arrays are resizable and can contain any type of data.
// 2. Arrays are zero-indexed.
// 3. Arrays can be created using the Array constructor or square brackets.
// 4. Arrays copy operations creates a shallow copy.

// What is Shallow Copy? and Deep Copy?
// Shallow Copy: A shallow copy of an object is a copy whose properties share the same references point of the source object from which the copy was made.
// Deep Copy: A deep copy of an object is a copy whose properties do not share the same references point of the source object from which the copy was made.

let myArray = [1, 2, 3, 4, 5];
console.log(myArray); // Output: [ 1, 2, 3, 4, 5 ]
console.log(typeof myArray); // Output: object
console.log(myArray[0]); // Output: 1

let myArray2 = [12, 75, "Pavan", true];
console.log(myArray2); // Output: [ 12, 75, 'Pavan', true ]

let myArray3 = new Array(1, 2, 3, 4, 5);
console.log(myArray3); // Output: [ 1, 2, 3, 4, 5 ]


// Array Methods:

// 1. Push(): Adds one or more elements to the end of an array and returns the new length of the array.
myArray.push(6);
console.log(myArray); // Output: [ 1, 2, 3, 4, 5, 6 ]

// 2. Pop(): Removes the last element from an array and returns it.
myArray.pop();
console.log(myArray); // Output: [ 1, 2, 3, 4, 5 ]

// 3. Shift(): Removes the first element from an array and returns it.
myArray.shift();
console.log(myArray); // Output: [ 2, 3, 4, 5 ]

// 4. Unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
myArray.unshift(1);
console.log(myArray); // Output: [ 1, 2, 3, 4, 5 ]

// 5. Includes(): Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
console.log(myArray.includes(3)); // Output: true

// 6. IndexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(myArray.indexOf(3)); // Output: 2
console.log(myArray.indexOf(456)); // Output: -1

// 7. Join(): Joins all elements of an array into a string.
console.log(myArray.join()); // Output: 1,2,3,4,5
console.log(typeof myArray.join()); // Output: string

// Slice() vs Splice():
// Slice(): The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.
// Splice(): The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

console.log(`Original Array: ${myArray}`);
let slicedArray = myArray.slice(1, 3);
console.log(`Sliced Array: ${slicedArray}`); 
console.log(`Original Array after Slice: ${myArray}`); 

// Output:
// Original Array: 1,2,3,4,5
// Sliced Array: 2,3
// Original Array after Slice: 1,2,3,4,5

console.log(`Original Array: ${myArray}`);
let splicedArray = myArray.splice(1, 2);
console.log(`Spliced Array: ${splicedArray}`); 
console.log(`Original Array after Splice: ${myArray}`); 
// Output:
// Original Array: 1,2,3,4,5
// Spliced Array: 2,3
// Original Array after Splice: 1,4,5

// ------------------------------------------------------------------------

// More on Arrays:

const marvelHeroes = ["thor", "ironman", "spiderman"]
const dcHeroes = ["batman", "superman", "flash"]

// marvelHeroes.push(dcHeroes) // Changes the original array
// console.log(marvelHeroes);
// Output: [ 'thor', 'ironman', 'spiderman', [ 'batman', 'superman', 'flash' ] ]
// Here, dcHeroes array is pushed as a single element into marvelHeroes array.
// Why? Because push() method adds the element as it is.

// Important Question: We used const to defined the array, then why it got modified when we use .push() on it.
// Answer: When you declare a variable with const, it means the variable itself cannot be reassigned to a new value. 
// This means you cannot do something like marvelHeroes = ["new", "array"]; because reassigning the reference is not allowed.
// However, the contents of objects or arrays defined with const can still be modified, because const only protects the reference to the object or array, not its internal contents.
// Takeaway: const prevents reassignment of the variable itself, but it does not make objects or arrays immutable.

// Concat() method: Concatenates the array on which it is called with the array(s) and/or value(s) that it is provided as arguments and returns a new array.
console.log(marvelHeroes.concat(dcHeroes));

// Spread Operator: The spread operator is used to expand an array, object, or a string that is already created.
// Analogy to Remember: You drop a glass and it breaks into pieces.
const allHeroes = [...marvelHeroes, ...dcHeroes];
console.log(allHeroes);
// Output: [ 'thor', 'ironman', 'spiderman', 'batman', 'superman', 'flash' ]

// ------------------------------------------------------------------------

const complexArray = [1, 2, [3, 4], 5, [6, 7, [8, 9]]];

// Flat() method: The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// Here, Infinity is used to flatten the array recursively to any depth.
const flatArray = complexArray.flat(Infinity);
console.log(flatArray);

console.log(Array.isArray(flatArray)); // Output: true
console.log(Array.isArray("Pavan")); // Output: false
console.log(Array.from("Pavan")); // Output: [ 'P', 'a', 'v', 'a', 'n' ]   

// Tricky Question for the Interview:
// What is the output of the below code?
console.log(Array.from({name: "Pavan"})); // Output: []
// Explanation: Array.from() method creates a new array instance from an array-like or iterable object.
// Here, {name: "Pavan"} is an object and not an array or iterable object. Hence, it returns an empty array.

let score1 = 100;
let score2 = 200;
let score3 = 300;

let scores = Array.from([score1, score2, score3]);
console.log(scores); // Output: [ 100, 200, 300 ]
