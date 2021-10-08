// AUTHOR: Shubham Bhatt
// JavaScript Concept: map, filter, reduce
// GITHUB: https://github.com/thedevshubham

// map, filter, reduce are the array methods and used to do some manipulation in array

// 1. map : used to manipulate the array and it will return the array itself

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
arr = arr.map((item) => {
    return item * 2
})
console.log(arr, "this is the array all elements multiplied by 2");
// [20,  40,  60,  80, 100, 120, 140, 160, 180, 200]

// 2. filter : used to filter the array, will return a new array

arr = arr.filter((item) => {
    return item > 50
})
console.log(arr); // [60,  80, 100, 120, 140, 160, 180, 200]

// 3. reduce : used to get the sinle value

arr = arr.reduce((accumulator, item) => {
    return accumulator + item
})
console.log(arr); // 1040
