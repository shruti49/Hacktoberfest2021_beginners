// AUTHOR: Aman Kumar Sharma
// JavaScript Concept: Trim FUNCITON
// GITHUB: https://github.com/Aman22sharma

// trim() method removes white space from both sides of the string.
// Example 1: Trim a String // program to trim a string

const string = '      Hello World       ';

const result = string.trim();

console.log(result)
// Output

// Hello World
// Note In the above example, the trim() method is used to trim a string. The trim() method removes white space from both sides of the string.

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