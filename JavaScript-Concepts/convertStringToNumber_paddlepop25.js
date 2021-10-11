// AUTHOR: Linda Hsu
// JavaScript Concept: String conversion to Number
// GITHUB: https://github.com/Paddlepop25

/**
 * For example we have an input box which the user would input age or price.
 * For doing Math calculations we'd need to convert the string to number.
 * These are several ways to do it
 */

let ageString = '25';
console.log(typeof ageString); // string

// 1
let ageNumber1 = parseInt(ageString);
console.log(typeof ageNumber1); // number

// 2
let ageNumber2 = Number(ageString);
console.log(typeof ageNumber2); // number

// 3
let ageNumber3 = +ageString;
console.log(typeof ageNumber3); // number

// 4
let ageNumber4 = Math.floor(ageString);
console.log(typeof ageNumber4); // number

// 5
let ageNumber5 = ~~ageString;
console.log(ageNumber5);
