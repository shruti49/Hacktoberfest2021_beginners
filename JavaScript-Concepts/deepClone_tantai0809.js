// AUTHOR: Tan Tai
// JavaScript Concept: deep clone an object
// GITHUB: https://github.com/tttaisgt

const object = {
    string: 'string',
    number: 123,
    bool: false,
    nul: null,
    date: new Date(),  // stringified
    undef: undefined,  // lost
    inf: Infinity,  // forced to 'null'
    re: /.*/,  // lost
}
console.log('Object: ', object);
console.log('Object date: ', typeof object.date);  // Date object
const clone = JSON.parse(JSON.stringify(object)); // deep clone object
console.log('Cloned object: ', clone);
console.log('Cloned object date: ', typeof clone.date); // result of .toISOString()
