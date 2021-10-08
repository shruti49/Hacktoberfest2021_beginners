console.log("Hello World");

// set items in localstorage 
localStorage.setItem('Name', 'Deepak');
localStorage.setItem('Name1', 'Kumar');

// Here clear function clear all local storage items
// localStorage.clear();

// remove specific item
// localStorage.removeItem('Name');

// get items from localStorage
let name = localStorage.getItem('Name');
console.log(name);

let morning_word = ['Hello', 'Namste', 'Good Morning'];

//here JSON.stringify convert javascript object into string 
localStorage.setItem('morning', JSON.stringify(morning_word));

//here JSON.stringify convert javascript string into object 
let name1 = JSON.parse(localStorage.getItem('morning'));
console.log(name1);