// AUTHOR: Hijikesh Hijal
// JavaScript Concept: Intersection of two arrays
// GITHUB: https://github.com/hijal

//Add your JavaScript concept below
// intersection is a mathematical term. It help to find common values between two arrays.

const array1 = [2, 3], array2 = [1, 2];

let intersection = array1.filter(n => array2.includes(n));
console.log(intersection);

//output 
// [2]