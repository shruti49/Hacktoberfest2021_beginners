// AUTHOR: Abhishek Vaish
// JavaScript Concept: LocalStorage
// GITHUB: https://github.com/abhishekv5055

// Local Storage is used to store the data; store data can be access across different session.
// It is same as Session Storage but difference is that local Storage doesn't have expiration date
// while Session Storage gets cleared after the session is close.

// Use Case:
// Local Storage can be used to store the jwt token of the authenticate user of the web application

// Examples:

// Create a local storage
localStorage.setItem("key", "value");

// Get a local storage
localStorage.getItem("key");

// Delete a local storage
localStorage.removeItem("key");
