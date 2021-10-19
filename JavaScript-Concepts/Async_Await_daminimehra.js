//Javascript Async And Await
//JavaScript is always synchronous and single-threaded that provides the event loops. The event loops enable us to queue up an activity. This activity will not happen until the loops become available after the program that queued the action has completed the execution. However, our program contains a large number of functionalities, which causes our code to be asynchronous. The Async/Await functionality is one of them. Async/Await is an extension of promises that we get as language support.

//Async

//An Async function is a function declared with the Async keyword which means it will run in the background while performing the code inside when the function is done, it automatically returns a promise. Async function always returns a Promise.

//Syntax

 async function printHelloWorld(){
        return "Hello World !!!";
 }
 console.log(printHelloWorld());

//Output-

Promise {<fulfilled>: 'Hello World !!!'}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: "Hello World !!!"
</fulfilled>

//Here "Hello World !!!" act as a fulfilled value of promise.

//Await



//Error Handling
//If error occurs in function of try and catch, adding catch handler won't work. Even tou tere was an error ten also async function will return fulfill values.

async function Demo(){
            try{
                const res = await tryDemo();
                console.log(res);
            }
            catch(err){
                console.log(err);
            }
        } 
        Demo();
Output-

//ReferenceError: tryDemo is not define at Demo
//To Solve it throw the error again

async function Demo(){
            try{
                const res = await tryDemo();
                console.log(res);
            }
            catch(err){
                throw err;
            }
        } 
        Demo();

        Output

// Multiple await in single async function
  let counter=0;
        async function Hello(){
            counter++;
            return `Hello ${counter}`;
        }
        async function multipleAwaits(){
            const res1 = await Hello().then(value => {return value});
            const res2 = await Hello().then(value => {return value});
            const res3 = await Hello().then(value => {return value});

            return `${res1} ${res2} ${res3}`;
        }
      multipleAwaits().then(value => console.log(value));

//      Output-

//Hello 1 Hello 2 Hello 3
