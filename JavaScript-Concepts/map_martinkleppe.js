// AUTHOR: Martin Kleppe
// JavaScript Concept: map
// GITHUB: https://github.com/martinkleppe

//Casting an array of numerical values represented as strings
//into JavaScript numbers. All JavaScript number 64 bit floating
//point numbers.
const number = ["1", "2", "3", "6.5412", "-4005.1334", [1.4005]];
const castednumbers = numers.map(Number);

//This leverages the map method of Array, and by passing Number as the parameter
//for each value in the array it is going to call the constructor of
//Number and return the result.
console.log(castednumbers); //[1, 2, 3, 6.5412, -4005.1334, 1.4005]