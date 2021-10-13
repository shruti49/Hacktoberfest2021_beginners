//Author : Ishar Jain
//JavaScript Concept : Wrapper Objects - String
//github : www.github.com/ishar19


// JavaScript provides three primitive wrapper types: Boolean, Number, and String types.

let language = "JavaScript";
let s = language.substring(4);
console.log(s); // Script

// In this example, The variable language holds a primitive string value. It doesn’t have any method like substring(). However, the above code works perfectly.

// When you call a method on a variable that holds a number, a string, or a boolean, JavaScript performs the following steps behind the scenes:

// Create an object of a corresponding type.
// Call a specific method on the instance.
// Delete the instance immediately.
// So the above mentioned code
// is equivalent to the code:

let language = "JavaScript";
// behind the scenes of the language.substring(4);
let tmp = new String(language);
str = temp.substring(4);
temp = null;
