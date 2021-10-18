// AUTHOR: Piyush Mittal
// JavaScript Concept: Date and Time
// GITHUB: https://github.com/piyushmittal578

//Using new Date() constructor Date objects can be created

//Syntax
const now = new Date();  //Object for present time

//Various Methods for Date object

console.log(now.getDate());  //Returns day of the month
console.log(now.getMonth());  //Returns Month starting from index 0
console.log(now.getFullYear());  //Returns Year
console.log(now.getDay());  //Returns Day of the week starting from index 0

console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());  //Return hour,minute and seconds respectively

console.log(now.getTime());  //Returns Timestamp(i.e,the number of milliseconds between midnight of January 1, 1970 and the specified date)