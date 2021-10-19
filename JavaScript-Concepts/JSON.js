// AUTHOR: Padmanabh Kharat
// JavaScript Concept: Json methods
// GITHUB: https://github.com/Padmanabh82

//Let’s say we have a complex object, and we’d like to convert it into a string, to send it over a network, or just to output it for logging purposes.
//We could implement the conversion like this:

let user = {
  name: "John",
  age: 30,

  toString() {
    return `{name: "${this.name}", age: ${this.age}}`;
  }
};

alert(user); // {name: "John", age: 30}

//But in the process of development, new properties are added, old properties are renamed and removed. 
//Updating such toString every time can become a pain. We could try to loop over properties in it, but what if the object is complex and has nested objects in properties? 
//We’d need to implement their conversion as well.

//JSON

//The JSON (JavaScript Object Notation) is a general format to represent values and objects. 
//t was made for JavaScript, but many other languages have libraries to handle it as well. So it’s easy to use JSON for data exchange when the client uses JavaScript
//and the server is written on Ruby/PHP/Java/Whatever

//Javascript provides two functions:-

//  JSON.stringify() to convert objects into JSON.
//  JSON.parse() to convert JSON back into an object.

//JSON.stringify()

//Syntax:-
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json = JSON.stringify(student);

alert(typeof json); // we've got a string!

alert(json);
/* JSON-encoded object:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/

//JSON.parse

//Syntax:-
// stringified array
let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

alert( numbers[1] ); // 1

//OR for object

let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(userData);

alert( user.friends[1] ); // 1
