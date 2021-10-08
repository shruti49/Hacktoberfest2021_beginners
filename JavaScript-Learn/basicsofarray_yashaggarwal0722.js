// AUTHOR: Yash Aggarwal
// JavaScript Concept: Basics of arrays
// GITHUB: https://github.com/yashaggarwal0722

// What is an Array?
// An array is a special variable, which can hold more than one value at a time.


// Creating an Array
// Syntax:
// const array_name = [item1, item2, ...];     

//Example
const cars = ["Saab", "Volvo", "BMW"];

// Accessing Array Elements
// You access an array element by referring to the index number:
const cars = ["Saab", "Volvo", "BMW"];
let x = cars[0];    // x = "Saab"

// Changing an Array Element
cars[0] = "Opel"; //array becomes ["Opel","Volvo","BMW"]

// Array Properties and Methods
cars.length   // Returns the number of elements
cars.sort()   // Sorts the array
