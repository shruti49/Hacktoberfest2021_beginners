// AUTHOR: Gaurav Patil
// JavaScript Concept: assigning values from destructuring
// GITHUB: https://github.com/develemit

// * Sometimes, you may want to use destructuring to assign a value to
// * an already instatiated variable!

let age; // *instantiate our variable

const personOne = {
  name: 'Batman',
  age: 38,
};

console.log('Age at this point before:', age); // * undefined

// * now, to assign the value of personOne.age to our `age` variable
({ age } = personOne);

console.log('Age at this point after:', age); // * 38
