// AUTHOR: Nidhi Zope
// JavaScript Concept: Push, Pop, shift and unshift array method in javascript.
// GITHUB: https://github.com/Nidhiz/

// There are a lot of great array methods to help add or remove elements from arrays in a targeted fashion.
    
console.log("Welcome to Some Array methods push, pop, shift and unshift");

//push: This is a relatively simple method that adds an item to the end of an array. It modifies the array in place and the function itself returns the item added to the array.

let arr = [10, 20, 30, 40, 60];
const pushed = arr.push(70);

console.log(arr);
//Output: [10, 20, 30, 40, 60, 70]
console.log(pushed);
//Output: 6

//pop: This removes the last item from an array. Again, it modifies the array in place. The function itself returns the item removed from the array.

let arr1 = [10, 20, 30, 40];
const popped = arr1.pop();
console.log(arr1);
//Output: [10, 20, 30]
console.log(popped);
//Output: 40

//shift: This removes the first item from an array. Again, it modifies the array in place. The function itself returns the item removed from the array.

let arr2 = [10, 20, 30, 40];
const shifted = arr2.shift();
console.log(arr2);
//Output: [20, 30, 40]
console.log(shifted);
//Output: 10

//unshift: This adds one or more elements to the beginning of an array. Again, it modifies the array in place. Unlike a lot of the other methods, the function itself returns the new length of the array.

let arr3 = [10, 20, 30, 40];
const unshifted = arr3.unshift(50, 60, 70);
console.log(arr3);
//Output: [50, 60, 70, 10, 20, 30, 40]
console.log(unshifted);
//Output: 7



