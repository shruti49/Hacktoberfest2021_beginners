// AUTHOR: ionlizarazu
// JavaScript Concept: spreading JSON element 
// GITHUB: https://github.com/ionlizarazu


// you can spread a JSON element to create new one based on the first

const aitor = {
  fullname: "Aitor Urretabizkaia",
  age: 22,
  occupation: "farmer",
}


const mikel = {
  ...aitor,
  fullname: "Mikel Urrutikoetxea",
  age: 32,
}

console.log(mikel);

// output
// {
//  fullname: "Mikel Urrutikoetxea",
//  age: 32,
//  occupation: "farmer",
// }
