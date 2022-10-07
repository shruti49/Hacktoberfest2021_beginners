//AUTHOR : PRINCE DARKO
//Javascript Concept : Revealing Module Pattern
//GITHUB: https://github.com/PrinceAcquahDarko

//Revealing module pattern is one of the many design patterns, which lets you group your codes into modules.It allows uou create public and private variables using closure/
//An example of a revealing module pattern is shown below:

 function MathOperations(y){
    const x = 4

    function add(){
        return x + y
    }

    function multiply(){
        return x * y
    }

    function subtract(){
        return x - y
    }

    return {add, multiply}

}



// In the code above the inner functions (add, multiply and substract) all have access to variables 
// of the outer function which explains closure

//Also the functions in the return block become public functions while those not returned become private


//the function can be called using the codes below
let ms = MathOperations(2)

console.log(ms.add())
console.log(ms.multiply())



