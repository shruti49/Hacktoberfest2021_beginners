// AUTHOR: Hijikesh Hijal
// JavaScript Concept: Intersection of two arrays
// GITHUB: https://github.com/hijal

//Add your JavaScript concept below
// callback is a function which  is passed as an argument to another function, 
// which is invoked inside the outer function to get certain output.
// here process is a function which is passed in another function printTitle as an argument.

const array1 = [2, 3], array2 = [1, 2];

let intersection = array1.filter(n => array2.includes(n));
console.log(intersection);

//output 
// [2]