// AUTHOR: Vinod silva
// JavaScript Concept: Callback in Javascript
// GITHUB: https://github.com/vinodsilva

//A callback is a function that executes after another function has executed. It is also referred to as a call-after-function.


//ES5

function pressButton(callbackFunction) {
    console.log("Button is Pressed ");
    callbackFunction();
}

function bark() {
    console.log("Dog is Barking");
}

pressButton(bark);


//ES6

const pressButton = (callbackFunction) => {
    console.log("Button is Pressed ");
    callbackFunction();

}

const bark = () => {
    console.log("Dog is Barking");
}
pressButton(bark);


//output
//"Button is Pressed"
//"Dog is Barking"