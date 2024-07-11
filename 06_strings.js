const name = "Pavan"
const age = 22

// This is not a good way to concatenate strings
// console.log("My name is " + name + " and I am " + age + " years old.")

// This is a better way to print the string using the ` ` (backtick) symbol.
console.log(`My name is ${name} and I am ${age} years old.`)

// Another way of defining the string is using the `new String()` constructor.
const personName = new String("Pavan")

// Output (taken from the browser console)
// String {'Pavan'}
// 0: "P"
// 1: "a"
// 2: "v"
// 3: "a"
// 4: "n"
// length: 5
// [[Prototype]]: String
//   There are various methods inside the prototype property. ("f" in front of the method name indicates that it is a function.)
// [[PrimitiveValue]]: "Pavan"

// Note: Now looking at the output, don't get confused by considering it as an array (because at 0th position, we have "P". These are key-value pairs). It is not an array. It is a string object. The string object has a length property and a prototype property. The prototype property is used to add new properties and methods to the string object.

console.log(`Value at index position "0" is: ${personName[0]}.`);
console.log(`Length of the string is: ${personName.length}.`);
console.log(`Person Name in uppercase: ${personName.toUpperCase()}.`);
console.log(`Character at index position "2" is: ${personName.charAt(2)}.`);
console.log(`Index position of "v" is: ${personName.indexOf("v")}.`);

const newString = personName.substring(0, 4) // 4 is exclusive
console.log(`newString: ${newString}`);

// Note: In slice, we can also pass negative values. It will start from the end of the string.
const anotherString = personName.slice(-5, -1) // -1 is exclusive
console.log(`anotherString: ${anotherString}`); // Output: Pava

// Calculation:
// Start index: -5 corresponds to index 0 (beginning of the string) since the lenght of the string is 5.
// End index: -1 corresponds to index 4 (second-to-last character).
// So, it will extract characters from index 0 to index 3 (since index 4 is not included).
// Note: In slice, if the start index is greater than the end index, it will return an empty string.

const inputEmail = "   pavan@gmail.com   ";
console.log(`Email without trimming: ${inputEmail}`);
console.log(`Email with trimming: ${inputEmail.trim()}`); // It will remove the leading and trailing spaces.

const url = "https://pavanpandya.us/pavanpandya%20resume"
console.log(url.replace("%20", "-"));

// Note: In the replace method, it will replace only the first occurrence of the substring. If we want to replace all the occurrences, we can use the regular expression.

console.log(url.includes("pavanpandya")); // It will return true if the substring is present in the string.

console.log(url.split("/")); // It will split the string based on the delimiter and return an array.