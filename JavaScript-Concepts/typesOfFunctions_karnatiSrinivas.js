// A function is something which takes input and returns a output based on the logic that is inside {function block}
// Almost every function contains a function name, parameters to pass, and the logic or work that is needed to be done when a function is called.

// Function type1

function javascriptFunctionsType1(){
    console.log("Yes! I love javascript");
    //Outputs - Yes! I love javascript - in console
}
// It is called as Named function which is the conventional way to delare a function.
//In execution phase, this is absolutley treated as a function and entire function is stored in the global memory.


// Function type2

let javascriptFunctionsType2 = function(){
    console.log("Yes! I love javascript");
    //Outputs - Yes! I love javascript - in console
}
// Can be called as ananymous function
// During execution, treated as a variable in the memory creation phase.

// Function type3

let javascriptFunctionsType3 = ()=>{
    console.log("Yes! I love javascript");
    //Outputs - Yes! I love javascript - in console
}
// Can be called as arrow functions.
// During execution, treated as a variable in the memory creation phase.


javascriptFunctionsType1();
javascriptFunctionsType2();
javascriptFunctionsType3();
