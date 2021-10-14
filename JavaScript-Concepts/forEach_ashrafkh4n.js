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
