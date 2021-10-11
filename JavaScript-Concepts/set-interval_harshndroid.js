// AUTHOR: Harsh Suman
// JavaScript Concept: setInterval
// GITHUB: https://github.com/harshndroid

/* The setInterval() method repeatedly executes a block of code, with a provided time delay (in milliseconds) between each execution call */

// Use case: Execute a block of code till 5 seconds and then stop
let counter = 5; // initial counter variable

// intervalId holds the id for this particular setInterval() method
let intervalId = setInterval(()=>{
  counter = counter - 1; // counter is decreased every 1000 millisecond (or 1 second) so that when its value it 0, we will know that 5 seconds are over.
  console.log("COUNTER: ", counter);
  if(counter === 0){
    // when counter value is 0. Remove the interval
    // that intervalId is used to clear the interval or remove the setInterval() method
    // clearInterval() is important, otherwise setInterval() will continue to run for infinite time
    clearInterval(intervalId);
  }
}, 1000); // 1000 is the time delay which corresponds to 1 second.