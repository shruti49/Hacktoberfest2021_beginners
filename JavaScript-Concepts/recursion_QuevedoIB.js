// AUTHOR: Iván Quevedo
// JavaScript Concept: Recursion
// GITHUB: https://github.com/QuevedoIB


// Recursion is an advanced technique that allows you to loop 
// the same function with computed values on each loop
// it is important to point that there must be a
// condition that stops the loop and returns the computed values

//Example
// The most basic and extended example is Fibonacci sequence

// program to display fibonacci sequence using recursion

const fibonacci = number => {
    if(number < 2) { //Condition to finish the loop, it will return the computed values when there's no fibonacci numbers left
        return number;
    }
    else {
        return fibonacci(number-1) + fibonacci(number - 2); // computes arguments and calls itself with those values till the finish condition is met
    }
}
