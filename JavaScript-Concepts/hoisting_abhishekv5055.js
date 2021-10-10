// AUTHOR: Abhishek Vaish
// JavaScript Concept: Hoisting
// GITHUB: https://github.com/abhishekv5055

//Add your JavaScript concept below
//In JavaScript, Hoisting is the process of moving all the declartions to
//the top of the current scope, i.e. top of the current script.

//Note: Declartion that are made using the 'var' are initialized with the undefined
//where declartion that are made using the 'const' and 'let' are not intialized as part of hoisting.

// For example:

helloWorld();

function helloWorld() {
  console.log("Hello World");
}

// Output:
// Hello World

x = 5;
console.log("Value of x: ", x);
var x;

// Output:
// Value of x: 5

console.log("Value of y: ", y);
y = 5;
var y;

// Output:
// Value of y: undefined

z = 5;
console.log("Value of z: ", z);
let z;

// Output:
// ReferenceError: Cannot access 'z' before initialization
// ****With let and const you cannot use variable before it declared.****
