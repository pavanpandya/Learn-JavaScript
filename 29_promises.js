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

// What is callback hell?
// Callback hell is a phenomenon that afflicts a JavaScript developer when they try to execute multiple asynchronous operations one after the other.
// The code becomes a pyramid of doom, with multiple nested callbacks.

// Example of callback hell
// setTimeout(() => {
//     console.log('Task 1 is completed');
//     setTimeout(() => {
//         console.log('Task 2 is completed');
//         setTimeout(() => {
//             console.log('Task 3 is completed');
//             setTimeout(() => {
//                 console.log('Task 4 is completed');
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// Output:
// Task 1 is completed
// Task 2 is completed
// Task 3 is completed
// Task 4 is completed

// How to avoid callback hell?

// 1. Use Promises
// 2. Use async/await

// Example of avoiding callback hell using Promises
function taskOne(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Task 1 is completed');
            resolve();
        }, 1000);
    });
}

function taskTwo(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Task 2 is completed');
            resolve();
        }, 1000);
    });
}

function taskThree(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Task 3 is completed');
            resolve();
        }, 1000);
    });
}

function taskFour(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Task 4 is completed');
            resolve();
        }, 1000);
    });
}

taskOne()
    .then(taskTwo)
    .then(taskThree)
    .then(taskFour);

// Output:
// Task 1 is completed
// Task 2 is completed
// Task 3 is completed
// Task 4 is completed

// Example of avoiding callback hell using async/await
async function task(){
    await taskOne();
    await taskTwo();
    await taskThree();
    await taskFour();
}

task();

// Output:
// Task 1 is completed
// Task 2 is completed
// Task 3 is completed
// Task 4 is completed

// Note: async/await is a syntactic sugar for promises. It makes the code look synchronous but it is still asynchronous.

// What is the difference between Promise and async/await?
// 1. Syntax
// - Promise: Promise is a constructor function. It takes an executor function as an argument.
// - async/await: async/await is a syntactic sugar for promises. It makes the code look synchronous but it is still asynchronous.

// 2. Error Handling
// - Promise: In promises, we use .then() and .catch() to handle the error.
// - async/await: In async/await, we use try/catch block to handle the error.

// 3. Chaining
// - Promise: In promises, we use .then() to chain the promises.
// - async/await: In async/await, we use await to chain the promises.

// 4. Readability
// - Promise: Promises are less readable than async/await.
// - async/await: async/await is more readable than promises.

// What is Fetch API?
// The Fetch API provides an interface for fetching resources (including across the network). It is a more powerful and flexible replacement for XMLHttpRequest.
// The Fetch API uses Request and Response objects (and other things involved with network requests), as well as related concepts such as CORS and the HTTP Origin header semantics.
// For making a request and fetching a resource, use the fetch() method. 
// It is a global method in both Window and Worker contexts. It starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.
// The promise resolves to the Response object representing the response to your request.

// IMPORTANT: A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

// Another thing to note is that If you see the output of this Js file, the fetch method got executed first before any other code. This is because fetch is an asynchronous function and it returns a promise. We are waiting for the promise to be resolved. 
// Promises are given priority over other code execution. They are stored in microtask queue or priority queue.

// How the Fetch API call works?
// 1. The fetch() method takes one mandatory argument, the path to the resource you want to fetch.
// 2. It returns a Promise that resolves to the Response to that request, whether it is successful or not.

// response = fetch('https://jsonplaceholder.typicode.com/users')

// Detailed Breakdown of fetch()
// Initialization:
// When fetch(url, options) is called, a new Request object is created using the provided URL and options.

// Request Configuration:
// Method: The HTTP method (e.g., GET, POST) is set.
// Headers: Headers are attached to the request (e.g., Content-Type, Authorization).
// Body: The body of the request is set if applicable (e.g., for POST or PUT requests).
// Other Options: Additional settings like mode (cors, no-cors, same-origin), credentials (include, same-origin, omit), cache, redirect, referrer, and integrity are configured.

// Sending the Request:
// The request is sent over the network using the browser's networking stack.
// This involves DNS resolution, establishing a TCP connection, and SSL/TLS negotiation if using HTTPS.

// Network Layer:
// The browser uses the underlying OS networking capabilities to send the HTTP request to the server.

// Server Processing:
// The server processes the request and sends back an HTTP response.

// Receiving the Response:
// The browser receives the HTTP response and constructs a Response object.

// Promise Handling:
// fetch() returns a Promise. This Promise represents the eventual completion (or failure) of the asynchronous operation.

// Promise Lifecycle in fetch()
// Pending: When fetch() is initially called, it returns a Promise in the pending state.
// Fulfilled: When the response is successfully received and processed, the Promise is resolved.
// Rejected: If there is a network error or if the request fails, the Promise is rejected.

// onfulfilled and onrejected:
// onfulfilled: A function that is called if the Promise is fulfilled. It receives the result (in this case, the Response object).
// Note: Even if the response is an HTTP error (e.g., 404), the Promise is still fulfilled and it will go in onfulfilled array. You need to check the Response.ok property to see if the request was successful.
// onrejected: A function that is called if the Promise is rejected. It receives the error as its argument.


