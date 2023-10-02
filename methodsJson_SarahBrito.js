// AUTHOR: Sarah brito
// JavaScript Concept: Methos Json (JSON.parse(), JSON.stringify())
// GITHUB: https://github.com/SarahBrito

// In JavaScript, you can work with JSON using the JSON.parse() methods to convert a JSON string into a JavaScript object and JSON.stringify() to convert a JavaScript object into a JSON string. For example:

// Converter um objeto JavaScript em uma string JSON
const person = {
  nome: "Sarah",
  idade: 29
};

const jsonString = JSON.stringify(person);

// Convert a JSON string back to a JavaScript object
const parsedObj = JSON.parse(jsonString);


// Other examples:

// Example of JSON.parse():

// Suppose you have a JSON string and want to convert it to a JavaScript object:

const jsonString2 = '{"name": "Sarah", "age": 29}';
const object = JSON.parse(jsonString2);

console.log(object.name); // output: "Sarah"
console.log(object.age); // output: 29

// In this example, JSON.parse() is used to parse the JSON jsonString string and create a JavaScript object from it.

// Example of JSON.stringify():

// Now, suppose you have a JavaScript object and want to convert it to a JSON string:

const object2 = {
  name: "Sarah",
  age: 29,
  country: "Brazil"
};

const jsonString3 = JSON.stringify(object2);

console.log(jsonString3);
// output: '{"name":"Sarah","age":29,"country":"Brazil"}'

// In this example, JSON.stringify() is used to convert the object object to a JSON string, which can be easily sent over the network, stored in a file, or used in various other ways.
