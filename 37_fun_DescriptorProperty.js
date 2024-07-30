// Can I change the value of Math.PI?
// Answer: No, you cannot change the value of Math.PI. It is a read-only property.

// Why? Let's understand behind the scene.

console.log(Math.PI); // 3.141592653589793
Math.PI = 5;
console.log(Math.PI); // 3.141592653589793

// Note: The value is not changed.

// What is getOwnPropertyDescriptor() method?
// The Object.getOwnPropertyDescriptor() method returns a property descriptor of the specified object.

// Syntax:
// Object.getOwnPropertyDescriptor(obj, prop)

// Parameters:
// obj: The object in which to look for the property.
// prop: The name of the property whose description is to be retrieved.

// Return value:
// A property descriptor of the specified object.

// Example:
// Using getOwnPropertyDescriptor() method to check the property descriptor of Math.PI:
console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

// Output:
// {value: 3.141592653589793, writable: false, enumerable: false, configurable: false}

// The property descriptor of Math.PI shows that it is not writable, enumerable, and configurable.

// ----------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------

// Let's create new class and try to implement such behavior.
const obj = {
    user_id: 1,
    user_name: 'Pavan Pandya',

    getStudentDetails() {
        return `${this.user_id} - ${this.user_name}`;
    }
}

console.log(Object.getOwnPropertyDescriptor(obj, 'user_id'));
// Output:
// {value: 1, writable: true, enumerable: true, configurable: true}

// Let's print the value of obj

for (const [key, value] of Object.entries(obj)) {
    // Code fix to avoid printing the function as a property of the object
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}

// Output:
// user_id: 1
// user_name: Pavan Pandya
// getStudentDetails: getStudentDetails() {
//         return `${this.user_id} - ${this.user_name}`;
//     }

// The code is not working as expected. The getStudentDetails() method is also printed as a property of the object.

// Output:
// user_id: 1
// user_name: Pavan Pandya

// Changing the enumerable property of the getStudentDetails() method to false:
Object.defineProperty(obj, 'user_id', {
    enumerable: false
});

// Let's print the value of obj
for (const [key, value] of Object.entries(obj)) {
    // Code fix to avoid printing the function as a property of the object
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}

// Output:
// user_name: Pavan Pandya

// The enumerable property of the user_id property is changed to false. The user_id property is not printed as a property of the object.