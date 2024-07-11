console.log(2 > 1); // true
console.log(2 < 1); // false
console.log(2 >= 1); // true
console.log(2 <= 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true
console.log(2 != 1); // true

// Tricky Comparisions:
console.log("2" > 1); // true
console.log("02" > 1); // true
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

// Reason:
// Equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why null == 0 is false and null >= 0 is true.
// Thus, make sure you do the comparison with same data types to avoid such complexity.

// "===" is strict equality check. It checks for both value and data type.
console.log(2 === 2); // true
console.log(2 === "2"); // false
