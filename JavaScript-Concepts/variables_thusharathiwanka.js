// AUTHOR: Thushara Thiwanka
// JavaScript Concept: Variables
// GITHUB: https://github.com/thusharathiwanka

// In JavaScript, var, let, and const are three ways of creating variables.

/**
 * var
 * Variables declared using var keyword scoped to the current execution context. This means If they are inside
 * a function we only can access them inside the function. and If they are not they are part of the global scope which
 * we can access anywhere. (EXAMPLE 01)
 */

// EXAMPLE 01
var fruit = "Apple";
console.log(fruit); // Prints Apple

/**
 * Here, (EXAMPLE 02) Mango is scoped to function scope and Apple belongs to the global scope. If we try to access
 * global variable it is possible. but if we try to access a function scoped variable it is not possible.
 * look at another example below. (EXAMPLE 03)
 */

// EXAMPLE 02
function printFruit() {
	var fruit = "Mango";
	console.log(fruit); // Prints Mango
}
printFruit();

// EXAMPLE 03
function sayHi() {
	for (var i = 0; i < 5; i++) {
		console.log("Hi"); // Prints "Hi" 5 times
	}

	console.log(i); // Prints 5
}
sayHi();

/**
 * let
 * This is the improved version of var declarations. let creates variables that are block-scoped. Also, they can not be
 * redeclared and can be updated. The below example shows it is the best choice to use let than var. (EXAMPLE 04)
 */

// EXAMPLE 04
function sayHiAgain() {
	for (let i = 0; i < 5; i++) {
		console.log("Hi"); // Prints "Hi" 5 times
	}

	console.log(i); // Error - cannot access outside from the block scope.
}
sayHiAgain();

/**
 * const
 * Const variables are cannot be updated or redeclared. This way is used to declare constants. Same as the let
 * declarations const declarations are block-scoped. Unlike var and let, If we are using const to declare a variable
 * that must be initialized. (EXAMPLE 05)
 */

const fruit = "Apple";
console.log(fruit); // Prints "Apple"

fruit = "Mango"; // Error - const variables cannot be reassigned

/**
 * I personally prefer to use let and const over var and use const to declare constant variables and always use let to
 * declare variables if it is not a constant.
 */
