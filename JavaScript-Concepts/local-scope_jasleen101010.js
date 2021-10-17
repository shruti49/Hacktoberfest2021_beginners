// AUTHOR: Jasleen Sondhi
// JavaScript Concept: Local Scope
// GITHUB: https://github.com/jasleen101010

// When we create a variable inside a function, local scope occurs.
// By doing that, the visibility and accessibility of the variable is only allowed within that function.
// A local variable is only accessible within the given local scope.

// Use Case:
// Since local variables are only recognized inside their functions(local scope), variables with the same name can be used in different functions.
// Examples:

// Creating a  global variable with a global scope
var globalOne=16;
function testingScope(){
// Creating a  local variable with a local scope 
  var localOne=12;
  console.log(localOne); // 12
  console.log(globalOne); // 16
}
//When trying to access a variable with a local scope, we will get the below error
console.log(localOne); // Uncaught ReferenceError: localOne is not defined
