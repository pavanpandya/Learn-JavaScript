// Let's talk about the default JavaScript behaviour
// - JavaScript is synchronous and single-threaded
// - Synchronous means that it will execute the code line by line
// - Single-threaded means that it will execute the code one at a time

// Execution Context:
// It executes one line of code at a time.
// Eg:
// console.log('Hello');
// console.log('World');

// Execution Flow:
// 1. console.log('Hello');
// 2. console.log('World');
// Each operation waits for the last one to complete before it starts executing.

// Output:
// Hello
// World

// Blocking Code vs Non-Blocking Code:
// - Blocking Code: It will block the execution of the code until the operation is completed.
// Eg: Reading a file from the file system (Synchronous operation)
// - Non-Blocking Code: It will not block the execution of the code. It will continue to execute the code. 
// Eg: Reading a file from the file system (Asynchronous operation)

// Which one is better?
// - Sometimes people says that Non-Blocking Code is better because it will not block the execution of the code. It will continue to execute the code.
// But, consider the below example:
// User creates an account and we need to save the user data in the database. 
// If we use Non-Blocking Code, then the user will get the "Success" message before the data is saved in the database. 
// Maybe the data is not saved in the database due to some issue. So, in this case, Blocking Code is better.
// Therefore, it depends on the use case.

// JS Engine, Web API and Task Queue:
// 1. JS Engine: It is responsible for executing the code.
// - JS Engine has two parts:
//   - Memory Heap: It is responsible for storing the variables and function calls.
//   - Call Stack: It is responsible for keeping track of the function calls.

// 2. Web API: It is responsible for executing the asynchronous code. We get the Web API from the browser. Sometimes, we can also given Environment instead of Web API. eg: Node.js
// If we have the Web API, then we have access to DOM API. If we have the Environment, eg: Node.js, then we don't have access to DOM API.

// 3. Task Queue: It is responsible for keeping track of the callback functions. When the Web API completes the operation, it will put the callback function in the Task Queue. 
// In the Fetch API, we have "promise" which has higher priority than the callback function. So, the promise will be executed first.

// Understanding the flow:
// Whenever the program gets executed, it will first create call stack and global execution context. As we read the code, it will start appending the function calls in the call stack.
// Assume we have a function that wants to call the setTimeout function. The setTimeout function is not available in the JS Engine. So, it will go to the Web API and ask to execute the setTimeout function.
// Note: Here, we are taking the setTimeout function as an example. But it can be setInterval, fetch, etc.
// This operation is registered in the Register Callbacks. When the setTimeout function is completed, it will put the callback function in the Task Queue (FIFO).
// The Event Loop will keep checking the Task Queue. It will add the callback in the call stack. The callback will be executed.

// Trick Question:
// First we printed 1, Now we have setTimeout function with 0 seconds. So, it will print 2. But, it is not printing 2. Instead it prints 3. Why?
// The setTimeout function is not available in the JS Engine. It is available in the Web API. So, it will go to the Web API and ask to execute the setTimeout function.
// Thus, So, it will print 3 first and once the callback gets added in the stack it will then print 2.