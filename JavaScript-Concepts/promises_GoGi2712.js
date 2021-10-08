// AUTHOR: Ankita Mandal
// JavaScript Concept: Understand Promises
// GITHUB: https://github.com/GoGi2712

// The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

// A promise represents the result of the asynchronous function. Promises can be used to avoid chaining callbacks. In JavaScript,
// so whenever JavaScript Code Execute as Asynchronously, need to handle an operation as one of the ways would be using promises.
// Promises, have been around quite a while and are defined by a spec called Promise/A+. ES6 has adopted this spec for its Promise implementation; but there are other Promise libraries out there such as Q, Bluebird, RSVP, and others that adhere to this spec and offer other features on top of it.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.

// fulfilled: meaning that the operation completed successfully.

// rejected: meaning that the operation failed.

var promise1 = new Promise(function(resolve, reject) {
    isDbOperationCompleted = false;
    if (isDbOperationCompleted) {
        resolve('Completed');
    } else {
        reject('Not completed');
    }
});
promise1.then(function(result) {
    console.log(result); //Output : Completed
}).catch(function(error) {
    console.log(error); //if isDbOperationCompleted=FALSE                                                  
    //Output : Not Completed
})
// consider above code for a sample promise assume like doing DB Operation as asynchronously, In that promise Object arguments as two function resolve and reject,
// whenever we execute that promise using .then() and .catch() as callback function In order to get resolve or reject values