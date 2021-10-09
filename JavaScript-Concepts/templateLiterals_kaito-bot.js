// AUTHOR: Vaishnavi Sharma
// JavaScript Concept: Template literals
// GITHUB: https://github.com/kaito-bot

//Template literals are string literals that allow for embedded expressions. These are typically used to express strings spanning multiple lines or for string interpolation. It also allows us to create a template with one or more placeholders for inserting variable text at a later time.

//A template literal can contain placeholders, which are preceded by a dollar sign ($) and wrapped in curly braces ({}). like this : `${expression}`

//Print a Multi-Line String Using Template Literals
console.log(`this is first line
this is second line
this is third line`);
//output
/*
this is first line
this is second line
this is third line 
*/

//Expression Interpolation
const a = 29;
const b = 9;

console.log(`The sum of a and b is ${a + b}. 
The product of a and b is ${a * b}.`);
//output
/*
The sum of a and b is 38. 
The product of a and b is 261.
*/


//Tagged templates
//Another form of template literals are tagged templates.Tags allow you to parse template literals with a function. The first argument of a tag function contains an array of string values. The remaining arguments are related to the expressions.

var c = 5;
var d = 10;

function foo(strings, ...values) {
  console.log("*" + strings[0] + "*");
  console.log("*" + strings[1] + "*");
  console.log("*" + strings[2] + "*");
  console.log(values[0]);
  console.log(values[1]);
  console.log(values[2]);
}

foo`Sum${c + d} Product${c * d} Division${c / d}`;
//output
/* 
*Sum*
* Product*
* Division*
15
50
0.5*/