// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// Dates: JavaScript Date objects represent a single moment in time in a platform-independent format.

let myDate = new Date();
console.log(myDate); // Output: 2024-07-12T04:28:55.182Z
console.log(typeof myDate); // Output: object
console.log(myDate.toString()); // Output: Fri Jul 12 2024 00:29:40 GMT-0400 (Eastern Daylight Time)
console.log(myDate.toDateString()); // Output: Fri Jul 12 2024
console.log(myDate.toLocaleString()); // Output: 7/12/2024, 12:31:40 AM
console.log(myDate.toTimeString()); // Output: 00:31:40 GMT-0400 (Eastern Daylight Time)
console.log(myDate.toLocaleDateString()); // Output: 7/12/2024
console.log(myDate.toISOString()); // Output: 2024-07-12T04:31:40.204Z
console.log(myDate.toJSON()); // Output: 2024-07-12T04:31:40.204Z

let myCreatedDate = new Date(2024, 0, 27)
console.log(myCreatedDate); // Output: 2024-01-27T05:00:00.000Z
console.log(myCreatedDate.toDateString()); // Output: Sat Jan 27 2024

let myCreatedDate2 = new Date(2024, 0, 27, 10, 30, 0)
console.log(myCreatedDate2.toLocaleString()); // Output: 1/27/2024, 10:30:00 AM

let myCreatedDate3 = new Date("01-27-2024")
console.log(myCreatedDate3.toLocaleString()); // Output: 1/27/2024, 12:00:00 AM

let myTimeStamp = Date.now();
console.log(myTimeStamp); // Output: 1720759171766
// This returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.

// Now, we can compare our created date with the time stamp
console.log(myCreatedDate3.getTime()); // Output: 1706331600000

// If we need time in seconds, we can divide the time stamp by 1000
console.log(Date.now() / 1000); // Output: 1720759364.822
console.log(Math.floor(Date.now() / 1000)); // Output: 1720759364

let newDate = new Date();
console.log(newDate.getFullYear()); // Output: 2024
console.log(newDate.getMonth()); // Output: 6 (Index starts from 0) i.e. July
console.log(newDate.getDate()); // Output: 12

console.log(newDate.toLocaleString('en-US', { 
    weekday: 'long' 
})); // Output: Friday
