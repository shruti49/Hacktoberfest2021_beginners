// AUTHOR: Vaishnavi Sharma
// JavaScript Concept: Object.keys(), Object.values() and Object.entries()
// GITHUB: https://github.com/kaito-bot

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
