// AUTHOR: Altaf Ali
// JavaScript Concept: JavaScript Spread Operator
// GITHUB: https://github.com/nerdyaltafofficial

//Add your JavaScript concept below

//A JavaScript concept that can throw people off but is relatively simple is the spread operator! In the following case,
// Math.max can't be applied to the arr array because it doesn't take an array as an argument, 
//it takes the individual elements as arguments. The spread operator ... is used to pull the individual elements out the array.

const arr = [4, 6, -1, 3, 10, 4];
const max = Math.max(...arr);
console.log(max);  
//10