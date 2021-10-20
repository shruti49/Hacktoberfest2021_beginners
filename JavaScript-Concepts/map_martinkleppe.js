// AUTHOR: Martin Kleppe
// JavaScript Concept: map
// GITHUB: https://github.com/martinkleppe

//Casting an array of numerical values represented as strings
//into JavaScript numbers. All JavaScript number 64 bit floating
//point numbers.
const numbers = ["1", "2", "3", "6.5412", "-4005.1334", [1.4005]];
const castednumbers = numbers.map(Number);

//This leverages the map method of Array, and by passing Number as the parameter
//for each value in the array it is going to call the constructor of
//Number and return the result.
console.log(castednumbers); //[1, 2, 3, 6.5412, -4005.1334, 1.4005]

//It is also possible to call a function on every element in the array.
const castedints = numbers.map(x => parseInt(x))
console.log(castedints); // [1, 2, 3, 6, -4005, 1]

const array1 = [1, 4, 9, 16]; 

//Pass a function to map to calculate the value times 2 for each element of the array
const map1 = array1.map(x => x * 2);

console.log(map1); // [2, 8, 18, 32]