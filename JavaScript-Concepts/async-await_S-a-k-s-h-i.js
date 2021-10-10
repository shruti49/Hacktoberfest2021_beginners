// AUTHOR: Sakshi
// JavaScript Concept: Async await
// GITHUB: https://github.com/S-a-k-s-h-i

//We can work with promises in an easier way by using async and await.
//"async" before a function means that the function will always returns a promise.
//"await" waits until the promise settles and return its result.
//await will only works inside the async functions

async function example1(){
    let promise = new Promise((resolve) => {
        setTimeout(() => resolve("done!"),2000)
    })

    let result = await promise;  //waits until the promise resolves
    console.log(result);
}

example1();

//So the above code will write done! to the console after 2s

//Error Handling
//If a promise resolves, then await promise will return the result . But in the case of a rejection, you have to handle the error
//You can use try catch for that
async function example2(){
   try{
       let response = await fetch("https://www.google.com/");
       console.log(response);
   }catch(err){
       console.log(err);
   }
}

example2();
//In the case of an error , the control jumps to the catch block.

