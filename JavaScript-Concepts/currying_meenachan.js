// AUTHOR: Meenakshi Chauhan
// JavaScript Concept: Currying in JavaScript
// GITHUB: https://github.com/meenachan


//Currying is a technique of evaluating the function with multiple arguments,
// into a sequence of function with a single argument

// In other words, when a function, instead of taking all arguments at one time, 
// takes the first one and return a new function that takes the second one
// and returns a new function which takes the third one, and so forth until all arguments have been fulfilled.
// It helps to create a higher-order function. It is extremely helpful in event handling.

// Example 

var add =   function (a){
    return function(b){
          return function(c){
                 return a+b+c;
                 }        
           }
     }
console.log("Addition using currying");
console.log(add(2)(3)(4)); //output 9
console.log(add(3)(4)(5)); //output 12

// this currying achieving through closures, so above program variables a,b private properties of the parent function
 
// How to convert an existing function to a curried version?
// The curry function does not exist in native JavaScript. 
// But a library like lodash makes it easier to convert a function to a curried one.


// Example 2

function volume(length) {
    return function(width) {
       return function(height) {
          return height * width * length;
       }
    }
 }
 console.log("Volume calculation using currying")
console.log(volume(11)(2)(3))   //output 66