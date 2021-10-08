// AUTHOR: Ajay Mittal
// JavaScript Concept: Immediately Invoked Function Expression is a function  which immediately invoked and executed as soon as it is defined in the code.
// GITHUB: https://github.com/ajay7231

let msg = "Hello World";

const printMsg = (() => {
  return {
    changeMsg: () => {
      msg: "Hacktober Fest";
      // this variable cannot be acesses outside the function
      // using this function we can obtain data privacy as it can be accessed only inside the function.
      return msg;
      // it will return gloabal variable msg, this way you can avoid global scope from getting polluted.
    },
    // same as former function
    changeMsgAgain: () => {
      msg: "Hacktober Fest 2021";
      return msg;
    },
  };
})();
// function printMsg has been invoked and immediately executed.

console.log(printMsg.changeMsg());
// Hello World
