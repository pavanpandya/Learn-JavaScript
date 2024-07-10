const accountId = 30137
let accountEmail = "pavan@gmail.com"
// Prefer not to use var keyword because of the issue in block scope and functional scope.
var accountPassword = "12345"
// We can declare a variable without using var, let or const keyword. But it is not recommended.
accountCity = "Ahmedabad" 
// We can declare a variable without assigning a value.
let accountState; 

// accountId = 30138 --> not allowed
// console.log(accountId); // TypeError: Assignment to constant variable.

accountEmail = "pavanpandya@gmail.com"
accountPassword = "54321"
accountCity = "Bloomington"

// Now instead of using console.log, we can use console.table to display the data in a tabular format.
// Here, index is in the form of 0, 1, 2, 3 and so on (Numbers).
console.table([accountId, accountEmail, accountPassword, accountCity]) 
// Here, index is in the form of accountId, accountEmail, accountPassword, accountCity (Variable names).
console.table({accountId, accountEmail, accountPassword, accountCity}) 
// It will display the value of accountState as undefined.
console.table({accountId, accountEmail, accountPassword, accountCity, accountState})