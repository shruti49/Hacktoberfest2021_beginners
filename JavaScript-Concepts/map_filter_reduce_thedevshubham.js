// AUTHOR: Shubham Bhatt, David Weiss
// JavaScript Concept: map, filter, reduce
// GITHUB: https://github.com/thedevshubham, https://github.com/davidtheweiss

// map, filter, reduce are the array methods and used to do some manipulation in array

// 1. map : used to manipulate the array without mutation and it will return the new array
// map will accept a callback function as a parameter: map(callbackFunction);

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let returnArr = arr.map((item) => {
  return item * 2
});
console.log(returnArr, "This is the array all elements multiplied by 2.\n");
// [20,  40,  60,  80, 100, 120, 140, 160, 180, 200]

// The callback function will accept three parameters: map((element, index, array) => {});
// 1. element is the current element being processed in the array
// 2. index is the index of the current element being processed
// 3. array is the original array map was called upon

returnArr = arr.map((el, i, array) => {
  return el * array[array.length - 1 - i];
});
console.log(returnArr, "This array is palindromic because the number at the index traversing forward was multiplied by the number at the index traversing backwards.");
console.log("Notice the 'array' parameter is the original array, not the new one being returned.\n");
// [1000, 1800, 2400, 2800, 3000, 3000, 2800, 2400, 1800, 1000]

// 2. filter : used to filter the array without mutation, and will return the new array. If the return value of the callback function is true, that element is included in the new array.
// filter will accept a callback function as a parameter: filter(callbackFunction);

returnArr = arr.filter((item) => {
  return item > 50;
});
console.log(returnArr, 'This array includes only elements in the original array greater than 50.\n');
// [60,  70, 80, 90, 100]

// Similar to map, filter's callback will accept three parameters: filter((element, index, array) => {});
// 1. element is the current element being processed in the array
// 2. index is the index of the current element being processed
// 3. array is the original array filter was called upon

returnArr = arr.filter((el, i, array) => {
  return i % 2 === 0;
});
console.log(returnArr, "This array removes all elements with odd indexes.\n");
// [1000, 1800, 2400, 2800, 3000, 3000, 2800, 2400, 1800, 1000]

// 3. reduce : applies a callback function on every element of the array and stores the return value of the last iteration for use in the next iteration.
// The final return value is whatever is returned on the last iteration
// The easiest way to understand this function's use case is by finding the sum of all elements in the array.

returnArr = arr.reduce((accumulator, item) => {
  return accumulator + item;
});
console.log(returnArr, 'This is the sum of every element in the array.\n'); // 550

// reduce will accept a four parameter callback and another parameter called initialValue: reduce((previousValue, currentValue, currentIndex, array) => {}, initialValue);
// 1. previousValue is the value resulting from the previous call to callbackFunction (if callbackFunction is called for the first time, this value will be equal to the first value in the array)
// 2. currentValue is the value of the current element (if callbackFunction is called for the first time, this value will be equal to the second value in the array)
// 3. index is the index of the current element being processed
// 4. array is the original array reduce was called upon
// 5. initialValue is a custom value to initialize previousValue with. If this is omitted, previousValue will be initialized with the first element.

returnArr = arr.reduce((previousValue, currentValue, index, array) => {
  return previousValue + currentValue;
}, 100);
console.log(returnArr, 'This is the sum of every element in the array, starting from 100'); // 650
