// AUTHOR: Akshat Srivastava
// JavaScript Concept: Object.assign() - JavaScript Concept
// GITHUB: https://github.com/akshat-fsociety

// The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

/* Syntax
   Object.assign(target, ...sources)

   Parameters
   
target:
The target object — what to apply the sources’ properties to, which is returned after it is modified.

sources:
The source object(s) — objects containing the properties you want to apply.

Return value
The target object.*/

