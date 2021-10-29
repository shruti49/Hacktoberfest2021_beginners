// AUTHOR: Utkarsh Mall
// JavaScript Concept: Generators in Javascript
// GITHUB: https://github.com/iamutkarshmall

//Generators are a special class of functions that simplify the task of writing iterators. 
//So, this function produces a sequence of results instead of a single value and generates ​a series of values.
//Thus, in JavaScript, a generator is a function that returns an object on which you can call next(). 
//Therefore, every invocation of next() will return an object of shape.

//Example

/*
{
    value: Any,
    done: true|false
}
*/

//The "value" property will contain the value. The "done" property is either true or false. 
//When the "done" becomes true, the generator stops and won’t generate any more values.
//So these were some of the advanced techniques and methods involved in JavaScript. 

//--------------------Creating a Generator-----------------------//

function * generatorFunction() { // Line 1
    console.log('This will be executed first.');
    yield 'Hello, ';   // Line 2
    console.log('I will be printed after the pause');  
    yield 'World!';
  }
  const generatorObject = generatorFunction(); // Line 3
  console.log(generatorObject.next().value); // Line 4
  console.log(generatorObject.next().value); // Line 5
  console.log(generatorObject.next().value); // Line 6
  
  // This will be executed first.
  // Hello, 
  // I will be printed after the pause
  // World!
  // undefined