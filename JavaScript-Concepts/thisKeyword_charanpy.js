// AUTHOR: Charan
// JavaScript Concept: this
// GITHUB: https://github.com/charanpy

// GLOBAL CONTEXT

// this in global execution context refers to global object window,in case of browser
console.log(this); //window

// INSIDE METHOD

// In a method, this keyword refers to the object it belongs to
const profile = {
  name: 'charan',
  favLang: 'js',
  printUser: function () {
    console.log(`${this.name} ${this.favLang}`);
  },
};
profile.printUser(); // charan js

// INSIDE FUNCTION CALL

// this in a function refers to global object
function testThis() {
  console.log(this);
}
testThis(); // Window

// ARROW FUNCTION

// Arrow function doesn’t get its own this.It uses lexical i.e it uses parent scope of this
const ex = () => {
  console.log(this);
};
ex(); //Window

const profile2 = {
  name: 'ch',
  print: function () {
    return () => {
      console.log(this);
    };
  },
};
profile2.print()();
// {
// name: "ch",
// print:f()
// },

// Method-this refers to object in which method is called
// Simple function call -Window Strict mode-undefined
// Event Listener-DOM element in which handler is attached to
// Arrow function-does not get its own this.It uses lexical(parent scope of this)
// Global context- Window object
