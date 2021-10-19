// AUTHOR: Arunavo
// JavaScript Concept: Trim Method in js
// GITHUB: https://github.com/DuesExMachina


// trim() method removes white space from both sides of the string.
// Example 1: Trim a String // program to trim a string

const string = '      Hello World       ';

const result = string.trim();

console.log(result)

// // Output
// Hello World


// Example 2: Trim a String Using RegEx

// program to trim a string
function trimString(x) {
    let trimValue = x.replace(/^\s+|\s+$/g,'');
    return trimValue;
}
const result = trimString('    Hello world    ');
console.log(result);


// Output
// Hello World
