// AUTHOR: Yash Varshney
// JavaScript Concept: splice in array
// GITHUB: https://github.com/YASHVARSHNEY123

// Splice -  Change the contents of an array by removing or replacing existing elements and/or adding new elements. This method modifies the array in place.

let arr = ['a', 'c', 'd', 'e'];
arr.splice(1, 0, 'b');
arr.forEach((element) => {
    console.log(element);
})

//   Adds b at position 1 of the array, remove 0 elements.