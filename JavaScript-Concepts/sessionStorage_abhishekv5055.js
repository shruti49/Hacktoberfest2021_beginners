// AUTHOR: Abhishek Vaish
// JavaScript Concept: SessionStorage
// GITHUB: https://github.com/abhishekv5055

// Session Storage is like a Local Storage but the only difference between them is
// that Local Storage doesn't expire while the Session Storage expire when the page session ends.

// Note: Open multiple tabs in the browser with the same URL create the new session for each tabs.

// Use Case:
// Session Storage can be used to store the state of the user interface of the web application

// Examples:

// Create a Session
sessionStorage.setItem("key", "value");

// Get a Session
sessionStorage.getItem("key");

// Delete a Session
sessionStorage.removeItem("key");
