// AUTHOR: hadvaid0x15
// JavaScript Concept: 2_Types_of_Comments_in_JavaScript and some beginner friendly quick hacks.
// GITHUB: https://github.com/hadviad0x15

//Welcome Devlopers to another Intresting node on Concepts related to JavaScript.
//Here we are going to talk about types of Comments in JavaScript.


There are two ways to make comment in JavaScript
 1) Single Line Comment.
 2) Multi-line Comment.


//First let us understand the why.
//Why we use comments.
//JavaScript comments can be used to explain JavaScript code, and to make it more readable.


 1)Single Line Comments.

Symbol: "//<comments>"

 -- Single line comments start with "//" .
 -- In Single Line Comments, Any text between // and the end of the line will be ignored by JavaScript.
 -- In short it will not be executed. In other word its scope is till the end of the that line.

Example:

 -- //This is a single line comment


 Quick Hack:

 -- We can use single line comments to explain code or to take a notes 

Example: 

let  u = 7;      // I declared u and give it the value of 5.
let  v = u + 2;  // I declared y and give it the value of u +2.



 2) Multi-line Comments:

    Symbol: "/* <comments> */".

 Multi-line commnets start with /* and end with */ .
 Any text between /* and */ will be ignored by JavaScript

 Example:

/* 
    Here the below code will change
    the My Example with id = "example" and
    My First Hacktober Fest 2021 with id = hacktober
    in my web page
 */

document.getElementById("example").innerHTML = "My Example Page";
document.getElementById("hacktober").innerHTML = "My First Hacktober Fest 2021";


Note: Most commenly developers use single line comments.
       Block comments are often used for formal documentation.


 Quick Hack to use comments for Beginner :

 -- Using Commnets to prevent Execution 

 Using comments to prevent execution of code lines from an executable line to a commen.

Example :
 Try and Error Method : 
 Here we have commented the first line of code in order to prevent it from executing.

//document.getElementById("example").innerHTML = "My Example Page";
document.getElementById("hacktober").innerHTML = "My First Hacktober Fest 2021";

 or 

 We can use muti-line comment to prevent the execution of a Block

/*
document.getElementById("example").innerHTML = "My Example Page";
document.getElementById("hacktober").innerHTML = "My First Hacktober Fest 2021";
*/

 Above mention snippet of code is a Multi-line comments. 


//  Thankyou 
//  #hactoberfest2021
//  #happyhacking
//  for more reference you can check out: https://www.w3schools.com/js/js_comments.asp
