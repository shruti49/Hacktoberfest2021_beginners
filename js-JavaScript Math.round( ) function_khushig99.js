*JavaScript-Concepts*
// AUTHOR: Khushi Gupta
// JavaScript Concept: JavaScript Math.round( ) function
// GITHUB: https://github.com/khushig99

//The Math.round() method rounds a number to the nearest integer.

  JavaScript Math.round( ) function is used to round the number passed as a parameter to its nearest integer. 

Syntax:
Math.round(value)

Parameters:
value: The number to be rounded to its nearest integer.

  Example 1: Rounding Off a number to its nearest integer

To round off a number to its nearest integer, the math.round() function should be implemented in the following way: 

code:
let round = Math.round(5.8);
console.log("Number after rounding : " + round);

Output:
Number after rounding : 6
   
  Example 2: Rounding Off a negative number to its nearest integer

The Math.round() function itself rounds off a negative number when passed as a parameter to it. To round off a negative number to its nearest integer, the Math.round() function should be implemented in the following way: 

code:
let round = Math.round(-5.8);
console.log("Number after rounding : " + round);

Output:
Number after rounding : -6

   Example 3: Math.round() function, when a parameter has “.5” as a decimal

Below program shows the result of Math.round() function when the parameter has “.5” as a decimal. 

code:
let round = Math.round(-12.5);
console.log("Number after rounding : " + round);
let round2 = Math.round(12.51);
console.log("Number after rounding : " + round2);

Output:
Number after rounding : -12
Number after rounding : 13

I have a Cheat Sheet on Javascript where we covered all the important topics of Javascript to check those please go through https://www.geeksforgeeks.org/javascript-cheat-sheet-a-basic-guide-to-javascript/
