// AUTHOR: Sakshi
// JavaScript Concept: Array methods
// GITHUB: https://github.com/S-a-k-s-h-i

//Arrays are used to store multiple values
//Arrays provide a lot of methods to make things easier.

//Popping
//pop() removes last element from an array
const jsFrameworks = ['Node','React','Vue','Angular'];
jsFrameworks.pop()
console.log(jsFrameworks);
//[ 'Node', 'React', 'Vue' ]

//Pushing
//push() adds a new element to an array
jsFrameworks.push("Angular");
console.log(jsFrameworks);
//[ 'Node', 'React', 'Vue', 'Angular' ]

//Shifting
//shift() removes the first array element and shift all other element to lower index
jsFrameworks.shift();
console.log(jsFrameworks);
//[ 'React', 'Vue', 'Angular' ]

//unshift() method adds a new element to an array at the beginning .
jsFrameworks.unshift("Node");
console.log(jsFrameworks);
//[ 'Node', 'React', 'Vue', 'Angular' ]

//Splicing
//splice() can be used for everything: insert, remove and replace elements
jsFrameworks.splice(2,1,"Ember");
//First parameter defines the position where new element should be added
//Second parameter defines how many element should be removed'
//rest of the parameters defines the new elements to be added.
console.log(jsFrameworks);
//[ 'Node', 'React', 'Ember', 'Angular' ]

//splice() to remove elements
jsFrameworks.splice(0,2);
//removes first two element
console.log(jsFrameworks);
//[ 'Ember', 'Angular' ]

//Slicing
//slice() slices out a piece of an array into a new array
const jsF = jsFrameworks.slice(1);
//slice out a part of an array starting from array element 1
console.log(jsF);
//[ 'Angular' ]


