// What is Promise?
// Promise is an object representing the eventual completion or failure of an asynchronous operation.
// A promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

// A promise is in one of these states:
// - pending: initial state, neither fulfilled nor rejected.
// - fulfilled: meaning that the operation completed successfully.
// - rejected: meaning that the operation failed.

// There are two main thingds we need to know about promises:
// 1. Creating Promises
// 2. Consuming Promises

// 1. Creating Promises
// A promise is created using the Promise constructor. A promise is created with new Promise(executor).
// The executor function is called immediately by the Promise implementation. It contains the producing code which should eventually produce the result.
// The executor must call resolve or reject.

// Example 1: Creating a Promise
const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async Task 1 is completed');
        resolve();
    }, 1000)
});

promiseOne.then(function() {
    console.log('Promise Task 1 is completed');
})

// Note: resolve and then are connected. If resolve is called, then is executed.

// Output: 
// Async Task 1 is completed
// Promise Task 1 is completed

// Example 2: Creating a Promise
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async Task 2 is completed');
        resolve();
    }, 2000)
}).then(function() {
    console.log('Task 2 is resolved');
})

// Output: 
// Async Task 2 is completed
// Task 2 is resolved

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({"username": "pavanpandya", "email": "pavanpandya.iu@gmail.com"});
    }, 3000)
});

promiseThree.then(function(data) {
    console.log('Data:', data);
})

// Output: 
// Data: { username: 'pavanpandya', email: 'pavanpandya.iu@gmail.com' }

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false;
        if (!error) {
            resolve({"username": "pavanpandya", "password": "123456"});
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 4000)
});

promiseFour.then((data) => {
    console.log('Data:', data);
}).catch((error) => {
    console.log(error);
})

// Output: (When error is true)
// ERROR: Something went wrong

// Output: (When error is false)
// Data: { username: 'pavanpandya', password: '123456' }

promiseFour.then((data) => {    
    return data.username;
}).then((username) => {
    console.log('Username:', username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('The promise is either resolved or rejected');
})

// Output: (When error is false)
// Username: pavanpandya
// The promise is either resolved or rejected

// Can I store the return value of promise in a variable?
// Yes, you can store the return value of promise in a variable.

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({"username": "pavanpandya", "university": "IU"});
    }, 5000)
});

let promiseFiveData = promiseFive.then((data) => {
    return data.university;
})

promiseFiveData.then((university) => {
    console.log('University:', university);
})

// Output:
// University: IU

const promiseSix = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(error){
            reject("ERROR: Something went wrong");
        }
        resolve({"name": "Pavan Pandya", "age": 22});
    }, 6000)
});

// async function consumePromiseSix(){
//     let data = await promiseSix;
//     console.log(data);
// }

// consumePromiseSix();

// Output: (When error is false)
// { name: 'Pavan Pandya', age: 22 }

// Output: (When error is true)
// UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "ERROR: Something went wrong".

// Handling the error
async function consumePromiseSix(){
    try{
        let data = await promiseSix;
        console.log(data);
    } catch(error){
        console.log(error);
    }
}

consumePromiseSix();

// Output: (When error is true)
// ERROR: Something went wrong

async function getAllUser(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        // Why we are using await here?
        // Because fetch is an asynchronous function and it returns a promise.
        // We are waiting for the promise to be resolved.
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getAllUser();


fetch('https://jsonplaceholder.typicode.com/users/5')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => console.log(error));

// Note: Here, we are using chaining of promises. We are returning the value from one promise and using it in another promise.

// Output:
// {
//     id: 5,
//     name: 'Chelsey Dietrich',
//     username: 'Kamren',
//     email: 'Lucio_Hettinger@annie.ca',
//     address: {
//       street: 'Skiles Walks',
//       suite: 'Suite 351',
//       city: 'Roscoeview',
//       zipcode: '33263',
//       geo: { lat: '-31.8129', lng: '62.5342' }
//     },
//     phone: '(254)954-1289',
//     website: 'demarco.info',
//     company: {
//       name: 'Keebler LLC',
//       catchPhrase: 'User-centric fault-tolerant solution',
//       bs: 'revolutionize end-to-end systems'
//     }
// }