// AUTHOR: Chirag Sawarn
// JavaScript Concept: Double Bangs !!
// GITHUB: https://github.com/chiragsawarn

// There are several things that equate to a false in Javascript
// for example : NaN, undefined, "", 0, false -> All are falsy values

// But you can't equate one falsy values with some other form in Javascript
// Example : -

console.log("When we are NOT using double bangs");
if(NaN == 0){
    console.log("Good");
}else{
    console.log("Bad");
}

// Hence, we use double bangs
// Because double negation, levels all falsy values into false
// and helps with comparison
console.log("When we are using double bangs !!");
if(!!NaN == !!0){
    console.log("Good");
}else{
    console.log("Bad");
}
