// AUTHOR: Thushara Thiwanka
// JavaScript Concept: Ternary/Conditional operator
// GITHUB: https://github.com/thusharathiwanka

/**
 * 1.This is the shorthand way of writing conditional statements (EXAMPLE 01).
 * 2.When executing, if the checking condition is true it will executes the statement after ? else it will executes the statement after :
 * 3.Ternary operator can be chained as well, like we use else if statement to handle more than two conditions (EXAMPLE 02).
 */

/**
 * EXAMPLE 01
 * This will prints greeting based on current hour - covers only two conditions.
 * If current hour is less than 12 greeting will be print as Good morning.
 * If current hour is greater than 12 greeting will be print as Good afternoon.
 */
const getGreeting = () => {
	const now = new Date();
	let greeting;

	now.getHours < 12 ? (greeting = "Good Morning") : (greeting = "Good Afternoon");

	console.log(greeting);
};

getGreeting();

/**
 * EXAMPLE 02
 * This will prints greeting based on current hour - covers four conditions.
 * If current hour is less than 12 greeting will be print as Good morning.
 * If current hour is less than 16 greeting will be print as Good afternoon.
 * If current hour is greater than 16 greeting will be print as Good evening.
 */
const getSpecificGreeting = () => {
	const now = new Date();
	let greeting;

	now.getHours < 12
		? (greeting = "Good Morning")
		: now.getHours < 16
		? (greeting = "Good Afternoon")
		: (greeting = "Good Evening");

	console.log(greeting);
};

getSpecificGreeting();
