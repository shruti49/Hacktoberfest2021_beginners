// AUTHOR: Harsh Suman
// JavaScript Concept: setTimeout
// GITHUB: https://github.com/harshndroid

/* The setTimeout() method executes a block of code, just after a provided timer (in milliseconds) is expired */

// Use case: Execute a block of code only after 10 seconds

// timeoutId holds the id for this particular setTimeout() method
console.log("START")
let timeoutId = setTimeout(()=>{
  // this will be executed after 10 seconds only if setTimeout is not cleared
  console.log("Code executed inside setTimeout()");
}, 10000); // 10000 is the timer which corresponds to 10 seconds

const isClearTimeoutBeforeTenSeconds = true; // true false value
if(isClearTimeoutBeforeTenSeconds === true){
  // clear the timeout before 10 seconds.
  clearTimeout(timeoutId); // timeoutId is used to remove the timer
}
else{
  // let the timer run
}
// Above if-else block is to explain that clearTimeout() is not always necessary to be written
// If we want to clear the timer before its timeout period, then only clearTimeout() needs to be written

console.log("END")