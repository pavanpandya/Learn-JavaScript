myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNums = myNums.filter( (item) => {
    return item > 5;
})

console.log(newNums); // Output: [ 6, 7, 8, 9, 10 ]

// The above code can also be written using filter as follows:
// let newNums = myNums.filter( (item) => item > 5);

// Explanation:
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// The forEach() method does not create a new array. It just iterates over the elements of the array.

// Interesting Fact:
let newNums2 = myNums.filter( (item) => {
    item > 5;
})

console.log(newNums2); // Output: []

// Explanation:
// If you remember the explicit return concept, If you use the parenthesis () in the arrow function, then it will return the values but if you use the curly braces {}, then it will not return the values. Because, now you started a scope and you have to use the return keyword explicitly.

const books = [
    {title: "Book One", genre: "Fiction", publish: 1981, edition: 2004},
    {title: "Book Two", genre: "Non-Fiction", publish: 1990, edition: 2008},
    {title: "Book Three", genre: "Biography", publish: 2001, edition: 2010},
    {title: "Book Four", genre: "Science", publish: 2010, edition: 2016},
    {title: "Book Five", genre: "History", publish: 2015, edition: 2018}
];

let userBooks = books.filter( (bk) => {
    return bk.genre === "History";
})

console.log(userBooks);

// Output:
// [
//     {
//       title: 'Book Five',
//       genre: 'History',
//       publish: 2015,
//       edition: 2018
//     }
// ]

// let bookPublishAfter2009 = books.filter( (bk) => {bk.publish > 2009});

// Can you catch the error in the above code?
// Since, we are using the curly braces {} in the arrow function, we have to use the return keyword explicitly.

let bookPublishAfter2009 = books.filter( (bk) => bk.publish > 2009);
console.log(bookPublishAfter2009);

// Output:
// [
//     {
//       title: 'Book Four',
//       genre: 'Science',
//       publish: 2010,
//       edition: 2016
//     },
//     {
//       title: 'Book Five',
//       genre: 'History',
//       publish: 2015,
//       edition: 2018
//     }
// ]

let historyBooksPublishAfter2009 = books.filter( (bk) => bk.genre === "History" && bk.publish > 2009);
console.log(historyBooksPublishAfter2009);

// Output:
// [
//     {
//       title: 'Book Five',
//       genre: 'History',
//       publish: 2015,
//       edition: 2018
//     }
// ]

const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const myDigits = digits.map( (num) => num + 10)

console.log(myDigits); // Output: [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

// Chaining Method:
// The result of first method will be passed to the second method.

const newDigits = digits.map( (num) => num * 10 ).map( (num) => num + 5 );
console.log(newDigits); // Output: [ 15, 25, 35, 45, 55, 65, 75, 85, 95, 105 ]

// You can also chain the filter method with the map method.
const filteredDigits = digits.map( (num) => num * 10 ).map( (num) => num + 5 ).filter( (num) => num > 50 );
console.log(filteredDigits); // Output: [ 55, 65, 75, 85, 95, 105 ]

// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------

// Reduce Method:
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// Syntax:
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

// Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

// @param callbackfn — A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

// @param initialValue — If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

const myNumbers = [1, 2, 3, 4, 5];

const myTotal = myNumbers.reduce(function(acc, curr_val){
    console.log(`acc: ${acc}, curr_val: ${curr_val}`);
    return acc + curr_val;
}, 0);

console.log(myTotal); // Output: 15

// Working of the reduce method:
// It takes the callback function and initialize the accumulator value with the initial value i.e. 0 in our case.
// Then, it will iterate over the array and add the current value to the accumulator value.
// The accumulator value will be updated in each iteration.
// Finally, it will return the accumulator value.

const myTotal2 = myNumbers.reduce( (acc, curr_val) => acc + curr_val, 0);
console.log(myTotal2); // Output: 15

const shoppingCart = [
    {item: "Shirt", price: 500},
    {item: "Shoes", price: 1500},
    {item: "Jeans", price: 1000},
    {item: "Cap", price: 200}
];

const totalAmount = shoppingCart.reduce( (acc, item) => acc + item.price, 0);
console.log(totalAmount); // Output: 3200