// AUTHOR: Ankita Mandal
// JavaScript Concept: JavaScript Closures
// GITHUB: https://github.com/GoGi2712

What is Closure?

A closure is the combination of a function and the lexical environment within which that function was declared.

A closure is an inner function that has access to the outer (enclosing) function’s variables — scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function’s variables, and it has access to the global variables.

Let see a closure example below:
function User(name){
  var displayName = function(greeting){
   console.log(greeting+' '+name);
  }
return displayName;
}
var myFunc = User('Raj');
myFunc('Welcome '); //Output: Welcome Raj
myFunc('Hello '); //output: Hello Raj

In this code, We have an outer function User() which returns an inner function as displayName(),
The inner function will have access to the variables in the outer function scope, even after the outer function has returned.