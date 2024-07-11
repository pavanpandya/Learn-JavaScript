// 1. Number Conversion

let score = "33";
console.log(typeof score); // or console.log(typeof(score));

// Converting String to Number
let valueInNumber = Number(score);
console.log(typeof valueInNumber);

// But what if that string is not a number?
let goal = "5abc";
console.log(typeof goal);

let goalInNumber = Number(goal);
console.log(typeof(goalInNumber));
console.log(goalInNumber); // NaN (Not a Number)

// But what if that string is not a number?
let marks = null;
console.log(typeof marks);

let marksInNumber = Number(marks);
console.log(typeof marksInNumber);
console.log(marksInNumber); // 0

// But what if that string is not a number?
let points = undefined;
console.log(typeof points);

let pointsInNumber = Number(points);
console.log(typeof pointsInNumber);
console.log(pointsInNumber); // NaN (Not a Number)

// But what if that string is not a number?
let total = true;
console.log(typeof total);

let totalInNumber = Number(total);
console.log(typeof totalInNumber);
console.log(totalInNumber); // 1 for true and 0 for false

// Summary:
// "33" => 33
// "5abc" => NaN
// null => 0
// undefined => NaN
// true => 1
// false => 0

// 2. Boolean Conversion

let isTrue = 1;
console.log(typeof isTrue);

let isTrueInBoolean = Boolean(isTrue);
console.log(typeof isTrueInBoolean);

// Summary:
// 1 => true
// 0 => false
// "abc" => true
// "" => false

// 3. String Conversion
let value = 123;
console.log(typeof value);

let valueInString = String(value);
console.log(typeof valueInString);
console.log(valueInString);

// Summary:
// 123 => "123"
// true => "true"
// false => "false"
// null => "null"
// undefined => "undefined"

// ------------------------------
// Operations:
// ------------------------------
let num = 3
let negNum = -num;
console.log(negNum);

console.log(3 + 4);
console.log(3 - 4);
console.log(3 * 4);
console.log(3 / 4);
console.log(3 ** 4); // 3^4
console.log(3 % 4); // Remainder

let str1 = "Hello";
let str2 = "World!";
let str3 = str1 + " " + str2;
console.log(str3);

// Tricky Operations:
console.log(3 + "4"); // 34
console.log("3" + 4); // 34
console.log(3 + 4 + "5"); // 75
console.log("3" + 4 + 5); // 345
console.log(true) // true
console.log(+true) // 1 (Unary Plus)

let gameCounter = 100;
gameCounter++;
console.log(gameCounter); // 101