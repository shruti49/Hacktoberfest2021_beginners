// AUTHOR: Vaishnavi Sharma
// JavaScript Concept: Objects
// GITHUB: https://github.com/kaito-bot

/*
    In javascript an object is a non-primitive datatype which is a collection made up of properties.
    
    what are properties?
    A property is basically a key and value pair, where key is a string and value can be any valid datatype.

*/

// an object is declared like this :

const backpack = {
    color : "black",
    size : "large",
    waterProof : true,
    priceInDollars : 50
}

//to access the properties of an object, dot notation and bracket notation is used

// dot notation syntax is like this :
//objectName.key

console.log(backpack.color); //black

// bracket notation syntax is like this :
//objectName["key"]

console.log(backpack["waterProof"]); //true



//Object.keys(),Object.values() and Object.entries() methods are three methods of class Object.

//Object.keys() method returns an array of a given object's property's key.It takes in the name of the object as an argument.

//Object.values() method returns an array of a given object's property's key's value.It takes in the name of the object as an argument.

//Object.entries() method returns an array of a given object's key-value pairs.It takes in the name of the object as an argument.

// object declaration
const laptop = {
  company: "HP",
  color: "black",
  processor: " intel core i5",
  RAM: "8GB",
  graphicCard: "AMD Radeon",
};

//Object.keys(objName)
let keys = Object.keys(laptop); //returns an array : [ 'company', 'color', 'processor', 'RAM', 'graphicCard' ]
console.log(keys);

//Object.values(objName)
let values = Object.values(laptop);
console.log(values); //[ 'HP', 'black', ' intel core i5', '8GB', 'AMD Radeon' ]

//Object.entries(objName)
let entries = Object.entries(laptop);
console.log(entries); /*[
    [ 'company', 'HP' ],
    [ 'color', 'black' ],
    [ 'processor', ' intel core i5' ],
    [ 'RAM', '8GB' ],
    [ 'graphicCard', 'AMD Radeon' ]
  ]*/
