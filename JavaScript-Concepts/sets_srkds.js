// AUTHOR: Nirav
// JavaScript Concept: Set()
// GITHUB: https://github.com/srkds

// description
// sets can hold "unique" values

// ex:
// array: 2,5,2,62,2,62,5
// set: 2,5,62

// it can be useful in compitive programming and in development

//create new set

var arr = [2,5,2,62,2,62,5] // array which holds redundent values
var myset = new Set(arr) // to create set from array

// myset: Set(3) { 2, 5, 62 }

// to get size of set
var lengthOfSet = myset.size
// lengthOfSet: 3

// Add value to set
myset.add(20) //{ 2, 5, 62, 20 }

// has(): checks if found then returns true otherwise false
myset.has(12) // false
myset.has(2) // true

// delete(): to delete element from set
myset.delete(2)

