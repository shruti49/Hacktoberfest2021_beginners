// AUTHOR: Nikita Chaudhari
// JavaScript Concept: Scopes in JS (Global and local Scopes)
// GITHUB: https://github.com/nikita12c

// A simple definition for a scope in JavaScript:
// Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of your code.

// 2 types of Scopes :
// Global Scope
// Local Scope

// Example :
var greeting='My Hacktoberfest Contribution';
(function(){
  console.log(greeting); //Output: My Hacktoberfest Contribution
})();

// consider above code greeting variable should be global scope, it can access inside the function,

(function(){
  var greeting = 'Welcome to Open Source';
    console.log(greeting); //Output: Welcome to Open Source
  })();
  console.log(greeting); //Output:Reference-Error greeting not defined

// We got 2 different outputs for global and local scope
// In the above code for local scope,
// In scope level variables in JavaScript ES6 has updated hoisting variable let, var, const type check with that, In order to learn the scope, you need to understand hoisting also.