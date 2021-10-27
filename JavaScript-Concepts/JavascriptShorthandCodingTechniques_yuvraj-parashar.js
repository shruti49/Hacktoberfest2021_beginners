// AUTHOR: Yuvraj Parashar
// JavaScript Concept: Javascript Shorthand Coding Techniques
// GITHUB: https://github.com/yuvraj-parashar

//-------------------------------------------------------------------------------//





/*

1 - The Ternary Operator |
------------------------

*/





// This is a great code saver when you want to write an if..else statement in just one line.

// Long Hand

const x = 20;
let answer;

if (x > 10) {
    answer = 'greater than 10'
} else {
    answer = 'less than 10'
}

//Short Hand

const answer = x > 10 ? 'greater than 10' : 'less than 10';





/*

2 - For Loop Shorthand |
-----------------------

*/






//Longhand

const fruits = ['papaya', 'banana', 'orange']
for (let i = 0; i < fruits.length; i++) { }

//Shorthand

const fruits = ['papaya', 'banana', 'orange']
for (let fruit of fruits) { }





/*

3 - Decimal Base Exponents|
--------------------------

*/






// You may have seen this one around. It’s essentially a fancy way to write numbers without the trailing zeros. For example, 1e7 essentially means 1 followed by 7 zeros. It represents a decimal base (which JavaScript interprets as a float type) equal to 10,000,000.

//Longhand

for (let i = 0; i < 10000; i++) { }

//Shorthand

for (let i = 0; i < 1e4; i++) { }

// All the below will evaluate to true
1e0 === 1;
1e1 === 10;
1e2 === 100;
1e3 === 1000;
1e4 === 10000;
1e5 === 100000;
1e7 === 10000000;






/*

4 - Arrow Functions Shorthand|
-----------------------------

*/






//Longhand

function sayHello(name) {
    console.log('Hello', name);
}

setTimeout(function () {
    console.log('Loaded')
}, 2000);

list.forEach(function (item) {
    console.log(item);
});

//Shorthand
sayHello = name => console.log('Hello', name);
setTimeout(() => console.log('Loaded'), 2000);
list.forEach(item => console.log(item));






/*

5 - Destructuring Assignment Shorthand|
--------------------------------------

*/





// If you are working with any popular web framework, there are high chances you will be using arrays or data in the form of object literals to pass information between components and APIs. Once the data object reaches a component, you’ll need to unpack it.

// Longhand

const observable = require('mobx/observable');
const action = require('mobx/action');
const runInAction = require('mobx/runInAction');

const store = this.props.store;
const form = this.props.form;
const loading = this.props.loading;
const errors = this.props.errors;
const entity = this.props.entity;

//Shorthand

import { observable, action, runInAction } from 'mobx';

const { store, form, loading, errors, entity } = this.props;

//-------------------------------------------------------------------------