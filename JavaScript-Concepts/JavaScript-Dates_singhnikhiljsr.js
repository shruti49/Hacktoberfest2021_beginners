// AUTHOR: Nikhil Singh
// JavaScript Concept: Date Objects
// GITHUB: https://github.com/singhnikhiljsr/


// JavaScript Date Object lets us work with dates:

// Syntax //

const d = new Date();

// JavaScript Date Output :-

// Mon Oct 18 2021 14:34:17 GMT+0530 (India Standard Time)

// There are 4 ways to create a new date object:

new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)

// 1. new Date()
// new Date() creates a new date object with the current date and time:

const d = new Date();

// 2. new Date(year, month, day, hours, minutes, seconds, milliseconds)
// It creates a new date object with a specified date and time.

const d = new Date(2018, 11, 24, 10, 33, 30, 0);

// 3. new Date(milliseconds)
// It creates a new date object as zero time plus milliseconds:

const d = new Date(0);

// 4. new Date(dateString)
// It creates a new date object from a date string:

const d = new Date("October 13, 2014 11:13:00");

// Date Methods
// Displaying Dates

const d = new Date();
document.getElementById("demo").innerHTML = d;

// The toUTCString() method converts a date to a UTC string (a date display standard).

const d = new Date();
document.getElementById("demo").innerHTML = d.toUTCString();

// The toDateString() method converts a date to a more readable format:

const d = new Date();
document.getElementById("demo").innerHTML = d.toDateString();

// The toISOString() method converts a Date object to a string, using the ISO standard format:

const d = new Date();
document.getElementById("demo").innerHTML = d.toISOString();
