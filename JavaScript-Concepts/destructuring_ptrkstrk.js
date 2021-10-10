// AUTHOR: Piotr Kosturek
// JavaScript Concept: Destructuring assignment
// GITHUB: https://github.com/ptrkstrk

// from MDN docs: "The destructuring assignment syntax is a JavaScript expression 
// that makes it possible to unpack values from arrays, 
// or properties from objects, into distinct variables." 

const person = {
    name: "Adam",
    address: {
        city: "Wroclaw",
        country: "Poland",
    }
};
//Object destructuring
const { name, address: { country, city } } = person;
console.log('destructured object properties:');
console.log(`${name} lives in ${city}, ${country}`);

// You can rename destructured properties:
const { name: firstName } = person;
console.log('destructured renamed property:');
console.log(`${firstName}`);

// You can also destructure arrays!
const arr1 = ['javascript', 'is', 'cool', '!'];
let [firstElement, secondElement, thirdElement, fourthElement] = arr1;
console.log('destructured array elements:');
console.log(firstElement, secondElement, thirdElement, fourthElement);

// some array elements can be ignored
const arr2 = ['first', 'second', 'third', 'fourth'];
[firstElement, , , fourthElement] = arr2;
console.log(firstElement, fourthElement);


