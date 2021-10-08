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

console.log(backpack["waterProof"]);