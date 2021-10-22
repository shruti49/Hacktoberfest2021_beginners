// AUTHOR: Ashraf Khan
// JavaScript Concept: Array forEach()
// GITHUB: https://github.com/ashrafkh4n


// The forEach() method executes a provided function once for each array element.
// array.forEach(callback)
// array.forEach((element) => { ... } )

// Here we iterate forEach on items array to copy its contain to another array copyitems

const items = [1, 2, 3, 4, 5]
const copyItems = []

// applying forEach method on array

items.forEach((item) => {
    copyItems.push(item)
  })

// Console output on terminal

console.log(copyItems)

// Expected output = [ 1, 2, 3, 4, 5 ]


// AUTHOR: Nikhil Singh
// JavaScript Concept: For Of Loop
// GITHUB: https://github.com/singhnikhiljsr/


// The JavaScript for of statement loops through the values of an iterable object.
// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

// Syntax //

for (variable of iterable) {
  // code block to be executed
}

// Example

const cars = ["Nikhil", "Shruti", "Aman"];

let text = "";
for (let x of cars) {
  text += x;
}
