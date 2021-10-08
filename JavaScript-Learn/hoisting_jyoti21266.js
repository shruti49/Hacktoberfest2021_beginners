// AUTHOR: Jyoti Kumari
// JavaScript Concept: Hoisting
// GITHUB: https://github.com/jyoti21266

//In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution.
//As in below example variable x is initialised before it has been declared.

x = 5; // Assign 5 to x

elem = document.getElementById("hoist"); // Find an element
elem.innerHTML = x;                     // Display x in the element

var x; // Declare x

//let and const variables are hoisted to the top of the variable, but not initialized.
//The let variables are in "temporal dead zone" from the start of the block until it is declared.


//JavaScript hoists only declarations,not initialization.

var x = 5; // Initialize x

elem = document.getElementById("hoist"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y

var y = 7; // Initialize y

//here y is undefined as only var y is hoisted not its initialization.
