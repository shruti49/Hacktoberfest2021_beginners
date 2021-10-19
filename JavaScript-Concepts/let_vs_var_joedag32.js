// AUTHOR: joedag32
// JavaScript Concept: let vs var varaibles
// GITHUB: https://github.com/joedag32

// A variable declared with let is limited to the scope of the block statement or expression
// on which its used. A variable declared with var is declared globally recgardless of block scope.
// A typeErrow will be raised if the same let variable is redeclared, whereas if a new var is declared
// no error is raised, but the var is assigned the newest value.

// Use Case:
// Using let over var is highly recommended.

// Examples:

// Create a let variable
let dog = "Golden Retriever";

// Cretee a var variable
let dog = "Golden Retriever";

// Redeclaration let example
let dog = "Greyhound"; 
console.log(dog); // error since dog has already been declared

// Redeclaration var exampe
let dog = "Greyhound"; 
console.log(dog); // Greyhound

// let scope example
for (let i = 0; i < 3; i++) {
    console.log("Loop value - ", i);
}
console.log("Outside loop value - ", i); 
/* let loop output, notice i outside of the loop throws an error
Loop value - 0
Loop value - 1
Loop value - 2
Uncaught ReferenceError: i is not defined
*/

// var scope example
for (var i = 0; i < 3; i++) {
    console.log("Loop value - ", i);
}
console.log("Outside loop value - ", i); 
/* var loop output, notice i works outside of the for loop where it was declared
Loop value - 0
Loop value - 1
Loop value - 2
Loop value - 3
*/