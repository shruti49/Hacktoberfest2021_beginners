// AUTHOR: Paula Leal Funes
// JavaScript Concept: Arrow Functions
// GITHUB: https://github.com/pllealfunes


// Arrow functions were introduced in ES6. Arrow functions give us the ability
// to write shorter functions.



//Example with 1 argument

//Regular Function
function regularFunction(a) {
    return a * 5;
}

// Arrow Function
let regularFunction = (a) => a * 5




//Example with 2 arguments

//Regular Function
function regularFunction(a, b) {

    console.log(a * b);
}

// Arrow Function
let regularFunction = (a, b) => console.log(a * b);




//Anonymous Function Example

//Regular Function
document.addEventListener('click', function () {
    console.log('Hi');
})

// Arrow Function
document.addEventListener = ('click', () => console.log('Hi'));

