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
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

// take nth term input from the user
const nTerms = prompt('Enter the number of terms: ');

if(nTerms <=0) {
    console.log('Enter a positive integer.');
}
else {
    for(let i = 0; i < nTerms; i++) {
        console.log(fibonacci(i));
    }
}

