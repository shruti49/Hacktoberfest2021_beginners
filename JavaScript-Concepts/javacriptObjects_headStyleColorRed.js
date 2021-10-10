// AUTHOR: TangerineCoder
// JavaScript Concept: Objects
// GITHUB: https://github.com/headStyleColorRed

// The Object class represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. 
// Objects can be created using the Object() constructor or the object initializer syntax
// Nearly all objects in JavaScript are instances of Object; a typical object inherits properties (including methods) from Object.prototype, 
// although these properties may be overridden.
// Changes to the Object prototype object are seen by all objects through prototype chaining, unless the properties and methods subject to those changes are 
// overridden further along the prototype chain. This provides a very powerful although potentially dangerous mechanism to override or extend object behavior.

// This code assigns a simple value (Fiat) to a variable named car:
let car = "Fiat";

// Objects are variables too. But objects can contain many values.
// This code assigns many values (Fiat, 500, white) to a variable named car:
const car = { type:"Fiat", model:"500", color:"white" };

// To access an Objects value we just have to use the dot syntax
let carType = car.type

console.log(carType); // Fiat