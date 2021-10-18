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

// Create a local storage
let dog = "Golden Retriever";
